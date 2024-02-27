import React from "react";
import "./style.css";
import {
  FaGithub,
  FaTwitter,
  FaFacebookF,
  FaLinkedin,
  FaYoutube,
  FaTwitch,
} from "react-icons/fa";
import { socials } from "../../content_option";

export const Socialicons = (params) => {
  return (
    <div className="stick_follow_icon">
      <ul>
        {socials.twitter && (
          <li>
            <a href={socials.twitter}>
              <FaTwitter />
            </a>
          </li>
        )}
        {socials.github && (
          <li>
            <a href={socials.github}>
              <FaGithub />
            </a>
          </li>
        )}
        {socials.facebook && (
          <li>
            <a href={socials.facebook}>
              <FaFacebookF />
            </a>
          </li>
        )}
        {socials.linkedin && (
          <li>
            <a href={socials.linkedin}>
              <FaLinkedin />
            </a>
          </li>
        )}
        {socials.youtube && (
          <li>
            <a href={socials.youtube}>
              <FaYoutube />
            </a>
          </li>
        )}
        {socials.twitch && (
          <li>
            <a href={socials.twitch}>
              <FaTwitch />
            </a>
          </li>
        )}
      </ul>
      <p>Follow Me</p>
    </div>
  );
};
