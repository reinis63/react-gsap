import React, { Component, useRef, useEffect } from 'react';
import { Typography, Button, Box, Grid, CardMedia, Card, withStyles} from '@material-ui/core';
import { BrowserRouter as Switch, Route, Link } from 'react-router-dom';

import { styles } from '../styles/social_css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const SocialMedia = (props) => {

  gsap.registerPlugin(ScrollTrigger);

  const { classes } = props;
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    const tl = gsap.timeline();

    ScrollTrigger.matchMedia({
      "(min-width: 1970px) and (max-width: 2880px)": function () {
        const tl = gsap.timeline();
        tl.to(
          '.jss23',
          {
            paddingTop: 400,
            duration: 2,
            scrollTrigger: {
              trigger: ".jss16",
              start: "top top",
              end: "center top",
              scrub: true,
            }
          }
        );
        tl.to(
          '.jss28',
          {
            height: 0,
            paddingTop: 350,
            duration: 2,
            scrollTrigger: {
              trigger: ".jss16",
              start: "top top",
              end: "center top",
              scrub: true,
            }
          }
        );
        tl.to(
          '.jss23',
          {
            left: "50%",
            scrollTrigger: {
              trigger: ".jss16",
              start: "center top",
              end: "bottom top",
              scrub: true,
            }
          }
        );

        tl.to(
          '.jss29',
          {
            width: 0,
            scrollTrigger: {
              trigger: ".jss16",
              start: "center top",
              end: "bottom top",
              scrub: true,
            }
          }
        );
        tl.to(
          '.jss23',
          {
            y: 900,
            scrollTrigger: {
              trigger: ".jss32",
              start: "bottom bottom",
              end: "center center",
              scrub: true,
            }
          }
        );
        tl.to(
          '.jss31',
          {
            height: 0,
            paddingTop: 900,
            scrollTrigger: {
              trigger: ".jss32",
              start: "bottom bottom",
              end: "center center",
              scrub: true,
            }
          }
        );
        tl.to(
          '.jss36',
          {
            opacity: 1,
            y: 60,
            scrollTrigger: {
              trigger: ".jss33",
              start: "top center",
              end: "center center",
              scrub: true,
            }
          }
        )
        .to(
          '.jss37',
          {
            opacity: 1,
            y: 120,
            scrollTrigger: {
              trigger: ".jss33",
              start: "top center",
              end: "center center",
              scrub: true,
            }
          }
        )
        .to(
          '.jss38',
          {
            opacity: 1,
            y: 180,
            scrollTrigger: {
              trigger: ".jss33",
              start: "top center",
              end: "center center",
              scrub: true,
            }
          }
        )
        .to(
          '.jss39',
          {
            opacity: 1,
            y: 240,
            scrollTrigger: {
              trigger: ".jss33",
              start: "top center",
              end: "center center",
              scrub: true,
            }
          }
        );
      },
      "(max-width: 768px)": function () {
        const tl = gsap.timeline();
        tl.to(
          '.jss23',
          {
            paddingTop: 190,
            duration: 2,
            scrollTrigger: {
              trigger: ".jss16",
              start: "top top",
              end: "center top",
              scrub: true,
            }
          }
        );
        tl.to(
          '.jss28',
          {
            height: 0,
            paddingTop: 164,
            duration: 2,
            scrollTrigger: {
              trigger: ".jss16",
              start: "top top",
              end: "center top",
              scrub: true,
            }
          }
        );
        tl.to(
          '.jss23',
          {
            left: "50%",
            scrollTrigger: {
              trigger: ".jss16",
              start: "center top",
              end: "bottom top",
              scrub: true,
            }
          }
        );

        tl.to(
          '.jss29',
          {
            width: 0,
            scrollTrigger: {
              trigger: ".jss16",
              start: "center top",
              end: "bottom top",
              scrub: true,
            }
          }
        );
        tl.to(
          '.jss23',
          {
            y: 250,
            scrollTrigger: {
              trigger: ".jss32",
              start: "top center",
              end: "bottom bottom",
              scrub: true,
            }
          }
        );
        tl.to(
          '.jss31',
          {
            height: 0,
            paddingTop: 250,
            scrollTrigger: {
              trigger: ".jss32",
              start: "top center",
              end: "bottom bottom",
              scrub: true,
            }
          }
        );
        tl.to(
          '.jss36',
          {
            opacity: 1,
            y: 60,
            scrollTrigger: {
              trigger: ".jss32",
              start: "bottom bottom",
              end: "top top",
              scrub: true,
            }
          }
        )
        .to(
          '.jss37',
          {
            opacity: 1,
            y: 120,
            scrollTrigger: {
              trigger: ".jss32",
              start: "bottom bottom",
              end: "top top",
              scrub: true,
            }
          }
        )
        .to(
          '.jss38',
          {
            opacity: 1,
            y: 180,
            scrollTrigger: {
              trigger: ".jss32",
              start: "bottom bottom",
              end: "top top",
              scrub: true,
            }
          }
        )
        .to(
          '.jss39',
          {
            opacity: 1,
            y: 240,
            scrollTrigger: {
              trigger: ".jss32",
              start: "bottom bottom",
              end: "top top",
              scrub: true,
            }
          }
        );
      },
      "(min-width: 768px) and (max-width: 1970px)": function () {
        const tl = gsap.timeline();
        tl.to(
          '.jss23',
          {
            paddingTop: 200,
            duration: 2,
            scrollTrigger: {
              trigger: ".jss16",
              start: "top top",
              end: "center top",
              scrub: true,
            }
          }
        );
        tl.to(
          '.jss28',
          {
            height: 0,
            paddingTop: 144,
            duration: 2,
            scrollTrigger: {
              trigger: ".jss16",
              start: "top top",
              end: "center top",
              scrub: true,
            }
          }
        );
        tl.to(
          '.jss23',
          {
            left: "50%",
            scrollTrigger: {
              trigger: ".jss16",
              start: "center top",
              end: "bottom top",
              scrub: true,
            }
          }
        );

        tl.to(
          '.jss29',
          {
            width: 0,
            scrollTrigger: {
              trigger: ".jss16",
              start: "center top",
              end: "bottom top",
              scrub: true,
            }
          }
        );
        tl.to(
          '.jss23',
          {
            y: 600,
            scrollTrigger: {
              trigger: ".jss32",
              start: "top center",
              end: "center center",
              scrub: true,
            }
          }
        );
        tl.to(
          '.jss31',
          {
            height: 0,
            paddingTop: 600,
            scrollTrigger: {
              trigger: ".jss32",
              start: "top center",
              end: "center center",
              scrub: true,
            }
          }
        );
        tl.to(
          '.jss36',
          {
            opacity: 1,
            y: 60,
            scrollTrigger: {
              trigger: ".jss32",
              start: "bottom bottom",
              end: "center center",
              scrub: true,
            }
          }
        )
        .to(
          '.jss37',
          {
            opacity: 1,
            y: 120,
            scrollTrigger: {
              trigger: ".jss32",
              start: "bottom bottom",
              end: "center center",
              scrub: true,
            }
          }
        )
        .to(
          '.jss38',
          {
            opacity: 1,
            y: 180,
            scrollTrigger: {
              trigger: ".jss32",
              start: "bottom bottom",
              end: "center center",
              scrub: true,
            }
          }
        )
        .to(
          '.jss39',
          {
            opacity: 1,
            y: 240,
            scrollTrigger: {
              trigger: ".jss32",
              start: "bottom bottom",
              end: "center center",
              scrub: true,
            }
          }
        );
      },
      "(min-width: 500px) and (max-width: 768px)": function () {
        const tl = gsap.timeline();
        tl.to(
          '.jss23',
          {
            y: 700,
            scrollTrigger: {
              trigger: ".jss32",
              start: "top center",
              end: "bottom bottom",
              scrub: true,
            }
          }
        );
        tl.to(
          '.jss31',
          {
            height: 0,
            paddingTop: 550,
            scrollTrigger: {
              trigger: ".jss32",
              start: "top center",
              end: "bottom bottom",
              scrub: true,
            }
          }
        );
      },
    })

  }, []);

  return (
    <Grid className={ classes.socialmedia } ref={ ref }>
      <Grid className={ classes.mediagroup }>
        <img src="/assets/img/frame8.png" className={ classes.mediaicons }/>
        <img src="/assets/img/frame7.png" className={ classes.mediaicons }/>
        <img src="/assets/img/frame6.png" className={ classes.mediaicons }/>
        <img src="/assets/img/frame5.png" className={ classes.mediaicons }/>
        <img src="/assets/img/frame4.png" className={ classes.mediaicons }/>
      </Grid>
      <Grid className={ classes.line_group_top }>
        <Grid className={ classes.line_top }>
          <img src="/assets/img/line_top.png" className={ classes.line_top_img }/>
        </Grid>
      </Grid>
      <Grid className={ classes.line_group_mid }>
        <Grid className={ classes.line_mid }>
          <img src="/assets/img/line_mid.png" className={ classes.line_mid_img }/>
        </Grid>
      </Grid>
      <Grid className={ classes.line_group_bottom }>
        <Grid className={ classes.line_bottom }>
          <img src="/assets/img/line_bottom.png" className={ classes.line_bottom_img } />
        </Grid>
      </Grid>
      <Grid className={ classes.media_phone }>
        <Grid className={ classes.phone_form }>
          <img src="/assets/img/media_music.png" className={ `${classes.media_icon} ${classes.media_music}` }/>
          <img src="/assets/img/media_linkedin.png" className={ `${classes.media_icon} ${classes.media_linkedin}` }/>
          <img src="/assets/img/media_call.png" className={ `${classes.media_icon} ${classes.media_call}` }/>
          <img src="/assets/img/media_alarm.png" className={ `${classes.media_icon} ${classes.media_alarm}` }/>
          <img src="/assets/img/media_facebook.png" className={ `${classes.media_icon} ${classes.media_facebook}` }/>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(SocialMedia);