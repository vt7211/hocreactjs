export default function Sidebar() {
    return(
    <div id="side-panel" className="text-center dark">
        <div id="close-panel">
            <i className="fa fa-times" />
        </div>
        <div className="side-panel-wrap">
            {/*Logo*/}
            <div className="text-light text-left">
            <h3>Xin chào, tôi là</h3>
            <h1 className="text-medium">Van Tan</h1>
            <h4>Professional Web designer/Developer</h4>
            </div>
            {/*End: Logo*/}
            <hr className="space" />
            <div className="widget text-light text-left">
            <h4 className="widget-title">Tại sao tôi làm Blog ?</h4>
            <p>Để chia sẻ kinh nghiệm và các trải nghiệm mà tôi đã từng trải qua trong suốt quá trình làm việc của tôi</p>
            </div>
            <hr className="space" />
            <hr className="space" />
            {/*social icons*/}
            <div className="social-icons social-icons-colored text-center">
            <ul>
                <li className="social-facebook"><a href="#"><i className="fab fa-facebook-f" /></a></li>
                <li className="social-twitter"><a href="#"><i className="fab fa-twitter" /></a></li>
                <li className="social-google"><a href="#"><i className="fab fa-google-plus-g" /></a></li>
                <li className="social-pinterest"><a href="#"><i className="fab fa-pinterest" /></a></li>
                <li className="social-vimeo"><a href="#"><i className="fab fa-vimeo" /></a></li>
            </ul>
            </div>
            {/*end: social icons*/}
            {/*copyright text*/}
            <p className="small">© 2021 Van Tan. All Rights Reserved.</p>
            {/*end: copyright text*/}
        </div>
    </div>
    )
}