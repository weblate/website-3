import React from "react"
import { Meta } from "@storybook/react"
import CardInfo from "./CardInfo"
import { faker } from "@faker-js/faker"
import { CardInfo as TCardInfo } from "../../../codegen"

export default {
  title: "Components/Payment/Cards/CardInfo",
  component: CardInfo,
} as Meta<typeof CardInfo>

export const mastercard = () => {
  const card: TCardInfo = {
    brand: "mastercard",
    last4: "4242",
    country: "JP",
    exp_month: 12,
    exp_year: 2021,
    id: faker.datatype.uuid(),
  }

  return <CardInfo card={card} />
}

export const amex = () => {
  const card: TCardInfo = {
    brand: "amex",
    last4: "4242",
    country: "US",
    exp_month: 12,
    exp_year: 2021,
    id: faker.datatype.uuid(),
  }

  return <CardInfo card={card} />
}

export const visa = () => {
  const card: TCardInfo = {
    brand: "visa",
    last4: "4242",
    country: "DE",
    exp_month: 12,
    exp_year: 2021,
    id: faker.datatype.uuid(),
  }

  return <CardInfo card={card} />
}
