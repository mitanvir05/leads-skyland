import React from "react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-10 mt-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between">
          <div>
            <h3 className="text-xl font-bold">Skyland Leads</h3>
            <p className="text-slate-400 mt-2">
              Building scalable digital products with clean engineering.
            </p>
          </div>

          <div className="mt-6 md:mt-0 text-slate-400">
            <p>Email: info@skylandweb.com</p>
            <p>Phone: +880-123456789</p>
          </div>
        </div>

        <p className="text-center text-slate-500 mt-8 text-sm">
          © {new Date().getFullYear()} Skyland — All rights reserved.
        </p>
      </div>
    </footer>
  );
}
