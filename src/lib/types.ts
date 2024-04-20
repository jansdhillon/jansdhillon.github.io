import { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { RxGithubLogo } from 'react-icons/rx';
import { FaCss3, FaJs, FaLinkedinIn, FaInstagram, FaTwitter } from 'react-icons/fa';

export type Project  = {
  title: string;
  imgSrc: string;
  imgAlt: string;
  description: string;
  content: ReactNode;
}

export type SectionProps = {
  title: string;
  emoji: string;
  description: string;
  children?: ReactNode;
}

export type SocialLinkProps = {
  icon: ReactNode;
  username: string;
  link: string;
}
