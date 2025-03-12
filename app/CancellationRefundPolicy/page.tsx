// app/CancellationRefundPolicy/page.tsx
'use client'
import React from 'react';

const CancellationRefundPolicy = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-semibold mb-4">Cancellation & Refund Policy</h1>
      <p className="text-gray-600 mb-4">Last updated on 12-03-2025 15:13:37</p>
      
      <p className="text-gray-700 mb-4">
        NXTSYNC PVT.LTD believes in helping its customers as far as possible, and has therefore a liberal cancellation policy. Under this policy:
      </p>
      
      <ul className="space-y-2 text-gray-700">
        <li>• Cancellations will be considered only if the request is made immediately after placing the order. However, the cancellation request may not be entertained if the orders have been communicated to the vendors/merchants and they have initiated the process of shipping them.</li>
        <li>• NXTSYNC PVT.LTD does not accept cancellation requests for perishable items like flowers, eatables, etc. However, refund/replacement can be made if the customer establishes that the quality of product delivered is not good.</li>
        <li>• In case of receipt of damaged or defective items, please report the same to our Customer Service team. The request will, however, be entertained once the merchant has checked and determined the same at his own end. This should be reported within only same-day days of receipt of the products. In case you feel that the product received is not as shown on the site or as per your expectations, you must bring it to the notice of our customer service within only same-day days of receiving the product. The Customer Service Team after looking into your complaint will take an appropriate decision.</li>
        <li>• In case of complaints regarding products that come with a warranty from manufacturers, please refer the issue to them. In case of any Refunds approved by the NXTSYNC PVT.LTD, it’ll take 9-15 Days for the refund to be processed to the end customer.</li>
      </ul>
    </div>
  );
};

export default CancellationRefundPolicy;
