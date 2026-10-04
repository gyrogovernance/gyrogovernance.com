"use client";

import { useState } from "react";
import {
  EmailShareButton,
  EmailIcon,
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  RedditShareButton,
  RedditIcon,
  TelegramShareButton,
  TelegramIcon,
  ThreadsShareButton,
  ThreadsIcon,
  WhatsappShareButton,
  WhatsappIcon,
  XShareButton,
  XIcon,
} from "react-share";

const SHARE_URL = "https://gyrogovernance.com/exodus";
const SHARE_TITLE =
  "Exodus: Economic Empowerment for Resilience to Active Existential Risks";
const SHARE_SUMMARY =
  "Through Exodus, we initiate a planetary-scale operation for economic empowerment and uniform power distribution through the Moments Economy. Register and share.";

const iconSize = 40;

export default function ShareButtons() {
  const [copied, setCopied] = useState(false);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(SHARE_URL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <ul className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 list-none m-0 p-0">
      <li className="flex flex-col items-center gap-1.5">
        <button
          type="button"
          onClick={copyLink}
          aria-label="Copy Exodus page link"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-foreground text-background transition-transform duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-classic-blue/40"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 6.5a3.5 3.5 0 0 1 5 5l-3 3a3.5 3.5 0 0 1-5-5m.5 7a3.5 3.5 0 0 1-5-5l3-3a3.5 3.5 0 0 1 5 5"
            />
          </svg>
        </button>
        <span className="text-[11px] font-medium text-foreground-tertiary">
          {copied ? "Copied" : "Copy link"}
        </span>
      </li>

      <li className="flex flex-col items-center gap-1.5">
        <div className="transition-transform duration-200 hover:scale-110 focus-within:scale-110">
          <EmailShareButton
            url={SHARE_URL}
            subject={SHARE_TITLE}
            body={SHARE_SUMMARY}
            aria-label="Share Exodus by email"
          >
            <EmailIcon size={iconSize} round aria-hidden="true" />
          </EmailShareButton>
        </div>
        <span className="text-[11px] font-medium text-foreground-tertiary">
          Email
        </span>
      </li>

      <li className="flex flex-col items-center gap-1.5">
        <div className="transition-transform duration-200 hover:scale-110 focus-within:scale-110">
          <FacebookShareButton
            url={SHARE_URL}
            hashtag="#Exodus"
            aria-label="Share Exodus on Facebook"
          >
            <FacebookIcon size={iconSize} round aria-hidden="true" />
          </FacebookShareButton>
        </div>
        <span className="text-[11px] font-medium text-foreground-tertiary">
          Facebook
        </span>
      </li>

      <li className="flex flex-col items-center gap-1.5">
        <div className="transition-transform duration-200 hover:scale-110 focus-within:scale-110">
          <RedditShareButton
            url={SHARE_URL}
            title={SHARE_TITLE}
            aria-label="Share Exodus on Reddit"
          >
            <RedditIcon size={iconSize} round aria-hidden="true" />
          </RedditShareButton>
        </div>
        <span className="text-[11px] font-medium text-foreground-tertiary">
          Reddit
        </span>
      </li>

      <li className="flex flex-col items-center gap-1.5">
        <div className="transition-transform duration-200 hover:scale-110 focus-within:scale-110">
          <LinkedinShareButton
            url={SHARE_URL}
            title={SHARE_TITLE}
            summary={SHARE_SUMMARY}
            source="Gyro Governance"
            aria-label="Share Exodus on LinkedIn"
          >
            <LinkedinIcon size={iconSize} round aria-hidden="true" />
          </LinkedinShareButton>
        </div>
        <span className="text-[11px] font-medium text-foreground-tertiary">
          LinkedIn
        </span>
      </li>

      <li className="flex flex-col items-center gap-1.5">
        <div className="transition-transform duration-200 hover:scale-110 focus-within:scale-110">
          <XShareButton
            url={SHARE_URL}
            title={SHARE_TITLE}
            hashtags={["Exodus", "TAI", "AISafety"]}
            via="gyrogovernance"
            aria-label="Share Exodus on X"
          >
            <XIcon size={iconSize} round aria-hidden="true" />
          </XShareButton>
        </div>
        <span className="text-[11px] font-medium text-foreground-tertiary">
          X
        </span>
      </li>

      <li className="flex flex-col items-center gap-1.5">
        <div className="transition-transform duration-200 hover:scale-110 focus-within:scale-110">
          <ThreadsShareButton
            url={SHARE_URL}
            title={SHARE_TITLE}
            aria-label="Share Exodus on Threads"
          >
            <ThreadsIcon size={iconSize} round aria-hidden="true" />
          </ThreadsShareButton>
        </div>
        <span className="text-[11px] font-medium text-foreground-tertiary">
          Threads
        </span>
      </li>

      <li className="flex flex-col items-center gap-1.5">
        <div className="transition-transform duration-200 hover:scale-110 focus-within:scale-110">
          <TelegramShareButton
            url={SHARE_URL}
            title={SHARE_TITLE}
            aria-label="Share Exodus on Telegram"
          >
            <TelegramIcon size={iconSize} round aria-hidden="true" />
          </TelegramShareButton>
        </div>
        <span className="text-[11px] font-medium text-foreground-tertiary">
          Telegram
        </span>
      </li>

      <li className="flex flex-col items-center gap-1.5">
        <div className="transition-transform duration-200 hover:scale-110 focus-within:scale-110">
          <WhatsappShareButton
            url={SHARE_URL}
            title={SHARE_TITLE}
            separator=" "
            aria-label="Share Exodus on WhatsApp"
          >
            <WhatsappIcon size={iconSize} round aria-hidden="true" />
          </WhatsappShareButton>
        </div>
        <span className="text-[11px] font-medium text-foreground-tertiary">
          WhatsApp
        </span>
      </li>
    </ul>
  );
}
