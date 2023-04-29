import React from "react";

export default function Footer() {
  return (
    <>
      <div className="container my-5">
        <footer
          className="text-center text-lg-start text-white"
          style={{backgroundColor: "#45526e"}}
        >
          <div className="container p-4 pb-0">
            <section className="">
              <div className="row">
                <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">
                    Sangam Electronics
                  </h6>
                  <p>
                    Here you can use rows and columns to organize your footer
                    content. Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit.
                  </p>
                </div>

                <hr className="w-100 clearfix d-md-none" />

                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">Products</h6>
                  <p>
                    <a className="text-white">Servo Stabilizer</a>
                  </p>
                  <p>
                    <a className="text-white">Online UPS</a>
                  </p>
                  <p>
                    <a className="text-white">Servo Voltage Stabilizer</a>
                  </p>
                  <p>
                    <a className="text-white">Power Battery</a>
                  </p>
                  <p>
                    <a className="text-white">Electrical Transformer</a>
                  </p>
                </div>

                <hr className="w-100 clearfix d-md-none" />

                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">
                    Useful links
                  </h6>
                  <p>
                    <a className="text-white">Your Account</a>
                  </p>
                  <p>
                    <a className="text-white">Become an Affiliate</a>
                  </p>
                  <p>
                    <a className="text-white">Shipping Rates</a>
                  </p>
                  <p>
                    <a className="text-white">Help</a>
                  </p>
                </div>

                <hr className="w-100 clearfix d-md-none" />

                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                  <p>
                    <i className="fas fa-home mr-3"></i> Sangam Electronics Co.
                  </p>
                  <p>
                    <i className="fas fa-envelope mr-3"></i> No. 8, Parekh Wadi, Opposite Kasa Nagar, Near Bada Ganesh Mandir, Sumul Dairy Road, Katargam, G.I.D.C. Old
Surat - 395004, Gujarat, India
                  </p>
                  <p>
                    <i className="fas fa-phone mr-3"></i> +91 98254 36437
                  </p>
                  <p>
                    <i className="fas fa-print mr-3"></i> +91 80486 01455
                  </p>
                </div>
              </div>
            </section>

            <hr className="my-3" />

            <section className="p-3 pt-0">
              <div className="row d-flex align-items-center">
                <div className="col-md-7 col-lg-8 text-center text-md-start">
                  <div className="p-3">
                  © Sangam Electronics Co.. All Rights Reserved (Terms of Use)
                  </div>
                </div>

                <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
                  <a
                    className="btn btn-outline-light btn-floating m-1 text-white"
                    role="button"
                  >
                    <ion-icon name="logo-facebook"></ion-icon>
                  </a>

                  <a
                    className="btn btn-outline-light btn-floating m-1 text-white"
                    role="button"
                  >
                    <ion-icon name="logo-twitter"></ion-icon>
                  </a>

                  <a
                    className="btn btn-outline-light btn-floating m-1 text-white"
                    role="button"
                  >
                    <ion-icon name="logo-google"></ion-icon>
                  </a>

                  <a
                    className="btn btn-outline-light btn-floating m-1 text-white"
                    role="button"
                  >
                    <ion-icon name="logo-instagram"></ion-icon>
                  </a>
                </div>
              </div>
            </section>
          </div>
        </footer>
      </div>
    </>
  );
}
