import Link from "next/link";
const Signup = () => {
  return (
    <div className='section no-pad-bot' id='index-banner'>
      <div className='container'>
        <br />
        <br />
        <h1 className='header center orange-text'>Signup Form Template</h1>
        <div className='row center'>
          <h5 className='header col s12 light'>
            A modern responsive front-end framework based on Material Design
          </h5>
        </div>
        <div className='row center'>
          <Link href='http://materializecss.com/getting-started.html'>
            <a id='download-button' className='btn-large waves-effect waves-light purple'>
              Get Started
            </a>
          </Link>
        </div>
        <br />
        <br />
      </div>
    </div>
  );
};
export default Signup;
