export default function Footer(){
  return (
    <footer className="border">
      <section className="p-1 text-center">
        <section className="">
          <footer className="text-center text-dark">
            {/* <!-- Grid container --> */}
            <div className="container p-4 pb-0">
              {/* <!-- Section: CTA --> */}
              <section className="">
                <p className="d-flex justify-content-center align-items-center">
                  <span className="me-3">Register for free</span>
                  <button data-mdb-ripple-init="" type="button" className="btn dark:bg-red-500 login-btn">
                    Sign up!
                  </button>
                </p>
              </section>
              {/* <!-- Section: CTA --> */}
            </div>
            {/* <!-- Grid container --> */}

            {/* <!-- Copyright --> */}
            <div className="text-center p-3 display-flex justify-content-center" >
              © 2020 Copyright:
              <a className="text-dark" href="https://mdbootstrap.com/">BookStore</a>
            </div>
            {/* <!-- Copyright --> */}
          </footer>
          {/* <!-- Footer --> */}
        </section>
      </section>
    </footer>
  )
}