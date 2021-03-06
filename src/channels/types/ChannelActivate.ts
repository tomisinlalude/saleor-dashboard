/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ChannelErrorCode } from "./../../types/globalTypes";

// ====================================================
// GraphQL mutation operation: ChannelActivate
// ====================================================

export interface ChannelActivate_channelActivate_channel_shippingZones_metadata {
  __typename: "MetadataItem";
  key: string;
  value: string;
}

export interface ChannelActivate_channelActivate_channel_shippingZones_privateMetadata {
  __typename: "MetadataItem";
  key: string;
  value: string;
}

export interface ChannelActivate_channelActivate_channel_shippingZones_countries {
  __typename: "CountryDisplay";
  code: string;
  country: string;
}

export interface ChannelActivate_channelActivate_channel_shippingZones {
  __typename: "ShippingZone";
  metadata: (ChannelActivate_channelActivate_channel_shippingZones_metadata | null)[];
  privateMetadata: (ChannelActivate_channelActivate_channel_shippingZones_privateMetadata | null)[];
  id: string;
  countries: (ChannelActivate_channelActivate_channel_shippingZones_countries | null)[] | null;
  name: string;
  description: string | null;
}

export interface ChannelActivate_channelActivate_channel {
  __typename: "Channel";
  id: string;
  isActive: boolean;
  name: string;
  slug: string;
  currencyCode: string;
  hasOrders: boolean;
  shippingZones: ChannelActivate_channelActivate_channel_shippingZones[];
}

export interface ChannelActivate_channelActivate_errors {
  __typename: "ChannelError";
  code: ChannelErrorCode;
  field: string | null;
  message: string | null;
}

export interface ChannelActivate_channelActivate {
  __typename: "ChannelActivate";
  channel: ChannelActivate_channelActivate_channel | null;
  errors: ChannelActivate_channelActivate_errors[];
}

export interface ChannelActivate {
  channelActivate: ChannelActivate_channelActivate | null;
}

export interface ChannelActivateVariables {
  id: string;
}
