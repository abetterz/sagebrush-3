import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Pages
const Home = React.lazy(() => import("./components/pages/Home"));
const Hometwo = React.lazy(() => import("./components/pages/Hometwo"));
const Homethree = React.lazy(() => import("./components/pages/Homethree"));
const Homefour = React.lazy(() => import("./components/pages/Homefour"));
const Homefive = React.lazy(() => import("./components/pages/Homefive"));
const About = React.lazy(() => import("./components/pages/About"));
const Blogleft = React.lazy(() => import("./components/pages/Blogleft"));
const Blogright = React.lazy(() => import("./components/pages/Blogright"));
const Blogdetail = React.lazy(() => import("./components/pages/Blogdetail"));
const Donationarchive = React.lazy(() =>
  import("./components/pages/Donationarchive")
);
const Donationdetail = React.lazy(() =>
  import("./components/pages/Donationdetail")
);
const Storyarchive = React.lazy(() =>
  import("./components/pages/Storyarchive")
);
const Storydetail = React.lazy(() => import("./components/pages/Storydetail"));
const Login = React.lazy(() => import("./components/pages/Login"));
const Register = React.lazy(() => import("./components/pages/Register"));
const Shopleft = React.lazy(() => import("./components/pages/Shopleft"));
const Shopright = React.lazy(() => import("./components/pages/Shopright"));
// const Shopdetail = React.lazy(() => import("./components/pages/Shopdetail"));
const MoreThanOneLifeChanged = React.lazy(() => import("./components/pages/MoreThanOneLifeChanged"));
const HelpChildrenEast = React.lazy(() => import("./components/pages/MoreThanOneLifeChanged"));
const MoreThanOne = React.lazy(() => import("./components/pages/MoreThanOneLifeChanged"));
const MoreThanTwo = React.lazy(() => import("./components/pages/MoreThanOneLifeChanged"));
const MoreThanThree = React.lazy(() => import("./components/pages/MoreThanOneLifeChanged"));
const Wishlist = React.lazy(() => import("./components/pages/Wishlist"));
const Checkout = React.lazy(() => import("./components/pages/Checkout"));
const Order = React.lazy(() => import("./components/pages/Order"));
const Error = React.lazy(() => import("./components/pages/Error"));
const Contact = React.lazy(() => import("./components/pages/Contact"));

function App() {
  return (
    // <Router basename={"/themes/themeforest/react/vitto"}>
    <Router basename={"/"}>
      <Suspense fallback={<div></div>}>
        <Switch>
          <Route exact path="/" component={Hometwo} />
          <Route exact path="/shop" component={Shopleft} />
          <Route exact path="/blog" component={Blogright} />
          <Route exact path="/home-v2" component={Hometwo} />
          <Route exact path="/home-v3" component={Homethree} />
          <Route exact path="/home-v4" component={Homefour} />
          <Route exact path="/home-v5" component={Homefive} />
          <Route exact path="/about" component={About} />
          <Route exact path="/blog-left" component={Blogleft} />
          <Route exact path="/blog-right" component={Blogright} />
          <Route exact path="/blog-details" component={Blogdetail} />
          <Route exact path="/donation-grid" component={Donationarchive} />
          <Route exact path="/donation-details" component={Donationdetail} />
          <Route exact path="/story-grid" component={Storyarchive} />
          <Route exact path="/story-details" component={Storydetail} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/shop-left" component={Shopleft} />
          <Route exact path="/more-than-one-life-changed" component={MoreThanOneLifeChanged} />
          <Route exact path="/help-children-east" component={HelpChildrenEast} />
          <Route exact path="/more-than-one" component={MoreThanOne} />
          <Route exact path="/more-than-two" component={MoreThanTwo} />
          <Route exact path="/more-than-three" component={MoreThanThree} />
          {/* <Route exact path="/shop-details" component={Shopdetail} /> */}
          <Route exact path="/wishlist" component={Wishlist} />
          <Route exact path="/checkout" component={Checkout} />
          <Route exact path="/order-details" component={Order} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/error" component={Error} />
          <Route exact component={Error} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
