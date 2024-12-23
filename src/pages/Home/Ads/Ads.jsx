import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Ads = () => {
  return <AdsCop />;
};

const AdsCop = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.location.href =
      "https://ads.x.com/onboarding/18ce55qbwvj/welcome?ref=gl-tw-tw-twitter-ads-rweb";
  }, [navigate]);

  return (
    <div>
      <h1>Redirecting to Ads Page</h1>
    </div>
  );
};

export default Ads;
