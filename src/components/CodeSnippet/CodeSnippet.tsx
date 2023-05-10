import { CodeSnippetProps } from "./CodeSnippet.props";
import styles from "./CodeSnippet.module.scss";
import cn from "classnames";
import { RiChatSmile3Line } from "react-icons/ri";
import Image from "next/image";
import { useState } from "react";
import { RiCloseFill } from "react-icons/ri";
import { Code } from "../Code/Code";

export const CodeSnippet = ({
  type,
  code,
  username,
  avatar,
  createdAt,
  className,
  details,
  ...props
}: CodeSnippetProps): JSX.Element => {
  const [isOpenedDetails, setIsOpenedDetails] = useState(false);
  return (
    <div className={cn(styles.container, className)} {...props}>
      <div className={cn(styles.container_header)}>
        <div className={cn(styles.header_about)}>
          <div className={cn(styles.header_avatar)}>
            <Image
              src={avatar}
              alt={`${username}-avatar`}
              width={36}
              height={36}
            />
          </div>
          <div className={cn(styles.header_info)}>
            <div className={cn(styles.header_username)}>{username}</div>
            <div className={cn(styles.header_createdAt)}>{createdAt}</div>
          </div>
        </div>
        <div className={cn(styles.header_detail)}>
          <button
            className={cn(styles.detail_button)}
            onClick={() => setIsOpenedDetails(true)}
            aria-label="open details"
            title="open details"
          >
            <RiChatSmile3Line />
            details
          </button>
        </div>
      </div>
      <Code type={type} code={code} />
      <div
        className={cn(styles.container_details, {
          [styles.container_details_active]: isOpenedDetails,
        })}
      >
        <div className={cn(styles.details_text)}>{details}</div>
        <button
          className={cn(styles.details_icon)}
          onClick={() => setIsOpenedDetails(false)}
          aria-label="close details"
          title="close details"
          aria-expanded={isOpenedDetails}
        >
          <RiCloseFill />
        </button>
      </div>
    </div>
  );
};
