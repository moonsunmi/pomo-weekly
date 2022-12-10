import React from "react";
import { Bars3Icon, PlusIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  HeaderContainer,
  HeaderIcon,
  HeaderTitle,
} from "../../styles/Header.styles";

const RESERVATION_URL = "/components/reservation/Reservation";
const WEEK_REPORT_URL = "/components/weekReports/Week";

const Header = () => {
  const router = useRouter();

  return (
    <HeaderContainer>
      <Link href={router.asPath == WEEK_REPORT_URL ? "" : WEEK_REPORT_URL}>
        <HeaderIcon>
          <Bars3Icon />
        </HeaderIcon>
      </Link>

      <Link href="/">
        <HeaderTitle>POMO WEEKLY</HeaderTitle>
      </Link>

      <Link href={router.asPath == RESERVATION_URL ? "" : RESERVATION_URL}>
        <HeaderIcon>
          <PlusIcon />
        </HeaderIcon>
      </Link>
    </HeaderContainer>
  );
};

export default Header;
