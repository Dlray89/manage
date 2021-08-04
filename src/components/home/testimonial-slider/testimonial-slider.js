import React from "react";
import { useTheme, useMediaQuery } from "@material-ui/core";
import DesktopTestimonialSlider from "./desktopTestimonialSlider";
import MobileTestimonialSlider from "./mobileTestimonialSlider";

const TestimonialSlider = () => {
  const theme = useTheme();
  const smRD = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div className="testimonial">
      {smRD ? (
        <>
          <MobileTestimonialSlider />
        </>
      ) : (
        <>
          <DesktopTestimonialSlider />
        </>
      )}
    </div>
  );
};

export default TestimonialSlider;
