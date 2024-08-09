
const Footer = () => {
  return (
    <div className="footer bg-white shadow mt-20" id="footer">
      <div className="mx-auto px-4 container flex justify-between items-center">
        <p className="py-4">&copy; Copyright by <span className="font-bold">MasPutram</span></p>
        <div className="social-footer flex items-center gap-5">
          <i className="ri-github-fill text-2xl"></i>
          <i className="ri-instagram-fill text-2xl"></i>
          <i className="ri-twitter-fill text-2xl"></i>
          <i className="ri-linkedin-box-fill text-2xl"></i>
        </div>
      </div>
    </div>
  )
}

export default Footer