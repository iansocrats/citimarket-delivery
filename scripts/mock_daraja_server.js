/**
 * CitiMarket Delivery - Local Mock Server for Safaricom Daraja & Africa's Talking
 * Run via: npm run mock:server
 * 
 * Allows frontend, mobile, and backend engineers to develop and test payments,
 * courier cashouts, and telephony bridging locally with 0ms dependency on external credentials.
 */

const http = require('http');
const crypto = require('crypto');

const PORT = process.env.PORT || 8080;

function sendJson(res, statusCode, data) {
  res.writeHead(statusCode, {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Idempotency-Key'
  });
  res.end(JSON.stringify(data, null, 2));
}

function parseBody(req) {
  return new Promise((resolve) => {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch (e) {
        resolve({});
      }
    });
  });
}

const server = http.createServer(async (req, res) => {
  // CORS Preflight
  if (req.method === 'OPTIONS') {
    res.writeHead(204, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Idempotency-Key'
    });
    return res.end();
  }

  const url = new URL(req.url, `http://${req.headers.host}`);
  const pathname = url.pathname;
  const body = req.method === 'POST' ? await parseBody(req) : {};

  console.log(`[MOCK GATEWAY] ${req.method} ${pathname}`);

  // 1. Health Endpoint
  if (pathname === '/health') {
    return sendJson(res, 200, {
      status: 'UP',
      service: 'CitiMarket Daraja & Telephony Mock Gateway',
      environment: 'local_sandbox',
      timestamp: new Date().toISOString()
    });
  }

  // 2. Safaricom Daraja C2B Lipa na M-Pesa STK Push
  if (pathname === '/api/v1/payments/mpesa/stkpush' && req.method === 'POST') {
    const { phone_number, amount, order_number } = body;
    if (!phone_number || !amount) {
      return sendJson(res, 400, { error: 'Missing phone_number or amount' });
    }

    const merchantRequestId = `MOCK-MR-${Date.now()}`;
    const checkoutRequestId = `ws_CO_${Date.now()}_MOCK`;

    // Simulate Daraja standard response
    return sendJson(res, 200, {
      MerchantRequestID: merchantRequestId,
      CheckoutRequestID: checkoutRequestId,
      ResponseCode: "0",
      ResponseDescription: "Success. Request accepted for processing",
      CustomerMessage: "Success. Request accepted for processing",
      SimulatedCallback: {
        ResultCode: 0,
        ResultDesc: "The service request is processed successfully.",
        MpesaReceiptNumber: `QKH${Math.floor(Math.random() * 899999 + 100000)}LX`,
        Amount: amount,
        PhoneNumber: phone_number,
        OrderNumber: order_number || "CMD-8842"
      }
    });
  }

  // 3. Safaricom Daraja B2C Instant Courier Cash-Out
  if (pathname === '/api/v1/payments/mpesa/b2c-disburse' && req.method === 'POST') {
    const { courier_id, phone_number, amount_cents } = body;
    if (!courier_id || !amount_cents) {
      return sendJson(res, 400, { error: 'Missing courier_id or amount_cents' });
    }

    const receipt = `B2C${Math.floor(Math.random() * 899999 + 100000)}BZ`;
    const amountKsh = (amount_cents / 100).toFixed(2);

    return sendJson(res, 200, {
      Result: {
        ResultType: 0,
        ResultCode: 0,
        ResultDesc: "The service request is processed successfully.",
        TransactionID: receipt,
        ConversationID: `AG_${Date.now()}_B2C`,
        ResultParameters: {
          TransactionAmount: parseFloat(amountKsh),
          TransactionReceipt: receipt,
          B2CRecipientIsRegisteredCustomer: "Y",
          B2CWorkingAccountAvailableFunds: 482100.00
        }
      }
    });
  }

  // 4. Africa's Talking Masked VoIP Proxy Bridge
  if (pathname === '/api/v1/telephony/voice-bridge' && req.method === 'POST') {
    res.writeHead(200, {
      'Content-Type': 'application/xml',
      'Access-Control-Allow-Origin': '*'
    });
    return res.end(`
      <Response>
        <Say voice="woman" playBeep="true">CitiMarket secure line. Connecting to recipient. Please do not spoil the gift surprise.</Say>
        <Dial phoneNumbers="+254799887766" record="true" maxDuration="300" callerId="+254207904821"/>
      </Response>
    `.trim());
  }

  // 5. Cryptographic Salted PIN Verification
  if (pathname === '/api/v1/orders/verify-pin' && req.method === 'POST') {
    const { entered_pin, order_id, salt, expected_hash } = body;
    if (!entered_pin || !order_id || !salt || !expected_hash) {
      return sendJson(res, 400, { error: 'Missing entered_pin, order_id, salt, or expected_hash' });
    }

    const candidateHash = crypto.createHash('sha256').update(entered_pin + order_id + salt).digest('hex');
    const isMatch = candidateHash === expected_hash;

    return sendJson(res, 200, {
      verified: isMatch,
      order_id: order_id,
      proof_token: isMatch ? `ECDSA_PROOF_TOKEN_${crypto.randomBytes(8).toString('hex')}` : null,
      message: isMatch ? "PIN verified successfully. Escrow released." : "Invalid PIN. Access denied."
    });
  }

  // 404 Catch-All
  return sendJson(res, 404, { error: 'Endpoint not found on CitiMarket Mock Gateway' });
});

server.listen(PORT, () => {
  console.log(`================================================================`);
  console.log(`🚀 CITIMARKET LOCAL DARAJA & TELEPHONY MOCK SERVER RUNNING`);
  console.log(`📡 URL: http://localhost:${PORT}`);
  console.log(`================================================================`);
  console.log(`Available Mock Endpoints:`);
  console.log(`  • GET  /health`);
  console.log(`  • POST /api/v1/payments/mpesa/stkpush (C2B STK Push)`);
  console.log(`  • POST /api/v1/payments/mpesa/b2c-disburse (Instant B2C Payout)`);
  console.log(`  • POST /api/v1/telephony/voice-bridge (Africa's Talking VoIP XML)`);
  console.log(`  • POST /api/v1/orders/verify-pin (Salted Hash PIN Proof)`);
  console.log(`================================================================\n`);
});
