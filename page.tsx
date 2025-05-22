"use client";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return <>
   <section className="bg-primary text-white text-center py-5">
        <div className="container">
            <h1 className="display-4 fw-bold">Welcome to MakTanToy</h1>
            <p className="lead">Come and order now!</p>
            <Link href="/auth" className="btn btn-light btn-lg mt-3">Order Now!</Link>
        </div>
    </section>

    <section className="container text-center my-5">
      <h2 className="fw-bold mb-4">Computer Appliances</h2>
      <div className="row mt-4">
        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm border-0" style={{background: 'linear-gradient(135deg, #e0f7fa 0%, #fff 100%)'}}>
            <div className="card-body py-3">
              <Image src="/laptop.jpg" alt="Laptop" width={200} height={200} style={{objectFit: 'contain', display: 'block', margin: '0 auto'}}/>
              <h4 className="mt-3">Laptop</h4>
              <p className="small mt-2">High-performance laptops for work and play.</p>
              <a href="#" className="btn btn-outline-primary btn-sm mt-2">Order Now</a>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm border-0" style={{background: 'linear-gradient(135deg, #fceabb 0%, #fff 100%)'}}>
            <div className="card-body py-3">
              <Image src="/monitor.jpg" alt="Monitor"  width={200} height={200} style={{objectFit: 'contain', display: 'block', margin: '0 auto'}}/>
              <h4 className="mt-3">Monitor</h4>
              <p>Crystal-clear displays for every need.</p>
              <a href="#" className="btn btn-outline-primary btn-sm mt-2">Order Now</a>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm border-0" style={{background: 'linear-gradient(135deg, #e0c3fc 0%, #fff 100%)'}}>
            <div className="card-body py-3">
            <Image src="/keyboard.jpg" alt="Laptop" width={200} height={200} style={{objectFit: 'contain', display: 'block', margin: '0 auto'}}/>
              <h4 className="mt-3">Keyboard</h4>
              <p>Ergonomic and mechanical keyboards available.</p>
              <a href="#" className="btn btn-outline-primary btn-sm mt-2">Order Now</a>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-6 mb-4">
          <div className="card h-100 shadow-sm border-0" style={{background: 'linear-gradient(135deg, #f8ffae 0%, #fff 100%)'}}>
            <div className="card-body py-3">
            <Image src="/mouse.jpg" alt="Laptop" width={200} height={200} style={{objectFit: 'contain', display: 'block', margin: '0 auto'}}/>
              <h4 className="mt-3">Mouse</h4>
              <p>Precision mice for gaming and productivity.</p>
              <a href="#" className="btn btn-outline-primary btn-sm mt-2">Order Now</a>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card h-100 shadow-sm border-0" style={{background: 'linear-gradient(135deg, #c2ffd8 0%, #fff 100%)'}}>
            <div className="card-body py-3">
            <Image src="/printer.jpg" alt="Laptop" width={200} height={200} style={{objectFit: 'contain', display: 'block', margin: '0 auto'}}/>
              <h4 className="mt-3">Printer</h4>
              <p>Reliable printers for home and office use.</p>
              <a href="#" className="btn btn-outline-primary btn-sm mt-2">Order Now</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>;
}
