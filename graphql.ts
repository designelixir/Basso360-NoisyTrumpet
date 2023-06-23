import { gql } from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

/** Google Map field */
export type Acf_GoogleMap = {
  __typename?: 'ACF_GoogleMap';
  /** The city associated with the map */
  city?: Maybe<Scalars['String']>;
  /** The country associated with the map */
  country?: Maybe<Scalars['String']>;
  /** The country abbreviation associated with the map */
  countryShort?: Maybe<Scalars['String']>;
  /** The latitude associated with the map */
  latitude?: Maybe<Scalars['Float']>;
  /** The longitude associated with the map */
  longitude?: Maybe<Scalars['Float']>;
  /** The country associated with the map */
  placeId?: Maybe<Scalars['String']>;
  /** The post code associated with the map */
  postCode?: Maybe<Scalars['String']>;
  /** The state associated with the map */
  state?: Maybe<Scalars['String']>;
  /** The state abbreviation associated with the map */
  stateShort?: Maybe<Scalars['String']>;
  /** The street address associated with the map */
  streetAddress?: Maybe<Scalars['String']>;
  /** The street name associated with the map */
  streetName?: Maybe<Scalars['String']>;
  /** The street number associated with the map */
  streetNumber?: Maybe<Scalars['String']>;
  /** The zoom defined with the map */
  zoom?: Maybe<Scalars['String']>;
};

/** A Field Group registered by ACF */
export type AcfFieldGroup = {
  /** The name of the ACF Field Group */
  fieldGroupName?: Maybe<Scalars['String']>;
};

/** ACF Link field */
export type AcfLink = {
  __typename?: 'AcfLink';
  /** The target of the link (_blank, etc) */
  target?: Maybe<Scalars['String']>;
  /** The title of the link */
  title?: Maybe<Scalars['String']>;
  /** The url of the link */
  url?: Maybe<Scalars['String']>;
};

/** A Gravity Forms   field. */
export type AddressField = FormField & {
  __typename?: 'AddressField';
  /** Determines the type of address to be displayed. */
  addressType?: Maybe<AddressFieldTypeEnum>;
  /** Address field value. */
  addressValues?: Maybe<AddressFieldValue>;
  /** When specified, the value of this property will be used on the admin pages instead of the label. It is useful for fields with long labels. */
  adminLabel?: Maybe<Scalars['String']>;
  /** Determines if the field’s value can be pre-populated dynamically. */
  canPrepopulate?: Maybe<Scalars['Boolean']>;
  /** Controls the visibility of the field based on values selected by the user. */
  conditionalLogic?: Maybe<ConditionalLogic>;
  /** The field id of the field being used as the copy source. */
  copyValuesOptionFieldId?: Maybe<Scalars['Int']>;
  /** The label that appears next to the copy values option when the form is displayed. The default value is \“Same as previous\”. */
  copyValuesOptionLabel?: Maybe<Scalars['String']>;
  /** String containing the custom CSS classes to be added to the &lt;li&gt; tag that contains the field. Useful for applying custom formatting to specific fields. */
  cssClass?: Maybe<Scalars['String']>;
  /** Contains the country that will be selected by default. Only applicable when &quot;addressType&quot; is set to &quot;INTERATIONAL&quot;. */
  defaultCountry?: Maybe<AddressFieldCountryEnum>;
  /** Contains the province that will be selected by default. Only applicable when &quot;addressType&quot; is set to &quot;CANADA&quot;. */
  defaultProvince?: Maybe<Scalars['String']>;
  /** Contains the state that will be selected by default. Only applicable when &quot;addressType&quot; is set to &quot;US&quot;. */
  defaultState?: Maybe<Scalars['String']>;
  /** Field description. */
  description?: Maybe<Scalars['String']>;
  /** The placement of the field description. */
  descriptionPlacement?: Maybe<FormFieldDescriptionPlacementEnum>;
  /** Indicates the field is only displayed and its contents are not submitted with the form/saved with the entry. This is set to true. */
  displayOnly?: Maybe<Scalars['Boolean']>;
  /** Contains the message that is displayed for fields that fail validation. */
  errorMessage?: Maybe<Scalars['String']>;
  /** Whether autocomplete should be enabled for this field. */
  hasAutocomplete?: Maybe<Scalars['Boolean']>;
  /** Field ID. */
  id: Scalars['Int'];
  /** Assigns a name to this field so that it can be populated dynamically via this input name. Only applicable when canPrepopulate is `true`. */
  inputName?: Maybe<Scalars['String']>;
  /** The base form field type used to display the input. A good example is the Post Custom Field that can be displayed as various different types of fields. */
  inputType?: Maybe<FormFieldTypeEnum>;
  /** An array of the available properties for each input of the address field. */
  inputs?: Maybe<Array<Maybe<AddressInputProperty>>>;
  /** Determines if the field requires the user to enter a value. Fields marked as required will prevent the form from being submitted if the user has not entered a value in it. */
  isRequired?: Maybe<Scalars['Boolean']>;
  /** Field label that will be displayed on the form and on the admin pages. */
  label?: Maybe<Scalars['String']>;
  /** The field label position. */
  labelPlacement?: Maybe<FormFieldLabelPlacementEnum>;
  /** The number of CSS grid columns the field should span. */
  layoutGridColumnSpan?: Maybe<Scalars['Int']>;
  /** The number of CSS grid columns the spacer field following this one should span. */
  layoutSpacerGridColumnSpan?: Maybe<Scalars['Int']>;
  /** The form page this field is located on. Default is 1. */
  pageNumber?: Maybe<Scalars['Int']>;
  /** The form field-specifc policies for exporting and erasing personal data. */
  personalData?: Maybe<FormFieldDataPolicy>;
  /** Indicates whether the copy values option can be used. This option allows users to skip filling out the field and use the same values as another. For example, if the mailing and billing address are the same. */
  shouldCopyValuesOption?: Maybe<Scalars['Boolean']>;
  /** The placement of the labels for the subfields within the group. This setting controls all of the subfields, they cannot be set individually. They may be aligned above or below the inputs. If this property is not set, the “Sub-Label Placement” setting on the Form Settings-&gt;Form Layout page is used. If no setting is specified, the default is above inputs. */
  subLabelPlacement?: Maybe<FormFieldSubLabelPlacementEnum>;
  /** The type of field to be displayed. */
  type?: Maybe<FormFieldTypeEnum>;
  /** The string-formatted entry value for the `formField`. For complex fields this might be a JSON-encoded or serialized array. */
  value?: Maybe<Scalars['String']>;
  /** Field visibility. */
  visibility?: Maybe<FormFieldVisibilityEnum>;
};

/** Countries supported by Gravity Forms Address Field. */
export enum AddressFieldCountryEnum {
  /** Andorra . */
  Ad = 'AD',
  /** United Arab Emirates . */
  Ae = 'AE',
  /** Afghanistan . */
  Af = 'AF',
  /** Antigua and Barbuda . */
  Ag = 'AG',
  /** Anguilla . */
  Ai = 'AI',
  /** Albania . */
  Al = 'AL',
  /** Armenia . */
  Am = 'AM',
  /** Angola . */
  Ao = 'AO',
  /** Antarctica . */
  Aq = 'AQ',
  /** Argentina . */
  Ar = 'AR',
  /** American Samoa . */
  As = 'AS',
  /** Austria . */
  At = 'AT',
  /** Australia . */
  Au = 'AU',
  /** Aruba . */
  Aw = 'AW',
  /** Åland Islands . */
  Ax = 'AX',
  /** Azerbaijan . */
  Az = 'AZ',
  /** Bosnia and Herzegovina . */
  Ba = 'BA',
  /** Barbados . */
  Bb = 'BB',
  /** Bangladesh . */
  Bd = 'BD',
  /** Belgium . */
  Be = 'BE',
  /** Burkina Faso . */
  Bf = 'BF',
  /** Bulgaria . */
  Bg = 'BG',
  /** Bahrain . */
  Bh = 'BH',
  /** Burundi . */
  Bi = 'BI',
  /** Benin . */
  Bj = 'BJ',
  /** Saint Barthélemy . */
  Bl = 'BL',
  /** Bermuda . */
  Bm = 'BM',
  /** Brunei Darussalam . */
  Bn = 'BN',
  /** Bolivia . */
  Bo = 'BO',
  /** Bonaire, Sint Eustatius and Saba . */
  Bq = 'BQ',
  /** Brazil . */
  Br = 'BR',
  /** Bahamas . */
  Bs = 'BS',
  /** Bhutan . */
  Bt = 'BT',
  /** Bouvet Island . */
  Bv = 'BV',
  /** Botswana . */
  Bw = 'BW',
  /** Belarus . */
  By = 'BY',
  /** Belize . */
  Bz = 'BZ',
  /** Canada . */
  Ca = 'CA',
  /** Cocos Islands . */
  Cc = 'CC',
  /** Congo, Democratic Republic of the . */
  Cd = 'CD',
  /** Central African Republic . */
  Cf = 'CF',
  /** Congo . */
  Cg = 'CG',
  /** Switzerland . */
  Ch = 'CH',
  /** Côte d'Ivoire . */
  Ci = 'CI',
  /** Cook Islands . */
  Ck = 'CK',
  /** Chile . */
  Cl = 'CL',
  /** Cameroon . */
  Cm = 'CM',
  /** China . */
  Cn = 'CN',
  /** Colombia . */
  Co = 'CO',
  /** Costa Rica . */
  Cr = 'CR',
  /** Cuba . */
  Cu = 'CU',
  /** Cabo Verde . */
  Cv = 'CV',
  /** Curaçao . */
  Cw = 'CW',
  /** Christmas Island . */
  Cx = 'CX',
  /** Cyprus . */
  Cy = 'CY',
  /** Czechia . */
  Cz = 'CZ',
  /** Germany . */
  De = 'DE',
  /** Djibouti . */
  Dj = 'DJ',
  /** Denmark . */
  Dk = 'DK',
  /** Dominica . */
  Dm = 'DM',
  /** Dominican Republic . */
  Do = 'DO',
  /** Algeria . */
  Dz = 'DZ',
  /** Ecuador . */
  Ec = 'EC',
  /** Estonia . */
  Ee = 'EE',
  /** Egypt . */
  Eg = 'EG',
  /** Western Sahara . */
  Eh = 'EH',
  /** Eritrea . */
  Er = 'ER',
  /** Spain . */
  Es = 'ES',
  /** Ethiopia . */
  Et = 'ET',
  /** Finland . */
  Fi = 'FI',
  /** Fiji . */
  Fj = 'FJ',
  /** Falkland Islands . */
  Fk = 'FK',
  /** Micronesia . */
  Fm = 'FM',
  /** Faroe Islands . */
  Fo = 'FO',
  /** France . */
  Fr = 'FR',
  /** Gabon . */
  Ga = 'GA',
  /** United Kingdom . */
  Gb = 'GB',
  /** Grenada . */
  Gd = 'GD',
  /** Georgia . */
  Ge = 'GE',
  /** French Guiana . */
  Gf = 'GF',
  /** Guernsey . */
  Gg = 'GG',
  /** Ghana . */
  Gh = 'GH',
  /** Gibraltar . */
  Gi = 'GI',
  /** Greenland . */
  Gl = 'GL',
  /** Gambia . */
  Gm = 'GM',
  /** Guinea . */
  Gn = 'GN',
  /** Guadeloupe . */
  Gp = 'GP',
  /** Equatorial Guinea . */
  Gq = 'GQ',
  /** Greece . */
  Gr = 'GR',
  /** South Georgia and the South Sandwich Islands . */
  Gs = 'GS',
  /** Guatemala . */
  Gt = 'GT',
  /** Guam . */
  Gu = 'GU',
  /** Guinea-Bissau . */
  Gw = 'GW',
  /** Guyana . */
  Gy = 'GY',
  /** Hong Kong . */
  Hk = 'HK',
  /** Heard Island and McDonald Islands . */
  Hm = 'HM',
  /** Honduras . */
  Hn = 'HN',
  /** Croatia . */
  Hr = 'HR',
  /** Haiti . */
  Ht = 'HT',
  /** Hungary . */
  Hu = 'HU',
  /** Indonesia . */
  Id = 'ID',
  /** Ireland . */
  Ie = 'IE',
  /** Israel . */
  Il = 'IL',
  /** Isle of Man . */
  Im = 'IM',
  /** India . */
  In = 'IN',
  /** British Indian Ocean Territory . */
  Io = 'IO',
  /** Iraq . */
  Iq = 'IQ',
  /** Iran . */
  Ir = 'IR',
  /** Iceland . */
  Is = 'IS',
  /** Italy . */
  It = 'IT',
  /** Jersey . */
  Je = 'JE',
  /** Jamaica . */
  Jm = 'JM',
  /** Jordan . */
  Jo = 'JO',
  /** Japan . */
  Jp = 'JP',
  /** Kenya . */
  Ke = 'KE',
  /** Kyrgyzstan . */
  Kg = 'KG',
  /** Cambodia . */
  Kh = 'KH',
  /** Kiribati . */
  Ki = 'KI',
  /** Comoros . */
  Km = 'KM',
  /** Saint Kitts and Nevis . */
  Kn = 'KN',
  /** Korea, Democratic People's Republic of . */
  Kp = 'KP',
  /** Korea, Republic of . */
  Kr = 'KR',
  /** Kuwait . */
  Kw = 'KW',
  /** Cayman Islands . */
  Ky = 'KY',
  /** Kazakhstan . */
  Kz = 'KZ',
  /** Lao People's Democratic Republic . */
  La = 'LA',
  /** Lebanon . */
  Lb = 'LB',
  /** Saint Lucia . */
  Lc = 'LC',
  /** Liechtenstein . */
  Li = 'LI',
  /** Sri Lanka . */
  Lk = 'LK',
  /** Liberia . */
  Lr = 'LR',
  /** Lesotho . */
  Ls = 'LS',
  /** Lithuania . */
  Lt = 'LT',
  /** Luxembourg . */
  Lu = 'LU',
  /** Latvia . */
  Lv = 'LV',
  /** Libya . */
  Ly = 'LY',
  /** Morocco . */
  Ma = 'MA',
  /** Monaco . */
  Mc = 'MC',
  /** Moldova . */
  Md = 'MD',
  /** Montenegro . */
  Me = 'ME',
  /** Saint Martin . */
  Mf = 'MF',
  /** Madagascar . */
  Mg = 'MG',
  /** Marshall Islands . */
  Mh = 'MH',
  /** North Macedonia . */
  Mk = 'MK',
  /** Mali . */
  Ml = 'ML',
  /** Myanmar . */
  Mm = 'MM',
  /** Mongolia . */
  Mn = 'MN',
  /** Macao . */
  Mo = 'MO',
  /** Northern Mariana Islands . */
  Mp = 'MP',
  /** Martinique . */
  Mq = 'MQ',
  /** Mauritania . */
  Mr = 'MR',
  /** Montserrat . */
  Ms = 'MS',
  /** Malta . */
  Mt = 'MT',
  /** Mauritius . */
  Mu = 'MU',
  /** Maldives . */
  Mv = 'MV',
  /** Malawi . */
  Mw = 'MW',
  /** Mexico . */
  Mx = 'MX',
  /** Malaysia . */
  My = 'MY',
  /** Mozambique . */
  Mz = 'MZ',
  /** Namibia . */
  Na = 'NA',
  /** New Caledonia . */
  Nc = 'NC',
  /** Niger . */
  Ne = 'NE',
  /** Norfolk Island . */
  Nf = 'NF',
  /** Nigeria . */
  Ng = 'NG',
  /** Nicaragua . */
  Ni = 'NI',
  /** Netherlands . */
  Nl = 'NL',
  /** Norway . */
  No = 'NO',
  /** Nepal . */
  Np = 'NP',
  /** Nauru . */
  Nr = 'NR',
  /** Niue . */
  Nu = 'NU',
  /** New Zealand . */
  Nz = 'NZ',
  /** Oman . */
  Om = 'OM',
  /** Panama . */
  Pa = 'PA',
  /** Peru . */
  Pe = 'PE',
  /** French Polynesia . */
  Pf = 'PF',
  /** Papua New Guinea . */
  Pg = 'PG',
  /** Philippines . */
  Ph = 'PH',
  /** Pakistan . */
  Pk = 'PK',
  /** Poland . */
  Pl = 'PL',
  /** Saint Pierre and Miquelon . */
  Pm = 'PM',
  /** Pitcairn . */
  Pn = 'PN',
  /** Puerto Rico . */
  Pr = 'PR',
  /** Palestine, State of . */
  Ps = 'PS',
  /** Portugal . */
  Pt = 'PT',
  /** Palau . */
  Pw = 'PW',
  /** Paraguay . */
  Py = 'PY',
  /** Qatar . */
  Qa = 'QA',
  /** Réunion . */
  Re = 'RE',
  /** Romania . */
  Ro = 'RO',
  /** Serbia . */
  Rs = 'RS',
  /** Russian Federation . */
  Ru = 'RU',
  /** Rwanda . */
  Rw = 'RW',
  /** Saudi Arabia . */
  Sa = 'SA',
  /** Solomon Islands . */
  Sb = 'SB',
  /** Seychelles . */
  Sc = 'SC',
  /** Sudan . */
  Sd = 'SD',
  /** Sweden . */
  Se = 'SE',
  /** Singapore . */
  Sg = 'SG',
  /** Saint Helena, Ascension and Tristan da Cunha . */
  Sh = 'SH',
  /** Slovenia . */
  Si = 'SI',
  /** Svalbard and Jan Mayen . */
  Sj = 'SJ',
  /** Slovakia . */
  Sk = 'SK',
  /** Sierra Leone . */
  Sl = 'SL',
  /** San Marino . */
  Sm = 'SM',
  /** Senegal . */
  Sn = 'SN',
  /** Somalia . */
  So = 'SO',
  /** Suriname . */
  Sr = 'SR',
  /** South Sudan . */
  Ss = 'SS',
  /** Sao Tome and Principe . */
  St = 'ST',
  /** El Salvador . */
  Sv = 'SV',
  /** Sint Maarten . */
  Sx = 'SX',
  /** Syria Arab Republic . */
  Sy = 'SY',
  /** Eswatini . */
  Sz = 'SZ',
  /** Turks and Caicos Islands . */
  Tc = 'TC',
  /** Chad . */
  Td = 'TD',
  /** French Southern Territories . */
  Tf = 'TF',
  /** Togo . */
  Tg = 'TG',
  /** Thailand . */
  Th = 'TH',
  /** Tajikistan . */
  Tj = 'TJ',
  /** Tokelau . */
  Tk = 'TK',
  /** Timor-Leste . */
  Tl = 'TL',
  /** Turkmenistan . */
  Tm = 'TM',
  /** Tunisia . */
  Tn = 'TN',
  /** Tonga . */
  To = 'TO',
  /** Türkiye . */
  Tr = 'TR',
  /** Trinidad and Tobago . */
  Tt = 'TT',
  /** Tuvalu . */
  Tv = 'TV',
  /** Taiwan . */
  Tw = 'TW',
  /** Tanzania, the United Republic of . */
  Tz = 'TZ',
  /** Ukraine . */
  Ua = 'UA',
  /** Uganda . */
  Ug = 'UG',
  /** US Minor Outlying Islands . */
  Um = 'UM',
  /** United States . */
  Us = 'US',
  /** Uruguay . */
  Uy = 'UY',
  /** Uzbekistan . */
  Uz = 'UZ',
  /** Holy See . */
  Va = 'VA',
  /** Saint Vincent and the Grenadines . */
  Vc = 'VC',
  /** Venezuela . */
  Ve = 'VE',
  /** Virgin Islands, British . */
  Vg = 'VG',
  /** Virgin Islands, U.S. . */
  Vi = 'VI',
  /** Viet Nam . */
  Vn = 'VN',
  /** Vanuatu . */
  Vu = 'VU',
  /** Wallis and Futuna . */
  Wf = 'WF',
  /** Samoa . */
  Ws = 'WS',
  /** Yemen . */
  Ye = 'YE',
  /** Mayotte . */
  Yt = 'YT',
  /** South Africa . */
  Za = 'ZA',
  /** Zambia . */
  Zm = 'ZM',
  /** Zimbabwe . */
  Zw = 'ZW'
}

/** Input fields for Address FormField. */
export type AddressFieldInput = {
  /** Address city. */
  city?: InputMaybe<Scalars['String']>;
  /** Address country. */
  country?: InputMaybe<AddressFieldCountryEnum>;
  /** Address line two. */
  lineTwo?: InputMaybe<Scalars['String']>;
  /** Address state/region/province name. */
  state?: InputMaybe<Scalars['String']>;
  /** Street address. */
  street?: InputMaybe<Scalars['String']>;
  /** Address zip code. */
  zip?: InputMaybe<Scalars['String']>;
};

/** Determines the type of address to be displayed. */
export enum AddressFieldTypeEnum {
  /** Canada address type. */
  Canada = 'CANADA',
  /** International address type. */
  International = 'INTERNATIONAL',
  /** United States address type. */
  Us = 'US'
}

/** The individual properties for each element of the address value field. */
export type AddressFieldValue = {
  __typename?: 'AddressFieldValue';
  /** Address city. */
  city?: Maybe<Scalars['String']>;
  /** Address country. */
  country?: Maybe<AddressFieldCountryEnum>;
  /** Address line two. */
  lineTwo?: Maybe<Scalars['String']>;
  /** Address state/region/province name. */
  state?: Maybe<Scalars['String']>;
  /** Street address. */
  street?: Maybe<Scalars['String']>;
  /** Address zip code. */
  zip?: Maybe<Scalars['String']>;
};

/** Address input values. */
export type AddressInputProperty = {
  __typename?: 'AddressInputProperty';
  /** The autocomplete attribute for the field. */
  autocompleteAttribute?: Maybe<Scalars['String']>;
  /** The custom label for the input. When set, this is used in place of the label. */
  customLabel?: Maybe<Scalars['String']>;
  /** Contains the default value for the field. When specified, the field&#039;s value will be populated with the contents of this property when the form is displayed. */
  defaultValue?: Maybe<Scalars['String']>;
  /** The input ID. Input IDs follow the following naming convention: FIELDID.INPUTID (i.e. 5.1), where FIELDID is the id of the containing field and INPUTID specifies the input field. */
  id?: Maybe<Scalars['Float']>;
  /** Whether or not this field should be hidden. */
  isHidden?: Maybe<Scalars['Boolean']>;
  /** Key used to identify this input. */
  key?: Maybe<Scalars['String']>;
  /** Field label that will be displayed on the form and on the admin pages. */
  label?: Maybe<Scalars['String']>;
  /** Assigns a name to this field so that it can be populated dynamically via this input name. Only applicable when canPrepopulate is `true`. */
  name?: Maybe<Scalars['String']>;
  /** Placeholder text to give the user a hint on how to fill out the field. This is not submitted with the form. */
  placeholder?: Maybe<Scalars['String']>;
};

/** The AM or PM cycle in a 12-hour clock. */
export enum AmPmEnum {
  /** AM. The first 12-hour cycle of the day. */
  Am = 'AM',
  /** PM. The second 12-hour cycle of the day. */
  Pm = 'PM'
}

/** The atlasContentModelerSettings setting type */
export type AtlasContentModelerSettingsSettings = {
  __typename?: 'AtlasContentModelerSettingsSettings';
  /** Opt into anonymous usage tracking to help us make Atlas Content Modeler better. */
  atlasContentModelerUsageTracking?: Maybe<Scalars['String']>;
};

/** Avatars are profile images for users. WordPress by default uses the Gravatar service to host and fetch avatars from. */
export type Avatar = {
  __typename?: 'Avatar';
  /** URL for the default image or a default type. Accepts &#039;404&#039; (return a 404 instead of a default image), &#039;retro&#039; (8bit), &#039;monsterid&#039; (monster), &#039;wavatar&#039; (cartoon face), &#039;indenticon&#039; (the &#039;quilt&#039;), &#039;mystery&#039;, &#039;mm&#039;, or &#039;mysteryman&#039; (The Oyster Man), &#039;blank&#039; (transparent GIF), or &#039;gravatar_default&#039; (the Gravatar logo). */
  default?: Maybe<Scalars['String']>;
  /** HTML attributes to insert in the IMG element. Is not sanitized. */
  extraAttr?: Maybe<Scalars['String']>;
  /** Whether to always show the default image, never the Gravatar. */
  forceDefault?: Maybe<Scalars['Boolean']>;
  /** Whether the avatar was successfully found. */
  foundAvatar?: Maybe<Scalars['Boolean']>;
  /** Height of the avatar image. */
  height?: Maybe<Scalars['Int']>;
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** What rating to display avatars up to. Accepts &#039;G&#039;, &#039;PG&#039;, &#039;R&#039;, &#039;X&#039;, and are judged in that order. */
  rating?: Maybe<Scalars['String']>;
  /** Type of url scheme to use. Typically HTTP vs. HTTPS. */
  scheme?: Maybe<Scalars['String']>;
  /** The size of the avatar in pixels. A value of 96 will match a 96px x 96px gravatar image. */
  size?: Maybe<Scalars['Int']>;
  /** URL for the gravatar image source. */
  url?: Maybe<Scalars['String']>;
  /** Width of the avatar image. */
  width?: Maybe<Scalars['Int']>;
};

/** What rating to display avatars up to. Accepts 'G', 'PG', 'R', 'X', and are judged in that order. Default is the value of the 'avatar_rating' option */
export enum AvatarRatingEnum {
  /** Indicates a G level avatar rating level. */
  G = 'G',
  /** Indicates a PG level avatar rating level. */
  Pg = 'PG',
  /** Indicates an R level avatar rating level. */
  R = 'R',
  /** Indicates an X level avatar rating level. */
  X = 'X'
}

/** A Gravity Forms   field. */
export type CaptchaField = FormField & {
  __typename?: 'CaptchaField';
  /** The language used when the captcha is displayed. This property is available when the captchaType is “captcha”, the default. The possible values are the language codes used by WordPress. */
  captchaBadgePosition?: Maybe<CaptchaFieldBadgePositionEnum>;
  /** The language used when the captcha is displayed. This property is available when the captchaType is “captcha”, the default. The possible values are the language codes used by WordPress. */
  captchaLanguage?: Maybe<Scalars['String']>;
  /** Determines the theme to be used for the reCAPTCHA field. Only applicable to the recaptcha captcha type. */
  captchaTheme?: Maybe<CaptchaFieldThemeEnum>;
  /** Determines the type of CAPTCHA field to be used. */
  captchaType?: Maybe<CaptchaFieldTypeEnum>;
  /** Controls the visibility of the field based on values selected by the user. */
  conditionalLogic?: Maybe<ConditionalLogic>;
  /** String containing the custom CSS classes to be added to the &lt;li&gt; tag that contains the field. Useful for applying custom formatting to specific fields. */
  cssClass?: Maybe<Scalars['String']>;
  /** Field description. */
  description?: Maybe<Scalars['String']>;
  /** The placement of the field description. */
  descriptionPlacement?: Maybe<FormFieldDescriptionPlacementEnum>;
  /** Indicates the field is only displayed and its contents are not submitted with the form/saved with the entry. This is set to true. */
  displayOnly?: Maybe<Scalars['Boolean']>;
  /** Contains the message that is displayed for fields that fail validation. */
  errorMessage?: Maybe<Scalars['String']>;
  /** Field ID. */
  id: Scalars['Int'];
  /** The base form field type used to display the input. A good example is the Post Custom Field that can be displayed as various different types of fields. */
  inputType?: Maybe<FormFieldTypeEnum>;
  /** Field label that will be displayed on the form and on the admin pages. */
  label?: Maybe<Scalars['String']>;
  /** The field label position. */
  labelPlacement?: Maybe<FormFieldLabelPlacementEnum>;
  /** The number of CSS grid columns the field should span. */
  layoutGridColumnSpan?: Maybe<Scalars['Int']>;
  /** The number of CSS grid columns the spacer field following this one should span. */
  layoutSpacerGridColumnSpan?: Maybe<Scalars['Int']>;
  /** The form page this field is located on. Default is 1. */
  pageNumber?: Maybe<Scalars['Int']>;
  /** Determines the image’s background color, in HEX format (i.e. #CCCCCC). Only applicable to simple_captcha and math captcha types. */
  simpleCaptchaBackgroundColor?: Maybe<Scalars['String']>;
  /** Determines the image’s font color, in HEX format (i.e. #CCCCCC). Only applicable to simple_captcha and math captcha types. */
  simpleCaptchaFontColor?: Maybe<Scalars['String']>;
  /** Determines the CAPTCHA image size. Only applicable to simple_captcha and math captcha types. */
  simpleCaptchaSize?: Maybe<FormFieldSizeEnum>;
  /** The type of field to be displayed. */
  type?: Maybe<FormFieldTypeEnum>;
  /** The string-formatted entry value for the `formField`. For complex fields this might be a JSON-encoded or serialized array. */
  value?: Maybe<Scalars['String']>;
  /** Field visibility. */
  visibility?: Maybe<FormFieldVisibilityEnum>;
};

/** The position to place the (invisible) reCaptcha badge. */
export enum CaptchaFieldBadgePositionEnum {
  /** Bottom-left position. */
  BottomLeft = 'BOTTOM_LEFT',
  /** Bottom-right position. */
  BottomRight = 'BOTTOM_RIGHT',
  /** Inline position. */
  Inline = 'INLINE'
}

/** The theme to be used for the reCAPTCHA field. */
export enum CaptchaFieldThemeEnum {
  /** Dark reCAPTCHA theme. */
  Dark = 'DARK',
  /** Light reCAPTCHA theme. */
  Light = 'LIGHT'
}

/** Type of CAPTCHA field to be used. */
export enum CaptchaFieldTypeEnum {
  /** Math CAPTCHA type. */
  Math = 'MATH',
  /** reCAPTCHA type. */
  Recaptcha = 'RECAPTCHA',
  /** Simple CAPTCHA type. */
  Simple = 'SIMPLE'
}

/** The category type */
export type Category = DatabaseIdentifier & HierarchicalNode & HierarchicalTermNode & MenuItemLinkable & Node & TermNode & UniformResourceIdentifiable & {
  __typename?: 'Category';
  /** The ancestors of the node. Default ordered as lowest (closest to the child) to highest (closest to the root). */
  ancestors?: Maybe<CategoryToAncestorsCategoryConnection>;
  /**
   * The id field matches the WP_Post-&gt;ID field.
   * @deprecated Deprecated in favor of databaseId
   */
  categoryId?: Maybe<Scalars['Int']>;
  /** Connection between the category type and its children categories. */
  children?: Maybe<CategoryToCategoryConnection>;
  /** @deprecated Deprecated in favor of using Next.js pages */
  conditionalTags?: Maybe<ConditionalTags>;
  /** Connection between the Category type and the ContentNode type */
  contentNodes?: Maybe<CategoryToContentNodeConnection>;
  /** The number of objects connected to the object */
  count?: Maybe<Scalars['Int']>;
  /** The unique identifier stored in the database */
  databaseId: Scalars['Int'];
  /** The description of the object */
  description?: Maybe<Scalars['String']>;
  /** Connection between the TermNode type and the EnqueuedScript type */
  enqueuedScripts?: Maybe<TermNodeToEnqueuedScriptConnection>;
  /** Connection between the TermNode type and the EnqueuedStylesheet type */
  enqueuedStylesheets?: Maybe<TermNodeToEnqueuedStylesheetConnection>;
  /** The unique resource identifier path */
  id: Scalars['ID'];
  /** Whether the node is a Content Node */
  isContentNode: Scalars['Boolean'];
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** Whether the node is a Term */
  isTermNode: Scalars['Boolean'];
  /** The link to the term */
  link?: Maybe<Scalars['String']>;
  /** The human friendly name of the object. */
  name?: Maybe<Scalars['String']>;
  /** Connection between the category type and its parent category. */
  parent?: Maybe<CategoryToParentCategoryConnectionEdge>;
  /** Database id of the parent node */
  parentDatabaseId?: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the parent node. */
  parentId?: Maybe<Scalars['ID']>;
  /** Connection between the Category type and the post type */
  posts?: Maybe<CategoryToPostConnection>;
  /** The Yoast SEO data of the Categories taxonomy. */
  seo?: Maybe<TaxonomySeo>;
  /** An alphanumeric identifier for the object unique to its type. */
  slug?: Maybe<Scalars['String']>;
  /** Connection between the Category type and the Taxonomy type */
  taxonomy?: Maybe<CategoryToTaxonomyConnectionEdge>;
  /** The name of the taxonomy that the object is associated with */
  taxonomyName?: Maybe<Scalars['String']>;
  templates?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The ID of the term group that this term object belongs to */
  termGroupId?: Maybe<Scalars['Int']>;
  /** The taxonomy ID that the object is associated with */
  termTaxonomyId?: Maybe<Scalars['Int']>;
  /** The unique resource identifier path */
  uri?: Maybe<Scalars['String']>;
};


/** The category type */
export type CategoryAncestorsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** The category type */
export type CategoryChildrenArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CategoryToCategoryConnectionWhereArgs>;
};


/** The category type */
export type CategoryContentNodesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CategoryToContentNodeConnectionWhereArgs>;
};


/** The category type */
export type CategoryEnqueuedScriptsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** The category type */
export type CategoryEnqueuedStylesheetsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** The category type */
export type CategoryPostsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CategoryToPostConnectionWhereArgs>;
};

/** Connection to category Nodes */
export type CategoryConnection = {
  /** A list of edges (relational context) between RootQuery and connected category Nodes */
  edges: Array<CategoryConnectionEdge>;
  /** A list of connected category Nodes */
  nodes: Array<Category>;
  /** Information about pagination in a connection. */
  pageInfo: CategoryConnectionPageInfo;
};

/** Edge between a Node and a connected category */
export type CategoryConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The connected category Node */
  node: Category;
};

/** Page Info on the connected CategoryConnectionEdge */
export type CategoryConnectionPageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum CategoryIdType {
  /** The Database ID for the node */
  DatabaseId = 'DATABASE_ID',
  /** The hashed Global ID */
  Id = 'ID',
  /** The name of the node */
  Name = 'NAME',
  /** Url friendly name of the node */
  Slug = 'SLUG',
  /** The URI for the node */
  Uri = 'URI'
}

/** Connection between the Category type and the category type */
export type CategoryToAncestorsCategoryConnection = CategoryConnection & Connection & {
  __typename?: 'CategoryToAncestorsCategoryConnection';
  /** Edges for the CategoryToAncestorsCategoryConnection connection */
  edges: Array<CategoryToAncestorsCategoryConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<Category>;
  /** Information about pagination in a connection. */
  pageInfo: CategoryToAncestorsCategoryConnectionPageInfo;
};

/** An edge in a connection */
export type CategoryToAncestorsCategoryConnectionEdge = CategoryConnectionEdge & Edge & {
  __typename?: 'CategoryToAncestorsCategoryConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: Category;
};

/** Page Info on the &quot;CategoryToAncestorsCategoryConnection&quot; */
export type CategoryToAncestorsCategoryConnectionPageInfo = CategoryConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'CategoryToAncestorsCategoryConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Connection between the Category type and the category type */
export type CategoryToCategoryConnection = CategoryConnection & Connection & {
  __typename?: 'CategoryToCategoryConnection';
  /** Edges for the CategoryToCategoryConnection connection */
  edges: Array<CategoryToCategoryConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<Category>;
  /** Information about pagination in a connection. */
  pageInfo: CategoryToCategoryConnectionPageInfo;
};

/** An edge in a connection */
export type CategoryToCategoryConnectionEdge = CategoryConnectionEdge & Edge & {
  __typename?: 'CategoryToCategoryConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: Category;
};

/** Page Info on the &quot;CategoryToCategoryConnection&quot; */
export type CategoryToCategoryConnectionPageInfo = CategoryConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'CategoryToCategoryConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the CategoryToCategoryConnection connection */
export type CategoryToCategoryConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: InputMaybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: InputMaybe<Scalars['Int']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: InputMaybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: InputMaybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: InputMaybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: InputMaybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: InputMaybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Direction the connection should be ordered in */
  order?: InputMaybe<OrderEnum>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: InputMaybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: InputMaybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: InputMaybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: InputMaybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomyId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: InputMaybe<Scalars['Boolean']>;
};

/** Connection between the Category type and the ContentNode type */
export type CategoryToContentNodeConnection = Connection & ContentNodeConnection & {
  __typename?: 'CategoryToContentNodeConnection';
  /** Edges for the CategoryToContentNodeConnection connection */
  edges: Array<CategoryToContentNodeConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<ContentNode>;
  /** Information about pagination in a connection. */
  pageInfo: CategoryToContentNodeConnectionPageInfo;
};

/** An edge in a connection */
export type CategoryToContentNodeConnectionEdge = ContentNodeConnectionEdge & Edge & {
  __typename?: 'CategoryToContentNodeConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: ContentNode;
};

/** Page Info on the &quot;CategoryToContentNodeConnection&quot; */
export type CategoryToContentNodeConnectionPageInfo = ContentNodeConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'CategoryToContentNodeConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the CategoryToContentNodeConnection connection */
export type CategoryToContentNodeConnectionWhereArgs = {
  /** The Types of content to filter */
  contentTypes?: InputMaybe<Array<InputMaybe<ContentTypesOfCategoryEnum>>>;
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']>;
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>;
  /** Title of the object */
  title?: InputMaybe<Scalars['String']>;
};

/** Connection between the Category type and the category type */
export type CategoryToParentCategoryConnectionEdge = CategoryConnectionEdge & Edge & OneToOneConnection & {
  __typename?: 'CategoryToParentCategoryConnectionEdge';
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The node of the connection, without the edges */
  node: Category;
};

/** Connection between the Category type and the post type */
export type CategoryToPostConnection = Connection & PostConnection & {
  __typename?: 'CategoryToPostConnection';
  /** Edges for the CategoryToPostConnection connection */
  edges: Array<CategoryToPostConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<Post>;
  /** Information about pagination in a connection. */
  pageInfo: CategoryToPostConnectionPageInfo;
};

/** An edge in a connection */
export type CategoryToPostConnectionEdge = Edge & PostConnectionEdge & {
  __typename?: 'CategoryToPostConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: Post;
};

/** Page Info on the &quot;CategoryToPostConnection&quot; */
export type CategoryToPostConnectionPageInfo = PageInfo & PostConnectionPageInfo & WpPageInfo & {
  __typename?: 'CategoryToPostConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the CategoryToPostConnection connection */
export type CategoryToPostConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: InputMaybe<Scalars['Int']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: InputMaybe<Scalars['String']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Category ID */
  categoryId?: InputMaybe<Scalars['Int']>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Use Category Slug */
  categoryName?: InputMaybe<Scalars['String']>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']>;
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>;
  /** Tag Slug */
  tag?: InputMaybe<Scalars['String']>;
  /** Use Tag ID */
  tagId?: InputMaybe<Scalars['String']>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of tag slugs, used to display objects from one tag AND another */
  tagSlugAnd?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Array of tag slugs, used to include objects in ANY specified tags */
  tagSlugIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Title of the object */
  title?: InputMaybe<Scalars['String']>;
};

/** Connection between the Category type and the Taxonomy type */
export type CategoryToTaxonomyConnectionEdge = Edge & OneToOneConnection & TaxonomyConnectionEdge & {
  __typename?: 'CategoryToTaxonomyConnectionEdge';
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The node of the connection, without the edges */
  node: Taxonomy;
};

/** A Gravity Forms   field. */
export type CheckboxField = FormField & {
  __typename?: 'CheckboxField';
  /** When specified, the value of this property will be used on the admin pages instead of the label. It is useful for fields with long labels. */
  adminLabel?: Maybe<Scalars['String']>;
  /** Determines if the field’s value can be pre-populated dynamically. */
  canPrepopulate?: Maybe<Scalars['Boolean']>;
  /** Checkbox field value. */
  checkboxValues?: Maybe<Array<Maybe<CheckboxFieldValue>>>;
  /** The available choices for the checkbox field. */
  choices?: Maybe<Array<Maybe<CheckboxFieldChoice>>>;
  /** Controls the visibility of the field based on values selected by the user. */
  conditionalLogic?: Maybe<ConditionalLogic>;
  /** String containing the custom CSS classes to be added to the &lt;li&gt; tag that contains the field. Useful for applying custom formatting to specific fields. */
  cssClass?: Maybe<Scalars['String']>;
  /** Field description. */
  description?: Maybe<Scalars['String']>;
  /** The placement of the field description. */
  descriptionPlacement?: Maybe<FormFieldDescriptionPlacementEnum>;
  /** Indicates the field is only displayed and its contents are not submitted with the form/saved with the entry. This is set to true. */
  displayOnly?: Maybe<Scalars['Boolean']>;
  /** Contains the message that is displayed for fields that fail validation. */
  errorMessage?: Maybe<Scalars['String']>;
  /** Determines if the field (checkbox, select or radio) have choice values enabled, which allows the field to have choice values different from the labels that are displayed to the user. */
  hasChoiceValue?: Maybe<Scalars['Boolean']>;
  /** Whether the \&quot;select all\&quot; choice should be displayed. */
  hasSelectAll?: Maybe<Scalars['Boolean']>;
  /** Field ID. */
  id: Scalars['Int'];
  /** Assigns a name to this field so that it can be populated dynamically via this input name. Only applicable when canPrepopulate is `true`. */
  inputName?: Maybe<Scalars['String']>;
  /** The base form field type used to display the input. A good example is the Post Custom Field that can be displayed as various different types of fields. */
  inputType?: Maybe<FormFieldTypeEnum>;
  /** An array of the available properties for each input of the checkbox field. */
  inputs?: Maybe<Array<Maybe<CheckboxInputProperty>>>;
  /** Determines if the field requires the user to enter a value. Fields marked as required will prevent the form from being submitted if the user has not entered a value in it. */
  isRequired?: Maybe<Scalars['Boolean']>;
  /** Field label that will be displayed on the form and on the admin pages. */
  label?: Maybe<Scalars['String']>;
  /** The field label position. */
  labelPlacement?: Maybe<FormFieldLabelPlacementEnum>;
  /** The number of CSS grid columns the field should span. */
  layoutGridColumnSpan?: Maybe<Scalars['Int']>;
  /** The number of CSS grid columns the spacer field following this one should span. */
  layoutSpacerGridColumnSpan?: Maybe<Scalars['Int']>;
  /** The form page this field is located on. Default is 1. */
  pageNumber?: Maybe<Scalars['Int']>;
  /** The form field-specifc policies for exporting and erasing personal data. */
  personalData?: Maybe<FormFieldDataPolicy>;
  /** The type of field to be displayed. */
  type?: Maybe<FormFieldTypeEnum>;
  /** The string-formatted entry value for the `formField`. For complex fields this might be a JSON-encoded or serialized array. */
  value?: Maybe<Scalars['String']>;
  /** Field visibility. */
  visibility?: Maybe<FormFieldVisibilityEnum>;
};

/** Checkbox choice values. */
export type CheckboxFieldChoice = {
  __typename?: 'CheckboxFieldChoice';
  /** Determines if this choice should be selected by default when displayed. The value true will select the choice, whereas false will display it unselected. */
  isSelected?: Maybe<Scalars['Boolean']>;
  /** The text to be displayed to the user when displaying this choice. */
  text?: Maybe<Scalars['String']>;
  /** The value to be stored in the database when this choice is selected. Note: This property is only supported by the Drop Down and Post Category fields. Checkboxes and Radio fields will store the text property in the database regardless of the value property. */
  value?: Maybe<Scalars['String']>;
};

/** Input fields for a single checkbox. */
export type CheckboxFieldInput = {
  /** Input ID. */
  inputId?: InputMaybe<Scalars['Float']>;
  /** Input value. */
  value?: InputMaybe<Scalars['String']>;
};

/** The individual properties for each element of the Checkbox value field. */
export type CheckboxFieldValue = {
  __typename?: 'CheckboxFieldValue';
  /** Input ID. */
  inputId?: Maybe<Scalars['Float']>;
  /** Input text. */
  text?: Maybe<Scalars['String']>;
  /** Input value. */
  value?: Maybe<Scalars['String']>;
};

/** Checkbox input values. */
export type CheckboxInputProperty = {
  __typename?: 'CheckboxInputProperty';
  /** The input ID. Input IDs follow the following naming convention: FIELDID.INPUTID (i.e. 5.1), where FIELDID is the id of the containing field and INPUTID specifies the input field. */
  id?: Maybe<Scalars['Float']>;
  /** Field label that will be displayed on the form and on the admin pages. */
  label?: Maybe<Scalars['String']>;
  /** Assigns a name to this field so that it can be populated dynamically via this input name. Only applicable when canPrepopulate is `true`. */
  name?: Maybe<Scalars['String']>;
};

/** The client type */
export type Client = DatabaseIdentifier & MenuItemLinkable & Node & TermNode & UniformResourceIdentifiable & {
  __typename?: 'Client';
  /**
   * The id field matches the WP_Post-&gt;ID field.
   * @deprecated Deprecated in favor of databaseId
   */
  clientId?: Maybe<Scalars['Int']>;
  /** Added to the GraphQL Schema because the ACF Field Group &quot;Client Options&quot; was set to Show in GraphQL. */
  clientOptions?: Maybe<Client_Clientoptions>;
  /** @deprecated Deprecated in favor of using Next.js pages */
  conditionalTags?: Maybe<ConditionalTags>;
  /** Connection between the Client type and the ContentNode type */
  contentNodes?: Maybe<ClientToContentNodeConnection>;
  /** The number of objects connected to the object */
  count?: Maybe<Scalars['Int']>;
  /** The unique identifier stored in the database */
  databaseId: Scalars['Int'];
  /** The description of the object */
  description?: Maybe<Scalars['String']>;
  /** Connection between the TermNode type and the EnqueuedScript type */
  enqueuedScripts?: Maybe<TermNodeToEnqueuedScriptConnection>;
  /** Connection between the TermNode type and the EnqueuedStylesheet type */
  enqueuedStylesheets?: Maybe<TermNodeToEnqueuedStylesheetConnection>;
  /** The unique resource identifier path */
  id: Scalars['ID'];
  /** Whether the node is a Content Node */
  isContentNode: Scalars['Boolean'];
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** Whether the node is a Term */
  isTermNode: Scalars['Boolean'];
  /** The link to the term */
  link?: Maybe<Scalars['String']>;
  /** The human friendly name of the object. */
  name?: Maybe<Scalars['String']>;
  /** The Yoast SEO data of the Clients taxonomy. */
  seo?: Maybe<TaxonomySeo>;
  /** An alphanumeric identifier for the object unique to its type. */
  slug?: Maybe<Scalars['String']>;
  /** Connection between the Client type and the Taxonomy type */
  taxonomy?: Maybe<ClientToTaxonomyConnectionEdge>;
  /** The name of the taxonomy that the object is associated with */
  taxonomyName?: Maybe<Scalars['String']>;
  templates?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The ID of the term group that this term object belongs to */
  termGroupId?: Maybe<Scalars['Int']>;
  /** The taxonomy ID that the object is associated with */
  termTaxonomyId?: Maybe<Scalars['Int']>;
  /** The unique resource identifier path */
  uri?: Maybe<Scalars['String']>;
  /** Connection between the Client type and the work type */
  works?: Maybe<ClientToWorkConnection>;
};


/** The client type */
export type ClientContentNodesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ClientToContentNodeConnectionWhereArgs>;
};


/** The client type */
export type ClientEnqueuedScriptsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** The client type */
export type ClientEnqueuedStylesheetsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** The client type */
export type ClientWorksArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ClientToWorkConnectionWhereArgs>;
};

/** Connection to client Nodes */
export type ClientConnection = {
  /** A list of edges (relational context) between RootQuery and connected client Nodes */
  edges: Array<ClientConnectionEdge>;
  /** A list of connected client Nodes */
  nodes: Array<Client>;
  /** Information about pagination in a connection. */
  pageInfo: ClientConnectionPageInfo;
};

/** Edge between a Node and a connected client */
export type ClientConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The connected client Node */
  node: Client;
};

/** Page Info on the connected ClientConnectionEdge */
export type ClientConnectionPageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum ClientIdType {
  /** The Database ID for the node */
  DatabaseId = 'DATABASE_ID',
  /** The hashed Global ID */
  Id = 'ID',
  /** The name of the node */
  Name = 'NAME',
  /** Url friendly name of the node */
  Slug = 'SLUG',
  /** The URI for the node */
  Uri = 'URI'
}

/** Connection between the Client type and the ContentNode type */
export type ClientToContentNodeConnection = Connection & ContentNodeConnection & {
  __typename?: 'ClientToContentNodeConnection';
  /** Edges for the ClientToContentNodeConnection connection */
  edges: Array<ClientToContentNodeConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<ContentNode>;
  /** Information about pagination in a connection. */
  pageInfo: ClientToContentNodeConnectionPageInfo;
};

/** An edge in a connection */
export type ClientToContentNodeConnectionEdge = ContentNodeConnectionEdge & Edge & {
  __typename?: 'ClientToContentNodeConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: ContentNode;
};

/** Page Info on the &quot;ClientToContentNodeConnection&quot; */
export type ClientToContentNodeConnectionPageInfo = ContentNodeConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'ClientToContentNodeConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the ClientToContentNodeConnection connection */
export type ClientToContentNodeConnectionWhereArgs = {
  /** The Types of content to filter */
  contentTypes?: InputMaybe<Array<InputMaybe<ContentTypesOfClientEnum>>>;
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']>;
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>;
  /** Title of the object */
  title?: InputMaybe<Scalars['String']>;
};

/** Connection between the Client type and the Taxonomy type */
export type ClientToTaxonomyConnectionEdge = Edge & OneToOneConnection & TaxonomyConnectionEdge & {
  __typename?: 'ClientToTaxonomyConnectionEdge';
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The node of the connection, without the edges */
  node: Taxonomy;
};

/** Connection between the Client type and the work type */
export type ClientToWorkConnection = Connection & WorkConnection & {
  __typename?: 'ClientToWorkConnection';
  /** Edges for the ClientToWorkConnection connection */
  edges: Array<ClientToWorkConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<Work>;
  /** Information about pagination in a connection. */
  pageInfo: ClientToWorkConnectionPageInfo;
};

/** An edge in a connection */
export type ClientToWorkConnectionEdge = Edge & WorkConnectionEdge & {
  __typename?: 'ClientToWorkConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: Work;
};

/** Page Info on the &quot;ClientToWorkConnection&quot; */
export type ClientToWorkConnectionPageInfo = PageInfo & WpPageInfo & WorkConnectionPageInfo & {
  __typename?: 'ClientToWorkConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the ClientToWorkConnection connection */
export type ClientToWorkConnectionWhereArgs = {
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']>;
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>;
  /** Title of the object */
  title?: InputMaybe<Scalars['String']>;
};

/** Field Group */
export type Client_Clientoptions = AcfFieldGroup & {
  __typename?: 'Client_Clientoptions';
  color?: Maybe<Scalars['String']>;
  /** The name of the ACF Field Group */
  fieldGroupName?: Maybe<Scalars['String']>;
  logo?: Maybe<MediaItem>;
  logoAlt?: Maybe<MediaItem>;
};

/** A Comment object */
export type Comment = DatabaseIdentifier & Node & {
  __typename?: 'Comment';
  /** User agent used to post the comment. This field is equivalent to WP_Comment-&gt;comment_agent and the value matching the &quot;comment_agent&quot; column in SQL. */
  agent?: Maybe<Scalars['String']>;
  /**
   * The approval status of the comment. This field is equivalent to WP_Comment-&gt;comment_approved and the value matching the &quot;comment_approved&quot; column in SQL.
   * @deprecated Deprecated in favor of the `status` field
   */
  approved?: Maybe<Scalars['Boolean']>;
  /** The author of the comment */
  author?: Maybe<CommentToCommenterConnectionEdge>;
  /** IP address for the author. This field is equivalent to WP_Comment-&gt;comment_author_IP and the value matching the &quot;comment_author_IP&quot; column in SQL. */
  authorIp?: Maybe<Scalars['String']>;
  /**
   * ID for the comment, unique among comments.
   * @deprecated Deprecated in favor of databaseId
   */
  commentId?: Maybe<Scalars['Int']>;
  /** Connection between the Comment type and the ContentNode type */
  commentedOn?: Maybe<CommentToContentNodeConnectionEdge>;
  /** Content of the comment. This field is equivalent to WP_Comment-&gt;comment_content and the value matching the &quot;comment_content&quot; column in SQL. */
  content?: Maybe<Scalars['String']>;
  /** The unique identifier stored in the database */
  databaseId: Scalars['Int'];
  /** Date the comment was posted in local time. This field is equivalent to WP_Comment-&gt;date and the value matching the &quot;date&quot; column in SQL. */
  date?: Maybe<Scalars['String']>;
  /** Date the comment was posted in GMT. This field is equivalent to WP_Comment-&gt;date_gmt and the value matching the &quot;date_gmt&quot; column in SQL. */
  dateGmt?: Maybe<Scalars['String']>;
  /** The globally unique identifier for the comment object */
  id: Scalars['ID'];
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** Karma value for the comment. This field is equivalent to WP_Comment-&gt;comment_karma and the value matching the &quot;comment_karma&quot; column in SQL. */
  karma?: Maybe<Scalars['Int']>;
  /** Connection between the Comment type and the Comment type */
  parent?: Maybe<CommentToParentCommentConnectionEdge>;
  /** The database id of the parent comment node or null if it is the root comment */
  parentDatabaseId?: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the parent comment node. */
  parentId?: Maybe<Scalars['ID']>;
  /** Connection between the Comment type and the Comment type */
  replies?: Maybe<CommentToCommentConnection>;
  /** The approval status of the comment. This field is equivalent to WP_Comment-&gt;comment_approved and the value matching the &quot;comment_approved&quot; column in SQL. */
  status?: Maybe<CommentStatusEnum>;
  /** Type of comment. This field is equivalent to WP_Comment-&gt;comment_type and the value matching the &quot;comment_type&quot; column in SQL. */
  type?: Maybe<Scalars['String']>;
};


/** A Comment object */
export type CommentContentArgs = {
  format?: InputMaybe<PostObjectFieldFormatEnum>;
};


/** A Comment object */
export type CommentParentArgs = {
  where?: InputMaybe<CommentToParentCommentConnectionWhereArgs>;
};


/** A Comment object */
export type CommentRepliesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CommentToCommentConnectionWhereArgs>;
};

/** A Comment Author object */
export type CommentAuthor = Commenter & DatabaseIdentifier & Node & {
  __typename?: 'CommentAuthor';
  /** Avatar object for user. The avatar object can be retrieved in different sizes by specifying the size argument. */
  avatar?: Maybe<Avatar>;
  /** The unique identifier stored in the database */
  databaseId: Scalars['Int'];
  /** The email for the comment author */
  email?: Maybe<Scalars['String']>;
  /** The globally unique identifier for the comment author object */
  id: Scalars['ID'];
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** The name for the comment author. */
  name?: Maybe<Scalars['String']>;
  /** The url the comment author. */
  url?: Maybe<Scalars['String']>;
};


/** A Comment Author object */
export type CommentAuthorAvatarArgs = {
  forceDefault?: InputMaybe<Scalars['Boolean']>;
  rating?: InputMaybe<AvatarRatingEnum>;
  size?: InputMaybe<Scalars['Int']>;
};

/** Connection to Comment Nodes */
export type CommentConnection = {
  /** A list of edges (relational context) between RootQuery and connected Comment Nodes */
  edges: Array<CommentConnectionEdge>;
  /** A list of connected Comment Nodes */
  nodes: Array<Comment>;
  /** Information about pagination in a connection. */
  pageInfo: CommentConnectionPageInfo;
};

/** Edge between a Node and a connected Comment */
export type CommentConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The connected Comment Node */
  node: Comment;
};

/** Page Info on the connected CommentConnectionEdge */
export type CommentConnectionPageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** The Type of Identifier used to fetch a single comment node. Default is "ID". To be used along with the "id" field. */
export enum CommentNodeIdTypeEnum {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID'
}

/** The status of the comment object. */
export enum CommentStatusEnum {
  /** Comments with the Approved status */
  Approve = 'APPROVE',
  /** Comments with the Unapproved status */
  Hold = 'HOLD',
  /** Comments with the Spam status */
  Spam = 'SPAM',
  /** Comments with the Trash status */
  Trash = 'TRASH'
}

/** Connection between the Comment type and the Comment type */
export type CommentToCommentConnection = CommentConnection & Connection & {
  __typename?: 'CommentToCommentConnection';
  /** Edges for the CommentToCommentConnection connection */
  edges: Array<CommentToCommentConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<Comment>;
  /** Information about pagination in a connection. */
  pageInfo: CommentToCommentConnectionPageInfo;
};

/** An edge in a connection */
export type CommentToCommentConnectionEdge = CommentConnectionEdge & Edge & {
  __typename?: 'CommentToCommentConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: Comment;
};

/** Page Info on the &quot;CommentToCommentConnection&quot; */
export type CommentToCommentConnectionPageInfo = CommentConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'CommentToCommentConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the CommentToCommentConnection connection */
export type CommentToCommentConnectionWhereArgs = {
  /** Comment author email address. */
  authorEmail?: InputMaybe<Scalars['String']>;
  /** Array of author IDs to include comments for. */
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of author IDs to exclude comments for. */
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Comment author URL. */
  authorUrl?: InputMaybe<Scalars['String']>;
  /** Array of comment IDs to include. */
  commentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
  commentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Include comments of a given type. */
  commentType?: InputMaybe<Scalars['String']>;
  /** Include comments from a given array of comment types. */
  commentTypeIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Exclude comments from a given array of comment types. */
  commentTypeNotIn?: InputMaybe<Scalars['String']>;
  /** Content object author ID to limit results by. */
  contentAuthor?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of author IDs to retrieve comments for. */
  contentAuthorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of author IDs *not* to retrieve comments for. */
  contentAuthorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Limit results to those affiliated with a given content object ID. */
  contentId?: InputMaybe<Scalars['ID']>;
  /** Array of content object IDs to include affiliated comments for. */
  contentIdIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of content object IDs to exclude affiliated comments for. */
  contentIdNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Content object name (i.e. slug ) to retrieve affiliated comments for. */
  contentName?: InputMaybe<Scalars['String']>;
  /** Content Object parent ID to retrieve affiliated comments for. */
  contentParent?: InputMaybe<Scalars['Int']>;
  /** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentStatus?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentType?: InputMaybe<Array<InputMaybe<ContentTypeEnum>>>;
  /** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
  includeUnapproved?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Karma score to retrieve matching comments for. */
  karma?: InputMaybe<Scalars['Int']>;
  /** The cardinality of the order of the connection */
  order?: InputMaybe<OrderEnum>;
  /** Field to order the comments by. */
  orderby?: InputMaybe<CommentsConnectionOrderbyEnum>;
  /** Parent ID of comment to retrieve children of. */
  parent?: InputMaybe<Scalars['Int']>;
  /** Array of parent IDs of comments to retrieve children for. */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of parent IDs of comments *not* to retrieve children for. */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Search term(s) to retrieve matching comments for. */
  search?: InputMaybe<Scalars['String']>;
  /** Comment status to limit results by. */
  status?: InputMaybe<Scalars['String']>;
  /** Include comments for a specific user ID. */
  userId?: InputMaybe<Scalars['ID']>;
};

/** Connection between the Comment type and the Commenter type */
export type CommentToCommenterConnectionEdge = CommenterConnectionEdge & Edge & OneToOneConnection & {
  __typename?: 'CommentToCommenterConnectionEdge';
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The node of the connection, without the edges */
  node: Commenter;
};

/** Connection between the Comment type and the ContentNode type */
export type CommentToContentNodeConnectionEdge = ContentNodeConnectionEdge & Edge & OneToOneConnection & {
  __typename?: 'CommentToContentNodeConnectionEdge';
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The node of the connection, without the edges */
  node: ContentNode;
};

/** Connection between the Comment type and the Comment type */
export type CommentToParentCommentConnectionEdge = CommentConnectionEdge & Edge & OneToOneConnection & {
  __typename?: 'CommentToParentCommentConnectionEdge';
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The node of the connection, without the edges */
  node: Comment;
};

/** Arguments for filtering the CommentToParentCommentConnection connection */
export type CommentToParentCommentConnectionWhereArgs = {
  /** Comment author email address. */
  authorEmail?: InputMaybe<Scalars['String']>;
  /** Array of author IDs to include comments for. */
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of author IDs to exclude comments for. */
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Comment author URL. */
  authorUrl?: InputMaybe<Scalars['String']>;
  /** Array of comment IDs to include. */
  commentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
  commentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Include comments of a given type. */
  commentType?: InputMaybe<Scalars['String']>;
  /** Include comments from a given array of comment types. */
  commentTypeIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Exclude comments from a given array of comment types. */
  commentTypeNotIn?: InputMaybe<Scalars['String']>;
  /** Content object author ID to limit results by. */
  contentAuthor?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of author IDs to retrieve comments for. */
  contentAuthorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of author IDs *not* to retrieve comments for. */
  contentAuthorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Limit results to those affiliated with a given content object ID. */
  contentId?: InputMaybe<Scalars['ID']>;
  /** Array of content object IDs to include affiliated comments for. */
  contentIdIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of content object IDs to exclude affiliated comments for. */
  contentIdNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Content object name (i.e. slug ) to retrieve affiliated comments for. */
  contentName?: InputMaybe<Scalars['String']>;
  /** Content Object parent ID to retrieve affiliated comments for. */
  contentParent?: InputMaybe<Scalars['Int']>;
  /** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentStatus?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentType?: InputMaybe<Array<InputMaybe<ContentTypeEnum>>>;
  /** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
  includeUnapproved?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Karma score to retrieve matching comments for. */
  karma?: InputMaybe<Scalars['Int']>;
  /** The cardinality of the order of the connection */
  order?: InputMaybe<OrderEnum>;
  /** Field to order the comments by. */
  orderby?: InputMaybe<CommentsConnectionOrderbyEnum>;
  /** Parent ID of comment to retrieve children of. */
  parent?: InputMaybe<Scalars['Int']>;
  /** Array of parent IDs of comments to retrieve children for. */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of parent IDs of comments *not* to retrieve children for. */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Search term(s) to retrieve matching comments for. */
  search?: InputMaybe<Scalars['String']>;
  /** Comment status to limit results by. */
  status?: InputMaybe<Scalars['String']>;
  /** Include comments for a specific user ID. */
  userId?: InputMaybe<Scalars['ID']>;
};

/** The author of a comment */
export type Commenter = {
  /** Avatar object for user. The avatar object can be retrieved in different sizes by specifying the size argument. */
  avatar?: Maybe<Avatar>;
  /** Identifies the primary key from the database. */
  databaseId: Scalars['Int'];
  /** The email address of the author of a comment. */
  email?: Maybe<Scalars['String']>;
  /** The globally unique identifier for the comment author. */
  id: Scalars['ID'];
  /** Whether the author information is considered restricted. (not fully public) */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** The name of the author of a comment. */
  name?: Maybe<Scalars['String']>;
  /** The url of the author of a comment. */
  url?: Maybe<Scalars['String']>;
};

/** Edge between a Node and a connected Commenter */
export type CommenterConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The connected Commenter Node */
  node: Commenter;
};

/** Options for ordering the connection */
export enum CommentsConnectionOrderbyEnum {
  /** Order by browser user agent of the commenter. */
  CommentAgent = 'COMMENT_AGENT',
  /** Order by approval status of the comment. */
  CommentApproved = 'COMMENT_APPROVED',
  /** Order by name of the comment author. */
  CommentAuthor = 'COMMENT_AUTHOR',
  /** Order by e-mail of the comment author. */
  CommentAuthorEmail = 'COMMENT_AUTHOR_EMAIL',
  /** Order by IP address of the comment author. */
  CommentAuthorIp = 'COMMENT_AUTHOR_IP',
  /** Order by URL address of the comment author. */
  CommentAuthorUrl = 'COMMENT_AUTHOR_URL',
  /** Order by the comment contents. */
  CommentContent = 'COMMENT_CONTENT',
  /** Order by date/time timestamp of the comment. */
  CommentDate = 'COMMENT_DATE',
  /** Order by GMT timezone date/time timestamp of the comment. */
  CommentDateGmt = 'COMMENT_DATE_GMT',
  /** Order by the globally unique identifier for the comment object */
  CommentId = 'COMMENT_ID',
  /** Order by the array list of comment IDs listed in the where clause. */
  CommentIn = 'COMMENT_IN',
  /** Order by the comment karma score. */
  CommentKarma = 'COMMENT_KARMA',
  /** Order by the comment parent ID. */
  CommentParent = 'COMMENT_PARENT',
  /** Order by the post object ID. */
  CommentPostId = 'COMMENT_POST_ID',
  /** Order by the the type of comment, such as 'comment', 'pingback', or 'trackback'. */
  CommentType = 'COMMENT_TYPE',
  /** Order by the user ID. */
  UserId = 'USER_ID'
}

/** Gravity Forms conditional logic. */
export type ConditionalLogic = {
  __typename?: 'ConditionalLogic';
  /** The type of action the conditional logic will perform. */
  actionType?: Maybe<ConditionalLogicActionTypeEnum>;
  /** Determines how to the rules should be evaluated. */
  logicType?: Maybe<ConditionalLogicLogicTypeEnum>;
  /** Conditional logic rules. */
  rules?: Maybe<Array<Maybe<ConditionalLogicRule>>>;
};

/** The type of action the conditional logic will perform. */
export enum ConditionalLogicActionTypeEnum {
  /** Text button (default). */
  Hide = 'HIDE',
  /** Image button. */
  Show = 'SHOW'
}

/** Determines how to the rules should be evaluated. */
export enum ConditionalLogicLogicTypeEnum {
  /** Evaulate all logic rules. */
  All = 'ALL',
  /** Evaluate any logic rule. */
  Any = 'ANY'
}

/** Gravity Forms conditional logic rule. */
export type ConditionalLogicRule = {
  __typename?: 'ConditionalLogicRule';
  /** Target field Id. Field that will have it’s value compared with the value property to determine if this rule is a match. */
  fieldId?: Maybe<Scalars['Float']>;
  /** Operator to be used when evaluating this rule. */
  operator?: Maybe<FormRuleOperatorEnum>;
  /** The value to compare with field specified by fieldId. */
  value?: Maybe<Scalars['String']>;
};

/** GraphQL representation of WordPress Conditional Tags. */
export type ConditionalTags = {
  __typename?: 'ConditionalTags';
  /**
   * Determines whether the query is for an existing archive page.
   * @deprecated Deprecated in favor of using Next.js pages
   */
  isArchive?: Maybe<Scalars['Boolean']>;
  /**
   * Determines whether the query is for an existing attachment page.
   * @deprecated Deprecated in favor of using Next.js pages
   */
  isAttachment?: Maybe<Scalars['Boolean']>;
  /**
   * Determines whether the query is for an existing author archive page.
   * @deprecated Deprecated in favor of using Next.js pages
   */
  isAuthor?: Maybe<Scalars['Boolean']>;
  /**
   * Determines whether the query is for an existing category archive page.
   * @deprecated Deprecated in favor of using Next.js pages
   */
  isCategory?: Maybe<Scalars['Boolean']>;
  /**
   * Determines whether the query is for an existing date archive.
   * @deprecated Deprecated in favor of using Next.js pages
   */
  isDate?: Maybe<Scalars['Boolean']>;
  /**
   * Determines whether the query is for an existing day archive.
   * @deprecated Deprecated in favor of using Next.js pages
   */
  isDay?: Maybe<Scalars['Boolean']>;
  /**
   * Determines whether the query is for the front page of the site.
   * @deprecated Deprecated in favor of using Next.js pages
   */
  isFrontPage?: Maybe<Scalars['Boolean']>;
  /**
   * Determines whether the query is for the blog homepage.
   * @deprecated Deprecated in favor of using Next.js pages
   */
  isHome?: Maybe<Scalars['Boolean']>;
  /**
   * Determines whether the query is for an existing month archive.
   * @deprecated Deprecated in favor of using Next.js pages
   */
  isMonth?: Maybe<Scalars['Boolean']>;
  /**
   * Determines whether this site has more than one author.
   * @deprecated Deprecated in favor of using Next.js pages
   */
  isMultiAuthor?: Maybe<Scalars['Boolean']>;
  /**
   * Determines whether the query is for an existing single page.
   * @deprecated Deprecated in favor of using Next.js pages
   */
  isPage?: Maybe<Scalars['Boolean']>;
  /**
   * Determines whether currently in a page template.
   * @deprecated Deprecated in favor of using Next.js pages
   */
  isPageTemplate?: Maybe<Scalars['Boolean']>;
  /**
   * Determines whether the query is for an existing post type archive page.
   * @deprecated Deprecated in favor of using Next.js pages
   */
  isPostTypeArchive?: Maybe<Scalars['Boolean']>;
  /**
   * Determines whether the query is for a post or page preview.
   * @deprecated Deprecated in favor of using Next.js pages
   */
  isPreview?: Maybe<Scalars['Boolean']>;
  /**
   * Determines whether the query is for the Privacy Policy page.
   * @deprecated Deprecated in favor of using Next.js pages
   */
  isPrivacyPolicy?: Maybe<Scalars['Boolean']>;
  /**
   * Determines whether the query is for a search.
   * @deprecated Deprecated in favor of using Next.js pages
   */
  isSearch?: Maybe<Scalars['Boolean']>;
  /**
   * Determines whether the query is for an existing single post.
   * @deprecated Deprecated in favor of using Next.js pages
   */
  isSingle?: Maybe<Scalars['Boolean']>;
  /**
   * Determines whether the query is for an existing single post of any post type (post, attachment, page, custom post types).
   * @deprecated Deprecated in favor of using Next.js pages
   */
  isSingular?: Maybe<Scalars['Boolean']>;
  /**
   * Determines whether a post is sticky.
   * @deprecated Deprecated in favor of using Next.js pages
   */
  isSticky?: Maybe<Scalars['Boolean']>;
  /**
   * Determines whether the query is for an existing tag archive page.
   * @deprecated Deprecated in favor of using Next.js pages
   */
  isTag?: Maybe<Scalars['Boolean']>;
  /**
   * Determines whether the query is for an existing custom taxonomy archive page.
   * @deprecated Deprecated in favor of using Next.js pages
   */
  isTax?: Maybe<Scalars['Boolean']>;
  /**
   * Determines whether the query is for an existing year archive.
   * @deprecated Deprecated in favor of using Next.js pages
   */
  isYear?: Maybe<Scalars['Boolean']>;
};

/** A plural connection from one Node Type in the Graph to another Node Type, with support for relational data via &quot;edges&quot;. */
export type Connection = {
  /** A list of edges (relational context) between connected nodes */
  edges: Array<Edge>;
  /** A list of connected nodes */
  nodes: Array<Node>;
  /** Information about pagination in a connection. */
  pageInfo: PageInfo;
};

/** A Gravity Forms   field. */
export type ConsentField = FormField & {
  __typename?: 'ConsentField';
  /** When specified, the value of this property will be used on the admin pages instead of the label. It is useful for fields with long labels. */
  adminLabel?: Maybe<Scalars['String']>;
  /** Text of the consent checkbox. */
  checkboxLabel?: Maybe<Scalars['String']>;
  /** Controls the visibility of the field based on values selected by the user. */
  conditionalLogic?: Maybe<ConditionalLogic>;
  /** Consent field value. This is `true` when consent is given, `false` when it is not. */
  consentValue?: Maybe<Scalars['Boolean']>;
  /** String containing the custom CSS classes to be added to the &lt;li&gt; tag that contains the field. Useful for applying custom formatting to specific fields. */
  cssClass?: Maybe<Scalars['String']>;
  /** Field description. */
  description?: Maybe<Scalars['String']>;
  /** The placement of the field description. */
  descriptionPlacement?: Maybe<FormFieldDescriptionPlacementEnum>;
  /** Indicates the field is only displayed and its contents are not submitted with the form/saved with the entry. This is set to true. */
  displayOnly?: Maybe<Scalars['Boolean']>;
  /** Contains the message that is displayed for fields that fail validation. */
  errorMessage?: Maybe<Scalars['String']>;
  /** Field ID. */
  id: Scalars['Int'];
  /** The base form field type used to display the input. A good example is the Post Custom Field that can be displayed as various different types of fields. */
  inputType?: Maybe<FormFieldTypeEnum>;
  /** Determines if the field requires the user to enter a value. Fields marked as required will prevent the form from being submitted if the user has not entered a value in it. */
  isRequired?: Maybe<Scalars['Boolean']>;
  /** Field label that will be displayed on the form and on the admin pages. */
  label?: Maybe<Scalars['String']>;
  /** The field label position. */
  labelPlacement?: Maybe<FormFieldLabelPlacementEnum>;
  /** The number of CSS grid columns the field should span. */
  layoutGridColumnSpan?: Maybe<Scalars['Int']>;
  /** The number of CSS grid columns the spacer field following this one should span. */
  layoutSpacerGridColumnSpan?: Maybe<Scalars['Int']>;
  /** The form page this field is located on. Default is 1. */
  pageNumber?: Maybe<Scalars['Int']>;
  /** The form field-specifc policies for exporting and erasing personal data. */
  personalData?: Maybe<FormFieldDataPolicy>;
  /** The type of field to be displayed. */
  type?: Maybe<FormFieldTypeEnum>;
  /** The string-formatted entry value for the `formField`. For complex fields this might be a JSON-encoded or serialized array. */
  value?: Maybe<Scalars['String']>;
  /** Field visibility. */
  visibility?: Maybe<FormFieldVisibilityEnum>;
};

/** Nodes used to manage content */
export type ContentNode = {
  /** @deprecated Deprecated in favor of using Next.js pages */
  conditionalTags?: Maybe<ConditionalTags>;
  /** Connection between the ContentNode type and the ContentType type */
  contentType?: Maybe<ContentNodeToContentTypeConnectionEdge>;
  /** The name of the Content Type the node belongs to */
  contentTypeName: Scalars['String'];
  /** The ID of the node in the database. */
  databaseId: Scalars['Int'];
  /** Post publishing date. */
  date?: Maybe<Scalars['String']>;
  /** The publishing date set in GMT. */
  dateGmt?: Maybe<Scalars['String']>;
  /** The desired slug of the post */
  desiredSlug?: Maybe<Scalars['String']>;
  /** If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds */
  editingLockedBy?: Maybe<ContentNodeToEditLockConnectionEdge>;
  /** The RSS enclosure for the object */
  enclosure?: Maybe<Scalars['String']>;
  /** Connection between the ContentNode type and the EnqueuedScript type */
  enqueuedScripts?: Maybe<ContentNodeToEnqueuedScriptConnection>;
  /** Connection between the ContentNode type and the EnqueuedStylesheet type */
  enqueuedStylesheets?: Maybe<ContentNodeToEnqueuedStylesheetConnection>;
  /** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
  guid?: Maybe<Scalars['String']>;
  /** The unique resource identifier path */
  id: Scalars['ID'];
  /** Whether the node is a Content Node */
  isContentNode: Scalars['Boolean'];
  /** Whether the object is a node in the preview state */
  isPreview?: Maybe<Scalars['Boolean']>;
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** Whether the node is a Term */
  isTermNode: Scalars['Boolean'];
  /** The user that most recently edited the node */
  lastEditedBy?: Maybe<ContentNodeToEditLastConnectionEdge>;
  /** The permalink of the post */
  link?: Maybe<Scalars['String']>;
  /** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
  modified?: Maybe<Scalars['String']>;
  /** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
  modifiedGmt?: Maybe<Scalars['String']>;
  /** The database id of the preview node */
  previewRevisionDatabaseId?: Maybe<Scalars['Int']>;
  /** Whether the object is a node in the preview state */
  previewRevisionId?: Maybe<Scalars['ID']>;
  /** The Yoast SEO data of the ContentNode */
  seo?: Maybe<PostTypeSeo>;
  /** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
  slug?: Maybe<Scalars['String']>;
  /** The current status of the object */
  status?: Maybe<Scalars['String']>;
  /** The template assigned to a node of content */
  template?: Maybe<ContentTemplate>;
  templates?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The unique resource identifier path */
  uri?: Maybe<Scalars['String']>;
};


/** Nodes used to manage content */
export type ContentNodeEnqueuedScriptsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** Nodes used to manage content */
export type ContentNodeEnqueuedStylesheetsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** Connection to ContentNode Nodes */
export type ContentNodeConnection = {
  /** A list of edges (relational context) between ContentType and connected ContentNode Nodes */
  edges: Array<ContentNodeConnectionEdge>;
  /** A list of connected ContentNode Nodes */
  nodes: Array<ContentNode>;
  /** Information about pagination in a connection. */
  pageInfo: ContentNodeConnectionPageInfo;
};

/** Edge between a Node and a connected ContentNode */
export type ContentNodeConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The connected ContentNode Node */
  node: ContentNode;
};

/** Page Info on the connected ContentNodeConnectionEdge */
export type ContentNodeConnectionPageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum ContentNodeIdTypeEnum {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID',
  /** Identify a resource by the URI. */
  Uri = 'URI'
}

/** Connection between the ContentNode type and the ContentType type */
export type ContentNodeToContentTypeConnectionEdge = ContentTypeConnectionEdge & Edge & OneToOneConnection & {
  __typename?: 'ContentNodeToContentTypeConnectionEdge';
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The node of the connection, without the edges */
  node: ContentType;
};

/** Connection between the ContentNode type and the User type */
export type ContentNodeToEditLastConnectionEdge = Edge & OneToOneConnection & UserConnectionEdge & {
  __typename?: 'ContentNodeToEditLastConnectionEdge';
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The node of the connection, without the edges */
  node: User;
};

/** Connection between the ContentNode type and the User type */
export type ContentNodeToEditLockConnectionEdge = Edge & OneToOneConnection & UserConnectionEdge & {
  __typename?: 'ContentNodeToEditLockConnectionEdge';
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The timestamp for when the node was last edited */
  lockTimestamp?: Maybe<Scalars['String']>;
  /** The node of the connection, without the edges */
  node: User;
};

/** Connection between the ContentNode type and the EnqueuedScript type */
export type ContentNodeToEnqueuedScriptConnection = Connection & EnqueuedScriptConnection & {
  __typename?: 'ContentNodeToEnqueuedScriptConnection';
  /** Edges for the ContentNodeToEnqueuedScriptConnection connection */
  edges: Array<ContentNodeToEnqueuedScriptConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<EnqueuedScript>;
  /** Information about pagination in a connection. */
  pageInfo: ContentNodeToEnqueuedScriptConnectionPageInfo;
};

/** An edge in a connection */
export type ContentNodeToEnqueuedScriptConnectionEdge = Edge & EnqueuedScriptConnectionEdge & {
  __typename?: 'ContentNodeToEnqueuedScriptConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: EnqueuedScript;
};

/** Page Info on the &quot;ContentNodeToEnqueuedScriptConnection&quot; */
export type ContentNodeToEnqueuedScriptConnectionPageInfo = EnqueuedScriptConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'ContentNodeToEnqueuedScriptConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Connection between the ContentNode type and the EnqueuedStylesheet type */
export type ContentNodeToEnqueuedStylesheetConnection = Connection & EnqueuedStylesheetConnection & {
  __typename?: 'ContentNodeToEnqueuedStylesheetConnection';
  /** Edges for the ContentNodeToEnqueuedStylesheetConnection connection */
  edges: Array<ContentNodeToEnqueuedStylesheetConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<EnqueuedStylesheet>;
  /** Information about pagination in a connection. */
  pageInfo: ContentNodeToEnqueuedStylesheetConnectionPageInfo;
};

/** An edge in a connection */
export type ContentNodeToEnqueuedStylesheetConnectionEdge = Edge & EnqueuedStylesheetConnectionEdge & {
  __typename?: 'ContentNodeToEnqueuedStylesheetConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: EnqueuedStylesheet;
};

/** Page Info on the &quot;ContentNodeToEnqueuedStylesheetConnection&quot; */
export type ContentNodeToEnqueuedStylesheetConnectionPageInfo = EnqueuedStylesheetConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'ContentNodeToEnqueuedStylesheetConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** The template assigned to a node of content */
export type ContentTemplate = {
  /** The name of the template */
  templateName?: Maybe<Scalars['String']>;
};

/** An Post Type object */
export type ContentType = Node & UniformResourceIdentifiable & {
  __typename?: 'ContentType';
  /** Whether this content type should can be exported. */
  canExport?: Maybe<Scalars['Boolean']>;
  /** @deprecated Deprecated in favor of using Next.js pages */
  conditionalTags?: Maybe<ConditionalTags>;
  /** Connection between the ContentType type and the Taxonomy type */
  connectedTaxonomies?: Maybe<ContentTypeToTaxonomyConnection>;
  /** Connection between the ContentType type and the ContentNode type */
  contentNodes?: Maybe<ContentTypeToContentNodeConnection>;
  /** Whether content of this type should be deleted when the author of it is deleted from the system. */
  deleteWithUser?: Maybe<Scalars['Boolean']>;
  /** Description of the content type. */
  description?: Maybe<Scalars['String']>;
  /** Whether to exclude nodes of this content type from front end search results. */
  excludeFromSearch?: Maybe<Scalars['Boolean']>;
  /** The plural name of the content type within the GraphQL Schema. */
  graphqlPluralName?: Maybe<Scalars['String']>;
  /** The singular name of the content type within the GraphQL Schema. */
  graphqlSingleName?: Maybe<Scalars['String']>;
  /** Whether this content type should have archives. Content archives are generated by type and by date. */
  hasArchive?: Maybe<Scalars['Boolean']>;
  /** Whether the content type is hierarchical, for example pages. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** The globally unique identifier of the post-type object. */
  id: Scalars['ID'];
  /** Whether the node is a Content Node */
  isContentNode: Scalars['Boolean'];
  /** Whether this page is set to the static front page. */
  isFrontPage: Scalars['Boolean'];
  /** Whether this page is set to the blog posts page. */
  isPostsPage: Scalars['Boolean'];
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** Whether the node is a Term */
  isTermNode: Scalars['Boolean'];
  /** Display name of the content type. */
  label?: Maybe<Scalars['String']>;
  /** Details about the content type labels. */
  labels?: Maybe<PostTypeLabelDetails>;
  /** The name of the icon file to display as a menu icon. */
  menuIcon?: Maybe<Scalars['String']>;
  /** The position of this post type in the menu. Only applies if show_in_menu is true. */
  menuPosition?: Maybe<Scalars['Int']>;
  /** The internal name of the post type. This should not be used for display purposes. */
  name?: Maybe<Scalars['String']>;
  /** Whether a content type is intended for use publicly either via the admin interface or by front-end users. While the default settings of exclude_from_search, publicly_queryable, show_ui, and show_in_nav_menus are inherited from public, each does not rely on this relationship and controls a very specific intention. */
  public?: Maybe<Scalars['Boolean']>;
  /** Whether queries can be performed on the front end for the content type as part of parse_request(). */
  publiclyQueryable?: Maybe<Scalars['Boolean']>;
  /** Name of content type to display in REST API &quot;wp/v2&quot; namespace. */
  restBase?: Maybe<Scalars['String']>;
  /** The REST Controller class assigned to handling this content type. */
  restControllerClass?: Maybe<Scalars['String']>;
  /** Makes this content type available via the admin bar. */
  showInAdminBar?: Maybe<Scalars['Boolean']>;
  /** Whether to add the content type to the GraphQL Schema. */
  showInGraphql?: Maybe<Scalars['Boolean']>;
  /** Where to show the content type in the admin menu. To work, $show_ui must be true. If true, the post type is shown in its own top level menu. If false, no menu is shown. If a string of an existing top level menu (eg. &quot;tools.php&quot; or &quot;edit.php?post_type=page&quot;), the post type will be placed as a sub-menu of that. */
  showInMenu?: Maybe<Scalars['Boolean']>;
  /** Makes this content type available for selection in navigation menus. */
  showInNavMenus?: Maybe<Scalars['Boolean']>;
  /** Whether the content type is associated with a route under the the REST API &quot;wp/v2&quot; namespace. */
  showInRest?: Maybe<Scalars['Boolean']>;
  /** Whether to generate and allow a UI for managing this content type in the admin. */
  showUi?: Maybe<Scalars['Boolean']>;
  templates?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The unique resource identifier path */
  uri?: Maybe<Scalars['String']>;
};


/** An Post Type object */
export type ContentTypeConnectedTaxonomiesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** An Post Type object */
export type ContentTypeContentNodesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ContentTypeToContentNodeConnectionWhereArgs>;
};

/** Connection to ContentType Nodes */
export type ContentTypeConnection = {
  /** A list of edges (relational context) between RootQuery and connected ContentType Nodes */
  edges: Array<ContentTypeConnectionEdge>;
  /** A list of connected ContentType Nodes */
  nodes: Array<ContentType>;
  /** Information about pagination in a connection. */
  pageInfo: ContentTypeConnectionPageInfo;
};

/** Edge between a Node and a connected ContentType */
export type ContentTypeConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The connected ContentType Node */
  node: ContentType;
};

/** Page Info on the connected ContentTypeConnectionEdge */
export type ContentTypeConnectionPageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Allowed Content Types */
export enum ContentTypeEnum {
  /** The Type of Content object */
  Attachment = 'ATTACHMENT',
  /** The Type of Content object */
  GraphqlDocument = 'GRAPHQL_DOCUMENT',
  /** The Type of Content object */
  Page = 'PAGE',
  /** The Type of Content object */
  Post = 'POST',
  /** The Type of Content object */
  PressReleases = 'PRESS_RELEASES',
  /** The Type of Content object */
  Teammember = 'TEAMMEMBER',
  /** The Type of Content object */
  Works = 'WORKS'
}

/** The Type of Identifier used to fetch a single Content Type node. To be used along with the "id" field. Default is "ID". */
export enum ContentTypeIdTypeEnum {
  /** The globally unique ID */
  Id = 'ID',
  /** The name of the content type. */
  Name = 'NAME'
}

/** Connection between the ContentType type and the ContentNode type */
export type ContentTypeToContentNodeConnection = Connection & ContentNodeConnection & {
  __typename?: 'ContentTypeToContentNodeConnection';
  /** Edges for the ContentTypeToContentNodeConnection connection */
  edges: Array<ContentTypeToContentNodeConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<ContentNode>;
  /** Information about pagination in a connection. */
  pageInfo: ContentTypeToContentNodeConnectionPageInfo;
};

/** An edge in a connection */
export type ContentTypeToContentNodeConnectionEdge = ContentNodeConnectionEdge & Edge & {
  __typename?: 'ContentTypeToContentNodeConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: ContentNode;
};

/** Page Info on the &quot;ContentTypeToContentNodeConnection&quot; */
export type ContentTypeToContentNodeConnectionPageInfo = ContentNodeConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'ContentTypeToContentNodeConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the ContentTypeToContentNodeConnection connection */
export type ContentTypeToContentNodeConnectionWhereArgs = {
  /** The Types of content to filter */
  contentTypes?: InputMaybe<Array<InputMaybe<ContentTypeEnum>>>;
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']>;
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>;
  /** Title of the object */
  title?: InputMaybe<Scalars['String']>;
};

/** Connection between the ContentType type and the Taxonomy type */
export type ContentTypeToTaxonomyConnection = Connection & TaxonomyConnection & {
  __typename?: 'ContentTypeToTaxonomyConnection';
  /** Edges for the ContentTypeToTaxonomyConnection connection */
  edges: Array<ContentTypeToTaxonomyConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<Taxonomy>;
  /** Information about pagination in a connection. */
  pageInfo: ContentTypeToTaxonomyConnectionPageInfo;
};

/** An edge in a connection */
export type ContentTypeToTaxonomyConnectionEdge = Edge & TaxonomyConnectionEdge & {
  __typename?: 'ContentTypeToTaxonomyConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: Taxonomy;
};

/** Page Info on the &quot;ContentTypeToTaxonomyConnection&quot; */
export type ContentTypeToTaxonomyConnectionPageInfo = PageInfo & TaxonomyConnectionPageInfo & WpPageInfo & {
  __typename?: 'ContentTypeToTaxonomyConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Allowed Content Types of the Category taxonomy. */
export enum ContentTypesOfCategoryEnum {
  /** The Type of Content object */
  Post = 'POST'
}

/** Allowed Content Types of the Client taxonomy. */
export enum ContentTypesOfClientEnum {
  /** The Type of Content object */
  Works = 'WORKS'
}

/** Allowed Content Types of the PostFormat taxonomy. */
export enum ContentTypesOfPostFormatEnum {
  /** The Type of Content object */
  Post = 'POST'
}

/** Allowed Content Types of the Tag taxonomy. */
export enum ContentTypesOfTagEnum {
  /** The Type of Content object */
  Post = 'POST'
}

/** Allowed Content Types of the WorkCategory taxonomy. */
export enum ContentTypesOfWorkCategoryEnum {
  /** The Type of Content object */
  Works = 'WORKS'
}

/** Input for the createCategory mutation. */
export type CreateCategoryInput = {
  /** The slug that the category will be an alias of */
  aliasOf?: InputMaybe<Scalars['String']>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The description of the category object */
  description?: InputMaybe<Scalars['String']>;
  /** The name of the category object to mutate */
  name: Scalars['String'];
  /** The ID of the category that should be set as the parent */
  parentId?: InputMaybe<Scalars['ID']>;
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug?: InputMaybe<Scalars['String']>;
};

/** The payload for the createCategory mutation. */
export type CreateCategoryPayload = {
  __typename?: 'CreateCategoryPayload';
  /** The created category */
  category?: Maybe<Category>;
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Input for the createClient mutation. */
export type CreateClientInput = {
  /** The slug that the work_tag will be an alias of */
  aliasOf?: InputMaybe<Scalars['String']>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The description of the work_tag object */
  description?: InputMaybe<Scalars['String']>;
  /** The name of the work_tag object to mutate */
  name: Scalars['String'];
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug?: InputMaybe<Scalars['String']>;
};

/** The payload for the createClient mutation. */
export type CreateClientPayload = {
  __typename?: 'CreateClientPayload';
  /** The created work_tag */
  client?: Maybe<Client>;
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Input for the createComment mutation. */
export type CreateCommentInput = {
  /** The approval status of the comment. */
  approved?: InputMaybe<Scalars['String']>;
  /** The name of the comment's author. */
  author?: InputMaybe<Scalars['String']>;
  /** The email of the comment's author. */
  authorEmail?: InputMaybe<Scalars['String']>;
  /** The url of the comment's author. */
  authorUrl?: InputMaybe<Scalars['String']>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The database ID of the post object the comment belongs to. */
  commentOn?: InputMaybe<Scalars['Int']>;
  /** Content of the comment. */
  content?: InputMaybe<Scalars['String']>;
  /** The date of the object. Preferable to enter as year/month/day ( e.g. 01/31/2017 ) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: InputMaybe<Scalars['String']>;
  /** Parent comment ID of current comment. */
  parent?: InputMaybe<Scalars['ID']>;
  /** The approval status of the comment */
  status?: InputMaybe<CommentStatusEnum>;
  /** Type of comment. */
  type?: InputMaybe<Scalars['String']>;
};

/** The payload for the createComment mutation. */
export type CreateCommentPayload = {
  __typename?: 'CreateCommentPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The comment that was created */
  comment?: Maybe<Comment>;
  /** Whether the mutation succeeded. If the comment is not approved, the server will not return the comment to a non authenticated user, but a success message can be returned if the create succeeded, and the client can optimistically add the comment to the client cache */
  success?: Maybe<Scalars['Boolean']>;
};

/** Input for the createGraphqlDocument mutation. */
export type CreateGraphqlDocumentInput = {
  /** Alias names for saved GraphQL query documents */
  alias?: InputMaybe<Array<Scalars['String']>>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The content of the object */
  content?: InputMaybe<Scalars['String']>;
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: InputMaybe<Scalars['String']>;
  /** Description for the saved GraphQL document */
  description?: InputMaybe<Scalars['String']>;
  /** Allow, deny or default access grant for specific query */
  grant?: InputMaybe<Scalars['String']>;
  /** HTTP Cache-Control max-age directive for a saved GraphQL document */
  maxAgeHeader?: InputMaybe<Scalars['Int']>;
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: InputMaybe<Scalars['Int']>;
  /** The password used to protect the content of the object */
  password?: InputMaybe<Scalars['String']>;
  /** The slug of the object */
  slug?: InputMaybe<Scalars['String']>;
  /** The status of the object */
  status?: InputMaybe<PostStatusEnum>;
  /** The title of the object */
  title?: InputMaybe<Scalars['String']>;
};

/** The payload for the createGraphqlDocument mutation. */
export type CreateGraphqlDocumentPayload = {
  __typename?: 'CreateGraphqlDocumentPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The Post object mutation type. */
  graphqlDocument?: Maybe<GraphqlDocument>;
};

/** Input for the createMediaItem mutation. */
export type CreateMediaItemInput = {
  /** Alternative text to display when mediaItem is not displayed */
  altText?: InputMaybe<Scalars['String']>;
  /** The userId to assign as the author of the mediaItem */
  authorId?: InputMaybe<Scalars['ID']>;
  /** The caption for the mediaItem */
  caption?: InputMaybe<Scalars['String']>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The comment status for the mediaItem */
  commentStatus?: InputMaybe<Scalars['String']>;
  /** The date of the mediaItem */
  date?: InputMaybe<Scalars['String']>;
  /** The date (in GMT zone) of the mediaItem */
  dateGmt?: InputMaybe<Scalars['String']>;
  /** Description of the mediaItem */
  description?: InputMaybe<Scalars['String']>;
  /** The file name of the mediaItem */
  filePath?: InputMaybe<Scalars['String']>;
  /** The file type of the mediaItem */
  fileType?: InputMaybe<MimeTypeEnum>;
  /** The ID of the parent object */
  parentId?: InputMaybe<Scalars['ID']>;
  /** The ping status for the mediaItem */
  pingStatus?: InputMaybe<Scalars['String']>;
  /** The slug of the mediaItem */
  slug?: InputMaybe<Scalars['String']>;
  /** The status of the mediaItem */
  status?: InputMaybe<MediaItemStatusEnum>;
  /** The title of the mediaItem */
  title?: InputMaybe<Scalars['String']>;
};

/** The payload for the createMediaItem mutation. */
export type CreateMediaItemPayload = {
  __typename?: 'CreateMediaItemPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The MediaItem object mutation type. */
  mediaItem?: Maybe<MediaItem>;
};

/** Input for the createPage mutation. */
export type CreatePageInput = {
  /** The userId to assign as the author of the object */
  authorId?: InputMaybe<Scalars['ID']>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The comment status for the object */
  commentStatus?: InputMaybe<Scalars['String']>;
  /** The content of the object */
  content?: InputMaybe<Scalars['String']>;
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: InputMaybe<Scalars['String']>;
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: InputMaybe<Scalars['Int']>;
  /** The ID of the parent object */
  parentId?: InputMaybe<Scalars['ID']>;
  /** The password used to protect the content of the object */
  password?: InputMaybe<Scalars['String']>;
  /** The slug of the object */
  slug?: InputMaybe<Scalars['String']>;
  /** The status of the object */
  status?: InputMaybe<PostStatusEnum>;
  /** The title of the object */
  title?: InputMaybe<Scalars['String']>;
};

/** The payload for the createPage mutation. */
export type CreatePagePayload = {
  __typename?: 'CreatePagePayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The Post object mutation type. */
  page?: Maybe<Page>;
};

/** Input for the createPostFormat mutation. */
export type CreatePostFormatInput = {
  /** The slug that the post_format will be an alias of */
  aliasOf?: InputMaybe<Scalars['String']>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The description of the post_format object */
  description?: InputMaybe<Scalars['String']>;
  /** The name of the post_format object to mutate */
  name: Scalars['String'];
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug?: InputMaybe<Scalars['String']>;
};

/** The payload for the createPostFormat mutation. */
export type CreatePostFormatPayload = {
  __typename?: 'CreatePostFormatPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The created post_format */
  postFormat?: Maybe<PostFormat>;
};

/** Input for the createPost mutation. */
export type CreatePostInput = {
  /** The userId to assign as the author of the object */
  authorId?: InputMaybe<Scalars['ID']>;
  /** Set connections between the post and categories */
  categories?: InputMaybe<PostCategoriesInput>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The comment status for the object */
  commentStatus?: InputMaybe<Scalars['String']>;
  /** The content of the object */
  content?: InputMaybe<Scalars['String']>;
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: InputMaybe<Scalars['String']>;
  /** The excerpt of the object */
  excerpt?: InputMaybe<Scalars['String']>;
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: InputMaybe<Scalars['Int']>;
  /** The password used to protect the content of the object */
  password?: InputMaybe<Scalars['String']>;
  /** The ping status for the object */
  pingStatus?: InputMaybe<Scalars['String']>;
  /** URLs that have been pinged. */
  pinged?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Set connections between the post and postFormats */
  postFormats?: InputMaybe<PostPostFormatsInput>;
  /** The slug of the object */
  slug?: InputMaybe<Scalars['String']>;
  /** The status of the object */
  status?: InputMaybe<PostStatusEnum>;
  /** Set connections between the post and tags */
  tags?: InputMaybe<PostTagsInput>;
  /** The title of the object */
  title?: InputMaybe<Scalars['String']>;
  /** URLs queued to be pinged. */
  toPing?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/** The payload for the createPost mutation. */
export type CreatePostPayload = {
  __typename?: 'CreatePostPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The Post object mutation type. */
  post?: Maybe<Post>;
};

/** Input for the createPress_release mutation. */
export type CreatePress_ReleaseInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The content of the object */
  content?: InputMaybe<Scalars['String']>;
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: InputMaybe<Scalars['String']>;
  /** The excerpt of the object */
  excerpt?: InputMaybe<Scalars['String']>;
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: InputMaybe<Scalars['Int']>;
  /** The ID of the parent object */
  parentId?: InputMaybe<Scalars['ID']>;
  /** The password used to protect the content of the object */
  password?: InputMaybe<Scalars['String']>;
  /** The slug of the object */
  slug?: InputMaybe<Scalars['String']>;
  /** The status of the object */
  status?: InputMaybe<PostStatusEnum>;
  /** The title of the object */
  title?: InputMaybe<Scalars['String']>;
};

/** The payload for the createPress_release mutation. */
export type CreatePress_ReleasePayload = {
  __typename?: 'CreatePress_releasePayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The Post object mutation type. */
  press_release?: Maybe<Press_Release>;
};

/** Input for the createTag mutation. */
export type CreateTagInput = {
  /** The slug that the post_tag will be an alias of */
  aliasOf?: InputMaybe<Scalars['String']>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The description of the post_tag object */
  description?: InputMaybe<Scalars['String']>;
  /** The name of the post_tag object to mutate */
  name: Scalars['String'];
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug?: InputMaybe<Scalars['String']>;
};

/** The payload for the createTag mutation. */
export type CreateTagPayload = {
  __typename?: 'CreateTagPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The created post_tag */
  tag?: Maybe<Tag>;
};

/** Input for the createTeamMember mutation. */
export type CreateTeamMemberInput = {
  /** The userId to assign as the author of the object */
  authorId?: InputMaybe<Scalars['ID']>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: InputMaybe<Scalars['String']>;
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
  /** The password used to protect the content of the object */
  password?: InputMaybe<Scalars['String']>;
  /** The slug of the object */
  slug?: InputMaybe<Scalars['String']>;
  /** The status of the object */
  status?: InputMaybe<PostStatusEnum>;
  /** The title of the object */
  title?: InputMaybe<Scalars['String']>;
};

/** The payload for the createTeamMember mutation. */
export type CreateTeamMemberPayload = {
  __typename?: 'CreateTeamMemberPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The Post object mutation type. */
  teamMember?: Maybe<TeamMember>;
};

/** Input for the createUser mutation. */
export type CreateUserInput = {
  /** User's AOL IM account. */
  aim?: InputMaybe<Scalars['String']>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** A string containing content about the user. */
  description?: InputMaybe<Scalars['String']>;
  /** A string that will be shown on the site. Defaults to user's username. It is likely that you will want to change this, for both appearance and security through obscurity (that is if you dont use and delete the default admin user). */
  displayName?: InputMaybe<Scalars['String']>;
  /** A string containing the user's email address. */
  email?: InputMaybe<Scalars['String']>;
  /** 	The user's first name. */
  firstName?: InputMaybe<Scalars['String']>;
  /** User's Jabber account. */
  jabber?: InputMaybe<Scalars['String']>;
  /** The user's last name. */
  lastName?: InputMaybe<Scalars['String']>;
  /** User's locale. */
  locale?: InputMaybe<Scalars['String']>;
  /** A string that contains a URL-friendly name for the user. The default is the user's username. */
  nicename?: InputMaybe<Scalars['String']>;
  /** The user's nickname, defaults to the user's username. */
  nickname?: InputMaybe<Scalars['String']>;
  /** A string that contains the plain text password for the user. */
  password?: InputMaybe<Scalars['String']>;
  /** The date the user registered. Format is Y-m-d H:i:s. */
  registered?: InputMaybe<Scalars['String']>;
  /** A string for whether to enable the rich editor or not. False if not empty. */
  richEditing?: InputMaybe<Scalars['String']>;
  /** An array of roles to be assigned to the user. */
  roles?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** A string that contains the user's username for logging in. */
  username: Scalars['String'];
  /** A string containing the user's URL for the user's web site. */
  websiteUrl?: InputMaybe<Scalars['String']>;
  /** User's Yahoo IM account. */
  yim?: InputMaybe<Scalars['String']>;
};

/** The payload for the createUser mutation. */
export type CreateUserPayload = {
  __typename?: 'CreateUserPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The User object mutation type. */
  user?: Maybe<User>;
};

/** Input for the createWorkCategory mutation. */
export type CreateWorkCategoryInput = {
  /** The slug that the work_cat will be an alias of */
  aliasOf?: InputMaybe<Scalars['String']>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The description of the work_cat object */
  description?: InputMaybe<Scalars['String']>;
  /** The name of the work_cat object to mutate */
  name: Scalars['String'];
  /** The ID of the work_cat that should be set as the parent */
  parentId?: InputMaybe<Scalars['ID']>;
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug?: InputMaybe<Scalars['String']>;
};

/** The payload for the createWorkCategory mutation. */
export type CreateWorkCategoryPayload = {
  __typename?: 'CreateWorkCategoryPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The created work_cat */
  workCategory?: Maybe<WorkCategory>;
};

/** Input for the createWork mutation. */
export type CreateWorkInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Set connections between the work and clients */
  clients?: InputMaybe<WorkClientsInput>;
  /** The content of the object */
  content?: InputMaybe<Scalars['String']>;
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: InputMaybe<Scalars['String']>;
  /** The excerpt of the object */
  excerpt?: InputMaybe<Scalars['String']>;
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: InputMaybe<Scalars['Int']>;
  /** The ID of the parent object */
  parentId?: InputMaybe<Scalars['ID']>;
  /** The password used to protect the content of the object */
  password?: InputMaybe<Scalars['String']>;
  /** The slug of the object */
  slug?: InputMaybe<Scalars['String']>;
  /** The status of the object */
  status?: InputMaybe<PostStatusEnum>;
  /** The title of the object */
  title?: InputMaybe<Scalars['String']>;
  /** Set connections between the work and workCategories */
  workCategories?: InputMaybe<WorkWorkCategoriesInput>;
};

/** The payload for the createWork mutation. */
export type CreateWorkPayload = {
  __typename?: 'CreateWorkPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The Post object mutation type. */
  work?: Maybe<Work>;
};

/** Object that can be identified with a Database ID */
export type DatabaseIdentifier = {
  /** The unique identifier stored in the database */
  databaseId: Scalars['Int'];
};

/** A Gravity Forms   field. */
export type DateField = FormField & {
  __typename?: 'DateField';
  /** When specified, the value of this property will be used on the admin pages instead of the label. It is useful for fields with long labels. */
  adminLabel?: Maybe<Scalars['String']>;
  /** Determines how the date field displays it’s calendar icon. */
  calendarIconType?: Maybe<FormFieldCalendarIconTypeEnum>;
  /** Contains the URL to the custom calendar icon. Only applicable when calendarIconType is set to custom. */
  calendarIconUrl?: Maybe<Scalars['String']>;
  /** Determines if the field’s value can be pre-populated dynamically. */
  canPrepopulate?: Maybe<Scalars['Boolean']>;
  /** Controls the visibility of the field based on values selected by the user. */
  conditionalLogic?: Maybe<ConditionalLogic>;
  /** String containing the custom CSS classes to be added to the &lt;li&gt; tag that contains the field. Useful for applying custom formatting to specific fields. */
  cssClass?: Maybe<Scalars['String']>;
  /** Determines how the date is displayed. */
  dateFormat?: Maybe<DateFieldFormatEnum>;
  /** The type of date field to display. */
  dateType?: Maybe<DateFieldTypeEnum>;
  /** Contains the default value for the field. When specified, the field&#039;s value will be populated with the contents of this property when the form is displayed. */
  defaultValue?: Maybe<Scalars['String']>;
  /** Field description. */
  description?: Maybe<Scalars['String']>;
  /** The placement of the field description. */
  descriptionPlacement?: Maybe<FormFieldDescriptionPlacementEnum>;
  /** Indicates the field is only displayed and its contents are not submitted with the form/saved with the entry. This is set to true. */
  displayOnly?: Maybe<Scalars['Boolean']>;
  /** Contains the message that is displayed for fields that fail validation. */
  errorMessage?: Maybe<Scalars['String']>;
  /** Field ID. */
  id: Scalars['Int'];
  /** Assigns a name to this field so that it can be populated dynamically via this input name. Only applicable when canPrepopulate is `true`. */
  inputName?: Maybe<Scalars['String']>;
  /** The base form field type used to display the input. A good example is the Post Custom Field that can be displayed as various different types of fields. */
  inputType?: Maybe<FormFieldTypeEnum>;
  /** An array of the available properties for each input of the date field. */
  inputs?: Maybe<Array<Maybe<DateInputProperty>>>;
  /** Determines if the field requires the user to enter a value. Fields marked as required will prevent the form from being submitted if the user has not entered a value in it. */
  isRequired?: Maybe<Scalars['Boolean']>;
  /** Field label that will be displayed on the form and on the admin pages. */
  label?: Maybe<Scalars['String']>;
  /** The field label position. */
  labelPlacement?: Maybe<FormFieldLabelPlacementEnum>;
  /** The number of CSS grid columns the field should span. */
  layoutGridColumnSpan?: Maybe<Scalars['Int']>;
  /** The number of CSS grid columns the spacer field following this one should span. */
  layoutSpacerGridColumnSpan?: Maybe<Scalars['Int']>;
  /** The form page this field is located on. Default is 1. */
  pageNumber?: Maybe<Scalars['Int']>;
  /** The form field-specifc policies for exporting and erasing personal data. */
  personalData?: Maybe<FormFieldDataPolicy>;
  /** Placeholder text to give the user a hint on how to fill out the field. This is not submitted with the form. */
  placeholder?: Maybe<Scalars['String']>;
  /** Determines if the field allows duplicate submissions. */
  shouldAllowDuplicates?: Maybe<Scalars['Boolean']>;
  /** The placement of the labels for the subfields within the group. This setting controls all of the subfields, they cannot be set individually. They may be aligned above or below the inputs. If this property is not set, the “Sub-Label Placement” setting on the Form Settings-&gt;Form Layout page is used. If no setting is specified, the default is above inputs. */
  subLabelPlacement?: Maybe<FormFieldSubLabelPlacementEnum>;
  /** The type of field to be displayed. */
  type?: Maybe<FormFieldTypeEnum>;
  /** The string-formatted entry value for the `formField`. For complex fields this might be a JSON-encoded or serialized array. */
  value?: Maybe<Scalars['String']>;
  /** Field visibility. */
  visibility?: Maybe<FormFieldVisibilityEnum>;
};

/** How the DateField date is displayed. */
export enum DateFieldFormatEnum {
  /** dd/mm/yyyy format. */
  Dmy = 'DMY',
  /** dd-mm-yyyy format. */
  DmyDash = 'DMY_DASH',
  /** dd.mm.yyyy format. */
  DmyDot = 'DMY_DOT',
  /** mm/dd/yyyy format. */
  Mdy = 'MDY',
  /** yyyy/mm/dd format. */
  YmdDash = 'YMD_DASH',
  /** yyyy.mm.dd format. */
  YmdDot = 'YMD_DOT',
  /** yyyy/mm/dd format. */
  YmdSlash = 'YMD_SLASH'
}

/** Type of date field to display. */
export enum DateFieldTypeEnum {
  /** A date dropdown. */
  Dropdown = 'DROPDOWN',
  /** A simple date field. */
  Field = 'FIELD',
  /** A datepicker. */
  Picker = 'PICKER'
}

/** Date values */
export type DateInput = {
  /** Day of the month (from 1 to 31) */
  day?: InputMaybe<Scalars['Int']>;
  /** Month number (from 1 to 12) */
  month?: InputMaybe<Scalars['Int']>;
  /** 4 digit year (e.g. 2017) */
  year?: InputMaybe<Scalars['Int']>;
};

/** Date input values. */
export type DateInputProperty = {
  __typename?: 'DateInputProperty';
  /** The autocomplete attribute for the field. */
  autocompleteAttribute?: Maybe<Scalars['String']>;
  /** The custom label for the input. When set, this is used in place of the label. */
  customLabel?: Maybe<Scalars['String']>;
  /** Contains the default value for the field. When specified, the field&#039;s value will be populated with the contents of this property when the form is displayed. */
  defaultValue?: Maybe<Scalars['String']>;
  /** The input ID. Input IDs follow the following naming convention: FIELDID.INPUTID (i.e. 5.1), where FIELDID is the id of the containing field and INPUTID specifies the input field. */
  id?: Maybe<Scalars['Float']>;
  /** Field label that will be displayed on the form and on the admin pages. */
  label?: Maybe<Scalars['String']>;
  /** Placeholder text to give the user a hint on how to fill out the field. This is not submitted with the form. */
  placeholder?: Maybe<Scalars['String']>;
};

/** Filter the connection based on input */
export type DateQueryInput = {
  /** Nodes should be returned after this date */
  after?: InputMaybe<DateInput>;
  /** Nodes should be returned before this date */
  before?: InputMaybe<DateInput>;
  /** Column to query against */
  column?: InputMaybe<PostObjectsConnectionDateColumnEnum>;
  /** For after/before, whether exact value should be matched or not */
  compare?: InputMaybe<Scalars['String']>;
  /** Day of the month (from 1 to 31) */
  day?: InputMaybe<Scalars['Int']>;
  /** Hour (from 0 to 23) */
  hour?: InputMaybe<Scalars['Int']>;
  /** For after/before, whether exact value should be matched or not */
  inclusive?: InputMaybe<Scalars['Boolean']>;
  /** Minute (from 0 to 59) */
  minute?: InputMaybe<Scalars['Int']>;
  /** Month number (from 1 to 12) */
  month?: InputMaybe<Scalars['Int']>;
  /** OR or AND, how the sub-arrays should be compared */
  relation?: InputMaybe<RelationEnum>;
  /** Second (0 to 59) */
  second?: InputMaybe<Scalars['Int']>;
  /** Week of the year (from 0 to 53) */
  week?: InputMaybe<Scalars['Int']>;
  /** 4 digit year (e.g. 2017) */
  year?: InputMaybe<Scalars['Int']>;
};

/** The template assigned to the node */
export type DefaultTemplate = ContentTemplate & {
  __typename?: 'DefaultTemplate';
  /** The name of the template */
  templateName?: Maybe<Scalars['String']>;
};

/** Input for the deleteCategory mutation. */
export type DeleteCategoryInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The ID of the category to delete */
  id: Scalars['ID'];
};

/** The payload for the deleteCategory mutation. */
export type DeleteCategoryPayload = {
  __typename?: 'DeleteCategoryPayload';
  /** The deteted term object */
  category?: Maybe<Category>;
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The ID of the deleted object */
  deletedId?: Maybe<Scalars['ID']>;
};

/** Input for the deleteClient mutation. */
export type DeleteClientInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The ID of the client to delete */
  id: Scalars['ID'];
};

/** The payload for the deleteClient mutation. */
export type DeleteClientPayload = {
  __typename?: 'DeleteClientPayload';
  /** The deteted term object */
  client?: Maybe<Client>;
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The ID of the deleted object */
  deletedId?: Maybe<Scalars['ID']>;
};

/** Input for the deleteComment mutation. */
export type DeleteCommentInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Whether the comment should be force deleted instead of being moved to the trash */
  forceDelete?: InputMaybe<Scalars['Boolean']>;
  /** The deleted comment ID */
  id: Scalars['ID'];
};

/** The payload for the deleteComment mutation. */
export type DeleteCommentPayload = {
  __typename?: 'DeleteCommentPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The deleted comment object */
  comment?: Maybe<Comment>;
  /** The deleted comment ID */
  deletedId?: Maybe<Scalars['ID']>;
};

/** Input for the deleteGfDraftEntry mutation. */
export type DeleteGfDraftEntryInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Either the global ID of the draft entry, or its resume token. */
  id: Scalars['ID'];
  /** The ID type for the draft entry. Defaults to `ID` . */
  idType?: InputMaybe<DraftEntryIdTypeEnum>;
};

/** The payload for the deleteGfDraftEntry mutation. */
export type DeleteGfDraftEntryPayload = {
  __typename?: 'DeleteGfDraftEntryPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The global ID of the draft entry that was deleted. */
  deletedId?: Maybe<Scalars['ID']>;
  /** The draft entry object before it was deleted. */
  draftEntry?: Maybe<GfDraftEntry>;
};

/** Input for the deleteGfEntry mutation. */
export type DeleteGfEntryInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Whether the entry should be force deleted instead of being moved to the trash. */
  forceDelete?: InputMaybe<Scalars['Boolean']>;
  /** ID of the entry to delete, either a global or database ID. */
  id: Scalars['ID'];
};

/** The payload for the deleteGfEntry mutation. */
export type DeleteGfEntryPayload = {
  __typename?: 'DeleteGfEntryPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The global ID of the draft entry that was deleted. */
  deletedId?: Maybe<Scalars['ID']>;
  /** The entry object before it was deleted. */
  entry?: Maybe<GfSubmittedEntry>;
};

/** Input for the deleteGraphqlDocument mutation. */
export type DeleteGraphqlDocumentInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Whether the object should be force deleted instead of being moved to the trash */
  forceDelete?: InputMaybe<Scalars['Boolean']>;
  /** The ID of the graphqlDocument to delete */
  id: Scalars['ID'];
  /** Override the edit lock when another user is editing the post */
  ignoreEditLock?: InputMaybe<Scalars['Boolean']>;
};

/** The payload for the deleteGraphqlDocument mutation. */
export type DeleteGraphqlDocumentPayload = {
  __typename?: 'DeleteGraphqlDocumentPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The ID of the deleted object */
  deletedId?: Maybe<Scalars['ID']>;
  /** The object before it was deleted */
  graphqlDocument?: Maybe<GraphqlDocument>;
};

/** Input for the deleteMediaItem mutation. */
export type DeleteMediaItemInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Whether the mediaItem should be force deleted instead of being moved to the trash */
  forceDelete?: InputMaybe<Scalars['Boolean']>;
  /** The ID of the mediaItem to delete */
  id: Scalars['ID'];
};

/** The payload for the deleteMediaItem mutation. */
export type DeleteMediaItemPayload = {
  __typename?: 'DeleteMediaItemPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The ID of the deleted mediaItem */
  deletedId?: Maybe<Scalars['ID']>;
  /** The mediaItem before it was deleted */
  mediaItem?: Maybe<MediaItem>;
};

/** Input for the deletePage mutation. */
export type DeletePageInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Whether the object should be force deleted instead of being moved to the trash */
  forceDelete?: InputMaybe<Scalars['Boolean']>;
  /** The ID of the page to delete */
  id: Scalars['ID'];
  /** Override the edit lock when another user is editing the post */
  ignoreEditLock?: InputMaybe<Scalars['Boolean']>;
};

/** The payload for the deletePage mutation. */
export type DeletePagePayload = {
  __typename?: 'DeletePagePayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The ID of the deleted object */
  deletedId?: Maybe<Scalars['ID']>;
  /** The object before it was deleted */
  page?: Maybe<Page>;
};

/** Input for the deletePostFormat mutation. */
export type DeletePostFormatInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The ID of the postFormat to delete */
  id: Scalars['ID'];
};

/** The payload for the deletePostFormat mutation. */
export type DeletePostFormatPayload = {
  __typename?: 'DeletePostFormatPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The ID of the deleted object */
  deletedId?: Maybe<Scalars['ID']>;
  /** The deteted term object */
  postFormat?: Maybe<PostFormat>;
};

/** Input for the deletePost mutation. */
export type DeletePostInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Whether the object should be force deleted instead of being moved to the trash */
  forceDelete?: InputMaybe<Scalars['Boolean']>;
  /** The ID of the post to delete */
  id: Scalars['ID'];
  /** Override the edit lock when another user is editing the post */
  ignoreEditLock?: InputMaybe<Scalars['Boolean']>;
};

/** The payload for the deletePost mutation. */
export type DeletePostPayload = {
  __typename?: 'DeletePostPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The ID of the deleted object */
  deletedId?: Maybe<Scalars['ID']>;
  /** The object before it was deleted */
  post?: Maybe<Post>;
};

/** Input for the deletePress_release mutation. */
export type DeletePress_ReleaseInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Whether the object should be force deleted instead of being moved to the trash */
  forceDelete?: InputMaybe<Scalars['Boolean']>;
  /** The ID of the press_release to delete */
  id: Scalars['ID'];
  /** Override the edit lock when another user is editing the post */
  ignoreEditLock?: InputMaybe<Scalars['Boolean']>;
};

/** The payload for the deletePress_release mutation. */
export type DeletePress_ReleasePayload = {
  __typename?: 'DeletePress_releasePayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The ID of the deleted object */
  deletedId?: Maybe<Scalars['ID']>;
  /** The object before it was deleted */
  press_release?: Maybe<Press_Release>;
};

/** Input for the deleteTag mutation. */
export type DeleteTagInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The ID of the tag to delete */
  id: Scalars['ID'];
};

/** The payload for the deleteTag mutation. */
export type DeleteTagPayload = {
  __typename?: 'DeleteTagPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The ID of the deleted object */
  deletedId?: Maybe<Scalars['ID']>;
  /** The deteted term object */
  tag?: Maybe<Tag>;
};

/** Input for the deleteTeamMember mutation. */
export type DeleteTeamMemberInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Whether the object should be force deleted instead of being moved to the trash */
  forceDelete?: InputMaybe<Scalars['Boolean']>;
  /** The ID of the teamMember to delete */
  id: Scalars['ID'];
  /** Override the edit lock when another user is editing the post */
  ignoreEditLock?: InputMaybe<Scalars['Boolean']>;
};

/** The payload for the deleteTeamMember mutation. */
export type DeleteTeamMemberPayload = {
  __typename?: 'DeleteTeamMemberPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The ID of the deleted object */
  deletedId?: Maybe<Scalars['ID']>;
  /** The object before it was deleted */
  teamMember?: Maybe<TeamMember>;
};

/** Input for the deleteUser mutation. */
export type DeleteUserInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The ID of the user you want to delete */
  id: Scalars['ID'];
  /** Reassign posts and links to new User ID. */
  reassignId?: InputMaybe<Scalars['ID']>;
};

/** The payload for the deleteUser mutation. */
export type DeleteUserPayload = {
  __typename?: 'DeleteUserPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The ID of the user that you just deleted */
  deletedId?: Maybe<Scalars['ID']>;
  /** The deleted user object */
  user?: Maybe<User>;
};

/** Input for the deleteWorkCategory mutation. */
export type DeleteWorkCategoryInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The ID of the workCategory to delete */
  id: Scalars['ID'];
};

/** The payload for the deleteWorkCategory mutation. */
export type DeleteWorkCategoryPayload = {
  __typename?: 'DeleteWorkCategoryPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The ID of the deleted object */
  deletedId?: Maybe<Scalars['ID']>;
  /** The deteted term object */
  workCategory?: Maybe<WorkCategory>;
};

/** Input for the deleteWork mutation. */
export type DeleteWorkInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Whether the object should be force deleted instead of being moved to the trash */
  forceDelete?: InputMaybe<Scalars['Boolean']>;
  /** The ID of the work to delete */
  id: Scalars['ID'];
  /** Override the edit lock when another user is editing the post */
  ignoreEditLock?: InputMaybe<Scalars['Boolean']>;
};

/** The payload for the deleteWork mutation. */
export type DeleteWorkPayload = {
  __typename?: 'DeleteWorkPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The ID of the deleted object */
  deletedId?: Maybe<Scalars['ID']>;
  /** The object before it was deleted */
  work?: Maybe<Work>;
};

/** The discussion setting type */
export type DiscussionSettings = {
  __typename?: 'DiscussionSettings';
  /** Allow people to submit comments on new posts. */
  defaultCommentStatus?: Maybe<Scalars['String']>;
  /** Allow link notifications from other blogs (pingbacks and trackbacks) on new articles. */
  defaultPingStatus?: Maybe<Scalars['String']>;
};

/** The Type of Identifier used to fetch a single resource. */
export enum DraftEntryIdTypeEnum {
  /** Unique global ID for the object. */
  Id = 'ID',
  /** The resume token assigned by Gravity Forms. Used by draft entries. */
  ResumeToken = 'RESUME_TOKEN'
}

/** Relational context between connected nodes */
export type Edge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The connected node */
  node: Node;
};

/** A Gravity Forms   field. */
export type EmailField = FormField & {
  __typename?: 'EmailField';
  /** When specified, the value of this property will be used on the admin pages instead of the label. It is useful for fields with long labels. */
  adminLabel?: Maybe<Scalars['String']>;
  /** Determines if the field’s value can be pre-populated dynamically. */
  canPrepopulate?: Maybe<Scalars['Boolean']>;
  /** Controls the visibility of the field based on values selected by the user. */
  conditionalLogic?: Maybe<ConditionalLogic>;
  /** String containing the custom CSS classes to be added to the &lt;li&gt; tag that contains the field. Useful for applying custom formatting to specific fields. */
  cssClass?: Maybe<Scalars['String']>;
  /** Field description. */
  description?: Maybe<Scalars['String']>;
  /** The placement of the field description. */
  descriptionPlacement?: Maybe<FormFieldDescriptionPlacementEnum>;
  /** Indicates the field is only displayed and its contents are not submitted with the form/saved with the entry. This is set to true. */
  displayOnly?: Maybe<Scalars['Boolean']>;
  /** Contains the message that is displayed for fields that fail validation. */
  errorMessage?: Maybe<Scalars['String']>;
  /** Whether autocomplete should be enabled for this field. */
  hasAutocomplete?: Maybe<Scalars['Boolean']>;
  /** Determines whether the Confirm Email field is active. */
  hasEmailConfirmation?: Maybe<Scalars['Boolean']>;
  /** Field ID. */
  id: Scalars['Int'];
  /** The base form field type used to display the input. A good example is the Post Custom Field that can be displayed as various different types of fields. */
  inputType?: Maybe<FormFieldTypeEnum>;
  /** An array of the available properties for each input of the email field. */
  inputs?: Maybe<Array<Maybe<EmailInputProperty>>>;
  /** Determines if the field requires the user to enter a value. Fields marked as required will prevent the form from being submitted if the user has not entered a value in it. */
  isRequired?: Maybe<Scalars['Boolean']>;
  /** Field label that will be displayed on the form and on the admin pages. */
  label?: Maybe<Scalars['String']>;
  /** The field label position. */
  labelPlacement?: Maybe<FormFieldLabelPlacementEnum>;
  /** The number of CSS grid columns the field should span. */
  layoutGridColumnSpan?: Maybe<Scalars['Int']>;
  /** The number of CSS grid columns the spacer field following this one should span. */
  layoutSpacerGridColumnSpan?: Maybe<Scalars['Int']>;
  /** The form page this field is located on. Default is 1. */
  pageNumber?: Maybe<Scalars['Int']>;
  /** The form field-specifc policies for exporting and erasing personal data. */
  personalData?: Maybe<FormFieldDataPolicy>;
  /** Placeholder text to give the user a hint on how to fill out the field. This is not submitted with the form. */
  placeholder?: Maybe<Scalars['String']>;
  /** Determines if the field allows duplicate submissions. */
  shouldAllowDuplicates?: Maybe<Scalars['Boolean']>;
  /** Determines the size of the field when displayed on the page. */
  size?: Maybe<FormFieldSizeEnum>;
  /** The placement of the labels for the subfields within the group. This setting controls all of the subfields, they cannot be set individually. They may be aligned above or below the inputs. If this property is not set, the “Sub-Label Placement” setting on the Form Settings-&gt;Form Layout page is used. If no setting is specified, the default is above inputs. */
  subLabelPlacement?: Maybe<FormFieldSubLabelPlacementEnum>;
  /** The type of field to be displayed. */
  type?: Maybe<FormFieldTypeEnum>;
  /** The string-formatted entry value for the `formField`. For complex fields this might be a JSON-encoded or serialized array. */
  value?: Maybe<Scalars['String']>;
  /** Field visibility. */
  visibility?: Maybe<FormFieldVisibilityEnum>;
};

/** Input fields for email field. */
export type EmailFieldInput = {
  /** Email confirmation input value. Only used when email confirmation is enabled. */
  confirmationValue?: InputMaybe<Scalars['String']>;
  /** Email input value. */
  value?: InputMaybe<Scalars['String']>;
};

/** Email input values. */
export type EmailInputProperty = {
  __typename?: 'EmailInputProperty';
  /** The autocomplete attribute for the field. */
  autocompleteAttribute?: Maybe<Scalars['String']>;
  /** The custom label for the input. When set, this is used in place of the label. */
  customLabel?: Maybe<Scalars['String']>;
  /** Contains the default value for the field. When specified, the field&#039;s value will be populated with the contents of this property when the form is displayed. */
  defaultValue?: Maybe<Scalars['String']>;
  /** The input ID. Input IDs follow the following naming convention: FIELDID.INPUTID (i.e. 5.1), where FIELDID is the id of the containing field and INPUTID specifies the input field. */
  id?: Maybe<Scalars['Float']>;
  /** Field label that will be displayed on the form and on the admin pages. */
  label?: Maybe<Scalars['String']>;
  /** Assigns a name to this field so that it can be populated dynamically via this input name. Only applicable when canPrepopulate is `true`. */
  name?: Maybe<Scalars['String']>;
  /** Placeholder text to give the user a hint on how to fill out the field. This is not submitted with the form. */
  placeholder?: Maybe<Scalars['String']>;
};

/** Asset enqueued by the CMS */
export type EnqueuedAsset = {
  /** @todo */
  args?: Maybe<Scalars['Boolean']>;
  /** Dependencies needed to use this asset */
  dependencies?: Maybe<Array<Maybe<EnqueuedScript>>>;
  /** Extra information needed for the script */
  extra?: Maybe<Scalars['String']>;
  /** The handle of the enqueued asset */
  handle?: Maybe<Scalars['String']>;
  /** The ID of the enqueued asset */
  id: Scalars['ID'];
  /** The source of the asset */
  src?: Maybe<Scalars['String']>;
  /** The version of the enqueued asset */
  version?: Maybe<Scalars['String']>;
};

/** Script enqueued by the CMS */
export type EnqueuedScript = EnqueuedAsset & Node & {
  __typename?: 'EnqueuedScript';
  /** @todo */
  args?: Maybe<Scalars['Boolean']>;
  /** Dependencies needed to use this asset */
  dependencies?: Maybe<Array<Maybe<EnqueuedScript>>>;
  /** Extra information needed for the script */
  extra?: Maybe<Scalars['String']>;
  /** The handle of the enqueued asset */
  handle?: Maybe<Scalars['String']>;
  /** The ID of the enqueued asset */
  id: Scalars['ID'];
  /** The source of the asset */
  src?: Maybe<Scalars['String']>;
  /** The version of the enqueued asset */
  version?: Maybe<Scalars['String']>;
};

/** Connection to EnqueuedScript Nodes */
export type EnqueuedScriptConnection = {
  /** A list of edges (relational context) between ContentNode and connected EnqueuedScript Nodes */
  edges: Array<EnqueuedScriptConnectionEdge>;
  /** A list of connected EnqueuedScript Nodes */
  nodes: Array<EnqueuedScript>;
  /** Information about pagination in a connection. */
  pageInfo: EnqueuedScriptConnectionPageInfo;
};

/** Edge between a Node and a connected EnqueuedScript */
export type EnqueuedScriptConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The connected EnqueuedScript Node */
  node: EnqueuedScript;
};

/** Page Info on the connected EnqueuedScriptConnectionEdge */
export type EnqueuedScriptConnectionPageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Stylesheet enqueued by the CMS */
export type EnqueuedStylesheet = EnqueuedAsset & Node & {
  __typename?: 'EnqueuedStylesheet';
  /** @todo */
  args?: Maybe<Scalars['Boolean']>;
  /** Dependencies needed to use this asset */
  dependencies?: Maybe<Array<Maybe<EnqueuedScript>>>;
  /** Extra information needed for the script */
  extra?: Maybe<Scalars['String']>;
  /** The handle of the enqueued asset */
  handle?: Maybe<Scalars['String']>;
  /** The ID of the enqueued asset */
  id: Scalars['ID'];
  /** The source of the asset */
  src?: Maybe<Scalars['String']>;
  /** The version of the enqueued asset */
  version?: Maybe<Scalars['String']>;
};

/** Connection to EnqueuedStylesheet Nodes */
export type EnqueuedStylesheetConnection = {
  /** A list of edges (relational context) between ContentNode and connected EnqueuedStylesheet Nodes */
  edges: Array<EnqueuedStylesheetConnectionEdge>;
  /** A list of connected EnqueuedStylesheet Nodes */
  nodes: Array<EnqueuedStylesheet>;
  /** Information about pagination in a connection. */
  pageInfo: EnqueuedStylesheetConnectionPageInfo;
};

/** Edge between a Node and a connected EnqueuedStylesheet */
export type EnqueuedStylesheetConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The connected EnqueuedStylesheet Node */
  node: EnqueuedStylesheet;
};

/** Page Info on the connected EnqueuedStylesheetConnectionEdge */
export type EnqueuedStylesheetConnectionPageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Options for ordering the connection. */
export type EntriesConnectionOrderbyInput = {
  /** The field name used to sort the results. */
  field?: InputMaybe<Scalars['String']>;
  /** Whether the sorting field's values are numeric. */
  isNumeric?: InputMaybe<Scalars['Boolean']>;
  /** The cardinality of the order of the connection. */
  order?: InputMaybe<OrderEnum>;
};

/** Date Filters input fields for Entries queries. */
export type EntriesDateFiltersInput = {
  /** End date in Y-m-d H:i:s format. */
  endDate?: InputMaybe<Scalars['String']>;
  /** Start date in Y-m-d H:i:s format. */
  startDate?: InputMaybe<Scalars['String']>;
};

/** Field Filters input fields for Entries queries. */
export type EntriesFieldFiltersInput = {
  /** The field value(s) to filter by. Must be boolean values. If using this field, do not also use stringValues, intValues or floatValues. */
  boolValues?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  /** The field value(s) to filter by. Must be float values. If using this field, do not also use stringValues, intValues or boolValues. */
  floatValues?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  /** The field value(s) to filter by. Must be integer values. If using this field, do not also use stringValues, floatValues or boolValues. */
  intValues?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** Optional. The entry meta key to filter by. You can use the ID of the form field, or the names of any of the columns in Gravity Form's database table for entries, such as "date_created", "is_read, "created_by", etc. If omitted, the value will be checked against all meta keys. . */
  key?: InputMaybe<Scalars['String']>;
  /** The operator to use for filtering. */
  operator?: InputMaybe<FieldFiltersOperatorEnum>;
  /** The field value(s) to filter by. Must be string values. If using this field, do not also use intValues, floatValues or boolValues. */
  stringValues?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/** The Type of Identifier used to fetch a single resource. */
export enum EntryIdTypeEnum {
  /** The database ID assigned by Gravity Forms. Used by submitted entries. */
  DatabaseId = 'DATABASE_ID',
  /** Unique global ID for the object. */
  Id = 'ID',
  /** The resume token assigned by Gravity Forms. Used by draft entries. */
  ResumeToken = 'RESUME_TOKEN'
}

/** Status of entries to get. Default is ACTIVE. */
export enum EntryStatusEnum {
  /** Active entries (default). */
  Active = 'ACTIVE',
  /** All entries. */
  All = 'ALL',
  /** Spam entries. */
  Spam = 'SPAM',
  /** Entries in the trash. */
  Trash = 'TRASH'
}

/** The type of Gravity Forms entry. */
export enum EntryTypeEnum {
  /** A Gravity Forms draft entry. */
  Draft = 'DRAFT',
  /** A Gravity Forms partial entry. */
  Partial = 'PARTIAL',
  /** A submitted Gravity Forms entry. */
  Submitted = 'SUBMITTED'
}

/** Field error. */
export type FieldError = {
  __typename?: 'FieldError';
  /** The field with the associated error message. */
  id?: Maybe<Scalars['Float']>;
  /** Error message. */
  message?: Maybe<Scalars['String']>;
};

/** Whether to filter by ALL or ANY of the field filters. Default is ALL. */
export enum FieldFiltersModeEnum {
  /** All field filters (default). */
  All = 'ALL',
  /** Any field filters. */
  Any = 'ANY'
}

/** The operator to use for filtering. */
export enum FieldFiltersOperatorEnum {
  /** Find field values that contain the passed value. Only one value may be passed when using this operator. SQL Equivalent: `LIKE %value%`. */
  Contains = 'CONTAINS',
  /** Default. Find field values that are equal to one of the values in the passed array. Default. */
  In = 'IN',
  /** Find field values that are an exact match for the passed value. Only one value may be passed when using this operator. SQL Equivalent: `=`. */
  Is = 'IS',
  /** Find field values that are NOT an exact match for the passed value. Only one value may be passed when using this operator. SQL Equivalent: `NOT`. */
  IsNot = 'IS_NOT',
  /** Find field values that are an exact match for the passed value. SQL wildcards are supported. Only one value may be passed when using this operator. SQL Equivalent: `LIKE`. */
  Like = 'LIKE',
  /** Find field values that do NOT match those in the values array. */
  NotIn = 'NOT_IN'
}

/** A Gravity Forms   field. */
export type FileUploadField = FormField & {
  __typename?: 'FileUploadField';
  /** When specified, the value of this property will be used on the admin pages instead of the label. It is useful for fields with long labels. */
  adminLabel?: Maybe<Scalars['String']>;
  /** A comma-delimited list of the file extensions which may be uploaded. */
  allowedExtensions?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Indicates whether multiple files may be uploaded. */
  canAcceptMultipleFiles?: Maybe<Scalars['Boolean']>;
  /** Controls the visibility of the field based on values selected by the user. */
  conditionalLogic?: Maybe<ConditionalLogic>;
  /** String containing the custom CSS classes to be added to the &lt;li&gt; tag that contains the field. Useful for applying custom formatting to specific fields. */
  cssClass?: Maybe<Scalars['String']>;
  /** Field description. */
  description?: Maybe<Scalars['String']>;
  /** The placement of the field description. */
  descriptionPlacement?: Maybe<FormFieldDescriptionPlacementEnum>;
  /** Indicates the field is only displayed and its contents are not submitted with the form/saved with the entry. This is set to true. */
  displayOnly?: Maybe<Scalars['Boolean']>;
  /** Contains the message that is displayed for fields that fail validation. */
  errorMessage?: Maybe<Scalars['String']>;
  /** File upload value */
  fileUploadValues?: Maybe<Array<Maybe<FileUploadFieldValue>>>;
  /** Field ID. */
  id: Scalars['Int'];
  /** The base form field type used to display the input. A good example is the Post Custom Field that can be displayed as various different types of fields. */
  inputType?: Maybe<FormFieldTypeEnum>;
  /** Determines if the field requires the user to enter a value. Fields marked as required will prevent the form from being submitted if the user has not entered a value in it. */
  isRequired?: Maybe<Scalars['Boolean']>;
  /** Field label that will be displayed on the form and on the admin pages. */
  label?: Maybe<Scalars['String']>;
  /** The field label position. */
  labelPlacement?: Maybe<FormFieldLabelPlacementEnum>;
  /** The number of CSS grid columns the field should span. */
  layoutGridColumnSpan?: Maybe<Scalars['Int']>;
  /** The number of CSS grid columns the spacer field following this one should span. */
  layoutSpacerGridColumnSpan?: Maybe<Scalars['Int']>;
  /** The maximum size (in MB) an uploaded file may be . */
  maxFileSize?: Maybe<Scalars['Int']>;
  /** When the field is set to allow multiple files to be uploaded, this property is available to set a limit on how many may be uploaded. */
  maxFiles?: Maybe<Scalars['Int']>;
  /** The form page this field is located on. Default is 1. */
  pageNumber?: Maybe<Scalars['Int']>;
  /** The form field-specifc policies for exporting and erasing personal data. */
  personalData?: Maybe<FormFieldDataPolicy>;
  /** The type of field to be displayed. */
  type?: Maybe<FormFieldTypeEnum>;
  /** The string-formatted entry value for the `formField`. For complex fields this might be a JSON-encoded or serialized array. */
  value?: Maybe<Scalars['String']>;
  /**
   * An array of field values.
   * @deprecated Use `fileUploadValues` instead.
   */
  values?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Field visibility. */
  visibility?: Maybe<FormFieldVisibilityEnum>;
};

/** The individual file properties from an uploaded file. */
export type FileUploadFieldValue = {
  __typename?: 'FileUploadFieldValue';
  /** The path to the parent directory of the file. */
  basePath?: Maybe<Scalars['String']>;
  /** The base url to the parent directory of the file. */
  baseUrl?: Maybe<Scalars['String']>;
  /** The filename. */
  filename?: Maybe<Scalars['String']>;
  /** The url to the file. */
  url?: Maybe<Scalars['String']>;
};

/** Gravity Forms button. */
export type FormButton = {
  __typename?: 'FormButton';
  /** Controls when the form button should be visible based on values selected on the form. */
  conditionalLogic?: Maybe<ConditionalLogic>;
  /** Contains the URL for the image button. Only applicable when type is set to image. */
  imageUrl?: Maybe<Scalars['String']>;
  /** Contains the button text. Only applicable when type is set to text. */
  text?: Maybe<Scalars['String']>;
  /** Specifies the type of button to be displayed. Defaults to TEXT. */
  type?: Maybe<FormButtonTypeEnum>;
};

/** Type of button to be displayed. Default is TEXT. */
export enum FormButtonTypeEnum {
  /** Image button. */
  Image = 'IMAGE',
  /** Text button (default). */
  Text = 'TEXT'
}

/** Properties for all the email notifications which exist for a form. */
export type FormConfirmation = {
  __typename?: 'FormConfirmation';
  /** Controls which form confirmation message should be displayed. */
  conditionalLogic?: Maybe<ConditionalLogic>;
  /** ID. */
  id?: Maybe<Scalars['String']>;
  /** Whether the confirmation is active or inactive. The default confirmation is always active. */
  isActive?: Maybe<Scalars['Boolean']>;
  /** Whether the confirmation message should be formatted so that paragraphs are automatically added for new lines. */
  isAutoformatted?: Maybe<Scalars['Boolean']>;
  /** Whether this is the default confirmation. */
  isDefault?: Maybe<Scalars['Boolean']>;
  /** Contains the confirmation message that will be displayed. Only applicable when type is set to &quot;MESSAGE&quot;. */
  message?: Maybe<Scalars['String']>;
  /** The confirmation name. */
  name?: Maybe<Scalars['String']>;
  /** Connection between the FormConfirmation type and the Page type */
  page?: Maybe<FormConfirmationToPageConnectionEdge>;
  /** Contains the Id of the WordPress page that the browser will be redirected to. Only applicable when type is set to `PAGE`. */
  pageId?: Maybe<Scalars['Int']>;
  /** Contains the query string to be appended to the redirection url. Only applicable when type is set to `REDIRECT`. */
  queryString?: Maybe<Scalars['String']>;
  /** Determines the type of confirmation to be used. */
  type?: Maybe<FormConfirmationTypeEnum>;
  /** Contains the URL that the browser will be redirected to. Only applicable when type is set to `REDIRECT`. */
  url?: Maybe<Scalars['String']>;
};

/** Connection between the FormConfirmation type and the Page type */
export type FormConfirmationToPageConnectionEdge = Edge & OneToOneConnection & PageConnectionEdge & {
  __typename?: 'FormConfirmationToPageConnectionEdge';
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The node of the connection, without the edges */
  node: Page;
};

/** Type of form confirmation to be used. */
export enum FormConfirmationTypeEnum {
  /** Use a confirmation "message". */
  Message = 'MESSAGE',
  /** Use a redirect to a different WordPress "page". */
  Page = 'PAGE',
  /** Use a "redirect" to a given URL. */
  Redirect = 'REDIRECT'
}

/** The policies governing which entry data to include when erasing and exporting personal data. */
export type FormDataPolicies = {
  __typename?: 'FormDataPolicies';
  /** Whether entry data from this form is included when erasing and exporting personal data. */
  canExportAndErase?: Maybe<Scalars['Boolean']>;
  /** The individual entry data exporting and erasing policies. */
  entryData?: Maybe<Array<Maybe<FormEntryDataPolicy>>>;
  /** The database ID of the Gravity Forms field used to identify the user. */
  identificationFieldDatabaseId?: Maybe<Scalars['Int']>;
};

/** Determines where the field description is displayed relative to the field. */
export enum FormDescriptionPlacementEnum {
  /** The field description is displayed above the field input (i.e. immediately after the field label). */
  Above = 'ABOVE',
  /** The field description is displayed below the field input. */
  Below = 'BELOW'
}

/** The individual entry data exporting and erasing policies. */
export type FormEntryDataPolicy = {
  __typename?: 'FormEntryDataPolicy';
  /** The array key for the Gravity Forms Entry. */
  key?: Maybe<Scalars['String']>;
  /** Whether this field should be included when erasing personal data. */
  shouldErase?: Maybe<Scalars['Boolean']>;
  /** Whether this field should be included when exporting personal data. */
  shouldExport?: Maybe<Scalars['Boolean']>;
};

/** Gravity Forms form entry limititation details. */
export type FormEntryLimits = {
  __typename?: 'FormEntryLimits';
  /** Whether the form has a limit on the number of submissions. */
  hasLimit?: Maybe<Scalars['Boolean']>;
  /** Message that will be displayed when the maximum number of submissions have been reached. */
  limitReachedMessage?: Maybe<Scalars['String']>;
  /** The time period during which submissions are allowed. */
  limitationPeriod?: Maybe<FormLimitEntriesPeriodEnum>;
  /** The number of submissions allowed. */
  maxEntries?: Maybe<Scalars['Int']>;
};

/** Gravity Forms field. */
export type FormField = {
  /** Indicates the field is only displayed and its contents are not submitted with the form/saved with the entry. This is set to true. */
  displayOnly?: Maybe<Scalars['Boolean']>;
  /** Field ID. */
  id: Scalars['Int'];
  /** The base form field type used to display the input. A good example is the Post Custom Field that can be displayed as various different types of fields. */
  inputType?: Maybe<FormFieldTypeEnum>;
  /** The number of CSS grid columns the field should span. */
  layoutGridColumnSpan?: Maybe<Scalars['Int']>;
  /** The number of CSS grid columns the spacer field following this one should span. */
  layoutSpacerGridColumnSpan?: Maybe<Scalars['Int']>;
  /** The form page this field is located on. Default is 1. */
  pageNumber?: Maybe<Scalars['Int']>;
  /** The type of field to be displayed. */
  type?: Maybe<FormFieldTypeEnum>;
  /** Field visibility. */
  visibility?: Maybe<FormFieldVisibilityEnum>;
};

/** How the date field displays its calendar icon. */
export enum FormFieldCalendarIconTypeEnum {
  /** Default calendar icon. */
  Calendar = 'CALENDAR',
  /** Custom calendar icon. */
  Custom = 'CUSTOM',
  /** No calendar icon. */
  None = 'NONE'
}

/** Connection to FormField Nodes */
export type FormFieldConnection = {
  /** A list of edges (relational context) between GfEntry and connected FormField Nodes */
  edges: Array<FormFieldConnectionEdge>;
  /** A list of connected FormField Nodes */
  nodes: Array<FormField>;
  pageInfo: FormFieldConnectionPageInfo;
};

/** Edge between a Node and a connected FormField */
export type FormFieldConnectionEdge = {
  /** The connected FormField Node */
  node: FormField;
};

/** Page Info on the connected FormFieldConnectionEdge */
export type FormFieldConnectionPageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** The form field-specifc policies for exporting and erasing personal data. */
export type FormFieldDataPolicy = {
  __typename?: 'FormFieldDataPolicy';
  /** Whether this field is used to identify the user&#039;s personal data. */
  isIdentificationField?: Maybe<Scalars['Boolean']>;
  /** Whether this field should be included when erasing personal data. */
  shouldErase?: Maybe<Scalars['Boolean']>;
  /** Whether this field should be included when exporting personal data. */
  shouldExport?: Maybe<Scalars['Boolean']>;
};

/** Determines where the field description is displayed relative to the field. */
export enum FormFieldDescriptionPlacementEnum {
  /** The field description is displayed above the field input (i.e. immediately after the field label). */
  Above = 'ABOVE',
  /** The field description is displayed below the field input. */
  Below = 'BELOW',
  /** The field description is inherited from the form default settings. */
  Inherit = 'INHERIT'
}

/** The field label position. Empty when using the form defaults or a value of "hidden_label". */
export enum FormFieldLabelPlacementEnum {
  /** Field label is hidden. */
  Hidden = 'HIDDEN',
  /** Field label is inherited from the form defaults. */
  Inherit = 'INHERIT',
  /** Field label is displayed beside the fields and aligned to the left. */
  Left = 'LEFT',
  /** Field label is displayed beside the fields and aligned to the right. */
  Right = 'RIGHT',
  /** Field label is displayed on top of the fields. */
  Top = 'TOP'
}

/** Type of indicator to use when field is required. */
export enum FormFieldRequiredIndicatorEnum {
  /** Asterisk (*) indicator. */
  Asterisk = 'ASTERISK',
  /** Custom indicator. */
  Custom = 'CUSTOM',
  /** Text (Required) indicator (default). */
  Text = 'TEXT'
}

/** The size of the field when displayed on the page. */
export enum FormFieldSizeEnum {
  /** Large field size. */
  Large = 'LARGE',
  /** Medium field size. */
  Medium = 'MEDIUM',
  /** Small field size. */
  Small = 'SMALL'
}

/** Determines how sub-labels are aligned. */
export enum FormFieldSubLabelPlacementEnum {
  /** The sub-label is displayed above the sub-field input (i.e. immediately after the field label). */
  Above = 'ABOVE',
  /** The sub-label is displayed below the sub-field input. */
  Below = 'BELOW',
  /** Field label is inherited from the form defaults. */
  Inherit = 'INHERIT'
}

/** Gravity Forms Field Type. */
export enum FormFieldTypeEnum {
  /** A Gravity Forms address field. */
  Address = 'ADDRESS',
  /** A Gravity Forms calculation field. */
  Calculation = 'CALCULATION',
  /** A Gravity Forms captcha field. */
  Captcha = 'CAPTCHA',
  /** A Gravity Forms checkbox field. */
  Checkbox = 'CHECKBOX',
  /** A Gravity Forms consent field. */
  Consent = 'CONSENT',
  /** A Gravity Forms date field. */
  Date = 'DATE',
  /** A Gravity Forms email field. */
  Email = 'EMAIL',
  /** A Gravity Forms fileupload field. */
  Fileupload = 'FILEUPLOAD',
  /** A Gravity Forms hidden field. */
  Hidden = 'HIDDEN',
  /** A Gravity Forms hiddenproduct field. */
  Hiddenproduct = 'HIDDENPRODUCT',
  /** A Gravity Forms html field. */
  Html = 'HTML',
  /** A Gravity Forms list field. */
  List = 'LIST',
  /** A Gravity Forms multiselect field. */
  Multiselect = 'MULTISELECT',
  /** A Gravity Forms name field. */
  Name = 'NAME',
  /** A Gravity Forms number field. */
  Number = 'NUMBER',
  /** A Gravity Forms page field. */
  Page = 'PAGE',
  /** A Gravity Forms password field. */
  Password = 'PASSWORD',
  /** A Gravity Forms phone field. */
  Phone = 'PHONE',
  /** A Gravity Forms post_category field. */
  PostCategory = 'POST_CATEGORY',
  /** A Gravity Forms post_content field. */
  PostContent = 'POST_CONTENT',
  /** A Gravity Forms post_custom_field field. */
  PostCustomField = 'POST_CUSTOM_FIELD',
  /** A Gravity Forms post_excerpt field. */
  PostExcerpt = 'POST_EXCERPT',
  /** A Gravity Forms post_image field. */
  PostImage = 'POST_IMAGE',
  /** A Gravity Forms post_tags field. */
  PostTags = 'POST_TAGS',
  /** A Gravity Forms post_title field. */
  PostTitle = 'POST_TITLE',
  /** A Gravity Forms radio field. */
  Radio = 'RADIO',
  /** A Gravity Forms section field. */
  Section = 'SECTION',
  /** A Gravity Forms select field. */
  Select = 'SELECT',
  /** A Gravity Forms singleproduct field. */
  Singleproduct = 'SINGLEPRODUCT',
  /** A Gravity Forms singleshipping field. */
  Singleshipping = 'SINGLESHIPPING',
  /** A Gravity Forms submit field. */
  Submit = 'SUBMIT',
  /** A Gravity Forms text field. */
  Text = 'TEXT',
  /** A Gravity Forms textarea field. */
  Textarea = 'TEXTAREA',
  /** A Gravity Forms time field. */
  Time = 'TIME',
  /** A Gravity Forms website field. */
  Website = 'WEBSITE'
}

/** Field values input. Includes a field id, and a valid value Input. */
export type FormFieldValuesInput = {
  /** The form field values for Address fields. */
  addressValues?: InputMaybe<AddressFieldInput>;
  /** The form field values for Checkbox fields. */
  checkboxValues?: InputMaybe<Array<InputMaybe<CheckboxFieldInput>>>;
  /** The form field values for Email fields. */
  emailValues?: InputMaybe<EmailFieldInput>;
  /** The field id. */
  id: Scalars['Int'];
  /** The form field values for List fields. */
  listValues?: InputMaybe<Array<InputMaybe<ListFieldInput>>>;
  /** The form field values for Name fields. */
  nameValues?: InputMaybe<NameFieldInput>;
  /** The form field values for basic fields. */
  value?: InputMaybe<Scalars['String']>;
  /** The form field values for fields that accept multiple string values. Used by MultiSelect, Post Category, Post Custom, and Post Tags fields. */
  values?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/** Field visibility. */
export enum FormFieldVisibilityEnum {
  /** The field is for "administrative" use. */
  Administrative = 'ADMINISTRATIVE',
  /** The field is "hidden". */
  Hidden = 'HIDDEN',
  /** The field is "visible". */
  Visible = 'VISIBLE'
}

/** The Type of Identifier used to fetch a single resource. */
export enum FormIdTypeEnum {
  /** The database ID assigned by Gravity Forms. */
  DatabaseId = 'DATABASE_ID',
  /** Unique global ID for the object. */
  Id = 'ID'
}

/** Determines where the field labels should be placed in relation to the field. */
export enum FormLabelPlacementEnum {
  /** Field labels are displayed beside the fields and aligned to the left. */
  Left = 'LEFT',
  /** Field labels are displayed beside the fields and aligned to the right. */
  Right = 'RIGHT',
  /** Field labels are displayed on top of the fields. */
  Top = 'TOP'
}

/** Gravity Forms button. */
export type FormLastPageButton = {
  __typename?: 'FormLastPageButton';
  /** Contains the URL for the image button. Only applicable when type is set to image. */
  imageUrl?: Maybe<Scalars['String']>;
  /** Contains the button text. Only applicable when type is set to text. */
  text?: Maybe<Scalars['String']>;
  /** Specifies the type of button to be displayed. Defaults to TEXT. */
  type?: Maybe<FormButtonTypeEnum>;
};

/** When limitEntries is set to 1, this property specifies the time period during which submissions are allowed. */
export enum FormLimitEntriesPeriodEnum {
  /** Limit entries by "day". */
  Day = 'DAY',
  /** Limit entries by "month". */
  Month = 'MONTH',
  /** Limit entries by "week". */
  Week = 'WEEK',
  /** Limit entries by "year". */
  Year = 'YEAR'
}

/** Gravity Forms form login requirements data. */
export type FormLogin = {
  __typename?: 'FormLogin';
  /** Whether the form is configured to be displayed only to logged in users. */
  isLoginRequired?: Maybe<Scalars['Boolean']>;
  /** When `isLoginRequired` is set to true, this controls the message displayed when non-logged in user tries to access the form. */
  loginRequiredMessage?: Maybe<Scalars['String']>;
};

/** Properties for all the email notifications which exist for a form. */
export type FormNotification = {
  __typename?: 'FormNotification';
  /** The email or merge tags to be used as the email bcc address. */
  bcc?: Maybe<Scalars['String']>;
  /** An associative array containing the conditional logic rules. See the Conditional Logic Object for more details. */
  conditionalLogic?: Maybe<ConditionalLogic>;
  /** The notification event. Default is form_submission. */
  event?: Maybe<Scalars['String']>;
  /** The email or merge tag to be used as the email from address. */
  from?: Maybe<Scalars['String']>;
  /** The text or merge tag to be used as the email from name. */
  fromName?: Maybe<Scalars['String']>;
  /** The notification ID. A 13 character unique ID. */
  id?: Maybe<Scalars['String']>;
  /** Is the notification active or inactive. The default is true (active). */
  isActive?: Maybe<Scalars['Boolean']>;
  /** Whether the email message should be formatted so that paragraphs are automatically added for new lines. */
  isAutoformatted?: Maybe<Scalars['Boolean']>;
  /** The email body/content. Merge tags supported. */
  message?: Maybe<Scalars['String']>;
  /** The notification name. */
  name?: Maybe<Scalars['String']>;
  /** The email or merge tags to be used as the email reply to address. */
  replyTo?: Maybe<Scalars['String']>;
  /** Routing rules. */
  routing?: Maybe<Array<Maybe<FormNotificationRouting>>>;
  /** The name of the service to be used when sending this notification. Default is wordpress. */
  service?: Maybe<Scalars['String']>;
  /** Determines if files uploaded on the form should be included when the notification is sent. */
  shouldSendAttachments?: Maybe<Scalars['Boolean']>;
  /** The email subject line. Merge tags supported. */
  subject?: Maybe<Scalars['String']>;
  /** The ID of an email field, an email address or merge tag to be used as the email to address. */
  to?: Maybe<Scalars['String']>;
  /** Identifies what to use for the notification &quot;to&quot;. */
  toType?: Maybe<FormNotificationToTypeEnum>;
};

/** Properties for all the email notifications which exist for a form. */
export type FormNotificationRouting = {
  __typename?: 'FormNotificationRouting';
  /** The email or merge tag to be used as the email To address if this rule is a match. */
  email?: Maybe<Scalars['String']>;
  /** Target field ID. The field that will have it’s value compared with the value property to determine if this rule is a match. */
  fieldId?: Maybe<Scalars['Int']>;
  /** Operator to be used when evaluating this rule. */
  operator?: Maybe<FormRuleOperatorEnum>;
  /** The value to compare with the field specified by fieldId. */
  value?: Maybe<Scalars['String']>;
};

/** What to use for the notification "to". */
export enum FormNotificationToTypeEnum {
  /** Email address. */
  Email = 'EMAIL',
  /** Form field. */
  Field = 'FIELD',
  /** Hidden. */
  Hidden = 'HIDDEN',
  /** Routing using conditional rules. */
  Routing = 'ROUTING'
}

/** Style of progress bar. */
export enum FormPageProgressStyleEnum {
  /** Blue progress bar style. */
  Blue = 'BLUE',
  /** Custom progress bar style. */
  Custom = 'CUSTOM',
  /** Green progress bar style. */
  Green = 'GREEN',
  /** Grey progress bar style. */
  Grey = 'GREY',
  /** Orange progress bar style. */
  Orange = 'ORANGE',
  /** Red progress bar style. */
  Red = 'RED'
}

/** Type of page progress indicator to be displayed. */
export enum FormPageProgressTypeEnum {
  /** Don't show a page progress indicator. */
  None = 'NONE',
  /** Show page progress indicator as a percentage. */
  Percentage = 'PERCENTAGE',
  /** Show page progress indicator as steps. */
  Steps = 'STEPS'
}

/** Gravity Forms form pagination data. */
export type FormPagination = {
  __typename?: 'FormPagination';
  /** Progress bar background color. Can be any CSS color value. Only applies when `style` is set to &quot;CUSTOM&quot;. */
  backgroundColor?: Maybe<Scalars['String']>;
  /** Progress bar text color. Can be any CSS color value. Only applies when `style` is set to &quot;CUSTOM&quot;. */
  color?: Maybe<Scalars['String']>;
  /** Whether the confirmation bar should be displayed with the confirmation text. */
  hasProgressbarOnConfirmation?: Maybe<Scalars['Boolean']>;
  /** Last page button data. */
  lastPageButton?: Maybe<FormLastPageButton>;
  /** Names of the form&#039;s pages. */
  pageNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The confirmation text to display once the end of the progress bar has been reached. Only applies when `hasProgressbarOnConfirmation` is set to true. */
  progressbarCompletionText?: Maybe<Scalars['String']>;
  /** Style of progress bar. */
  style?: Maybe<FormPageProgressStyleEnum>;
  /** Type of progress indicator. */
  type?: Maybe<FormPageProgressTypeEnum>;
};

/** Gravity Forms form Personal Data settings. */
export type FormPersonalData = {
  __typename?: 'FormPersonalData';
  /** The policies governing which entry data to include when erasing and exporting personal data. */
  dataPolicies?: Maybe<FormDataPolicies>;
  /** The number of days to retain entries. `null` if `retentionPolicy` is set to `RETAIN` entries indefinitely. */
  daysToRetain?: Maybe<Scalars['Int']>;
  /** The policy for retaining old entry data. */
  retentionPolicy?: Maybe<FormRetentionPolicyEnum>;
  /** Whether the IP address should be saved to the form submission. */
  shouldSaveIP?: Maybe<Scalars['Boolean']>;
};

/** Gravity Forms form entry limititation details. */
export type FormPostCreation = {
  __typename?: 'FormPostCreation';
  /** When `useCurrentUserAsAuthor` is `false`, this contains the User object for the author. */
  author?: Maybe<User>;
  /** When `useCurrentUserAsAuthor` is `false`, this property contains the user database that will be used as the Post author. */
  authorDatabaseId?: Maybe<Scalars['Int']>;
  /** When `useCurrentUserAsAuthor` is `false`, this property contains the user ID that will be used as the Post author. */
  authorId?: Maybe<Scalars['ID']>;
  /** Form forms with Post fields, but without a Post Category field, this property contains the default category database ID the post will be associated with when created. */
  categoryDatabaseId?: Maybe<Scalars['Int']>;
  /** Template to be used when creating the post content. Field variables (i.e. {Name:3} ) can be added to the template to insert user submitted values into the post content. Only applicable when `hasContentTemplate` is `true`. */
  contentTemplate?: Maybe<Scalars['String']>;
  /** Determines the format that the Post should be created with. */
  format?: Maybe<PostFormatTypeEnum>;
  /** Determines if the post template functionality is enabled. When enabled, the post content will be created based on the template specified by `contentTemplate`. */
  hasContentTemplate?: Maybe<Scalars['Boolean']>;
  /** Determines if the post title template functionality is enabled. When enabled, the post title will be created based on the template specified by `titleTemplate`. */
  hasTitleTemplate?: Maybe<Scalars['Boolean']>;
  /** For forms with Post fields, this determines if the post should be created using the current logged in user as the author. */
  shouldUseCurrentUserAsAuthor?: Maybe<Scalars['Boolean']>;
  /** For forms with Post fields, determines the status that the Post should be created with. */
  status?: Maybe<Scalars['String']>;
  /** Template to be used when creating the post title. Field variables (i.e. {Name:3} ) can be added to the template to insert user submitted values into the post title. Only applicable when `hasTitleTemplate` is `true`. */
  titleTemplate?: Maybe<Scalars['String']>;
};

/** The Personal Data retention policy. */
export enum FormRetentionPolicyEnum {
  /** Entries will be deleted automatically after a specified number of days. */
  Delete = 'DELETE',
  /** Entries will be retain indefinitely. */
  Retain = 'RETAIN',
  /** Entries will be trashed automatically after a specified number of days. */
  Trash = 'TRASH'
}

/** Operator to be used when evaluating logic rules. */
export enum FormRuleOperatorEnum {
  /** Evaluates values that CONTAIN the comparison value. */
  Contains = 'CONTAINS',
  /** Evaluates values that END with the comparison value. */
  EndsWith = 'ENDS_WITH',
  /** Evaluates values that are GREATER than the comparison value. */
  GreaterThan = 'GREATER_THAN',
  /** Evaluates values that match the comparison value. */
  Is = 'IS',
  /** Evaluates values that do NOT match the comparison value. */
  IsNot = 'IS_NOT',
  /** Evaluates values that are LESS than the comparison value. */
  LessThan = 'LESS_THAN',
  /** Evaluates values that START with the comparison value. */
  StartsWith = 'STARTS_WITH'
}

/** Gravity Forms form Save and Continue data. */
export type FormSaveAndContinue = {
  __typename?: 'FormSaveAndContinue';
  /** Contains the save button text. */
  buttonText?: Maybe<Scalars['String']>;
  /** Whether the Save And Continue feature is enabled. */
  hasSaveAndContinue?: Maybe<Scalars['Boolean']>;
};

/** Gravity Forms form scheduling data. */
export type FormSchedule = {
  __typename?: 'FormSchedule';
  /** Message to be displayed when form is no longer available. */
  closedMessage?: Maybe<Scalars['String']>;
  /** The Date/time details when the form will become inactive. */
  endDetails?: Maybe<FormScheduleDetails>;
  /** Specifies if this form is scheduled to be displayed only during a certain configured date/time. */
  hasSchedule?: Maybe<Scalars['Boolean']>;
  /** Message to be displayed when form is not yet available. */
  pendingMessage?: Maybe<Scalars['String']>;
  /** The Date/time details when the form will become active/visible. */
  startDetails?: Maybe<FormScheduleDetails>;
};

/** Gravity Forms form scheduling data. */
export type FormScheduleDetails = {
  __typename?: 'FormScheduleDetails';
  /** Whether the date is in the AM or PM of a 12-hour clock. */
  amPm?: Maybe<AmPmEnum>;
  /** The schedule date in local time. */
  date?: Maybe<Scalars['String']>;
  /** The schedule date in GMT. */
  dateGmt?: Maybe<Scalars['String']>;
  /** The hour (1-12). */
  hour?: Maybe<Scalars['Int']>;
  /** The minute. */
  minute?: Maybe<Scalars['Int']>;
};

/** Status of forms to get. Default is ACTIVE. */
export enum FormStatusEnum {
  /** Active forms (default). */
  Active = 'ACTIVE',
  /** Inactive forms. */
  Inactive = 'INACTIVE',
  /** Inactive forms in the trash. */
  InactiveTrashed = 'INACTIVE_TRASHED',
  /** Active forms in the trash. */
  Trashed = 'TRASHED'
}

/** Determines how sub-labels are aligned. */
export enum FormSubLabelPlacementEnum {
  /** The sub-label is displayed above the sub-field input (i.e. immediately after the field label). */
  Above = 'ABOVE',
  /** The sub-label is displayed below the sub-field input. */
  Below = 'BELOW'
}

/** Gravity Forms submit button. */
export type FormSubmitButton = {
  __typename?: 'FormSubmitButton';
  /** Controls when the form button should be visible based on values selected on the form. */
  conditionalLogic?: Maybe<ConditionalLogic>;
  /** Contains the URL for the image button. Only applicable when type is set to image. */
  imageUrl?: Maybe<Scalars['String']>;
  /** The number of CSS grid columns the field should span. */
  layoutGridColumnSpan?: Maybe<Scalars['Int']>;
  /** Where the submit button should be located. */
  location?: Maybe<FormSubmitButtonLocationEnum>;
  /** Contains the button text. Only applicable when type is set to text. */
  text?: Maybe<Scalars['String']>;
  /** Specifies the type of button to be displayed. Defaults to TEXT. */
  type?: Maybe<FormButtonTypeEnum>;
  /** The width of the submit button element. */
  width?: Maybe<FormSubmitButtonWidthEnum>;
};

/** Where the submit button should be located. */
export enum FormSubmitButtonLocationEnum {
  /** The submit button will be placed in a new row after all fields of the form. */
  Bottom = 'BOTTOM',
  /** The submit button will be placed on the last row of the form where it will fill the remaining space left by field columns. */
  Inline = 'INLINE'
}

/** Submit button width. */
export enum FormSubmitButtonWidthEnum {
  /** The width is set to match that of the button text. */
  Auto = 'AUTO',
  /** The width is set to fill 100% of the container. */
  Full = 'FULL'
}

/** Options for ordering the connection. */
export type FormsConnectionOrderbyInput = {
  /** The field name used to sort the results. */
  field?: InputMaybe<Scalars['String']>;
  /** The cardinality of the order of the connection. */
  order?: InputMaybe<OrderEnum>;
};

/** The general setting type */
export type GeneralSettings = {
  __typename?: 'GeneralSettings';
  /** A date format for all date strings. */
  dateFormat?: Maybe<Scalars['String']>;
  /** Site tagline. */
  description?: Maybe<Scalars['String']>;
  /** This address is used for admin purposes, like new user notification. */
  email?: Maybe<Scalars['String']>;
  /** WordPress locale code. */
  language?: Maybe<Scalars['String']>;
  /** A day number of the week that the week should start on. */
  startOfWeek?: Maybe<Scalars['Int']>;
  /** A time format for all time strings. */
  timeFormat?: Maybe<Scalars['String']>;
  /** A city in the same timezone as you. */
  timezone?: Maybe<Scalars['String']>;
  /** Site title. */
  title?: Maybe<Scalars['String']>;
  /** Site URL. */
  url?: Maybe<Scalars['String']>;
};

/** Input for the generateAuthorizationCode mutation. */
export type GenerateAuthorizationCodeInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Email for WordPress user */
  email?: InputMaybe<Scalars['String']>;
  /** Password for WordPress user */
  password?: InputMaybe<Scalars['String']>;
  /** Username for WordPress user */
  username?: InputMaybe<Scalars['String']>;
};

/** The payload for the generateAuthorizationCode mutation. */
export type GenerateAuthorizationCodePayload = {
  __typename?: 'GenerateAuthorizationCodePayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Authorization code used for requesting refresh/access tokens */
  code?: Maybe<Scalars['String']>;
  /** Error encountered during user authentication, if any */
  error?: Maybe<Scalars['String']>;
};

/** Currencies supported by Gravity Forms. */
export enum GfCurrencyEnum {
  /** Australian Dollar . */
  Aud = 'AUD',
  /** Brazilian Real . */
  Brl = 'BRL',
  /** Canadian Dollar . */
  Cad = 'CAD',
  /** Swiss Franc . */
  Chf = 'CHF',
  /** Czech Koruna . */
  Czk = 'CZK',
  /** Danish Krone . */
  Dkk = 'DKK',
  /** Euro . */
  Eur = 'EUR',
  /** Pound Sterling . */
  Gbp = 'GBP',
  /** Hong Kong Dollar . */
  Hkd = 'HKD',
  /** Hungarian Forint . */
  Huf = 'HUF',
  /** Israeli New Sheqel . */
  Ils = 'ILS',
  /** Japanese Yen . */
  Jpy = 'JPY',
  /** Mexican Peso . */
  Mxn = 'MXN',
  /** Malaysian Ringgit . */
  Myr = 'MYR',
  /** Norwegian Krone . */
  Nok = 'NOK',
  /** New Zealand Dollar . */
  Nzd = 'NZD',
  /** Philippine Peso . */
  Php = 'PHP',
  /** Polish Zloty . */
  Pln = 'PLN',
  /** Russian Ruble . */
  Rub = 'RUB',
  /** Swedish Krona . */
  Sek = 'SEK',
  /** Singapore Dollar . */
  Sgd = 'SGD',
  /** Thai Baht . */
  Thb = 'THB',
  /** Taiwan New Dollar . */
  Twd = 'TWD',
  /** U.S. Dollar . */
  Usd = 'USD',
  /** South African Rand . */
  Zar = 'ZAR'
}

/** A Gravity Forms draft entry. */
export type GfDraftEntry = GfEntry & Node & NodeWithForm & {
  __typename?: 'GfDraftEntry';
  /** The user who created the entry. */
  createdBy?: Maybe<User>;
  /** Database ID of the user that submitted of the form if a logged in user submitted the form. */
  createdByDatabaseId?: Maybe<Scalars['Int']>;
  /** Global ID of the user that submitted of the form if a logged in user submitted the form. */
  createdById?: Maybe<Scalars['ID']>;
  /** The date and time that the entry was created in local time. */
  dateCreated?: Maybe<Scalars['String']>;
  /** The date and time that the entry was created in GMT. */
  dateCreatedGmt?: Maybe<Scalars['String']>;
  /** The date and time that the entry was created in local time. */
  dateUpdated?: Maybe<Scalars['String']>;
  /** The date and time that the entry was updated in GMT. */
  dateUpdatedGmt?: Maybe<Scalars['String']>;
  /** The form object of the node. */
  form?: Maybe<GfForm>;
  /** The database identifier of the form of the node. */
  formDatabaseId?: Maybe<Scalars['Int']>;
  /** Connection between the GfEntry type and the FormField type */
  formFields?: Maybe<GfEntryToFormFieldConnection>;
  /** The globally unique identifier of the form of the node. */
  formId?: Maybe<Scalars['ID']>;
  /** The globally unique ID for the object */
  id: Scalars['ID'];
  /** Client IP of user who submitted the form. */
  ip?: Maybe<Scalars['String']>;
  /** Whether the entry is a draft. */
  isDraft?: Maybe<Scalars['Boolean']>;
  /** Whether the entry has been submitted. */
  isSubmitted?: Maybe<Scalars['Boolean']>;
  /** The resume token. Only applies to draft entries. */
  resumeToken?: Maybe<Scalars['String']>;
  /** Source URL of page that contained the form when it was submitted. */
  sourceUrl?: Maybe<Scalars['String']>;
  /** Provides the name and version of both the browser and operating system from which the entry was submitted. */
  userAgent?: Maybe<Scalars['String']>;
};


/** A Gravity Forms draft entry. */
export type GfDraftEntryFormFieldsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GfEntryToFormFieldConnectionWhereArgs>;
};

/** Gravity Forms entry interface. */
export type GfEntry = {
  /** The user who created the entry. */
  createdBy?: Maybe<User>;
  /** Database ID of the user that submitted of the form if a logged in user submitted the form. */
  createdByDatabaseId?: Maybe<Scalars['Int']>;
  /** Global ID of the user that submitted of the form if a logged in user submitted the form. */
  createdById?: Maybe<Scalars['ID']>;
  /** The date and time that the entry was created in local time. */
  dateCreated?: Maybe<Scalars['String']>;
  /** The date and time that the entry was created in GMT. */
  dateCreatedGmt?: Maybe<Scalars['String']>;
  /** The date and time that the entry was created in local time. */
  dateUpdated?: Maybe<Scalars['String']>;
  /** The date and time that the entry was updated in GMT. */
  dateUpdatedGmt?: Maybe<Scalars['String']>;
  /** The form object of the node. */
  form?: Maybe<GfForm>;
  /** The database identifier of the form of the node. */
  formDatabaseId?: Maybe<Scalars['Int']>;
  /** Connection between the GfEntry type and the FormField type */
  formFields?: Maybe<GfEntryToFormFieldConnection>;
  /** The globally unique identifier of the form of the node. */
  formId?: Maybe<Scalars['ID']>;
  /** The globally unique ID for the object */
  id: Scalars['ID'];
  /** Client IP of user who submitted the form. */
  ip?: Maybe<Scalars['String']>;
  /** Whether the entry is a draft. */
  isDraft?: Maybe<Scalars['Boolean']>;
  /** Whether the entry has been submitted. */
  isSubmitted?: Maybe<Scalars['Boolean']>;
  /** Source URL of page that contained the form when it was submitted. */
  sourceUrl?: Maybe<Scalars['String']>;
  /** Provides the name and version of both the browser and operating system from which the entry was submitted. */
  userAgent?: Maybe<Scalars['String']>;
};


/** Gravity Forms entry interface. */
export type GfEntryFormFieldsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GfEntryToFormFieldConnectionWhereArgs>;
};

/** Connection to GfEntry Nodes */
export type GfEntryConnection = {
  /** A list of edges (relational context) between RootQuery and connected GfEntry Nodes */
  edges: Array<GfEntryConnectionEdge>;
  /** A list of connected GfEntry Nodes */
  nodes: Array<GfEntry>;
  /** Information about pagination in a connection. */
  pageInfo: GfEntryConnectionPageInfo;
};

/** Edge between a Node and a connected GfEntry */
export type GfEntryConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The connected GfEntry Node */
  node: GfEntry;
};

/** Page Info on the connected GfEntryConnectionEdge */
export type GfEntryConnectionPageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Connection between the GfEntry type and the FormField type */
export type GfEntryToFormFieldConnection = FormFieldConnection & {
  __typename?: 'GfEntryToFormFieldConnection';
  /** Edges for the GfEntryToFormFieldConnection connection */
  edges: Array<GfEntryToFormFieldConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<FormField>;
  /** Information about pagination in a connection. */
  pageInfo: GfEntryToFormFieldConnectionPageInfo;
};

/** An edge in a connection */
export type GfEntryToFormFieldConnectionEdge = FormFieldConnectionEdge & {
  __typename?: 'GfEntryToFormFieldConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: FormField;
};

/** Page Info on the &quot;GfEntryToFormFieldConnection&quot; */
export type GfEntryToFormFieldConnectionPageInfo = FormFieldConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'GfEntryToFormFieldConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the GfEntryToFormFieldConnection connection */
export type GfEntryToFormFieldConnectionWhereArgs = {
  /** Array of form field adminLabels to return. */
  adminLabels?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Array of Gravity Forms Field types to return. */
  fieldTypes?: InputMaybe<Array<InputMaybe<FormFieldTypeEnum>>>;
  /** Array of form field IDs to return. */
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** The form page number to return. */
  pageNumber?: InputMaybe<Scalars['Int']>;
};

/** Gravity Forms form. */
export type GfForm = DatabaseIdentifier & Node & {
  __typename?: 'GfForm';
  /**
   * Contains the form button settings such as the button text or image button source.
   * @deprecated Use `submitButton` field instead
   */
  button?: Maybe<FormSubmitButton>;
  /** Contains the form confirmation settings such as confirmation text or redirect URL. */
  confirmations?: Maybe<Array<Maybe<FormConfirmation>>>;
  /** String containing the custom CSS classes to be added to the &lt;form&gt; tag. */
  cssClass?: Maybe<Scalars['String']>;
  /** The custom text to use to indicate a field is required. */
  customRequiredIndicator?: Maybe<Scalars['String']>;
  /** The unique identifier stored in the database */
  databaseId: Scalars['Int'];
  /** The date and time that the entry was created in local time. */
  dateCreated?: Maybe<Scalars['String']>;
  /** The date and time that the entry was created in GMT. */
  dateCreatedGmt?: Maybe<Scalars['String']>;
  /** Form description. */
  description?: Maybe<Scalars['String']>;
  /** Determines if the field description is displayed above the field input (i.e. immediately after the field label) or below the field input. */
  descriptionPlacement?: Maybe<FormDescriptionPlacementEnum>;
  /** Connection between the GfForm type and the GfEntry type */
  entries?: Maybe<GfFormToGfEntryConnection>;
  /** The entry limit settings. */
  entryLimits?: Maybe<FormEntryLimits>;
  /** CSS class for the first page. */
  firstPageCssClass?: Maybe<Scalars['String']>;
  /** Connection between the GfForm type and the FormField type */
  formFields?: Maybe<GfFormToFormFieldConnection>;
  /**
   * Form ID.
   * @deprecated Deprecated in favor of the databaseId field.
   */
  formId?: Maybe<Scalars['Int']>;
  /** When enabled, conditional logic hide/show operation will be performed with a jQuery slide animation. Only applicable to forms with conditional logic. */
  hasConditionalLogicAnimation?: Maybe<Scalars['Boolean']>;
  /** Specifies if the form has the Honeypot spam-protection feature. */
  hasHoneypot?: Maybe<Scalars['Boolean']>;
  /** If enabled, will show a summary that lists form validation errors at the top of the form when a user attempts a failed submission. */
  hasValidationSummary?: Maybe<Scalars['Boolean']>;
  /** The globally unique ID for the object */
  id: Scalars['ID'];
  /** Determines whether the form is active. */
  isActive?: Maybe<Scalars['Boolean']>;
  /** Determines whether the form is in the trash. */
  isTrash?: Maybe<Scalars['Boolean']>;
  /** Determines where the field labels should be placed in relation to the field. */
  labelPlacement?: Maybe<FormLabelPlacementEnum>;
  /**
   * Last page button data.
   * @deprecated Use `pagination.lastPageButton` instead
   */
  lastPageButton?: Maybe<FormLastPageButton>;
  /** Login requirements data. */
  login?: Maybe<FormLogin>;
  /** The Gravity Forms markup version. */
  markupVersion?: Maybe<Scalars['Int']>;
  /** The ID to assign to the next field that is added to the form. */
  nextFieldId?: Maybe<Scalars['Int']>;
  /** The properties for all the email notifications which exist for a form. */
  notifications?: Maybe<Array<Maybe<FormNotification>>>;
  /** Pagination data. */
  pagination?: Maybe<FormPagination>;
  /** Personal data settings. */
  personalData?: Maybe<FormPersonalData>;
  /** Post creation data. */
  postCreation?: Maybe<FormPostCreation>;
  /** Type of indicator to use when field is required. */
  requiredIndicator?: Maybe<FormFieldRequiredIndicatorEnum>;
  /** \&quot;Save and Continue\&quot; data. */
  saveAndContinue?: Maybe<FormSaveAndContinue>;
  /** Form scheduling data. */
  scheduling?: Maybe<FormSchedule>;
  /** How sub-labels are aligned. */
  subLabelPlacement?: Maybe<FormSubLabelPlacementEnum>;
  /** Contains the form button settings such as the button text or image button source. */
  submitButton?: Maybe<FormSubmitButton>;
  /** Form title. */
  title?: Maybe<Scalars['String']>;
  /** The version of Gravity Forms used to create this form. */
  version?: Maybe<Scalars['String']>;
};


/** Gravity Forms form. */
export type GfFormEntriesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GfFormToGfEntryConnectionWhereArgs>;
};


/** Gravity Forms form. */
export type GfFormFormFieldsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GfFormToFormFieldConnectionWhereArgs>;
};

/** Connection to GfForm Nodes */
export type GfFormConnection = {
  /** A list of edges (relational context) between RootQuery and connected GfForm Nodes */
  edges: Array<GfFormConnectionEdge>;
  /** A list of connected GfForm Nodes */
  nodes: Array<GfForm>;
  /** Information about pagination in a connection. */
  pageInfo: GfFormConnectionPageInfo;
};

/** Edge between a Node and a connected GfForm */
export type GfFormConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The connected GfForm Node */
  node: GfForm;
};

/** Page Info on the connected GfFormConnectionEdge */
export type GfFormConnectionPageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Connection between the GfForm type and the FormField type */
export type GfFormToFormFieldConnection = FormFieldConnection & {
  __typename?: 'GfFormToFormFieldConnection';
  /** Edges for the GfFormToFormFieldConnection connection */
  edges: Array<GfFormToFormFieldConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<FormField>;
  /** Information about pagination in a connection. */
  pageInfo: GfFormToFormFieldConnectionPageInfo;
};

/** An edge in a connection */
export type GfFormToFormFieldConnectionEdge = FormFieldConnectionEdge & {
  __typename?: 'GfFormToFormFieldConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: FormField;
};

/** Page Info on the &quot;GfFormToFormFieldConnection&quot; */
export type GfFormToFormFieldConnectionPageInfo = FormFieldConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'GfFormToFormFieldConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the GfFormToFormFieldConnection connection */
export type GfFormToFormFieldConnectionWhereArgs = {
  /** Array of form field adminLabels to return. */
  adminLabels?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Array of Gravity Forms Field types to return. */
  fieldTypes?: InputMaybe<Array<InputMaybe<FormFieldTypeEnum>>>;
  /** Array of form field IDs to return. */
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** The form page number to return. */
  pageNumber?: InputMaybe<Scalars['Int']>;
};

/** Connection between the GfForm type and the GfEntry type */
export type GfFormToGfEntryConnection = Connection & GfEntryConnection & {
  __typename?: 'GfFormToGfEntryConnection';
  /** The number of (filtered) entries submitted to the form. */
  count?: Maybe<Scalars['Int']>;
  /** Edges for the GfFormToGfEntryConnection connection */
  edges: Array<GfFormToGfEntryConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<GfEntry>;
  /** Information about pagination in a connection. */
  pageInfo: GfFormToGfEntryConnectionPageInfo;
};

/** An edge in a connection */
export type GfFormToGfEntryConnectionEdge = Edge & GfEntryConnectionEdge & {
  __typename?: 'GfFormToGfEntryConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: GfEntry;
};

/** Page Info on the &quot;GfFormToGfEntryConnection&quot; */
export type GfFormToGfEntryConnectionPageInfo = GfEntryConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'GfFormToGfEntryConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the GfFormToGfEntryConnection connection */
export type GfFormToGfEntryConnectionWhereArgs = {
  /** Date filters to apply. */
  dateFilters?: InputMaybe<EntriesDateFiltersInput>;
  /** Field-specific filters to apply. */
  fieldFilters?: InputMaybe<Array<InputMaybe<EntriesFieldFiltersInput>>>;
  /** Whether to filter by ALL or ANY of the field filters. Default is ALL. */
  fieldFiltersMode?: InputMaybe<FieldFiltersModeEnum>;
  /** How to sort the entries. */
  orderby?: InputMaybe<EntriesConnectionOrderbyInput>;
  /** Entry status. Default is "ACTIVE". */
  status?: InputMaybe<EntryStatusEnum>;
};

/** Gravity Forms Logging Settings. */
export type GfLogger = {
  __typename?: 'GfLogger';
  /** Whether the logger is enabled. */
  isEnabled?: Maybe<Scalars['Boolean']>;
  /** The name of the Gravity Forms logger. */
  name?: Maybe<Scalars['String']>;
};

/** Gravity Forms Settings. */
export type GfSettings = {
  __typename?: 'GfSettings';
  /** The default currency for your forms. Used for product, credit card, and other fields. */
  currency?: Maybe<GfCurrencyEnum>;
  /** Whether Gravity Forms to download and install bug fixes and security updates automatically in the background. Requires a valid license key. */
  hasBackgroundUpdates?: Maybe<Scalars['Boolean']>;
  /** Whether to output Gravity Forms&#039; default CSS. */
  hasDefaultCss?: Maybe<Scalars['Boolean']>;
  /** Whether to display the forms menu in the WordPress top toolbar. The forms menu will display the ten forms recently opened in the form editor. */
  hasToolbar?: Maybe<Scalars['Boolean']>;
  /** Whether the server-generated form markup uses HTML5. */
  isHtml5Enabled?: Maybe<Scalars['Boolean']>;
  /** Enable to prevent extraneous scripts and styles from being printed on a Gravity Forms admin pages, reducing conflicts with other plugins and themes. */
  isNoConflictModeEnabled?: Maybe<Scalars['Boolean']>;
  /** Logging settings. */
  logging?: Maybe<GfSettingsLogging>;
  /** Recaptcha settings. */
  recaptcha?: Maybe<GfSettingsRecaptcha>;
};

/** Gravity Forms Logging Settings. */
export type GfSettingsLogging = {
  __typename?: 'GfSettingsLogging';
  /** Whether Gravity Forms internal logging is enabled. Logging allows you to easily debug the inner workings of Gravity Forms to solve any possible issues. */
  isLoggingEnabled?: Maybe<Scalars['Boolean']>;
  /** A list of registered Gravity Forms loggers and their configurations. */
  loggers?: Maybe<Array<Maybe<GfLogger>>>;
};

/** Gravity Forms reCAPTCHA Settings. */
export type GfSettingsRecaptcha = {
  __typename?: 'GfSettingsRecaptcha';
  /** The public reCAPTCHA site key. */
  publicKey?: Maybe<Scalars['String']>;
  /** The type of of reCAPTCHA v2 to be used */
  type?: Maybe<RecaptchaTypeEnum>;
};

/** A Gravity Forms submitted entry. */
export type GfSubmittedEntry = DatabaseIdentifier & GfEntry & Node & NodeWithForm & {
  __typename?: 'GfSubmittedEntry';
  /** The user who created the entry. */
  createdBy?: Maybe<User>;
  /** Database ID of the user that submitted of the form if a logged in user submitted the form. */
  createdByDatabaseId?: Maybe<Scalars['Int']>;
  /** Global ID of the user that submitted of the form if a logged in user submitted the form. */
  createdById?: Maybe<Scalars['ID']>;
  /** The unique identifier stored in the database */
  databaseId: Scalars['Int'];
  /** The date and time that the entry was created in local time. */
  dateCreated?: Maybe<Scalars['String']>;
  /** The date and time that the entry was created in GMT. */
  dateCreatedGmt?: Maybe<Scalars['String']>;
  /** The date and time that the entry was created in local time. */
  dateUpdated?: Maybe<Scalars['String']>;
  /** The date and time that the entry was updated in GMT. */
  dateUpdatedGmt?: Maybe<Scalars['String']>;
  /**
   * The entry ID. Returns null for draft entries.
   * @deprecated Deprecated in favor of the databaseId field.
   */
  entryId?: Maybe<Scalars['Int']>;
  /** The form object of the node. */
  form?: Maybe<GfForm>;
  /** The database identifier of the form of the node. */
  formDatabaseId?: Maybe<Scalars['Int']>;
  /** Connection between the GfEntry type and the FormField type */
  formFields?: Maybe<GfEntryToFormFieldConnection>;
  /** The globally unique identifier of the form of the node. */
  formId?: Maybe<Scalars['ID']>;
  /** The globally unique ID for the object */
  id: Scalars['ID'];
  /** Client IP of user who submitted the form. */
  ip?: Maybe<Scalars['String']>;
  /** Whether the entry is a draft. */
  isDraft?: Maybe<Scalars['Boolean']>;
  /** Whether the entry has been read. */
  isRead?: Maybe<Scalars['Boolean']>;
  /** Indicates if the entry has been starred (i.e marked with a star). */
  isStarred?: Maybe<Scalars['Boolean']>;
  /** Whether the entry has been submitted. */
  isSubmitted?: Maybe<Scalars['Boolean']>;
  /** For forms with Post fields, this is the post object that was created. */
  post?: Maybe<Post>;
  /** For forms with Post fields, this property contains the Id of the Post that was created. */
  postDatabaseId?: Maybe<Scalars['Int']>;
  /** Source URL of page that contained the form when it was submitted. */
  sourceUrl?: Maybe<Scalars['String']>;
  /** The current status of the entry. */
  status?: Maybe<EntryStatusEnum>;
  /** Provides the name and version of both the browser and operating system from which the entry was submitted. */
  userAgent?: Maybe<Scalars['String']>;
};


/** A Gravity Forms submitted entry. */
export type GfSubmittedEntryFormFieldsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GfEntryToFormFieldConnectionWhereArgs>;
};

/** Connection to GfSubmittedEntry Nodes */
export type GfSubmittedEntryConnection = {
  /** A list of edges (relational context) between RootQuery and connected GfSubmittedEntry Nodes */
  edges: Array<GfSubmittedEntryConnectionEdge>;
  /** A list of connected GfSubmittedEntry Nodes */
  nodes: Array<GfSubmittedEntry>;
  /** Information about pagination in a connection. */
  pageInfo: GfSubmittedEntryConnectionPageInfo;
};

/** Edge between a Node and a connected GfSubmittedEntry */
export type GfSubmittedEntryConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The connected GfSubmittedEntry Node */
  node: GfSubmittedEntry;
};

/** Page Info on the connected GfSubmittedEntryConnectionEdge */
export type GfSubmittedEntryConnectionPageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** The graphqlDocument type */
export type GraphqlDocument = ContentNode & DatabaseIdentifier & Node & NodeWithContentEditor & NodeWithTemplate & NodeWithTitle & UniformResourceIdentifiable & {
  __typename?: 'GraphqlDocument';
  /** Alias names for saved GraphQL query documents */
  alias?: Maybe<Array<Scalars['String']>>;
  /** @deprecated Deprecated in favor of using Next.js pages */
  conditionalTags?: Maybe<ConditionalTags>;
  /** The content of the post. */
  content?: Maybe<Scalars['String']>;
  /** Connection between the ContentNode type and the ContentType type */
  contentType?: Maybe<ContentNodeToContentTypeConnectionEdge>;
  /** The name of the Content Type the node belongs to */
  contentTypeName: Scalars['String'];
  /** The unique identifier stored in the database */
  databaseId: Scalars['Int'];
  /** Post publishing date. */
  date?: Maybe<Scalars['String']>;
  /** The publishing date set in GMT. */
  dateGmt?: Maybe<Scalars['String']>;
  /** Description for the saved GraphQL document */
  description?: Maybe<Scalars['String']>;
  /** The desired slug of the post */
  desiredSlug?: Maybe<Scalars['String']>;
  /** If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds */
  editingLockedBy?: Maybe<ContentNodeToEditLockConnectionEdge>;
  /** The RSS enclosure for the object */
  enclosure?: Maybe<Scalars['String']>;
  /** Connection between the ContentNode type and the EnqueuedScript type */
  enqueuedScripts?: Maybe<ContentNodeToEnqueuedScriptConnection>;
  /** Connection between the ContentNode type and the EnqueuedStylesheet type */
  enqueuedStylesheets?: Maybe<ContentNodeToEnqueuedStylesheetConnection>;
  /** Allow, deny or default access grant for specific query */
  grant?: Maybe<Scalars['String']>;
  /**
   * The id field matches the WP_Post-&gt;ID field.
   * @deprecated Deprecated in favor of the databaseId field
   */
  graphqlDocumentId: Scalars['Int'];
  /** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
  guid?: Maybe<Scalars['String']>;
  /** The globally unique identifier of the graphql_document object. */
  id: Scalars['ID'];
  /** Whether the node is a Content Node */
  isContentNode: Scalars['Boolean'];
  /** Whether the object is a node in the preview state */
  isPreview?: Maybe<Scalars['Boolean']>;
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** Whether the node is a Term */
  isTermNode: Scalars['Boolean'];
  /** The user that most recently edited the node */
  lastEditedBy?: Maybe<ContentNodeToEditLastConnectionEdge>;
  /** The permalink of the post */
  link?: Maybe<Scalars['String']>;
  /** HTTP Cache-Control max-age directive for a saved GraphQL document */
  maxAgeHeader?: Maybe<Scalars['Int']>;
  /** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
  modified?: Maybe<Scalars['String']>;
  /** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
  modifiedGmt?: Maybe<Scalars['String']>;
  /**
   * Connection between the GraphqlDocument type and the graphqlDocument type
   * @deprecated The &quot;GraphqlDocument&quot; Type is not publicly queryable and does not support previews. This field will be removed in the future.
   */
  preview?: Maybe<GraphqlDocumentToPreviewConnectionEdge>;
  /** The database id of the preview node */
  previewRevisionDatabaseId?: Maybe<Scalars['Int']>;
  /** Whether the object is a node in the preview state */
  previewRevisionId?: Maybe<Scalars['ID']>;
  /** The Yoast SEO data of the ContentNode */
  seo?: Maybe<PostTypeSeo>;
  /** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
  slug?: Maybe<Scalars['String']>;
  /** The current status of the object */
  status?: Maybe<Scalars['String']>;
  /** The template assigned to the node */
  template?: Maybe<ContentTemplate>;
  templates?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
  title?: Maybe<Scalars['String']>;
  /** The unique resource identifier path */
  uri?: Maybe<Scalars['String']>;
};


/** The graphqlDocument type */
export type GraphqlDocumentContentArgs = {
  format?: InputMaybe<PostObjectFieldFormatEnum>;
};


/** The graphqlDocument type */
export type GraphqlDocumentEnqueuedScriptsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** The graphqlDocument type */
export type GraphqlDocumentEnqueuedStylesheetsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** The graphqlDocument type */
export type GraphqlDocumentTitleArgs = {
  format?: InputMaybe<PostObjectFieldFormatEnum>;
};

/** Connection to graphqlDocument Nodes */
export type GraphqlDocumentConnection = {
  /** A list of edges (relational context) between RootQuery and connected graphqlDocument Nodes */
  edges: Array<GraphqlDocumentConnectionEdge>;
  /** A list of connected graphqlDocument Nodes */
  nodes: Array<GraphqlDocument>;
  /** Information about pagination in a connection. */
  pageInfo: GraphqlDocumentConnectionPageInfo;
};

/** Edge between a Node and a connected graphqlDocument */
export type GraphqlDocumentConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The connected graphqlDocument Node */
  node: GraphqlDocument;
};

/** Page Info on the connected GraphqlDocumentConnectionEdge */
export type GraphqlDocumentConnectionPageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum GraphqlDocumentIdType {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID',
  /** Identify a resource by the slug. Available to non-hierarchcial Types where the slug is a unique identifier. */
  Slug = 'SLUG',
  /** Identify a resource by the URI. */
  Uri = 'URI'
}

/** Connection between the GraphqlDocument type and the graphqlDocument type */
export type GraphqlDocumentToPreviewConnectionEdge = Edge & GraphqlDocumentConnectionEdge & OneToOneConnection & {
  __typename?: 'GraphqlDocumentToPreviewConnectionEdge';
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The node of the connection, without the edges
   * @deprecated The &quot;GraphqlDocument&quot; Type is not publicly queryable and does not support previews. This field will be removed in the future.
   */
  node: GraphqlDocument;
};

/** A Gravity Forms   field. */
export type HiddenField = FormField & {
  __typename?: 'HiddenField';
  /** Determines if the field’s value can be pre-populated dynamically. */
  canPrepopulate?: Maybe<Scalars['Boolean']>;
  /** Contains the default value for the field. When specified, the field&#039;s value will be populated with the contents of this property when the form is displayed. */
  defaultValue?: Maybe<Scalars['String']>;
  /** Indicates the field is only displayed and its contents are not submitted with the form/saved with the entry. This is set to true. */
  displayOnly?: Maybe<Scalars['Boolean']>;
  /** Field ID. */
  id: Scalars['Int'];
  /** Assigns a name to this field so that it can be populated dynamically via this input name. Only applicable when canPrepopulate is `true`. */
  inputName?: Maybe<Scalars['String']>;
  /** The base form field type used to display the input. A good example is the Post Custom Field that can be displayed as various different types of fields. */
  inputType?: Maybe<FormFieldTypeEnum>;
  /** Field label that will be displayed on the form and on the admin pages. */
  label?: Maybe<Scalars['String']>;
  /** The number of CSS grid columns the field should span. */
  layoutGridColumnSpan?: Maybe<Scalars['Int']>;
  /** The number of CSS grid columns the spacer field following this one should span. */
  layoutSpacerGridColumnSpan?: Maybe<Scalars['Int']>;
  /** The form page this field is located on. Default is 1. */
  pageNumber?: Maybe<Scalars['Int']>;
  /** The form field-specifc policies for exporting and erasing personal data. */
  personalData?: Maybe<FormFieldDataPolicy>;
  /** The type of field to be displayed. */
  type?: Maybe<FormFieldTypeEnum>;
  /** The string-formatted entry value for the `formField`. For complex fields this might be a JSON-encoded or serialized array. */
  value?: Maybe<Scalars['String']>;
  /** Field visibility. */
  visibility?: Maybe<FormFieldVisibilityEnum>;
};

/** Content node with hierarchical (parent/child) relationships */
export type HierarchicalContentNode = {
  /** Returns ancestors of the node. Default ordered as lowest (closest to the child) to highest (closest to the root). */
  ancestors?: Maybe<HierarchicalContentNodeToContentNodeAncestorsConnection>;
  /** Connection between the HierarchicalContentNode type and the ContentNode type */
  children?: Maybe<HierarchicalContentNodeToContentNodeChildrenConnection>;
  /** @deprecated Deprecated in favor of using Next.js pages */
  conditionalTags?: Maybe<ConditionalTags>;
  /** Connection between the ContentNode type and the ContentType type */
  contentType?: Maybe<ContentNodeToContentTypeConnectionEdge>;
  /** The name of the Content Type the node belongs to */
  contentTypeName: Scalars['String'];
  /** The unique identifier stored in the database */
  databaseId: Scalars['Int'];
  /** Post publishing date. */
  date?: Maybe<Scalars['String']>;
  /** The publishing date set in GMT. */
  dateGmt?: Maybe<Scalars['String']>;
  /** The desired slug of the post */
  desiredSlug?: Maybe<Scalars['String']>;
  /** If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds */
  editingLockedBy?: Maybe<ContentNodeToEditLockConnectionEdge>;
  /** The RSS enclosure for the object */
  enclosure?: Maybe<Scalars['String']>;
  /** Connection between the ContentNode type and the EnqueuedScript type */
  enqueuedScripts?: Maybe<ContentNodeToEnqueuedScriptConnection>;
  /** Connection between the ContentNode type and the EnqueuedStylesheet type */
  enqueuedStylesheets?: Maybe<ContentNodeToEnqueuedStylesheetConnection>;
  /** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
  guid?: Maybe<Scalars['String']>;
  /** The globally unique ID for the object */
  id: Scalars['ID'];
  /** Whether the node is a Content Node */
  isContentNode: Scalars['Boolean'];
  /** Whether the object is a node in the preview state */
  isPreview?: Maybe<Scalars['Boolean']>;
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** Whether the node is a Term */
  isTermNode: Scalars['Boolean'];
  /** The user that most recently edited the node */
  lastEditedBy?: Maybe<ContentNodeToEditLastConnectionEdge>;
  /** The permalink of the post */
  link?: Maybe<Scalars['String']>;
  /** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
  modified?: Maybe<Scalars['String']>;
  /** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
  modifiedGmt?: Maybe<Scalars['String']>;
  /** The parent of the node. The parent object can be of various types */
  parent?: Maybe<HierarchicalContentNodeToParentContentNodeConnectionEdge>;
  /** Database id of the parent node */
  parentDatabaseId?: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the parent node. */
  parentId?: Maybe<Scalars['ID']>;
  /** The database id of the preview node */
  previewRevisionDatabaseId?: Maybe<Scalars['Int']>;
  /** Whether the object is a node in the preview state */
  previewRevisionId?: Maybe<Scalars['ID']>;
  /** The Yoast SEO data of the ContentNode */
  seo?: Maybe<PostTypeSeo>;
  /** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
  slug?: Maybe<Scalars['String']>;
  /** The current status of the object */
  status?: Maybe<Scalars['String']>;
  /** The template assigned to a node of content */
  template?: Maybe<ContentTemplate>;
  templates?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The unique resource identifier path */
  uri?: Maybe<Scalars['String']>;
};


/** Content node with hierarchical (parent/child) relationships */
export type HierarchicalContentNodeAncestorsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<HierarchicalContentNodeToContentNodeAncestorsConnectionWhereArgs>;
};


/** Content node with hierarchical (parent/child) relationships */
export type HierarchicalContentNodeChildrenArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<HierarchicalContentNodeToContentNodeChildrenConnectionWhereArgs>;
};


/** Content node with hierarchical (parent/child) relationships */
export type HierarchicalContentNodeEnqueuedScriptsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** Content node with hierarchical (parent/child) relationships */
export type HierarchicalContentNodeEnqueuedStylesheetsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** Connection between the HierarchicalContentNode type and the ContentNode type */
export type HierarchicalContentNodeToContentNodeAncestorsConnection = Connection & ContentNodeConnection & {
  __typename?: 'HierarchicalContentNodeToContentNodeAncestorsConnection';
  /** Edges for the HierarchicalContentNodeToContentNodeAncestorsConnection connection */
  edges: Array<HierarchicalContentNodeToContentNodeAncestorsConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<ContentNode>;
  /** Information about pagination in a connection. */
  pageInfo: HierarchicalContentNodeToContentNodeAncestorsConnectionPageInfo;
};

/** An edge in a connection */
export type HierarchicalContentNodeToContentNodeAncestorsConnectionEdge = ContentNodeConnectionEdge & Edge & {
  __typename?: 'HierarchicalContentNodeToContentNodeAncestorsConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: ContentNode;
};

/** Page Info on the &quot;HierarchicalContentNodeToContentNodeAncestorsConnection&quot; */
export type HierarchicalContentNodeToContentNodeAncestorsConnectionPageInfo = ContentNodeConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'HierarchicalContentNodeToContentNodeAncestorsConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the HierarchicalContentNodeToContentNodeAncestorsConnection connection */
export type HierarchicalContentNodeToContentNodeAncestorsConnectionWhereArgs = {
  /** The Types of content to filter */
  contentTypes?: InputMaybe<Array<InputMaybe<ContentTypeEnum>>>;
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']>;
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>;
  /** Title of the object */
  title?: InputMaybe<Scalars['String']>;
};

/** Connection between the HierarchicalContentNode type and the ContentNode type */
export type HierarchicalContentNodeToContentNodeChildrenConnection = Connection & ContentNodeConnection & {
  __typename?: 'HierarchicalContentNodeToContentNodeChildrenConnection';
  /** Edges for the HierarchicalContentNodeToContentNodeChildrenConnection connection */
  edges: Array<HierarchicalContentNodeToContentNodeChildrenConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<ContentNode>;
  /** Information about pagination in a connection. */
  pageInfo: HierarchicalContentNodeToContentNodeChildrenConnectionPageInfo;
};

/** An edge in a connection */
export type HierarchicalContentNodeToContentNodeChildrenConnectionEdge = ContentNodeConnectionEdge & Edge & {
  __typename?: 'HierarchicalContentNodeToContentNodeChildrenConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: ContentNode;
};

/** Page Info on the &quot;HierarchicalContentNodeToContentNodeChildrenConnection&quot; */
export type HierarchicalContentNodeToContentNodeChildrenConnectionPageInfo = ContentNodeConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'HierarchicalContentNodeToContentNodeChildrenConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the HierarchicalContentNodeToContentNodeChildrenConnection connection */
export type HierarchicalContentNodeToContentNodeChildrenConnectionWhereArgs = {
  /** The Types of content to filter */
  contentTypes?: InputMaybe<Array<InputMaybe<ContentTypeEnum>>>;
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']>;
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>;
  /** Title of the object */
  title?: InputMaybe<Scalars['String']>;
};

/** Connection between the HierarchicalContentNode type and the ContentNode type */
export type HierarchicalContentNodeToParentContentNodeConnectionEdge = ContentNodeConnectionEdge & Edge & OneToOneConnection & {
  __typename?: 'HierarchicalContentNodeToParentContentNodeConnectionEdge';
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The node of the connection, without the edges */
  node: ContentNode;
};

/** Node with hierarchical (parent/child) relationships */
export type HierarchicalNode = {
  /** The unique identifier stored in the database */
  databaseId: Scalars['Int'];
  /** The globally unique ID for the object */
  id: Scalars['ID'];
  /** Database id of the parent node */
  parentDatabaseId?: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the parent node. */
  parentId?: Maybe<Scalars['ID']>;
};

/** Term node with hierarchical (parent/child) relationships */
export type HierarchicalTermNode = {
  /** @deprecated Deprecated in favor of using Next.js pages */
  conditionalTags?: Maybe<ConditionalTags>;
  /** The number of objects connected to the object */
  count?: Maybe<Scalars['Int']>;
  /** The unique identifier stored in the database */
  databaseId: Scalars['Int'];
  /** The description of the object */
  description?: Maybe<Scalars['String']>;
  /** Connection between the TermNode type and the EnqueuedScript type */
  enqueuedScripts?: Maybe<TermNodeToEnqueuedScriptConnection>;
  /** Connection between the TermNode type and the EnqueuedStylesheet type */
  enqueuedStylesheets?: Maybe<TermNodeToEnqueuedStylesheetConnection>;
  /** The globally unique ID for the object */
  id: Scalars['ID'];
  /** Whether the node is a Content Node */
  isContentNode: Scalars['Boolean'];
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** Whether the node is a Term */
  isTermNode: Scalars['Boolean'];
  /** The link to the term */
  link?: Maybe<Scalars['String']>;
  /** The human friendly name of the object. */
  name?: Maybe<Scalars['String']>;
  /** Database id of the parent node */
  parentDatabaseId?: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the parent node. */
  parentId?: Maybe<Scalars['ID']>;
  /** An alphanumeric identifier for the object unique to its type. */
  slug?: Maybe<Scalars['String']>;
  /** The name of the taxonomy that the object is associated with */
  taxonomyName?: Maybe<Scalars['String']>;
  templates?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The ID of the term group that this term object belongs to */
  termGroupId?: Maybe<Scalars['Int']>;
  /** The taxonomy ID that the object is associated with */
  termTaxonomyId?: Maybe<Scalars['Int']>;
  /** The unique resource identifier path */
  uri?: Maybe<Scalars['String']>;
};


/** Term node with hierarchical (parent/child) relationships */
export type HierarchicalTermNodeEnqueuedScriptsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** Term node with hierarchical (parent/child) relationships */
export type HierarchicalTermNodeEnqueuedStylesheetsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** A Gravity Forms   field. */
export type HtmlField = FormField & {
  __typename?: 'HtmlField';
  /** Controls the visibility of the field based on values selected by the user. */
  conditionalLogic?: Maybe<ConditionalLogic>;
  /** Content of an HTML block field to be displayed on the form. */
  content?: Maybe<Scalars['String']>;
  /** String containing the custom CSS classes to be added to the &lt;li&gt; tag that contains the field. Useful for applying custom formatting to specific fields. */
  cssClass?: Maybe<Scalars['String']>;
  /** Indicates the field is only displayed and its contents are not submitted with the form/saved with the entry. This is set to true. */
  displayOnly?: Maybe<Scalars['Boolean']>;
  /** Indicates whether the default margins are turned on to align the HTML content with other fields. */
  hasMargins?: Maybe<Scalars['Boolean']>;
  /** Field ID. */
  id: Scalars['Int'];
  /** The base form field type used to display the input. A good example is the Post Custom Field that can be displayed as various different types of fields. */
  inputType?: Maybe<FormFieldTypeEnum>;
  /** Field label that will be displayed on the form and on the admin pages. */
  label?: Maybe<Scalars['String']>;
  /** The number of CSS grid columns the field should span. */
  layoutGridColumnSpan?: Maybe<Scalars['Int']>;
  /** The number of CSS grid columns the spacer field following this one should span. */
  layoutSpacerGridColumnSpan?: Maybe<Scalars['Int']>;
  /** The form page this field is located on. Default is 1. */
  pageNumber?: Maybe<Scalars['Int']>;
  /** The type of field to be displayed. */
  type?: Maybe<FormFieldTypeEnum>;
  /** Field visibility. */
  visibility?: Maybe<FormFieldVisibilityEnum>;
};

/** The individual properties for each element of the PostImage value field. */
export type ImageFieldValue = {
  __typename?: 'ImageFieldValue';
  /** The image alt text. */
  altText?: Maybe<Scalars['String']>;
  /** The path to the parent directory of the file. */
  basePath?: Maybe<Scalars['String']>;
  /** The base url to the parent directory of the file. */
  baseUrl?: Maybe<Scalars['String']>;
  /** The image caption. */
  caption?: Maybe<Scalars['String']>;
  /** The image description. */
  description?: Maybe<Scalars['String']>;
  /** The filename. */
  filename?: Maybe<Scalars['String']>;
  /** The image title. */
  title?: Maybe<Scalars['String']>;
  /** The url to the file. */
  url?: Maybe<Scalars['String']>;
};

/** A Gravity Forms   field. */
export type ListField = FormField & {
  __typename?: 'ListField';
  /** The URL of the image to be used for the add row button. */
  addIconUrl?: Maybe<Scalars['String']>;
  /** When specified, the value of this property will be used on the admin pages instead of the label. It is useful for fields with long labels. */
  adminLabel?: Maybe<Scalars['String']>;
  /** Determines if the field’s value can be pre-populated dynamically. */
  canPrepopulate?: Maybe<Scalars['Boolean']>;
  /** The available choices for the list field. */
  choices?: Maybe<Array<Maybe<ListFieldChoice>>>;
  /** Controls the visibility of the field based on values selected by the user. */
  conditionalLogic?: Maybe<ConditionalLogic>;
  /** String containing the custom CSS classes to be added to the &lt;li&gt; tag that contains the field. Useful for applying custom formatting to specific fields. */
  cssClass?: Maybe<Scalars['String']>;
  /** The URL of the image to be used for the delete row button. */
  deleteIconUrl?: Maybe<Scalars['String']>;
  /** Field description. */
  description?: Maybe<Scalars['String']>;
  /** The placement of the field description. */
  descriptionPlacement?: Maybe<FormFieldDescriptionPlacementEnum>;
  /** Indicates the field is only displayed and its contents are not submitted with the form/saved with the entry. This is set to true. */
  displayOnly?: Maybe<Scalars['Boolean']>;
  /** Contains the message that is displayed for fields that fail validation. */
  errorMessage?: Maybe<Scalars['String']>;
  /** Determines if the field should use multiple columns. Default is false. */
  hasColumns?: Maybe<Scalars['Boolean']>;
  /** Field ID. */
  id: Scalars['Int'];
  /** Assigns a name to this field so that it can be populated dynamically via this input name. Only applicable when canPrepopulate is `true`. */
  inputName?: Maybe<Scalars['String']>;
  /** The base form field type used to display the input. A good example is the Post Custom Field that can be displayed as various different types of fields. */
  inputType?: Maybe<FormFieldTypeEnum>;
  /** Determines if the field requires the user to enter a value. Fields marked as required will prevent the form from being submitted if the user has not entered a value in it. */
  isRequired?: Maybe<Scalars['Boolean']>;
  /** Field label that will be displayed on the form and on the admin pages. */
  label?: Maybe<Scalars['String']>;
  /** The field label position. */
  labelPlacement?: Maybe<FormFieldLabelPlacementEnum>;
  /** The number of CSS grid columns the field should span. */
  layoutGridColumnSpan?: Maybe<Scalars['Int']>;
  /** The number of CSS grid columns the spacer field following this one should span. */
  layoutSpacerGridColumnSpan?: Maybe<Scalars['Int']>;
  /** List field value. */
  listValues?: Maybe<Array<Maybe<ListFieldValue>>>;
  /** The maximum number of rows the user can add to the field. */
  maxRows?: Maybe<Scalars['Int']>;
  /** The form page this field is located on. Default is 1. */
  pageNumber?: Maybe<Scalars['Int']>;
  /** The form field-specifc policies for exporting and erasing personal data. */
  personalData?: Maybe<FormFieldDataPolicy>;
  /** The type of field to be displayed. */
  type?: Maybe<FormFieldTypeEnum>;
  /** The string-formatted entry value for the `formField`. For complex fields this might be a JSON-encoded or serialized array. */
  value?: Maybe<Scalars['String']>;
  /** Field visibility. */
  visibility?: Maybe<FormFieldVisibilityEnum>;
};

/** List choice values. */
export type ListFieldChoice = {
  __typename?: 'ListFieldChoice';
  /** The text to be displayed to the user when displaying this choice. */
  text?: Maybe<Scalars['String']>;
  /** The value to be stored in the database when this choice is selected. Note: This property is only supported by the Drop Down and Post Category fields. Checkboxes and Radio fields will store the text property in the database regardless of the value property. */
  value?: Maybe<Scalars['String']>;
};

/** Input fields for a single List field item. */
export type ListFieldInput = {
  /** Input values for the specific listField row. */
  rowValues?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/** The individual properties for each element of the List value field. */
export type ListFieldValue = {
  __typename?: 'ListFieldValue';
  /** Input values. */
  values?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** File details for a Media Item */
export type MediaDetails = {
  __typename?: 'MediaDetails';
  /** The filename of the mediaItem */
  file?: Maybe<Scalars['String']>;
  /** The height of the mediaItem */
  height?: Maybe<Scalars['Int']>;
  /** Meta information associated with the mediaItem */
  meta?: Maybe<MediaItemMeta>;
  /** The available sizes of the mediaItem */
  sizes?: Maybe<Array<Maybe<MediaSize>>>;
  /** The width of the mediaItem */
  width?: Maybe<Scalars['Int']>;
};


/** File details for a Media Item */
export type MediaDetailsSizesArgs = {
  exclude?: InputMaybe<Array<InputMaybe<MediaItemSizeEnum>>>;
  include?: InputMaybe<Array<InputMaybe<MediaItemSizeEnum>>>;
};

/** The mediaItem type */
export type MediaItem = ContentNode & DatabaseIdentifier & HierarchicalContentNode & HierarchicalNode & Node & NodeWithAuthor & NodeWithComments & NodeWithTemplate & NodeWithTitle & UniformResourceIdentifiable & {
  __typename?: 'MediaItem';
  /** Alternative text to display when resource is not displayed */
  altText?: Maybe<Scalars['String']>;
  /** Returns ancestors of the node. Default ordered as lowest (closest to the child) to highest (closest to the root). */
  ancestors?: Maybe<HierarchicalContentNodeToContentNodeAncestorsConnection>;
  /** Connection between the NodeWithAuthor type and the User type */
  author?: Maybe<NodeWithAuthorToUserConnectionEdge>;
  /** The database identifier of the author of the node */
  authorDatabaseId?: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the author of the node */
  authorId?: Maybe<Scalars['ID']>;
  /** The caption for the resource */
  caption?: Maybe<Scalars['String']>;
  /** Connection between the HierarchicalContentNode type and the ContentNode type */
  children?: Maybe<HierarchicalContentNodeToContentNodeChildrenConnection>;
  /** The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility. */
  commentCount?: Maybe<Scalars['Int']>;
  /** Whether the comments are open or closed for this particular post. */
  commentStatus?: Maybe<Scalars['String']>;
  /** Connection between the MediaItem type and the Comment type */
  comments?: Maybe<MediaItemToCommentConnection>;
  /** @deprecated Deprecated in favor of using Next.js pages */
  conditionalTags?: Maybe<ConditionalTags>;
  /** Connection between the ContentNode type and the ContentType type */
  contentType?: Maybe<ContentNodeToContentTypeConnectionEdge>;
  /** The name of the Content Type the node belongs to */
  contentTypeName: Scalars['String'];
  /** DataUrl or base64 url of this image */
  dataUrl?: Maybe<Scalars['String']>;
  /** The unique identifier stored in the database */
  databaseId: Scalars['Int'];
  /** Post publishing date. */
  date?: Maybe<Scalars['String']>;
  /** The publishing date set in GMT. */
  dateGmt?: Maybe<Scalars['String']>;
  /** Description of the image (stored as post_content) */
  description?: Maybe<Scalars['String']>;
  /** The desired slug of the post */
  desiredSlug?: Maybe<Scalars['String']>;
  /** If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds */
  editingLockedBy?: Maybe<ContentNodeToEditLockConnectionEdge>;
  /** The RSS enclosure for the object */
  enclosure?: Maybe<Scalars['String']>;
  /** Connection between the ContentNode type and the EnqueuedScript type */
  enqueuedScripts?: Maybe<ContentNodeToEnqueuedScriptConnection>;
  /** Connection between the ContentNode type and the EnqueuedStylesheet type */
  enqueuedStylesheets?: Maybe<ContentNodeToEnqueuedStylesheetConnection>;
  /** The filesize in bytes of the resource */
  fileSize?: Maybe<Scalars['Int']>;
  /** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
  guid?: Maybe<Scalars['String']>;
  /** The globally unique identifier of the attachment object. */
  id: Scalars['ID'];
  /** Whether the node is a Content Node */
  isContentNode: Scalars['Boolean'];
  /** Whether the object is a node in the preview state */
  isPreview?: Maybe<Scalars['Boolean']>;
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** Whether the node is a Term */
  isTermNode: Scalars['Boolean'];
  /** The user that most recently edited the node */
  lastEditedBy?: Maybe<ContentNodeToEditLastConnectionEdge>;
  /** The permalink of the post */
  link?: Maybe<Scalars['String']>;
  /** Details about the mediaItem */
  mediaDetails?: Maybe<MediaDetails>;
  /**
   * The id field matches the WP_Post-&gt;ID field.
   * @deprecated Deprecated in favor of the databaseId field
   */
  mediaItemId: Scalars['Int'];
  /** Url of the mediaItem */
  mediaItemUrl?: Maybe<Scalars['String']>;
  /** Type of resource */
  mediaType?: Maybe<Scalars['String']>;
  /** The mime type of the mediaItem */
  mimeType?: Maybe<Scalars['String']>;
  /** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
  modified?: Maybe<Scalars['String']>;
  /** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
  modifiedGmt?: Maybe<Scalars['String']>;
  /** The parent of the node. The parent object can be of various types */
  parent?: Maybe<HierarchicalContentNodeToParentContentNodeConnectionEdge>;
  /** Database id of the parent node */
  parentDatabaseId?: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the parent node. */
  parentId?: Maybe<Scalars['ID']>;
  /** The database id of the preview node */
  previewRevisionDatabaseId?: Maybe<Scalars['Int']>;
  /** Whether the object is a node in the preview state */
  previewRevisionId?: Maybe<Scalars['ID']>;
  /** The Yoast SEO data of the ContentNode */
  seo?: Maybe<PostTypeSeo>;
  /** The sizes attribute value for an image. */
  sizes?: Maybe<Scalars['String']>;
  /** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
  slug?: Maybe<Scalars['String']>;
  /** Url of the mediaItem */
  sourceUrl?: Maybe<Scalars['String']>;
  /** The srcset attribute specifies the URL of the image to use in different situations. It is a comma separated string of urls and their widths. */
  srcSet?: Maybe<Scalars['String']>;
  /** The current status of the object */
  status?: Maybe<Scalars['String']>;
  /** The template assigned to a node of content */
  template?: Maybe<ContentTemplate>;
  templates?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
  title?: Maybe<Scalars['String']>;
  /** The unique resource identifier path */
  uri?: Maybe<Scalars['String']>;
};


/** The mediaItem type */
export type MediaItemAncestorsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<HierarchicalContentNodeToContentNodeAncestorsConnectionWhereArgs>;
};


/** The mediaItem type */
export type MediaItemCaptionArgs = {
  format?: InputMaybe<PostObjectFieldFormatEnum>;
};


/** The mediaItem type */
export type MediaItemChildrenArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<HierarchicalContentNodeToContentNodeChildrenConnectionWhereArgs>;
};


/** The mediaItem type */
export type MediaItemCommentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MediaItemToCommentConnectionWhereArgs>;
};


/** The mediaItem type */
export type MediaItemDescriptionArgs = {
  format?: InputMaybe<PostObjectFieldFormatEnum>;
};


/** The mediaItem type */
export type MediaItemEnqueuedScriptsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** The mediaItem type */
export type MediaItemEnqueuedStylesheetsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** The mediaItem type */
export type MediaItemFileSizeArgs = {
  size?: InputMaybe<MediaItemSizeEnum>;
};


/** The mediaItem type */
export type MediaItemSizesArgs = {
  size?: InputMaybe<MediaItemSizeEnum>;
};


/** The mediaItem type */
export type MediaItemSourceUrlArgs = {
  size?: InputMaybe<MediaItemSizeEnum>;
};


/** The mediaItem type */
export type MediaItemSrcSetArgs = {
  size?: InputMaybe<MediaItemSizeEnum>;
};


/** The mediaItem type */
export type MediaItemTitleArgs = {
  format?: InputMaybe<PostObjectFieldFormatEnum>;
};

/** Connection to mediaItem Nodes */
export type MediaItemConnection = {
  /** A list of edges (relational context) between RootQuery and connected mediaItem Nodes */
  edges: Array<MediaItemConnectionEdge>;
  /** A list of connected mediaItem Nodes */
  nodes: Array<MediaItem>;
  /** Information about pagination in a connection. */
  pageInfo: MediaItemConnectionPageInfo;
};

/** Edge between a Node and a connected mediaItem */
export type MediaItemConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The connected mediaItem Node */
  node: MediaItem;
};

/** Page Info on the connected MediaItemConnectionEdge */
export type MediaItemConnectionPageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum MediaItemIdType {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID',
  /** Identify a resource by the slug. Available to non-hierarchcial Types where the slug is a unique identifier. */
  Slug = 'SLUG',
  /** Identify a media item by its source url */
  SourceUrl = 'SOURCE_URL',
  /** Identify a resource by the URI. */
  Uri = 'URI'
}

/** Meta connected to a MediaItem */
export type MediaItemMeta = {
  __typename?: 'MediaItemMeta';
  /** Aperture measurement of the media item. */
  aperture?: Maybe<Scalars['Float']>;
  /** Information about the camera used to create the media item. */
  camera?: Maybe<Scalars['String']>;
  /** The text string description associated with the media item. */
  caption?: Maybe<Scalars['String']>;
  /** Copyright information associated with the media item. */
  copyright?: Maybe<Scalars['String']>;
  /** The date/time when the media was created. */
  createdTimestamp?: Maybe<Scalars['Int']>;
  /** The original creator of the media item. */
  credit?: Maybe<Scalars['String']>;
  /** The focal length value of the media item. */
  focalLength?: Maybe<Scalars['Float']>;
  /** The ISO (International Organization for Standardization) value of the media item. */
  iso?: Maybe<Scalars['Int']>;
  /** List of keywords used to describe or identfy the media item. */
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The vertical or horizontal aspect of the media item. */
  orientation?: Maybe<Scalars['String']>;
  /** The shutter speed information of the media item. */
  shutterSpeed?: Maybe<Scalars['Float']>;
  /** A useful title for the media item. */
  title?: Maybe<Scalars['String']>;
};

/** The size of the media item object. */
export enum MediaItemSizeEnum {
  /** MediaItem with the large size */
  Large = 'LARGE',
  /** MediaItem with the medium size */
  Medium = 'MEDIUM',
  /** MediaItem with the medium_large size */
  MediumLarge = 'MEDIUM_LARGE',
  /** MediaItem with the thumbnail size */
  Thumbnail = 'THUMBNAIL',
  /** MediaItem with the yarpp-thumbnail size */
  YarppThumbnail = 'YARPP_THUMBNAIL',
  /** MediaItem with the 1536x1536 size */
  '1536X1536' = '_1536X1536',
  /** MediaItem with the 2048x2048 size */
  '2048X2048' = '_2048X2048'
}

/** The status of the media item object. */
export enum MediaItemStatusEnum {
  /** Objects with the auto-draft status */
  AutoDraft = 'AUTO_DRAFT',
  /** Objects with the inherit status */
  Inherit = 'INHERIT',
  /** Objects with the private status */
  Private = 'PRIVATE',
  /** Objects with the trash status */
  Trash = 'TRASH'
}

/** Connection between the MediaItem type and the Comment type */
export type MediaItemToCommentConnection = CommentConnection & Connection & {
  __typename?: 'MediaItemToCommentConnection';
  /** Edges for the MediaItemToCommentConnection connection */
  edges: Array<MediaItemToCommentConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<Comment>;
  /** Information about pagination in a connection. */
  pageInfo: MediaItemToCommentConnectionPageInfo;
};

/** An edge in a connection */
export type MediaItemToCommentConnectionEdge = CommentConnectionEdge & Edge & {
  __typename?: 'MediaItemToCommentConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: Comment;
};

/** Page Info on the &quot;MediaItemToCommentConnection&quot; */
export type MediaItemToCommentConnectionPageInfo = CommentConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'MediaItemToCommentConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the MediaItemToCommentConnection connection */
export type MediaItemToCommentConnectionWhereArgs = {
  /** Comment author email address. */
  authorEmail?: InputMaybe<Scalars['String']>;
  /** Array of author IDs to include comments for. */
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of author IDs to exclude comments for. */
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Comment author URL. */
  authorUrl?: InputMaybe<Scalars['String']>;
  /** Array of comment IDs to include. */
  commentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
  commentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Include comments of a given type. */
  commentType?: InputMaybe<Scalars['String']>;
  /** Include comments from a given array of comment types. */
  commentTypeIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Exclude comments from a given array of comment types. */
  commentTypeNotIn?: InputMaybe<Scalars['String']>;
  /** Content object author ID to limit results by. */
  contentAuthor?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of author IDs to retrieve comments for. */
  contentAuthorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of author IDs *not* to retrieve comments for. */
  contentAuthorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Limit results to those affiliated with a given content object ID. */
  contentId?: InputMaybe<Scalars['ID']>;
  /** Array of content object IDs to include affiliated comments for. */
  contentIdIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of content object IDs to exclude affiliated comments for. */
  contentIdNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Content object name (i.e. slug ) to retrieve affiliated comments for. */
  contentName?: InputMaybe<Scalars['String']>;
  /** Content Object parent ID to retrieve affiliated comments for. */
  contentParent?: InputMaybe<Scalars['Int']>;
  /** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentStatus?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentType?: InputMaybe<Array<InputMaybe<ContentTypeEnum>>>;
  /** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
  includeUnapproved?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Karma score to retrieve matching comments for. */
  karma?: InputMaybe<Scalars['Int']>;
  /** The cardinality of the order of the connection */
  order?: InputMaybe<OrderEnum>;
  /** Field to order the comments by. */
  orderby?: InputMaybe<CommentsConnectionOrderbyEnum>;
  /** Parent ID of comment to retrieve children of. */
  parent?: InputMaybe<Scalars['Int']>;
  /** Array of parent IDs of comments to retrieve children for. */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of parent IDs of comments *not* to retrieve children for. */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Search term(s) to retrieve matching comments for. */
  search?: InputMaybe<Scalars['String']>;
  /** Comment status to limit results by. */
  status?: InputMaybe<Scalars['String']>;
  /** Include comments for a specific user ID. */
  userId?: InputMaybe<Scalars['ID']>;
};

/** Details of an available size for a media item */
export type MediaSize = {
  __typename?: 'MediaSize';
  /** The filename of the referenced size */
  file?: Maybe<Scalars['String']>;
  /** The filesize of the resource */
  fileSize?: Maybe<Scalars['Int']>;
  /** The height of the referenced size */
  height?: Maybe<Scalars['String']>;
  /** The mime type of the referenced size */
  mimeType?: Maybe<Scalars['String']>;
  /** The referenced size name */
  name?: Maybe<Scalars['String']>;
  /** The url of the referenced size */
  sourceUrl?: Maybe<Scalars['String']>;
  /** The width of the referenced size */
  width?: Maybe<Scalars['String']>;
};

/** Menus are the containers for navigation items. Menus can be assigned to menu locations, which are typically registered by the active theme. */
export type Menu = DatabaseIdentifier & Node & {
  __typename?: 'Menu';
  /** The number of items in the menu */
  count?: Maybe<Scalars['Int']>;
  /** The unique identifier stored in the database */
  databaseId: Scalars['Int'];
  /** The globally unique identifier of the nav menu object. */
  id: Scalars['ID'];
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** The locations a menu is assigned to */
  locations?: Maybe<Array<Maybe<MenuLocationEnum>>>;
  /**
   * WP ID of the nav menu.
   * @deprecated Deprecated in favor of the databaseId field
   */
  menuId?: Maybe<Scalars['Int']>;
  /** Connection between the Menu type and the MenuItem type */
  menuItems?: Maybe<MenuToMenuItemConnection>;
  /** Display name of the menu. Equivalent to WP_Term-&gt;name. */
  name?: Maybe<Scalars['String']>;
  /** The url friendly name of the menu. Equivalent to WP_Term-&gt;slug */
  slug?: Maybe<Scalars['String']>;
};


/** Menus are the containers for navigation items. Menus can be assigned to menu locations, which are typically registered by the active theme. */
export type MenuMenuItemsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MenuToMenuItemConnectionWhereArgs>;
};

/** Connection to Menu Nodes */
export type MenuConnection = {
  /** A list of edges (relational context) between RootQuery and connected Menu Nodes */
  edges: Array<MenuConnectionEdge>;
  /** A list of connected Menu Nodes */
  nodes: Array<Menu>;
  /** Information about pagination in a connection. */
  pageInfo: MenuConnectionPageInfo;
};

/** Edge between a Node and a connected Menu */
export type MenuConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The connected Menu Node */
  node: Menu;
};

/** Page Info on the connected MenuConnectionEdge */
export type MenuConnectionPageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Navigation menu items are the individual items assigned to a menu. These are rendered as the links in a navigation menu. */
export type MenuItem = DatabaseIdentifier & Node & {
  __typename?: 'MenuItem';
  /** Connection between the MenuItem type and the MenuItem type */
  childItems?: Maybe<MenuItemToMenuItemConnection>;
  /** Connection from MenuItem to it&#039;s connected node */
  connectedNode?: Maybe<MenuItemToMenuItemLinkableConnectionEdge>;
  /**
   * The object connected to this menu item.
   * @deprecated Deprecated in favor of the connectedNode field
   */
  connectedObject?: Maybe<MenuItemObjectUnion>;
  /** Class attribute for the menu item link */
  cssClasses?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The unique identifier stored in the database */
  databaseId: Scalars['Int'];
  /** Description of the menu item. */
  description?: Maybe<Scalars['String']>;
  /** The globally unique identifier of the nav menu item object. */
  id: Scalars['ID'];
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** Label or title of the menu item. */
  label?: Maybe<Scalars['String']>;
  /** Link relationship (XFN) of the menu item. */
  linkRelationship?: Maybe<Scalars['String']>;
  /** The locations the menu item&#039;s Menu is assigned to */
  locations?: Maybe<Array<Maybe<MenuLocationEnum>>>;
  /** The Menu a MenuItem is part of */
  menu?: Maybe<MenuItemToMenuConnectionEdge>;
  /**
   * WP ID of the menu item.
   * @deprecated Deprecated in favor of the databaseId field
   */
  menuItemId?: Maybe<Scalars['Int']>;
  /** Menu item order */
  order?: Maybe<Scalars['Int']>;
  /** The database id of the parent menu item or null if it is the root */
  parentDatabaseId?: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the parent nav menu item object. */
  parentId?: Maybe<Scalars['ID']>;
  /** Path for the resource. Relative path for internal resources. Absolute path for external resources. */
  path?: Maybe<Scalars['String']>;
  /** Target attribute for the menu item link. */
  target?: Maybe<Scalars['String']>;
  /** Title attribute for the menu item link */
  title?: Maybe<Scalars['String']>;
  /** The uri of the resource the menu item links to */
  uri?: Maybe<Scalars['String']>;
  /** URL or destination of the menu item. */
  url?: Maybe<Scalars['String']>;
};


/** Navigation menu items are the individual items assigned to a menu. These are rendered as the links in a navigation menu. */
export type MenuItemChildItemsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MenuItemToMenuItemConnectionWhereArgs>;
};

/** Connection to MenuItem Nodes */
export type MenuItemConnection = {
  /** A list of edges (relational context) between RootQuery and connected MenuItem Nodes */
  edges: Array<MenuItemConnectionEdge>;
  /** A list of connected MenuItem Nodes */
  nodes: Array<MenuItem>;
  /** Information about pagination in a connection. */
  pageInfo: MenuItemConnectionPageInfo;
};

/** Edge between a Node and a connected MenuItem */
export type MenuItemConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The connected MenuItem Node */
  node: MenuItem;
};

/** Page Info on the connected MenuItemConnectionEdge */
export type MenuItemConnectionPageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Nodes that can be linked to as Menu Items */
export type MenuItemLinkable = {
  /** @deprecated Deprecated in favor of using Next.js pages */
  conditionalTags?: Maybe<ConditionalTags>;
  /** The unique identifier stored in the database */
  databaseId: Scalars['Int'];
  /** The unique resource identifier path */
  id: Scalars['ID'];
  /** Whether the node is a Content Node */
  isContentNode: Scalars['Boolean'];
  /** Whether the node is a Term */
  isTermNode: Scalars['Boolean'];
  templates?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The unique resource identifier path */
  uri?: Maybe<Scalars['String']>;
};

/** Edge between a Node and a connected MenuItemLinkable */
export type MenuItemLinkableConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The connected MenuItemLinkable Node */
  node: MenuItemLinkable;
};

/** The Type of Identifier used to fetch a single node. Default is "ID". To be used along with the "id" field. */
export enum MenuItemNodeIdTypeEnum {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID'
}

/** Deprecated in favor of MenuItemLinkeable Interface */
export type MenuItemObjectUnion = Category | Client | Page | Post | Press_Release | Tag | Work | WorkCategory;

/** Connection between the MenuItem type and the Menu type */
export type MenuItemToMenuConnectionEdge = Edge & MenuConnectionEdge & OneToOneConnection & {
  __typename?: 'MenuItemToMenuConnectionEdge';
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The node of the connection, without the edges */
  node: Menu;
};

/** Connection between the MenuItem type and the MenuItem type */
export type MenuItemToMenuItemConnection = Connection & MenuItemConnection & {
  __typename?: 'MenuItemToMenuItemConnection';
  /** Edges for the MenuItemToMenuItemConnection connection */
  edges: Array<MenuItemToMenuItemConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<MenuItem>;
  /** Information about pagination in a connection. */
  pageInfo: MenuItemToMenuItemConnectionPageInfo;
};

/** An edge in a connection */
export type MenuItemToMenuItemConnectionEdge = Edge & MenuItemConnectionEdge & {
  __typename?: 'MenuItemToMenuItemConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: MenuItem;
};

/** Page Info on the &quot;MenuItemToMenuItemConnection&quot; */
export type MenuItemToMenuItemConnectionPageInfo = MenuItemConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'MenuItemToMenuItemConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the MenuItemToMenuItemConnection connection */
export type MenuItemToMenuItemConnectionWhereArgs = {
  /** The database ID of the object */
  id?: InputMaybe<Scalars['Int']>;
  /** The menu location for the menu being queried */
  location?: InputMaybe<MenuLocationEnum>;
  /** The database ID of the parent menu object */
  parentDatabaseId?: InputMaybe<Scalars['Int']>;
  /** The ID of the parent menu object */
  parentId?: InputMaybe<Scalars['ID']>;
};

/** Connection between the MenuItem type and the MenuItemLinkable type */
export type MenuItemToMenuItemLinkableConnectionEdge = Edge & MenuItemLinkableConnectionEdge & OneToOneConnection & {
  __typename?: 'MenuItemToMenuItemLinkableConnectionEdge';
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The node of the connection, without the edges */
  node: MenuItemLinkable;
};

/** Registered menu locations */
export enum MenuLocationEnum {
  /** Put the menu in the footer location */
  Footer = 'FOOTER',
  /** Put the menu in the primary location */
  Primary = 'PRIMARY'
}

/** The Type of Identifier used to fetch a single node. Default is "ID". To be used along with the "id" field. */
export enum MenuNodeIdTypeEnum {
  /** Identify a menu node by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a menu node by the (hashed) Global ID. */
  Id = 'ID',
  /** Identify a menu node by the slug of menu location to which it is assigned */
  Location = 'LOCATION',
  /** Identify a menu node by its name */
  Name = 'NAME',
  /** Identify a menu node by its slug */
  Slug = 'SLUG'
}

/** Connection between the Menu type and the MenuItem type */
export type MenuToMenuItemConnection = Connection & MenuItemConnection & {
  __typename?: 'MenuToMenuItemConnection';
  /** Edges for the MenuToMenuItemConnection connection */
  edges: Array<MenuToMenuItemConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<MenuItem>;
  /** Information about pagination in a connection. */
  pageInfo: MenuToMenuItemConnectionPageInfo;
};

/** An edge in a connection */
export type MenuToMenuItemConnectionEdge = Edge & MenuItemConnectionEdge & {
  __typename?: 'MenuToMenuItemConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: MenuItem;
};

/** Page Info on the &quot;MenuToMenuItemConnection&quot; */
export type MenuToMenuItemConnectionPageInfo = MenuItemConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'MenuToMenuItemConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the MenuToMenuItemConnection connection */
export type MenuToMenuItemConnectionWhereArgs = {
  /** The database ID of the object */
  id?: InputMaybe<Scalars['Int']>;
  /** The menu location for the menu being queried */
  location?: InputMaybe<MenuLocationEnum>;
  /** The database ID of the parent menu object */
  parentDatabaseId?: InputMaybe<Scalars['Int']>;
  /** The ID of the parent menu object */
  parentId?: InputMaybe<Scalars['ID']>;
};

/** The MimeType of the object */
export enum MimeTypeEnum {
  /** MimeType application/java */
  ApplicationJava = 'APPLICATION_JAVA',
  /** MimeType application/msword */
  ApplicationMsword = 'APPLICATION_MSWORD',
  /** MimeType application/octet-stream */
  ApplicationOctetStream = 'APPLICATION_OCTET_STREAM',
  /** MimeType application/onenote */
  ApplicationOnenote = 'APPLICATION_ONENOTE',
  /** MimeType application/oxps */
  ApplicationOxps = 'APPLICATION_OXPS',
  /** MimeType application/pdf */
  ApplicationPdf = 'APPLICATION_PDF',
  /** MimeType application/rar */
  ApplicationRar = 'APPLICATION_RAR',
  /** MimeType application/rtf */
  ApplicationRtf = 'APPLICATION_RTF',
  /** MimeType application/ttaf+xml */
  ApplicationTtafXml = 'APPLICATION_TTAF_XML',
  /** MimeType application/vnd.apple.keynote */
  ApplicationVndAppleKeynote = 'APPLICATION_VND_APPLE_KEYNOTE',
  /** MimeType application/vnd.apple.numbers */
  ApplicationVndAppleNumbers = 'APPLICATION_VND_APPLE_NUMBERS',
  /** MimeType application/vnd.apple.pages */
  ApplicationVndApplePages = 'APPLICATION_VND_APPLE_PAGES',
  /** MimeType application/vnd.ms-access */
  ApplicationVndMsAccess = 'APPLICATION_VND_MS_ACCESS',
  /** MimeType application/vnd.ms-excel */
  ApplicationVndMsExcel = 'APPLICATION_VND_MS_EXCEL',
  /** MimeType application/vnd.ms-excel.addin.macroEnabled.12 */
  ApplicationVndMsExcelAddinMacroenabled_12 = 'APPLICATION_VND_MS_EXCEL_ADDIN_MACROENABLED_12',
  /** MimeType application/vnd.ms-excel.sheet.binary.macroEnabled.12 */
  ApplicationVndMsExcelSheetBinaryMacroenabled_12 = 'APPLICATION_VND_MS_EXCEL_SHEET_BINARY_MACROENABLED_12',
  /** MimeType application/vnd.ms-excel.sheet.macroEnabled.12 */
  ApplicationVndMsExcelSheetMacroenabled_12 = 'APPLICATION_VND_MS_EXCEL_SHEET_MACROENABLED_12',
  /** MimeType application/vnd.ms-excel.template.macroEnabled.12 */
  ApplicationVndMsExcelTemplateMacroenabled_12 = 'APPLICATION_VND_MS_EXCEL_TEMPLATE_MACROENABLED_12',
  /** MimeType application/vnd.ms-powerpoint */
  ApplicationVndMsPowerpoint = 'APPLICATION_VND_MS_POWERPOINT',
  /** MimeType application/vnd.ms-powerpoint.addin.macroEnabled.12 */
  ApplicationVndMsPowerpointAddinMacroenabled_12 = 'APPLICATION_VND_MS_POWERPOINT_ADDIN_MACROENABLED_12',
  /** MimeType application/vnd.ms-powerpoint.presentation.macroEnabled.12 */
  ApplicationVndMsPowerpointPresentationMacroenabled_12 = 'APPLICATION_VND_MS_POWERPOINT_PRESENTATION_MACROENABLED_12',
  /** MimeType application/vnd.ms-powerpoint.slideshow.macroEnabled.12 */
  ApplicationVndMsPowerpointSlideshowMacroenabled_12 = 'APPLICATION_VND_MS_POWERPOINT_SLIDESHOW_MACROENABLED_12',
  /** MimeType application/vnd.ms-powerpoint.slide.macroEnabled.12 */
  ApplicationVndMsPowerpointSlideMacroenabled_12 = 'APPLICATION_VND_MS_POWERPOINT_SLIDE_MACROENABLED_12',
  /** MimeType application/vnd.ms-powerpoint.template.macroEnabled.12 */
  ApplicationVndMsPowerpointTemplateMacroenabled_12 = 'APPLICATION_VND_MS_POWERPOINT_TEMPLATE_MACROENABLED_12',
  /** MimeType application/vnd.ms-project */
  ApplicationVndMsProject = 'APPLICATION_VND_MS_PROJECT',
  /** MimeType application/vnd.ms-word.document.macroEnabled.12 */
  ApplicationVndMsWordDocumentMacroenabled_12 = 'APPLICATION_VND_MS_WORD_DOCUMENT_MACROENABLED_12',
  /** MimeType application/vnd.ms-word.template.macroEnabled.12 */
  ApplicationVndMsWordTemplateMacroenabled_12 = 'APPLICATION_VND_MS_WORD_TEMPLATE_MACROENABLED_12',
  /** MimeType application/vnd.ms-write */
  ApplicationVndMsWrite = 'APPLICATION_VND_MS_WRITE',
  /** MimeType application/vnd.ms-xpsdocument */
  ApplicationVndMsXpsdocument = 'APPLICATION_VND_MS_XPSDOCUMENT',
  /** MimeType application/vnd.oasis.opendocument.chart */
  ApplicationVndOasisOpendocumentChart = 'APPLICATION_VND_OASIS_OPENDOCUMENT_CHART',
  /** MimeType application/vnd.oasis.opendocument.database */
  ApplicationVndOasisOpendocumentDatabase = 'APPLICATION_VND_OASIS_OPENDOCUMENT_DATABASE',
  /** MimeType application/vnd.oasis.opendocument.formula */
  ApplicationVndOasisOpendocumentFormula = 'APPLICATION_VND_OASIS_OPENDOCUMENT_FORMULA',
  /** MimeType application/vnd.oasis.opendocument.graphics */
  ApplicationVndOasisOpendocumentGraphics = 'APPLICATION_VND_OASIS_OPENDOCUMENT_GRAPHICS',
  /** MimeType application/vnd.oasis.opendocument.presentation */
  ApplicationVndOasisOpendocumentPresentation = 'APPLICATION_VND_OASIS_OPENDOCUMENT_PRESENTATION',
  /** MimeType application/vnd.oasis.opendocument.spreadsheet */
  ApplicationVndOasisOpendocumentSpreadsheet = 'APPLICATION_VND_OASIS_OPENDOCUMENT_SPREADSHEET',
  /** MimeType application/vnd.oasis.opendocument.text */
  ApplicationVndOasisOpendocumentText = 'APPLICATION_VND_OASIS_OPENDOCUMENT_TEXT',
  /** MimeType application/vnd.openxmlformats-officedocument.presentationml.presentation */
  ApplicationVndOpenxmlformatsOfficedocumentPresentationmlPresentation = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_PRESENTATION',
  /** MimeType application/vnd.openxmlformats-officedocument.presentationml.slide */
  ApplicationVndOpenxmlformatsOfficedocumentPresentationmlSlide = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_SLIDE',
  /** MimeType application/vnd.openxmlformats-officedocument.presentationml.slideshow */
  ApplicationVndOpenxmlformatsOfficedocumentPresentationmlSlideshow = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_SLIDESHOW',
  /** MimeType application/vnd.openxmlformats-officedocument.presentationml.template */
  ApplicationVndOpenxmlformatsOfficedocumentPresentationmlTemplate = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_TEMPLATE',
  /** MimeType application/vnd.openxmlformats-officedocument.spreadsheetml.sheet */
  ApplicationVndOpenxmlformatsOfficedocumentSpreadsheetmlSheet = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_SHEET',
  /** MimeType application/vnd.openxmlformats-officedocument.spreadsheetml.template */
  ApplicationVndOpenxmlformatsOfficedocumentSpreadsheetmlTemplate = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_TEMPLATE',
  /** MimeType application/vnd.openxmlformats-officedocument.wordprocessingml.document */
  ApplicationVndOpenxmlformatsOfficedocumentWordprocessingmlDocument = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_DOCUMENT',
  /** MimeType application/vnd.openxmlformats-officedocument.wordprocessingml.template */
  ApplicationVndOpenxmlformatsOfficedocumentWordprocessingmlTemplate = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_TEMPLATE',
  /** MimeType application/wordperfect */
  ApplicationWordperfect = 'APPLICATION_WORDPERFECT',
  /** MimeType application/x-7z-compressed */
  ApplicationX_7ZCompressed = 'APPLICATION_X_7Z_COMPRESSED',
  /** MimeType application/x-gzip */
  ApplicationXGzip = 'APPLICATION_X_GZIP',
  /** MimeType application/x-tar */
  ApplicationXTar = 'APPLICATION_X_TAR',
  /** MimeType application/zip */
  ApplicationZip = 'APPLICATION_ZIP',
  /** MimeType audio/aac */
  AudioAac = 'AUDIO_AAC',
  /** MimeType audio/flac */
  AudioFlac = 'AUDIO_FLAC',
  /** MimeType audio/midi */
  AudioMidi = 'AUDIO_MIDI',
  /** MimeType audio/mpeg */
  AudioMpeg = 'AUDIO_MPEG',
  /** MimeType audio/ogg */
  AudioOgg = 'AUDIO_OGG',
  /** MimeType audio/wav */
  AudioWav = 'AUDIO_WAV',
  /** MimeType audio/x-matroska */
  AudioXMatroska = 'AUDIO_X_MATROSKA',
  /** MimeType audio/x-ms-wax */
  AudioXMsWax = 'AUDIO_X_MS_WAX',
  /** MimeType audio/x-ms-wma */
  AudioXMsWma = 'AUDIO_X_MS_WMA',
  /** MimeType audio/x-realaudio */
  AudioXRealaudio = 'AUDIO_X_REALAUDIO',
  /** MimeType image/bmp */
  ImageBmp = 'IMAGE_BMP',
  /** MimeType image/gif */
  ImageGif = 'IMAGE_GIF',
  /** MimeType image/heic */
  ImageHeic = 'IMAGE_HEIC',
  /** MimeType image/jpeg */
  ImageJpeg = 'IMAGE_JPEG',
  /** MimeType image/png */
  ImagePng = 'IMAGE_PNG',
  /** MimeType image/tiff */
  ImageTiff = 'IMAGE_TIFF',
  /** MimeType image/webp */
  ImageWebp = 'IMAGE_WEBP',
  /** MimeType image/x-icon */
  ImageXIcon = 'IMAGE_X_ICON',
  /** MimeType text/calendar */
  TextCalendar = 'TEXT_CALENDAR',
  /** MimeType text/css */
  TextCss = 'TEXT_CSS',
  /** MimeType text/csv */
  TextCsv = 'TEXT_CSV',
  /** MimeType text/plain */
  TextPlain = 'TEXT_PLAIN',
  /** MimeType text/richtext */
  TextRichtext = 'TEXT_RICHTEXT',
  /** MimeType text/tab-separated-values */
  TextTabSeparatedValues = 'TEXT_TAB_SEPARATED_VALUES',
  /** MimeType text/vtt */
  TextVtt = 'TEXT_VTT',
  /** MimeType video/3gpp */
  Video_3Gpp = 'VIDEO_3GPP',
  /** MimeType video/3gpp2 */
  Video_3Gpp2 = 'VIDEO_3GPP2',
  /** MimeType video/avi */
  VideoAvi = 'VIDEO_AVI',
  /** MimeType video/divx */
  VideoDivx = 'VIDEO_DIVX',
  /** MimeType video/mp4 */
  VideoMp4 = 'VIDEO_MP4',
  /** MimeType video/mpeg */
  VideoMpeg = 'VIDEO_MPEG',
  /** MimeType video/ogg */
  VideoOgg = 'VIDEO_OGG',
  /** MimeType video/quicktime */
  VideoQuicktime = 'VIDEO_QUICKTIME',
  /** MimeType video/webm */
  VideoWebm = 'VIDEO_WEBM',
  /** MimeType video/x-flv */
  VideoXFlv = 'VIDEO_X_FLV',
  /** MimeType video/x-matroska */
  VideoXMatroska = 'VIDEO_X_MATROSKA',
  /** MimeType video/x-ms-asf */
  VideoXMsAsf = 'VIDEO_X_MS_ASF',
  /** MimeType video/x-ms-wm */
  VideoXMsWm = 'VIDEO_X_MS_WM',
  /** MimeType video/x-ms-wmv */
  VideoXMsWmv = 'VIDEO_X_MS_WMV',
  /** MimeType video/x-ms-wmx */
  VideoXMsWmx = 'VIDEO_X_MS_WMX'
}

/** A Gravity Forms   field. */
export type MultiSelectField = FormField & {
  __typename?: 'MultiSelectField';
  /** When specified, the value of this property will be used on the admin pages instead of the label. It is useful for fields with long labels. */
  adminLabel?: Maybe<Scalars['String']>;
  /** Determines if the field’s value can be pre-populated dynamically. */
  canPrepopulate?: Maybe<Scalars['Boolean']>;
  /** The available choices for the multiselect field. */
  choices?: Maybe<Array<Maybe<MultiSelectFieldChoice>>>;
  /** Controls the visibility of the field based on values selected by the user. */
  conditionalLogic?: Maybe<ConditionalLogic>;
  /** String containing the custom CSS classes to be added to the &lt;li&gt; tag that contains the field. Useful for applying custom formatting to specific fields. */
  cssClass?: Maybe<Scalars['String']>;
  /** Field description. */
  description?: Maybe<Scalars['String']>;
  /** The placement of the field description. */
  descriptionPlacement?: Maybe<FormFieldDescriptionPlacementEnum>;
  /** Indicates the field is only displayed and its contents are not submitted with the form/saved with the entry. This is set to true. */
  displayOnly?: Maybe<Scalars['Boolean']>;
  /** Contains the message that is displayed for fields that fail validation. */
  errorMessage?: Maybe<Scalars['String']>;
  /** Determines if the field (checkbox, select or radio) have choice values enabled, which allows the field to have choice values different from the labels that are displayed to the user. */
  hasChoiceValue?: Maybe<Scalars['Boolean']>;
  /** When set to true, the &quot;Chosen&quot; jQuery script will be applied to this field, enabling search capabilities to Drop Down fields and a more user-friendly interface for Multi Select fields. */
  hasEnhancedUI?: Maybe<Scalars['Boolean']>;
  /** Field ID. */
  id: Scalars['Int'];
  /** Assigns a name to this field so that it can be populated dynamically via this input name. Only applicable when canPrepopulate is `true`. */
  inputName?: Maybe<Scalars['String']>;
  /** The base form field type used to display the input. A good example is the Post Custom Field that can be displayed as various different types of fields. */
  inputType?: Maybe<FormFieldTypeEnum>;
  /** Determines if the field requires the user to enter a value. Fields marked as required will prevent the form from being submitted if the user has not entered a value in it. */
  isRequired?: Maybe<Scalars['Boolean']>;
  /** Field label that will be displayed on the form and on the admin pages. */
  label?: Maybe<Scalars['String']>;
  /** The field label position. */
  labelPlacement?: Maybe<FormFieldLabelPlacementEnum>;
  /** The number of CSS grid columns the field should span. */
  layoutGridColumnSpan?: Maybe<Scalars['Int']>;
  /** The number of CSS grid columns the spacer field following this one should span. */
  layoutSpacerGridColumnSpan?: Maybe<Scalars['Int']>;
  /** The form page this field is located on. Default is 1. */
  pageNumber?: Maybe<Scalars['Int']>;
  /** The form field-specifc policies for exporting and erasing personal data. */
  personalData?: Maybe<FormFieldDataPolicy>;
  /** Determines the size of the field when displayed on the page. */
  size?: Maybe<FormFieldSizeEnum>;
  /** The type of field to be displayed. */
  type?: Maybe<FormFieldTypeEnum>;
  /** The string-formatted entry value for the `formField`. For complex fields this might be a JSON-encoded or serialized array. */
  value?: Maybe<Scalars['String']>;
  /** An array of field values. */
  values?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Field visibility. */
  visibility?: Maybe<FormFieldVisibilityEnum>;
};

/** Multiselect choice values. */
export type MultiSelectFieldChoice = {
  __typename?: 'MultiSelectFieldChoice';
  /** Determines if this choice should be selected by default when displayed. The value true will select the choice, whereas false will display it unselected. */
  isSelected?: Maybe<Scalars['Boolean']>;
  /** The text to be displayed to the user when displaying this choice. */
  text?: Maybe<Scalars['String']>;
  /** The value to be stored in the database when this choice is selected. Note: This property is only supported by the Drop Down and Post Category fields. Checkboxes and Radio fields will store the text property in the database regardless of the value property. */
  value?: Maybe<Scalars['String']>;
};

/** A Gravity Forms   field. */
export type NameField = FormField & {
  __typename?: 'NameField';
  /** When specified, the value of this property will be used on the admin pages instead of the label. It is useful for fields with long labels. */
  adminLabel?: Maybe<Scalars['String']>;
  /** Determines if the field’s value can be pre-populated dynamically. */
  canPrepopulate?: Maybe<Scalars['Boolean']>;
  /** Controls the visibility of the field based on values selected by the user. */
  conditionalLogic?: Maybe<ConditionalLogic>;
  /** String containing the custom CSS classes to be added to the &lt;li&gt; tag that contains the field. Useful for applying custom formatting to specific fields. */
  cssClass?: Maybe<Scalars['String']>;
  /** Field description. */
  description?: Maybe<Scalars['String']>;
  /** The placement of the field description. */
  descriptionPlacement?: Maybe<FormFieldDescriptionPlacementEnum>;
  /** Indicates the field is only displayed and its contents are not submitted with the form/saved with the entry. This is set to true. */
  displayOnly?: Maybe<Scalars['Boolean']>;
  /** Contains the message that is displayed for fields that fail validation. */
  errorMessage?: Maybe<Scalars['String']>;
  /** Whether autocomplete should be enabled for this field. */
  hasAutocomplete?: Maybe<Scalars['Boolean']>;
  /** Field ID. */
  id: Scalars['Int'];
  /** Assigns a name to this field so that it can be populated dynamically via this input name. Only applicable when canPrepopulate is `true`. */
  inputName?: Maybe<Scalars['String']>;
  /** The base form field type used to display the input. A good example is the Post Custom Field that can be displayed as various different types of fields. */
  inputType?: Maybe<FormFieldTypeEnum>;
  /** An array of the available properties for each input of the name field. */
  inputs?: Maybe<Array<Maybe<NameInputProperty>>>;
  /** Determines if the field requires the user to enter a value. Fields marked as required will prevent the form from being submitted if the user has not entered a value in it. */
  isRequired?: Maybe<Scalars['Boolean']>;
  /** Field label that will be displayed on the form and on the admin pages. */
  label?: Maybe<Scalars['String']>;
  /** The field label position. */
  labelPlacement?: Maybe<FormFieldLabelPlacementEnum>;
  /** The number of CSS grid columns the field should span. */
  layoutGridColumnSpan?: Maybe<Scalars['Int']>;
  /** The number of CSS grid columns the spacer field following this one should span. */
  layoutSpacerGridColumnSpan?: Maybe<Scalars['Int']>;
  /** Name field value. */
  nameValues?: Maybe<NameFieldValue>;
  /** The form page this field is located on. Default is 1. */
  pageNumber?: Maybe<Scalars['Int']>;
  /** The form field-specifc policies for exporting and erasing personal data. */
  personalData?: Maybe<FormFieldDataPolicy>;
  /** The placement of the labels for the subfields within the group. This setting controls all of the subfields, they cannot be set individually. They may be aligned above or below the inputs. If this property is not set, the “Sub-Label Placement” setting on the Form Settings-&gt;Form Layout page is used. If no setting is specified, the default is above inputs. */
  subLabelPlacement?: Maybe<FormFieldSubLabelPlacementEnum>;
  /** The type of field to be displayed. */
  type?: Maybe<FormFieldTypeEnum>;
  /** The string-formatted entry value for the `formField`. For complex fields this might be a JSON-encoded or serialized array. */
  value?: Maybe<Scalars['String']>;
  /** Field visibility. */
  visibility?: Maybe<FormFieldVisibilityEnum>;
};

/** Name choice values. */
export type NameFieldChoice = {
  __typename?: 'NameFieldChoice';
  /** Determines if this choice should be selected by default when displayed. The value true will select the choice, whereas false will display it unselected. */
  isSelected?: Maybe<Scalars['Boolean']>;
  /** The text to be displayed to the user when displaying this choice. */
  text?: Maybe<Scalars['String']>;
  /** The value to be stored in the database when this choice is selected. Note: This property is only supported by the Drop Down and Post Category fields. Checkboxes and Radio fields will store the text property in the database regardless of the value property. */
  value?: Maybe<Scalars['String']>;
};

/** Input fields for name field. */
export type NameFieldInput = {
  /** First name. */
  first?: InputMaybe<Scalars['String']>;
  /** Last name. */
  last?: InputMaybe<Scalars['String']>;
  /** Middle name. */
  middle?: InputMaybe<Scalars['String']>;
  /** Prefix, such as Mr., Mrs. etc. */
  prefix?: InputMaybe<Scalars['String']>;
  /** Suffix, such as Sr., Jr. etc. */
  suffix?: InputMaybe<Scalars['String']>;
};

/** The individual properties for each element of the Name value field. */
export type NameFieldValue = {
  __typename?: 'NameFieldValue';
  /** First name. */
  first?: Maybe<Scalars['String']>;
  /** Last name. */
  last?: Maybe<Scalars['String']>;
  /** Middle name. */
  middle?: Maybe<Scalars['String']>;
  /** Prefix, such as Mr., Mrs. etc. */
  prefix?: Maybe<Scalars['String']>;
  /** Suffix, such as Sr., Jr. etc. */
  suffix?: Maybe<Scalars['String']>;
};

/** Name input values. */
export type NameInputProperty = {
  __typename?: 'NameInputProperty';
  /** The autocomplete attribute for the field. */
  autocompleteAttribute?: Maybe<Scalars['String']>;
  /** The available choices for the name field. */
  choices?: Maybe<Array<Maybe<NameFieldChoice>>>;
  /** The custom label for the input. When set, this is used in place of the label. */
  customLabel?: Maybe<Scalars['String']>;
  /** Contains the default value for the field. When specified, the field&#039;s value will be populated with the contents of this property when the form is displayed. */
  defaultValue?: Maybe<Scalars['String']>;
  /** Determines if the field (checkbox, select or radio) have choice values enabled, which allows the field to have choice values different from the labels that are displayed to the user. */
  hasChoiceValue?: Maybe<Scalars['Boolean']>;
  /** The input ID. Input IDs follow the following naming convention: FIELDID.INPUTID (i.e. 5.1), where FIELDID is the id of the containing field and INPUTID specifies the input field. */
  id?: Maybe<Scalars['Float']>;
  /** Whether or not this field should be hidden. */
  isHidden?: Maybe<Scalars['Boolean']>;
  /** Key used to identify this input. */
  key?: Maybe<Scalars['String']>;
  /** Field label that will be displayed on the form and on the admin pages. */
  label?: Maybe<Scalars['String']>;
  /** Assigns a name to this field so that it can be populated dynamically via this input name. Only applicable when canPrepopulate is `true`. */
  name?: Maybe<Scalars['String']>;
  /** Placeholder text to give the user a hint on how to fill out the field. This is not submitted with the form. */
  placeholder?: Maybe<Scalars['String']>;
};

/** An object with an ID */
export type Node = {
  /** The globally unique ID for the object */
  id: Scalars['ID'];
};

/** A node that can have an author assigned to it */
export type NodeWithAuthor = {
  /** Connection between the NodeWithAuthor type and the User type */
  author?: Maybe<NodeWithAuthorToUserConnectionEdge>;
  /** The database identifier of the author of the node */
  authorDatabaseId?: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the author of the node */
  authorId?: Maybe<Scalars['ID']>;
  /** The globally unique ID for the object */
  id: Scalars['ID'];
};

/** Connection between the NodeWithAuthor type and the User type */
export type NodeWithAuthorToUserConnectionEdge = Edge & OneToOneConnection & UserConnectionEdge & {
  __typename?: 'NodeWithAuthorToUserConnectionEdge';
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The node of the connection, without the edges */
  node: User;
};

/** A node that can have comments associated with it */
export type NodeWithComments = {
  /** The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility. */
  commentCount?: Maybe<Scalars['Int']>;
  /** Whether the comments are open or closed for this particular post. */
  commentStatus?: Maybe<Scalars['String']>;
  /** The globally unique ID for the object */
  id: Scalars['ID'];
};

/** A node that supports the content editor */
export type NodeWithContentEditor = {
  /** The content of the post. */
  content?: Maybe<Scalars['String']>;
  /** The globally unique ID for the object */
  id: Scalars['ID'];
};


/** A node that supports the content editor */
export type NodeWithContentEditorContentArgs = {
  format?: InputMaybe<PostObjectFieldFormatEnum>;
};

/** A node that can have an excerpt */
export type NodeWithExcerpt = {
  /** The excerpt of the post. */
  excerpt?: Maybe<Scalars['String']>;
  /** The globally unique ID for the object */
  id: Scalars['ID'];
};


/** A node that can have an excerpt */
export type NodeWithExcerptExcerptArgs = {
  format?: InputMaybe<PostObjectFieldFormatEnum>;
};

/** A node that can have a featured image set */
export type NodeWithFeaturedImage = {
  /** Connection between the NodeWithFeaturedImage type and the MediaItem type */
  featuredImage?: Maybe<NodeWithFeaturedImageToMediaItemConnectionEdge>;
  /** The database identifier for the featured image node assigned to the content node */
  featuredImageDatabaseId?: Maybe<Scalars['Int']>;
  /** Globally unique ID of the featured image assigned to the node */
  featuredImageId?: Maybe<Scalars['ID']>;
  /** The globally unique ID for the object */
  id: Scalars['ID'];
};

/** Connection between the NodeWithFeaturedImage type and the MediaItem type */
export type NodeWithFeaturedImageToMediaItemConnectionEdge = Edge & MediaItemConnectionEdge & OneToOneConnection & {
  __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The node of the connection, without the edges */
  node: MediaItem;
};

/** A node that can have a Gravity Forms form assigned to it. */
export type NodeWithForm = {
  /** The form object of the node. */
  form?: Maybe<GfForm>;
  /** The database identifier of the form of the node. */
  formDatabaseId?: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the form of the node. */
  formId?: Maybe<Scalars['ID']>;
};

/** A node that can have page attributes */
export type NodeWithPageAttributes = {
  /** The globally unique ID for the object */
  id: Scalars['ID'];
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: Maybe<Scalars['Int']>;
};

/** A node that can have revisions */
export type NodeWithRevisions = {
  /** The globally unique ID for the object */
  id: Scalars['ID'];
  /** True if the node is a revision of another node */
  isRevision?: Maybe<Scalars['Boolean']>;
  /** If the current node is a revision, this field exposes the node this is a revision of. Returns null if the node is not a revision of another node. */
  revisionOf?: Maybe<NodeWithRevisionsToContentNodeConnectionEdge>;
};

/** Connection between the NodeWithRevisions type and the ContentNode type */
export type NodeWithRevisionsToContentNodeConnectionEdge = ContentNodeConnectionEdge & Edge & OneToOneConnection & {
  __typename?: 'NodeWithRevisionsToContentNodeConnectionEdge';
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The node of the connection, without the edges */
  node: ContentNode;
};

/** A node that can have a template associated with it */
export type NodeWithTemplate = {
  /** The globally unique ID for the object */
  id: Scalars['ID'];
  /** The template assigned to the node */
  template?: Maybe<ContentTemplate>;
};

/** A node that NodeWith a title */
export type NodeWithTitle = {
  /** The globally unique ID for the object */
  id: Scalars['ID'];
  /** The Yoast SEO data of the ContentNode */
  seo?: Maybe<PostTypeSeo>;
  /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
  title?: Maybe<Scalars['String']>;
};


/** A node that NodeWith a title */
export type NodeWithTitleTitleArgs = {
  format?: InputMaybe<PostObjectFieldFormatEnum>;
};

/** A node that can have trackbacks and pingbacks */
export type NodeWithTrackbacks = {
  /** The globally unique ID for the object */
  id: Scalars['ID'];
  /** Whether the pings are open or closed for this particular post. */
  pingStatus?: Maybe<Scalars['String']>;
  /** URLs that have been pinged. */
  pinged?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** URLs queued to be pinged. */
  toPing?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** A Gravity Forms   field. */
export type NumberField = FormField & {
  __typename?: 'NumberField';
  /** When specified, the value of this property will be used on the admin pages instead of the label. It is useful for fields with long labels. */
  adminLabel?: Maybe<Scalars['String']>;
  /** The autocomplete attribute for the field. */
  autocompleteAttribute?: Maybe<Scalars['String']>;
  /** The formula used for the number field. */
  calculationFormula?: Maybe<Scalars['String']>;
  /** Specifies to how many decimal places the number should be rounded. This is available when `isCalculation` is true, but will return null if the number format is `CURRENCY` or if the calculation is set to `Do not round`. */
  calculationRounding?: Maybe<Scalars['Int']>;
  /** Determines if the field’s value can be pre-populated dynamically. */
  canPrepopulate?: Maybe<Scalars['Boolean']>;
  /** Controls the visibility of the field based on values selected by the user. */
  conditionalLogic?: Maybe<ConditionalLogic>;
  /** String containing the custom CSS classes to be added to the &lt;li&gt; tag that contains the field. Useful for applying custom formatting to specific fields. */
  cssClass?: Maybe<Scalars['String']>;
  /** Contains the default value for the field. When specified, the field&#039;s value will be populated with the contents of this property when the form is displayed. */
  defaultValue?: Maybe<Scalars['String']>;
  /** Field description. */
  description?: Maybe<Scalars['String']>;
  /** The placement of the field description. */
  descriptionPlacement?: Maybe<FormFieldDescriptionPlacementEnum>;
  /** Indicates the field is only displayed and its contents are not submitted with the form/saved with the entry. This is set to true. */
  displayOnly?: Maybe<Scalars['Boolean']>;
  /** Contains the message that is displayed for fields that fail validation. */
  errorMessage?: Maybe<Scalars['String']>;
  /** Whether autocomplete should be enabled for this field. */
  hasAutocomplete?: Maybe<Scalars['Boolean']>;
  /** Field ID. */
  id: Scalars['Int'];
  /** Assigns a name to this field so that it can be populated dynamically via this input name. Only applicable when canPrepopulate is `true`. */
  inputName?: Maybe<Scalars['String']>;
  /** The base form field type used to display the input. A good example is the Post Custom Field that can be displayed as various different types of fields. */
  inputType?: Maybe<FormFieldTypeEnum>;
  /** Indicates whether the number field is a calculation. */
  isCalculation?: Maybe<Scalars['Boolean']>;
  /** Determines if the field requires the user to enter a value. Fields marked as required will prevent the form from being submitted if the user has not entered a value in it. */
  isRequired?: Maybe<Scalars['Boolean']>;
  /** Field label that will be displayed on the form and on the admin pages. */
  label?: Maybe<Scalars['String']>;
  /** The field label position. */
  labelPlacement?: Maybe<FormFieldLabelPlacementEnum>;
  /** The number of CSS grid columns the field should span. */
  layoutGridColumnSpan?: Maybe<Scalars['Int']>;
  /** The number of CSS grid columns the spacer field following this one should span. */
  layoutSpacerGridColumnSpan?: Maybe<Scalars['Int']>;
  /** Specifies the format allowed for the number field. */
  numberFormat?: Maybe<NumberFieldFormatEnum>;
  /** The form page this field is located on. Default is 1. */
  pageNumber?: Maybe<Scalars['Int']>;
  /** The form field-specifc policies for exporting and erasing personal data. */
  personalData?: Maybe<FormFieldDataPolicy>;
  /** Placeholder text to give the user a hint on how to fill out the field. This is not submitted with the form. */
  placeholder?: Maybe<Scalars['String']>;
  /** Maximum allowed value for a number field. Values higher than the number specified by this property will cause the field to fail validation. */
  rangeMax?: Maybe<Scalars['Float']>;
  /** Minimum allowed value for a number field. Values lower than the number specified by this property will cause the field to fail validation. */
  rangeMin?: Maybe<Scalars['Float']>;
  /** Determines if the field allows duplicate submissions. */
  shouldAllowDuplicates?: Maybe<Scalars['Boolean']>;
  /** Determines the size of the field when displayed on the page. */
  size?: Maybe<FormFieldSizeEnum>;
  /** The type of field to be displayed. */
  type?: Maybe<FormFieldTypeEnum>;
  /** The string-formatted entry value for the `formField`. For complex fields this might be a JSON-encoded or serialized array. */
  value?: Maybe<Scalars['String']>;
  /** Field visibility. */
  visibility?: Maybe<FormFieldVisibilityEnum>;
};

/** The format allowed for the number field. . */
export enum NumberFieldFormatEnum {
  /** Currency format. */
  Currency = 'CURRENCY',
  /** Decimal-comma format (e.g. 9.999,99). */
  DecimalComma = 'DECIMAL_COMMA',
  /** Decimal-dot format (e.g. 9,999.99). */
  DecimalDot = 'DECIMAL_DOT'
}

/** A singular connection from one Node to another, with support for relational data on the &quot;edge&quot; of the connection. */
export type OneToOneConnection = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The connected node */
  node: Node;
};

/** The cardinality of the connection order */
export enum OrderEnum {
  /** Sort the query result set in an ascending order */
  Asc = 'ASC',
  /** Sort the query result set in a descending order */
  Desc = 'DESC'
}

/** The page type */
export type Page = ContentNode & DatabaseIdentifier & HierarchicalContentNode & HierarchicalNode & MenuItemLinkable & Node & NodeWithAuthor & NodeWithComments & NodeWithContentEditor & NodeWithFeaturedImage & NodeWithPageAttributes & NodeWithRevisions & NodeWithTemplate & NodeWithTitle & Previewable & UniformResourceIdentifiable & {
  __typename?: 'Page';
  /** Returns ancestors of the node. Default ordered as lowest (closest to the child) to highest (closest to the root). */
  ancestors?: Maybe<HierarchicalContentNodeToContentNodeAncestorsConnection>;
  /** Connection between the NodeWithAuthor type and the User type */
  author?: Maybe<NodeWithAuthorToUserConnectionEdge>;
  /** The database identifier of the author of the node */
  authorDatabaseId?: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the author of the node */
  authorId?: Maybe<Scalars['ID']>;
  /** Connection between the HierarchicalContentNode type and the ContentNode type */
  children?: Maybe<HierarchicalContentNodeToContentNodeChildrenConnection>;
  /** The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility. */
  commentCount?: Maybe<Scalars['Int']>;
  /** Whether the comments are open or closed for this particular post. */
  commentStatus?: Maybe<Scalars['String']>;
  /** Connection between the Page type and the Comment type */
  comments?: Maybe<PageToCommentConnection>;
  /** @deprecated Deprecated in favor of using Next.js pages */
  conditionalTags?: Maybe<ConditionalTags>;
  /** The content of the post. */
  content?: Maybe<Scalars['String']>;
  /** Connection between the ContentNode type and the ContentType type */
  contentType?: Maybe<ContentNodeToContentTypeConnectionEdge>;
  /** The name of the Content Type the node belongs to */
  contentTypeName: Scalars['String'];
  /** The unique identifier stored in the database */
  databaseId: Scalars['Int'];
  /** Post publishing date. */
  date?: Maybe<Scalars['String']>;
  /** The publishing date set in GMT. */
  dateGmt?: Maybe<Scalars['String']>;
  /** The desired slug of the post */
  desiredSlug?: Maybe<Scalars['String']>;
  /** If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds */
  editingLockedBy?: Maybe<ContentNodeToEditLockConnectionEdge>;
  /** The RSS enclosure for the object */
  enclosure?: Maybe<Scalars['String']>;
  /** Connection between the ContentNode type and the EnqueuedScript type */
  enqueuedScripts?: Maybe<ContentNodeToEnqueuedScriptConnection>;
  /** Connection between the ContentNode type and the EnqueuedStylesheet type */
  enqueuedStylesheets?: Maybe<ContentNodeToEnqueuedStylesheetConnection>;
  /** Connection between the NodeWithFeaturedImage type and the MediaItem type */
  featuredImage?: Maybe<NodeWithFeaturedImageToMediaItemConnectionEdge>;
  /** The database identifier for the featured image node assigned to the content node */
  featuredImageDatabaseId?: Maybe<Scalars['Int']>;
  /** Globally unique ID of the featured image assigned to the node */
  featuredImageId?: Maybe<Scalars['ID']>;
  /** Added to the GraphQL Schema because the ACF Field Group &quot;Flexible Content&quot; was set to Show in GraphQL. */
  flexibleContent?: Maybe<Page_Flexiblecontent>;
  /** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
  guid?: Maybe<Scalars['String']>;
  /** The globally unique identifier of the page object. */
  id: Scalars['ID'];
  /** Whether the node is a Content Node */
  isContentNode: Scalars['Boolean'];
  /** Whether this page is set to the static front page. */
  isFrontPage: Scalars['Boolean'];
  /** Whether this page is set to the blog posts page. */
  isPostsPage: Scalars['Boolean'];
  /** Whether the object is a node in the preview state */
  isPreview?: Maybe<Scalars['Boolean']>;
  /** Whether this page is set to the privacy page. */
  isPrivacyPage: Scalars['Boolean'];
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** True if the node is a revision of another node */
  isRevision?: Maybe<Scalars['Boolean']>;
  /** Whether the node is a Term */
  isTermNode: Scalars['Boolean'];
  /** The user that most recently edited the node */
  lastEditedBy?: Maybe<ContentNodeToEditLastConnectionEdge>;
  /** The permalink of the post */
  link?: Maybe<Scalars['String']>;
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: Maybe<Scalars['Int']>;
  /** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
  modified?: Maybe<Scalars['String']>;
  /** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
  modifiedGmt?: Maybe<Scalars['String']>;
  /**
   * The id field matches the WP_Post-&gt;ID field.
   * @deprecated Deprecated in favor of the databaseId field
   */
  pageId: Scalars['Int'];
  /** The parent of the node. The parent object can be of various types */
  parent?: Maybe<HierarchicalContentNodeToParentContentNodeConnectionEdge>;
  /** Database id of the parent node */
  parentDatabaseId?: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the parent node. */
  parentId?: Maybe<Scalars['ID']>;
  /** Connection between the Page type and the page type */
  preview?: Maybe<PageToPreviewConnectionEdge>;
  /** The database id of the preview node */
  previewRevisionDatabaseId?: Maybe<Scalars['Int']>;
  /** Whether the object is a node in the preview state */
  previewRevisionId?: Maybe<Scalars['ID']>;
  /** If the current node is a revision, this field exposes the node this is a revision of. Returns null if the node is not a revision of another node. */
  revisionOf?: Maybe<NodeWithRevisionsToContentNodeConnectionEdge>;
  /** Connection between the Page type and the page type */
  revisions?: Maybe<PageToRevisionConnection>;
  /** The Yoast SEO data of the ContentNode */
  seo?: Maybe<PostTypeSeo>;
  /** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
  slug?: Maybe<Scalars['String']>;
  /** The current status of the object */
  status?: Maybe<Scalars['String']>;
  /** The template assigned to a node of content */
  template?: Maybe<ContentTemplate>;
  templates?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
  title?: Maybe<Scalars['String']>;
  /** The unique resource identifier path */
  uri?: Maybe<Scalars['String']>;
};


/** The page type */
export type PageAncestorsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<HierarchicalContentNodeToContentNodeAncestorsConnectionWhereArgs>;
};


/** The page type */
export type PageChildrenArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<HierarchicalContentNodeToContentNodeChildrenConnectionWhereArgs>;
};


/** The page type */
export type PageCommentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PageToCommentConnectionWhereArgs>;
};


/** The page type */
export type PageContentArgs = {
  format?: InputMaybe<PostObjectFieldFormatEnum>;
};


/** The page type */
export type PageEnqueuedScriptsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** The page type */
export type PageEnqueuedStylesheetsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** The page type */
export type PageRevisionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PageToRevisionConnectionWhereArgs>;
};


/** The page type */
export type PageTitleArgs = {
  format?: InputMaybe<PostObjectFieldFormatEnum>;
};

/** Connection to page Nodes */
export type PageConnection = {
  /** A list of edges (relational context) between RootQuery and connected page Nodes */
  edges: Array<PageConnectionEdge>;
  /** A list of connected page Nodes */
  nodes: Array<Page>;
  /** Information about pagination in a connection. */
  pageInfo: PageConnectionPageInfo;
};

/** Edge between a Node and a connected page */
export type PageConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The connected page Node */
  node: Page;
};

/** Page Info on the connected PageConnectionEdge */
export type PageConnectionPageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** A Gravity Forms   field. */
export type PageField = FormField & {
  __typename?: 'PageField';
  /** Controls the visibility of the field based on values selected by the user. */
  conditionalLogic?: Maybe<ConditionalLogic>;
  /** String containing the custom CSS classes to be added to the &lt;li&gt; tag that contains the field. Useful for applying custom formatting to specific fields. */
  cssClass?: Maybe<Scalars['String']>;
  /** Indicates the field is only displayed and its contents are not submitted with the form/saved with the entry. This is set to true. */
  displayOnly?: Maybe<Scalars['Boolean']>;
  /** Field ID. */
  id: Scalars['Int'];
  /** The base form field type used to display the input. A good example is the Post Custom Field that can be displayed as various different types of fields. */
  inputType?: Maybe<FormFieldTypeEnum>;
  /** The number of CSS grid columns the field should span. */
  layoutGridColumnSpan?: Maybe<Scalars['Int']>;
  /** The number of CSS grid columns the spacer field following this one should span. */
  layoutSpacerGridColumnSpan?: Maybe<Scalars['Int']>;
  /** An array containing the the individual properties for the &quot;Next&quot; button. */
  nextButton?: Maybe<FormButton>;
  /** The form page this field is located on. Default is 1. */
  pageNumber?: Maybe<Scalars['Int']>;
  /** An array containing the the individual properties for the &quot;Previous&quot; button. */
  previousButton?: Maybe<FormButton>;
  /** The type of field to be displayed. */
  type?: Maybe<FormFieldTypeEnum>;
  /** Field visibility. */
  visibility?: Maybe<FormFieldVisibilityEnum>;
};

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum PageIdType {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID',
  /** Identify a resource by the URI. */
  Uri = 'URI'
}

/** Information about pagination in a connection. */
export type PageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Connection between the Page type and the Comment type */
export type PageToCommentConnection = CommentConnection & Connection & {
  __typename?: 'PageToCommentConnection';
  /** Edges for the PageToCommentConnection connection */
  edges: Array<PageToCommentConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<Comment>;
  /** Information about pagination in a connection. */
  pageInfo: PageToCommentConnectionPageInfo;
};

/** An edge in a connection */
export type PageToCommentConnectionEdge = CommentConnectionEdge & Edge & {
  __typename?: 'PageToCommentConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: Comment;
};

/** Page Info on the &quot;PageToCommentConnection&quot; */
export type PageToCommentConnectionPageInfo = CommentConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'PageToCommentConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the PageToCommentConnection connection */
export type PageToCommentConnectionWhereArgs = {
  /** Comment author email address. */
  authorEmail?: InputMaybe<Scalars['String']>;
  /** Array of author IDs to include comments for. */
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of author IDs to exclude comments for. */
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Comment author URL. */
  authorUrl?: InputMaybe<Scalars['String']>;
  /** Array of comment IDs to include. */
  commentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
  commentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Include comments of a given type. */
  commentType?: InputMaybe<Scalars['String']>;
  /** Include comments from a given array of comment types. */
  commentTypeIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Exclude comments from a given array of comment types. */
  commentTypeNotIn?: InputMaybe<Scalars['String']>;
  /** Content object author ID to limit results by. */
  contentAuthor?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of author IDs to retrieve comments for. */
  contentAuthorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of author IDs *not* to retrieve comments for. */
  contentAuthorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Limit results to those affiliated with a given content object ID. */
  contentId?: InputMaybe<Scalars['ID']>;
  /** Array of content object IDs to include affiliated comments for. */
  contentIdIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of content object IDs to exclude affiliated comments for. */
  contentIdNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Content object name (i.e. slug ) to retrieve affiliated comments for. */
  contentName?: InputMaybe<Scalars['String']>;
  /** Content Object parent ID to retrieve affiliated comments for. */
  contentParent?: InputMaybe<Scalars['Int']>;
  /** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentStatus?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentType?: InputMaybe<Array<InputMaybe<ContentTypeEnum>>>;
  /** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
  includeUnapproved?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Karma score to retrieve matching comments for. */
  karma?: InputMaybe<Scalars['Int']>;
  /** The cardinality of the order of the connection */
  order?: InputMaybe<OrderEnum>;
  /** Field to order the comments by. */
  orderby?: InputMaybe<CommentsConnectionOrderbyEnum>;
  /** Parent ID of comment to retrieve children of. */
  parent?: InputMaybe<Scalars['Int']>;
  /** Array of parent IDs of comments to retrieve children for. */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of parent IDs of comments *not* to retrieve children for. */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Search term(s) to retrieve matching comments for. */
  search?: InputMaybe<Scalars['String']>;
  /** Comment status to limit results by. */
  status?: InputMaybe<Scalars['String']>;
  /** Include comments for a specific user ID. */
  userId?: InputMaybe<Scalars['ID']>;
};

/** Connection between the Page type and the page type */
export type PageToPreviewConnectionEdge = Edge & OneToOneConnection & PageConnectionEdge & {
  __typename?: 'PageToPreviewConnectionEdge';
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The node of the connection, without the edges */
  node: Page;
};

/** Connection between the Page type and the page type */
export type PageToRevisionConnection = Connection & PageConnection & {
  __typename?: 'PageToRevisionConnection';
  /** Edges for the PageToRevisionConnection connection */
  edges: Array<PageToRevisionConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<Page>;
  /** Information about pagination in a connection. */
  pageInfo: PageToRevisionConnectionPageInfo;
};

/** An edge in a connection */
export type PageToRevisionConnectionEdge = Edge & PageConnectionEdge & {
  __typename?: 'PageToRevisionConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: Page;
};

/** Page Info on the &quot;PageToRevisionConnection&quot; */
export type PageToRevisionConnectionPageInfo = PageConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'PageToRevisionConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the PageToRevisionConnection connection */
export type PageToRevisionConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: InputMaybe<Scalars['Int']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: InputMaybe<Scalars['String']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']>;
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>;
  /** Title of the object */
  title?: InputMaybe<Scalars['String']>;
};

/** Field Group */
export type Page_Flexiblecontent = AcfFieldGroup & {
  __typename?: 'Page_Flexiblecontent';
  blocks?: Maybe<Array<Maybe<Page_Flexiblecontent_Blocks>>>;
  /** The name of the ACF Field Group */
  fieldGroupName?: Maybe<Scalars['String']>;
};

export type Page_Flexiblecontent_Blocks = Page_Flexiblecontent_Blocks_AboutUs | Page_Flexiblecontent_Blocks_ClientGrid | Page_Flexiblecontent_Blocks_Cta | Page_Flexiblecontent_Blocks_Expertise | Page_Flexiblecontent_Blocks_Features | Page_Flexiblecontent_Blocks_Form | Page_Flexiblecontent_Blocks_GoogleMap | Page_Flexiblecontent_Blocks_Hero | Page_Flexiblecontent_Blocks_LogoGrid | Page_Flexiblecontent_Blocks_PressList | Page_Flexiblecontent_Blocks_TeamMembers | Page_Flexiblecontent_Blocks_TextBlock | Page_Flexiblecontent_Blocks_VideoGrid | Page_Flexiblecontent_Blocks_WorkGrid;

/** Group within the flex field */
export type Page_Flexiblecontent_Blocks_AboutUs = AcfFieldGroup & {
  __typename?: 'Page_Flexiblecontent_Blocks_AboutUs';
  content?: Maybe<Scalars['String']>;
  /** The name of the ACF Field Group */
  fieldGroupName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  items?: Maybe<Array<Maybe<Page_Flexiblecontent_Blocks_AboutUs_Items>>>;
  subTitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

/** Field Group */
export type Page_Flexiblecontent_Blocks_AboutUs_Items = AcfFieldGroup & {
  __typename?: 'Page_Flexiblecontent_Blocks_AboutUs_items';
  copy?: Maybe<Scalars['String']>;
  /** The name of the ACF Field Group */
  fieldGroupName?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

/** Group within the flex field */
export type Page_Flexiblecontent_Blocks_ClientGrid = AcfFieldGroup & {
  __typename?: 'Page_Flexiblecontent_Blocks_ClientGrid';
  backgroundColor?: Maybe<Scalars['String']>;
  /** The name of the ACF Field Group */
  fieldGroupName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  items?: Maybe<Array<Maybe<Page_Flexiblecontent_Blocks_ClientGrid_Items>>>;
  title?: Maybe<Scalars['String']>;
  titleUnderlineColor?: Maybe<Scalars['String']>;
};

/** Field Group */
export type Page_Flexiblecontent_Blocks_ClientGrid_Items = AcfFieldGroup & {
  __typename?: 'Page_Flexiblecontent_Blocks_ClientGrid_items';
  client?: Maybe<Client>;
  /** The name of the ACF Field Group */
  fieldGroupName?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

/** Group within the flex field */
export type Page_Flexiblecontent_Blocks_Cta = AcfFieldGroup & {
  __typename?: 'Page_Flexiblecontent_Blocks_Cta';
  body?: Maybe<Scalars['String']>;
  /** The name of the ACF Field Group */
  fieldGroupName?: Maybe<Scalars['String']>;
  link?: Maybe<AcfLink>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  underline?: Maybe<Scalars['Boolean']>;
};

/** Group within the flex field */
export type Page_Flexiblecontent_Blocks_Expertise = AcfFieldGroup & {
  __typename?: 'Page_Flexiblecontent_Blocks_Expertise';
  /** The name of the ACF Field Group */
  fieldGroupName?: Maybe<Scalars['String']>;
  items?: Maybe<Array<Maybe<Page_Flexiblecontent_Blocks_Expertise_Items>>>;
  title?: Maybe<Scalars['String']>;
};

/** Field Group */
export type Page_Flexiblecontent_Blocks_Expertise_Items = AcfFieldGroup & {
  __typename?: 'Page_Flexiblecontent_Blocks_Expertise_items';
  color?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  /** The name of the ACF Field Group */
  fieldGroupName?: Maybe<Scalars['String']>;
  icon?: Maybe<MediaItem>;
  label?: Maybe<Scalars['String']>;
};

/** Group within the flex field */
export type Page_Flexiblecontent_Blocks_Features = AcfFieldGroup & {
  __typename?: 'Page_Flexiblecontent_Blocks_Features';
  /** The name of the ACF Field Group */
  fieldGroupName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  items?: Maybe<Array<Maybe<Page_Flexiblecontent_Blocks_Features_Items>>>;
  title?: Maybe<Scalars['String']>;
};

/** Field Group */
export type Page_Flexiblecontent_Blocks_Features_Items = AcfFieldGroup & {
  __typename?: 'Page_Flexiblecontent_Blocks_Features_items';
  body?: Maybe<Scalars['String']>;
  /** The name of the ACF Field Group */
  fieldGroupName?: Maybe<Scalars['String']>;
  icon?: Maybe<MediaItem>;
  title?: Maybe<Scalars['String']>;
};

/** Group within the flex field */
export type Page_Flexiblecontent_Blocks_Form = AcfFieldGroup & {
  __typename?: 'Page_Flexiblecontent_Blocks_Form';
  content?: Maybe<Scalars['String']>;
  /** The name of the ACF Field Group */
  fieldGroupName?: Maybe<Scalars['String']>;
  form?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

/** Group within the flex field */
export type Page_Flexiblecontent_Blocks_GoogleMap = AcfFieldGroup & {
  __typename?: 'Page_Flexiblecontent_Blocks_GoogleMap';
  address?: Maybe<Acf_GoogleMap>;
  /** The name of the ACF Field Group */
  fieldGroupName?: Maybe<Scalars['String']>;
};

/** Group within the flex field */
export type Page_Flexiblecontent_Blocks_Hero = AcfFieldGroup & {
  __typename?: 'Page_Flexiblecontent_Blocks_Hero';
  content?: Maybe<Scalars['String']>;
  ctas?: Maybe<Array<Maybe<Page_Flexiblecontent_Blocks_Hero_Ctas>>>;
  /** The name of the ACF Field Group */
  fieldGroupName?: Maybe<Scalars['String']>;
  hasScrollDown?: Maybe<Scalars['Boolean']>;
  icon?: Maybe<MediaItem>;
  image?: Maybe<MediaItem>;
  isH1?: Maybe<Scalars['Boolean']>;
  scrollDownId?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  useAnimation?: Maybe<Scalars['Boolean']>;
  variant?: Maybe<Scalars['String']>;
  video?: Maybe<MediaItem>;
};

/** Field Group */
export type Page_Flexiblecontent_Blocks_Hero_Ctas = AcfFieldGroup & {
  __typename?: 'Page_Flexiblecontent_Blocks_Hero_ctas';
  /** The name of the ACF Field Group */
  fieldGroupName?: Maybe<Scalars['String']>;
  link?: Maybe<AcfLink>;
  type?: Maybe<Scalars['String']>;
};

/** Group within the flex field */
export type Page_Flexiblecontent_Blocks_LogoGrid = AcfFieldGroup & {
  __typename?: 'Page_Flexiblecontent_Blocks_LogoGrid';
  /** The name of the ACF Field Group */
  fieldGroupName?: Maybe<Scalars['String']>;
  items?: Maybe<Array<Maybe<Page_Flexiblecontent_Blocks_LogoGrid_Items>>>;
  textAlign?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  variant?: Maybe<Scalars['String']>;
};

/** Field Group */
export type Page_Flexiblecontent_Blocks_LogoGrid_Items = AcfFieldGroup & {
  __typename?: 'Page_Flexiblecontent_Blocks_LogoGrid_items';
  /** The name of the ACF Field Group */
  fieldGroupName?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  link?: Maybe<AcfLink>;
  logo?: Maybe<MediaItem>;
};

/** Group within the flex field */
export type Page_Flexiblecontent_Blocks_PressList = AcfFieldGroup & {
  __typename?: 'Page_Flexiblecontent_Blocks_PressList';
  backgroundColor?: Maybe<Scalars['String']>;
  cta?: Maybe<AcfLink>;
  /** The name of the ACF Field Group */
  fieldGroupName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  items?: Maybe<Array<Maybe<Page_Flexiblecontent_Blocks_PressList_Items>>>;
  title?: Maybe<Scalars['String']>;
  titleUnderlineColor?: Maybe<Scalars['String']>;
};

export type Page_Flexiblecontent_Blocks_PressList_Items = Press_Release;

/** Group within the flex field */
export type Page_Flexiblecontent_Blocks_TeamMembers = AcfFieldGroup & {
  __typename?: 'Page_Flexiblecontent_Blocks_TeamMembers';
  /** The name of the ACF Field Group */
  fieldGroupName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  members?: Maybe<Array<Maybe<Page_Flexiblecontent_Blocks_TeamMembers_Members>>>;
  title?: Maybe<Scalars['String']>;
};

export type Page_Flexiblecontent_Blocks_TeamMembers_Members = TeamMember;

/** Group within the flex field */
export type Page_Flexiblecontent_Blocks_TextBlock = AcfFieldGroup & {
  __typename?: 'Page_Flexiblecontent_Blocks_TextBlock';
  content?: Maybe<Scalars['String']>;
  cta?: Maybe<AcfLink>;
  /** The name of the ACF Field Group */
  fieldGroupName?: Maybe<Scalars['String']>;
  hasUnderline?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  variant?: Maybe<Scalars['String']>;
};

/** Group within the flex field */
export type Page_Flexiblecontent_Blocks_VideoGrid = AcfFieldGroup & {
  __typename?: 'Page_Flexiblecontent_Blocks_VideoGrid';
  cta?: Maybe<AcfLink>;
  /** The name of the ACF Field Group */
  fieldGroupName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  items?: Maybe<Array<Maybe<Page_Flexiblecontent_Blocks_VideoGrid_Items>>>;
  title?: Maybe<Scalars['String']>;
};

/** Field Group */
export type Page_Flexiblecontent_Blocks_VideoGrid_Items = AcfFieldGroup & {
  __typename?: 'Page_Flexiblecontent_Blocks_VideoGrid_items';
  /** The name of the ACF Field Group */
  fieldGroupName?: Maybe<Scalars['String']>;
  image?: Maybe<MediaItem>;
  type?: Maybe<Scalars['String']>;
  video?: Maybe<MediaItem>;
};

/** Group within the flex field */
export type Page_Flexiblecontent_Blocks_WorkGrid = AcfFieldGroup & {
  __typename?: 'Page_Flexiblecontent_Blocks_WorkGrid';
  /** The name of the ACF Field Group */
  fieldGroupName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  items?: Maybe<Array<Maybe<Page_Flexiblecontent_Blocks_WorkGrid_Items>>>;
  title?: Maybe<Scalars['String']>;
  variant?: Maybe<Scalars['String']>;
};

/** Field Group */
export type Page_Flexiblecontent_Blocks_WorkGrid_Items = AcfFieldGroup & {
  __typename?: 'Page_Flexiblecontent_Blocks_WorkGrid_items';
  /** The name of the ACF Field Group */
  fieldGroupName?: Maybe<Scalars['String']>;
  isFeatured?: Maybe<Scalars['Boolean']>;
  width?: Maybe<Scalars['String']>;
  work?: Maybe<Page_Flexiblecontent_Blocks_WorkGrid_Items_Work>;
};

export type Page_Flexiblecontent_Blocks_WorkGrid_Items_Work = Work;

/** A Gravity Forms   field. */
export type PasswordField = FormField & {
  __typename?: 'PasswordField';
  /** When specified, the value of this property will be used on the admin pages instead of the label. It is useful for fields with long labels. */
  adminLabel?: Maybe<Scalars['String']>;
  /** Controls the visibility of the field based on values selected by the user. */
  conditionalLogic?: Maybe<ConditionalLogic>;
  /** String containing the custom CSS classes to be added to the &lt;li&gt; tag that contains the field. Useful for applying custom formatting to specific fields. */
  cssClass?: Maybe<Scalars['String']>;
  /** Field description. */
  description?: Maybe<Scalars['String']>;
  /** The placement of the field description. */
  descriptionPlacement?: Maybe<FormFieldDescriptionPlacementEnum>;
  /** Indicates the field is only displayed and its contents are not submitted with the form/saved with the entry. This is set to true. */
  displayOnly?: Maybe<Scalars['Boolean']>;
  /** Contains the message that is displayed for fields that fail validation. */
  errorMessage?: Maybe<Scalars['String']>;
  /** Indicates whether the field displays the password strength indicator. */
  hasPasswordStrengthIndicator?: Maybe<Scalars['Boolean']>;
  /** Whether the Password visibility toggle should be enabled for this field. */
  hasPasswordVisibilityToggle?: Maybe<Scalars['Boolean']>;
  /** Field ID. */
  id: Scalars['Int'];
  /** The base form field type used to display the input. A good example is the Post Custom Field that can be displayed as various different types of fields. */
  inputType?: Maybe<FormFieldTypeEnum>;
  /** An array of the available properties for each input of the password field. */
  inputs?: Maybe<Array<Maybe<PasswordInputProperty>>>;
  /** Determines if the field requires the user to enter a value. Fields marked as required will prevent the form from being submitted if the user has not entered a value in it. */
  isRequired?: Maybe<Scalars['Boolean']>;
  /** Field label that will be displayed on the form and on the admin pages. */
  label?: Maybe<Scalars['String']>;
  /** The field label position. */
  labelPlacement?: Maybe<FormFieldLabelPlacementEnum>;
  /** The number of CSS grid columns the field should span. */
  layoutGridColumnSpan?: Maybe<Scalars['Int']>;
  /** The number of CSS grid columns the spacer field following this one should span. */
  layoutSpacerGridColumnSpan?: Maybe<Scalars['Int']>;
  /** Indicates how strong the password should be. */
  minPasswordStrength?: Maybe<PasswordFieldMinStrengthEnum>;
  /** The form page this field is located on. Default is 1. */
  pageNumber?: Maybe<Scalars['Int']>;
  /** The form field-specifc policies for exporting and erasing personal data. */
  personalData?: Maybe<FormFieldDataPolicy>;
  /** Determines the size of the field when displayed on the page. */
  size?: Maybe<FormFieldSizeEnum>;
  /** The placement of the labels for the subfields within the group. This setting controls all of the subfields, they cannot be set individually. They may be aligned above or below the inputs. If this property is not set, the “Sub-Label Placement” setting on the Form Settings-&gt;Form Layout page is used. If no setting is specified, the default is above inputs. */
  subLabelPlacement?: Maybe<FormFieldSubLabelPlacementEnum>;
  /** The type of field to be displayed. */
  type?: Maybe<FormFieldTypeEnum>;
  /** The string-formatted entry value for the `formField`. For complex fields this might be a JSON-encoded or serialized array. */
  value?: Maybe<Scalars['String']>;
  /** Field visibility. */
  visibility?: Maybe<FormFieldVisibilityEnum>;
};

/** Indicates how strong the password should be. */
export enum PasswordFieldMinStrengthEnum {
  /** The password strength must be "bad" or better. */
  Bad = 'BAD',
  /** The password strength must be "good" or better. */
  Good = 'GOOD',
  /** The password strength must be "short" or better. */
  Short = 'SHORT',
  /** The password strength must be "strong". */
  Strong = 'STRONG'
}

/** Password input values. */
export type PasswordInputProperty = {
  __typename?: 'PasswordInputProperty';
  /** The custom label for the input. When set, this is used in place of the label. */
  customLabel?: Maybe<Scalars['String']>;
  /** The input ID. Input IDs follow the following naming convention: FIELDID.INPUTID (i.e. 5.1), where FIELDID is the id of the containing field and INPUTID specifies the input field. */
  id?: Maybe<Scalars['Float']>;
  /** Whether or not this field should be hidden. */
  isHidden?: Maybe<Scalars['Boolean']>;
  /** Field label that will be displayed on the form and on the admin pages. */
  label?: Maybe<Scalars['String']>;
  /** Placeholder text to give the user a hint on how to fill out the field. This is not submitted with the form. */
  placeholder?: Maybe<Scalars['String']>;
};

/** A Gravity Forms   field. */
export type PhoneField = FormField & {
  __typename?: 'PhoneField';
  /** When specified, the value of this property will be used on the admin pages instead of the label. It is useful for fields with long labels. */
  adminLabel?: Maybe<Scalars['String']>;
  /** The autocomplete attribute for the field. */
  autocompleteAttribute?: Maybe<Scalars['String']>;
  /** Determines if the field’s value can be pre-populated dynamically. */
  canPrepopulate?: Maybe<Scalars['Boolean']>;
  /** Controls the visibility of the field based on values selected by the user. */
  conditionalLogic?: Maybe<ConditionalLogic>;
  /** String containing the custom CSS classes to be added to the &lt;li&gt; tag that contains the field. Useful for applying custom formatting to specific fields. */
  cssClass?: Maybe<Scalars['String']>;
  /** Contains the default value for the field. When specified, the field&#039;s value will be populated with the contents of this property when the form is displayed. */
  defaultValue?: Maybe<Scalars['String']>;
  /** Field description. */
  description?: Maybe<Scalars['String']>;
  /** The placement of the field description. */
  descriptionPlacement?: Maybe<FormFieldDescriptionPlacementEnum>;
  /** Indicates the field is only displayed and its contents are not submitted with the form/saved with the entry. This is set to true. */
  displayOnly?: Maybe<Scalars['Boolean']>;
  /** Contains the message that is displayed for fields that fail validation. */
  errorMessage?: Maybe<Scalars['String']>;
  /** Whether autocomplete should be enabled for this field. */
  hasAutocomplete?: Maybe<Scalars['Boolean']>;
  /** Field ID. */
  id: Scalars['Int'];
  /** Assigns a name to this field so that it can be populated dynamically via this input name. Only applicable when canPrepopulate is `true`. */
  inputName?: Maybe<Scalars['String']>;
  /** The base form field type used to display the input. A good example is the Post Custom Field that can be displayed as various different types of fields. */
  inputType?: Maybe<FormFieldTypeEnum>;
  /** Determines if the field requires the user to enter a value. Fields marked as required will prevent the form from being submitted if the user has not entered a value in it. */
  isRequired?: Maybe<Scalars['Boolean']>;
  /** Field label that will be displayed on the form and on the admin pages. */
  label?: Maybe<Scalars['String']>;
  /** The field label position. */
  labelPlacement?: Maybe<FormFieldLabelPlacementEnum>;
  /** The number of CSS grid columns the field should span. */
  layoutGridColumnSpan?: Maybe<Scalars['Int']>;
  /** The number of CSS grid columns the spacer field following this one should span. */
  layoutSpacerGridColumnSpan?: Maybe<Scalars['Int']>;
  /** The form page this field is located on. Default is 1. */
  pageNumber?: Maybe<Scalars['Int']>;
  /** The form field-specifc policies for exporting and erasing personal data. */
  personalData?: Maybe<FormFieldDataPolicy>;
  /** Determines the allowed format for phones. If the phone value does not conform with the specified format, the field will fail validation. */
  phoneFormat?: Maybe<PhoneFieldFormatEnum>;
  /** Placeholder text to give the user a hint on how to fill out the field. This is not submitted with the form. */
  placeholder?: Maybe<Scalars['String']>;
  /** Determines if the field allows duplicate submissions. */
  shouldAllowDuplicates?: Maybe<Scalars['Boolean']>;
  /** Determines the size of the field when displayed on the page. */
  size?: Maybe<FormFieldSizeEnum>;
  /** The type of field to be displayed. */
  type?: Maybe<FormFieldTypeEnum>;
  /** The string-formatted entry value for the `formField`. For complex fields this might be a JSON-encoded or serialized array. */
  value?: Maybe<Scalars['String']>;
  /** Field visibility. */
  visibility?: Maybe<FormFieldVisibilityEnum>;
};

/** Tthe allowed format for phone numbers. */
export enum PhoneFieldFormatEnum {
  /** International phone number format. */
  International = 'INTERNATIONAL',
  /** Standard phone number format. */
  Standard = 'STANDARD'
}

/** An plugin object */
export type Plugin = Node & {
  __typename?: 'Plugin';
  /** Name of the plugin author(s), may also be a company name. */
  author?: Maybe<Scalars['String']>;
  /** URI for the related author(s)/company website. */
  authorUri?: Maybe<Scalars['String']>;
  /** Description of the plugin. */
  description?: Maybe<Scalars['String']>;
  /** The globally unique identifier of the plugin object. */
  id: Scalars['ID'];
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** Display name of the plugin. */
  name?: Maybe<Scalars['String']>;
  /** Plugin path. */
  path?: Maybe<Scalars['String']>;
  /** URI for the plugin website. This is useful for directing users for support requests etc. */
  pluginUri?: Maybe<Scalars['String']>;
  /** Current version of the plugin. */
  version?: Maybe<Scalars['String']>;
};

/** Connection to Plugin Nodes */
export type PluginConnection = {
  /** A list of edges (relational context) between RootQuery and connected Plugin Nodes */
  edges: Array<PluginConnectionEdge>;
  /** A list of connected Plugin Nodes */
  nodes: Array<Plugin>;
  /** Information about pagination in a connection. */
  pageInfo: PluginConnectionPageInfo;
};

/** Edge between a Node and a connected Plugin */
export type PluginConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The connected Plugin Node */
  node: Plugin;
};

/** Page Info on the connected PluginConnectionEdge */
export type PluginConnectionPageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** The status of the WordPress plugin. */
export enum PluginStatusEnum {
  /** The plugin is currently active. */
  Active = 'ACTIVE',
  /** The plugin is a drop-in plugin. */
  DropIn = 'DROP_IN',
  /** The plugin is currently inactive. */
  Inactive = 'INACTIVE',
  /** The plugin is a must-use plugin. */
  MustUse = 'MUST_USE',
  /** The plugin is technically active but was paused while loading. */
  Paused = 'PAUSED',
  /** The plugin was active recently. */
  RecentlyActive = 'RECENTLY_ACTIVE',
  /** The plugin has an upgrade available. */
  Upgrade = 'UPGRADE'
}

/** The post type */
export type Post = ContentNode & DatabaseIdentifier & MenuItemLinkable & Node & NodeWithAuthor & NodeWithComments & NodeWithContentEditor & NodeWithExcerpt & NodeWithFeaturedImage & NodeWithRevisions & NodeWithTemplate & NodeWithTitle & NodeWithTrackbacks & Previewable & UniformResourceIdentifiable & {
  __typename?: 'Post';
  /** Connection between the NodeWithAuthor type and the User type */
  author?: Maybe<NodeWithAuthorToUserConnectionEdge>;
  /** The database identifier of the author of the node */
  authorDatabaseId?: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the author of the node */
  authorId?: Maybe<Scalars['ID']>;
  /** Connection between the Post type and the category type */
  categories?: Maybe<PostToCategoryConnection>;
  /** The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility. */
  commentCount?: Maybe<Scalars['Int']>;
  /** Whether the comments are open or closed for this particular post. */
  commentStatus?: Maybe<Scalars['String']>;
  /** Connection between the Post type and the Comment type */
  comments?: Maybe<PostToCommentConnection>;
  /** @deprecated Deprecated in favor of using Next.js pages */
  conditionalTags?: Maybe<ConditionalTags>;
  /** The content of the post. */
  content?: Maybe<Scalars['String']>;
  /** Connection between the ContentNode type and the ContentType type */
  contentType?: Maybe<ContentNodeToContentTypeConnectionEdge>;
  /** The name of the Content Type the node belongs to */
  contentTypeName: Scalars['String'];
  /** The unique identifier stored in the database */
  databaseId: Scalars['Int'];
  /** Post publishing date. */
  date?: Maybe<Scalars['String']>;
  /** The publishing date set in GMT. */
  dateGmt?: Maybe<Scalars['String']>;
  /** The desired slug of the post */
  desiredSlug?: Maybe<Scalars['String']>;
  /** If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds */
  editingLockedBy?: Maybe<ContentNodeToEditLockConnectionEdge>;
  /** The RSS enclosure for the object */
  enclosure?: Maybe<Scalars['String']>;
  /** Connection between the ContentNode type and the EnqueuedScript type */
  enqueuedScripts?: Maybe<ContentNodeToEnqueuedScriptConnection>;
  /** Connection between the ContentNode type and the EnqueuedStylesheet type */
  enqueuedStylesheets?: Maybe<ContentNodeToEnqueuedStylesheetConnection>;
  /** The excerpt of the post. */
  excerpt?: Maybe<Scalars['String']>;
  /** Connection between the NodeWithFeaturedImage type and the MediaItem type */
  featuredImage?: Maybe<NodeWithFeaturedImageToMediaItemConnectionEdge>;
  /** The database identifier for the featured image node assigned to the content node */
  featuredImageDatabaseId?: Maybe<Scalars['Int']>;
  /** Globally unique ID of the featured image assigned to the node */
  featuredImageId?: Maybe<Scalars['ID']>;
  /** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
  guid?: Maybe<Scalars['String']>;
  /** The globally unique identifier of the post object. */
  id: Scalars['ID'];
  /** Whether the node is a Content Node */
  isContentNode: Scalars['Boolean'];
  /** Whether the object is a node in the preview state */
  isPreview?: Maybe<Scalars['Boolean']>;
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** True if the node is a revision of another node */
  isRevision?: Maybe<Scalars['Boolean']>;
  /** Whether this page is sticky */
  isSticky: Scalars['Boolean'];
  /** Whether the node is a Term */
  isTermNode: Scalars['Boolean'];
  /** The user that most recently edited the node */
  lastEditedBy?: Maybe<ContentNodeToEditLastConnectionEdge>;
  /** The permalink of the post */
  link?: Maybe<Scalars['String']>;
  /** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
  modified?: Maybe<Scalars['String']>;
  /** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
  modifiedGmt?: Maybe<Scalars['String']>;
  /** Whether the pings are open or closed for this particular post. */
  pingStatus?: Maybe<Scalars['String']>;
  /** URLs that have been pinged. */
  pinged?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Connection between the Post type and the postFormat type */
  postFormats?: Maybe<PostToPostFormatConnection>;
  /**
   * The id field matches the WP_Post-&gt;ID field.
   * @deprecated Deprecated in favor of the databaseId field
   */
  postId: Scalars['Int'];
  /** Added to the GraphQL Schema because the ACF Field Group &quot;Post Options&quot; was set to Show in GraphQL. */
  postOptions?: Maybe<Post_Postoptions>;
  /** Connection between the Post type and the post type */
  preview?: Maybe<PostToPreviewConnectionEdge>;
  /** The database id of the preview node */
  previewRevisionDatabaseId?: Maybe<Scalars['Int']>;
  /** Whether the object is a node in the preview state */
  previewRevisionId?: Maybe<Scalars['ID']>;
  /** Connection between the Post type and the Post type */
  relatedPosts?: Maybe<RelatedPostsConnection>;
  /** If the current node is a revision, this field exposes the node this is a revision of. Returns null if the node is not a revision of another node. */
  revisionOf?: Maybe<NodeWithRevisionsToContentNodeConnectionEdge>;
  /** Connection between the Post type and the post type */
  revisions?: Maybe<PostToRevisionConnection>;
  /** The Yoast SEO data of the ContentNode */
  seo?: Maybe<PostTypeSeo>;
  /** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
  slug?: Maybe<Scalars['String']>;
  /** The current status of the object */
  status?: Maybe<Scalars['String']>;
  /** Connection between the Post type and the tag type */
  tags?: Maybe<PostToTagConnection>;
  /** The template assigned to the node */
  template?: Maybe<ContentTemplate>;
  templates?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Connection between the Post type and the TermNode type */
  terms?: Maybe<PostToTermNodeConnection>;
  /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
  title?: Maybe<Scalars['String']>;
  /** URLs queued to be pinged. */
  toPing?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The unique resource identifier path */
  uri?: Maybe<Scalars['String']>;
};


/** The post type */
export type PostCategoriesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PostToCategoryConnectionWhereArgs>;
};


/** The post type */
export type PostCommentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PostToCommentConnectionWhereArgs>;
};


/** The post type */
export type PostContentArgs = {
  format?: InputMaybe<PostObjectFieldFormatEnum>;
};


/** The post type */
export type PostEnqueuedScriptsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** The post type */
export type PostEnqueuedStylesheetsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** The post type */
export type PostExcerptArgs = {
  format?: InputMaybe<PostObjectFieldFormatEnum>;
};


/** The post type */
export type PostPostFormatsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PostToPostFormatConnectionWhereArgs>;
};


/** The post type */
export type PostRelatedPostsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RelatedPostsConnectionWhereArgs>;
};


/** The post type */
export type PostRevisionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PostToRevisionConnectionWhereArgs>;
};


/** The post type */
export type PostTagsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PostToTagConnectionWhereArgs>;
};


/** The post type */
export type PostTermsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PostToTermNodeConnectionWhereArgs>;
};


/** The post type */
export type PostTitleArgs = {
  format?: InputMaybe<PostObjectFieldFormatEnum>;
};

/** Set relationships between the post to categories */
export type PostCategoriesInput = {
  /** If true, this will append the category to existing related categories. If false, this will replace existing relationships. Default true. */
  append?: InputMaybe<Scalars['Boolean']>;
  /** The input list of items to set. */
  nodes?: InputMaybe<Array<InputMaybe<PostCategoriesNodeInput>>>;
};

/** List of categories to connect the post to. If an ID is set, it will be used to create the connection. If not, it will look for a slug. If neither are valid existing terms, and the site is configured to allow terms to be created during post mutations, a term will be created using the Name if it exists in the input, then fallback to the slug if it exists. */
export type PostCategoriesNodeInput = {
  /** The description of the category. This field is used to set a description of the category if a new one is created during the mutation. */
  description?: InputMaybe<Scalars['String']>;
  /** The ID of the category. If present, this will be used to connect to the post. If no existing category exists with this ID, no connection will be made. */
  id?: InputMaybe<Scalars['ID']>;
  /** The name of the category. This field is used to create a new term, if term creation is enabled in nested mutations, and if one does not already exist with the provided slug or ID or if a slug or ID is not provided. If no name is included and a term is created, the creation will fallback to the slug field. */
  name?: InputMaybe<Scalars['String']>;
  /** The slug of the category. If no ID is present, this field will be used to make a connection. If no existing term exists with this slug, this field will be used as a fallback to the Name field when creating a new term to connect to, if term creation is enabled as a nested mutation. */
  slug?: InputMaybe<Scalars['String']>;
};

/** A Gravity Forms  post_category field. */
export type PostCategoryCheckboxField = FormField & PostCategoryField & {
  __typename?: 'PostCategoryCheckboxField';
  /** When specified, the value of this property will be used on the admin pages instead of the label. It is useful for fields with long labels. */
  adminLabel?: Maybe<Scalars['String']>;
  /** Determines if the field’s value can be pre-populated dynamically. */
  canPrepopulate?: Maybe<Scalars['Boolean']>;
  /** Checkbox field value. */
  checkboxValues?: Maybe<Array<Maybe<CheckboxFieldValue>>>;
  /** The available choices for the post_category field. */
  choices?: Maybe<Array<Maybe<PostCategoryFieldChoice>>>;
  /** Controls the visibility of the field based on values selected by the user. */
  conditionalLogic?: Maybe<ConditionalLogic>;
  /** String containing the custom CSS classes to be added to the &lt;li&gt; tag that contains the field. Useful for applying custom formatting to specific fields. */
  cssClass?: Maybe<Scalars['String']>;
  /** Field description. */
  description?: Maybe<Scalars['String']>;
  /** The placement of the field description. */
  descriptionPlacement?: Maybe<FormFieldDescriptionPlacementEnum>;
  /** Indicates the field is only displayed and its contents are not submitted with the form/saved with the entry. This is set to true. */
  displayOnly?: Maybe<Scalars['Boolean']>;
  /** The dropdown placeholder for the field. */
  dropdownPlaceholder?: Maybe<Scalars['String']>;
  /** Contains the message that is displayed for fields that fail validation. */
  errorMessage?: Maybe<Scalars['String']>;
  /** Determines if all categories should be displayed on the Post Category drop down. If this property is true (display all categories), the Post Category drop down will display the categories hierarchically. */
  hasAllCategories?: Maybe<Scalars['Boolean']>;
  /** Determines if the field (checkbox, select or radio) have choice values enabled, which allows the field to have choice values different from the labels that are displayed to the user. */
  hasChoiceValue?: Maybe<Scalars['Boolean']>;
  /** Whether the \&quot;select all\&quot; choice should be displayed. */
  hasSelectAll?: Maybe<Scalars['Boolean']>;
  /** Field ID. */
  id: Scalars['Int'];
  /** Assigns a name to this field so that it can be populated dynamically via this input name. Only applicable when canPrepopulate is `true`. */
  inputName?: Maybe<Scalars['String']>;
  /** The base form field type used to display the input. A good example is the Post Custom Field that can be displayed as various different types of fields. */
  inputType?: Maybe<FormFieldTypeEnum>;
  /** An array of the available properties for each input of the post_category field. */
  inputs?: Maybe<Array<Maybe<PostCategoryInputProperty>>>;
  /** Determines if the field requires the user to enter a value. Fields marked as required will prevent the form from being submitted if the user has not entered a value in it. */
  isRequired?: Maybe<Scalars['Boolean']>;
  /** Field label that will be displayed on the form and on the admin pages. */
  label?: Maybe<Scalars['String']>;
  /** The field label position. */
  labelPlacement?: Maybe<FormFieldLabelPlacementEnum>;
  /** The number of CSS grid columns the field should span. */
  layoutGridColumnSpan?: Maybe<Scalars['Int']>;
  /** The number of CSS grid columns the spacer field following this one should span. */
  layoutSpacerGridColumnSpan?: Maybe<Scalars['Int']>;
  /** The form page this field is located on. Default is 1. */
  pageNumber?: Maybe<Scalars['Int']>;
  /** The form field-specifc policies for exporting and erasing personal data. */
  personalData?: Maybe<FormFieldDataPolicy>;
  /** Determines if the field allows duplicate submissions. */
  shouldAllowDuplicates?: Maybe<Scalars['Boolean']>;
  /** Determines the size of the field when displayed on the page. */
  size?: Maybe<FormFieldSizeEnum>;
  /** The type of field to be displayed. */
  type?: Maybe<FormFieldTypeEnum>;
  /** The string-formatted entry value for the `formField`. For complex fields this might be a JSON-encoded or serialized array. */
  value?: Maybe<Scalars['String']>;
  /** Field visibility. */
  visibility?: Maybe<FormFieldVisibilityEnum>;
};

/** A Gravity Forms   field. */
export type PostCategoryField = {
  /** When specified, the value of this property will be used on the admin pages instead of the label. It is useful for fields with long labels. */
  adminLabel?: Maybe<Scalars['String']>;
  /** Determines if the field’s value can be pre-populated dynamically. */
  canPrepopulate?: Maybe<Scalars['Boolean']>;
  /** The available choices for the post_category field. */
  choices?: Maybe<Array<Maybe<PostCategoryFieldChoice>>>;
  /** Controls the visibility of the field based on values selected by the user. */
  conditionalLogic?: Maybe<ConditionalLogic>;
  /** String containing the custom CSS classes to be added to the &lt;li&gt; tag that contains the field. Useful for applying custom formatting to specific fields. */
  cssClass?: Maybe<Scalars['String']>;
  /** Field description. */
  description?: Maybe<Scalars['String']>;
  /** The placement of the field description. */
  descriptionPlacement?: Maybe<FormFieldDescriptionPlacementEnum>;
  /** Indicates the field is only displayed and its contents are not submitted with the form/saved with the entry. This is set to true. */
  displayOnly?: Maybe<Scalars['Boolean']>;
  /** The dropdown placeholder for the field. */
  dropdownPlaceholder?: Maybe<Scalars['String']>;
  /** Contains the message that is displayed for fields that fail validation. */
  errorMessage?: Maybe<Scalars['String']>;
  /** Determines if all categories should be displayed on the Post Category drop down. If this property is true (display all categories), the Post Category drop down will display the categories hierarchically. */
  hasAllCategories?: Maybe<Scalars['Boolean']>;
  /** Determines if the field (checkbox, select or radio) have choice values enabled, which allows the field to have choice values different from the labels that are displayed to the user. */
  hasChoiceValue?: Maybe<Scalars['Boolean']>;
  /** Field ID. */
  id: Scalars['Int'];
  /** Assigns a name to this field so that it can be populated dynamically via this input name. Only applicable when canPrepopulate is `true`. */
  inputName?: Maybe<Scalars['String']>;
  /** The base form field type used to display the input. A good example is the Post Custom Field that can be displayed as various different types of fields. */
  inputType?: Maybe<FormFieldTypeEnum>;
  /** Determines if the field requires the user to enter a value. Fields marked as required will prevent the form from being submitted if the user has not entered a value in it. */
  isRequired?: Maybe<Scalars['Boolean']>;
  /** Field label that will be displayed on the form and on the admin pages. */
  label?: Maybe<Scalars['String']>;
  /** The field label position. */
  labelPlacement?: Maybe<FormFieldLabelPlacementEnum>;
  /** The number of CSS grid columns the field should span. */
  layoutGridColumnSpan?: Maybe<Scalars['Int']>;
  /** The number of CSS grid columns the spacer field following this one should span. */
  layoutSpacerGridColumnSpan?: Maybe<Scalars['Int']>;
  /** The form page this field is located on. Default is 1. */
  pageNumber?: Maybe<Scalars['Int']>;
  /** The form field-specifc policies for exporting and erasing personal data. */
  personalData?: Maybe<FormFieldDataPolicy>;
  /** Determines if the field allows duplicate submissions. */
  shouldAllowDuplicates?: Maybe<Scalars['Boolean']>;
  /** Determines the size of the field when displayed on the page. */
  size?: Maybe<FormFieldSizeEnum>;
  /** The type of field to be displayed. */
  type?: Maybe<FormFieldTypeEnum>;
  /** The string-formatted entry value for the `formField`. For complex fields this might be a JSON-encoded or serialized array. */
  value?: Maybe<Scalars['String']>;
  /** Field visibility. */
  visibility?: Maybe<FormFieldVisibilityEnum>;
};

/** Post_category choice values. */
export type PostCategoryFieldChoice = {
  __typename?: 'PostCategoryFieldChoice';
  /** Determines if this choice should be selected by default when displayed. The value true will select the choice, whereas false will display it unselected. */
  isSelected?: Maybe<Scalars['Boolean']>;
  /** The text to be displayed to the user when displaying this choice. */
  text?: Maybe<Scalars['String']>;
  /** The value to be stored in the database when this choice is selected. Note: This property is only supported by the Drop Down and Post Category fields. Checkboxes and Radio fields will store the text property in the database regardless of the value property. */
  value?: Maybe<Scalars['String']>;
};

/** Post_category input values. */
export type PostCategoryInputProperty = {
  __typename?: 'PostCategoryInputProperty';
  /** The input ID. Input IDs follow the following naming convention: FIELDID.INPUTID (i.e. 5.1), where FIELDID is the id of the containing field and INPUTID specifies the input field. */
  id?: Maybe<Scalars['Float']>;
  /** Field label that will be displayed on the form and on the admin pages. */
  label?: Maybe<Scalars['String']>;
  /** Assigns a name to this field so that it can be populated dynamically via this input name. Only applicable when canPrepopulate is `true`. */
  name?: Maybe<Scalars['String']>;
};

/** A Gravity Forms  post_category field. */
export type PostCategoryMultiSelectField = FormField & PostCategoryField & {
  __typename?: 'PostCategoryMultiSelectField';
  /** When specified, the value of this property will be used on the admin pages instead of the label. It is useful for fields with long labels. */
  adminLabel?: Maybe<Scalars['String']>;
  /** Determines if the field’s value can be pre-populated dynamically. */
  canPrepopulate?: Maybe<Scalars['Boolean']>;
  /** The available choices for the post_category field. */
  choices?: Maybe<Array<Maybe<PostCategoryFieldChoice>>>;
  /** Controls the visibility of the field based on values selected by the user. */
  conditionalLogic?: Maybe<ConditionalLogic>;
  /** String containing the custom CSS classes to be added to the &lt;li&gt; tag that contains the field. Useful for applying custom formatting to specific fields. */
  cssClass?: Maybe<Scalars['String']>;
  /** Field description. */
  description?: Maybe<Scalars['String']>;
  /** The placement of the field description. */
  descriptionPlacement?: Maybe<FormFieldDescriptionPlacementEnum>;
  /** Indicates the field is only displayed and its contents are not submitted with the form/saved with the entry. This is set to true. */
  displayOnly?: Maybe<Scalars['Boolean']>;
  /** The dropdown placeholder for the field. */
  dropdownPlaceholder?: Maybe<Scalars['String']>;
  /** Contains the message that is displayed for fields that fail validation. */
  errorMessage?: Maybe<Scalars['String']>;
  /** Determines if all categories should be displayed on the Post Category drop down. If this property is true (display all categories), the Post Category drop down will display the categories hierarchically. */
  hasAllCategories?: Maybe<Scalars['Boolean']>;
  /** Determines if the field (checkbox, select or radio) have choice values enabled, which allows the field to have choice values different from the labels that are displayed to the user. */
  hasChoiceValue?: Maybe<Scalars['Boolean']>;
  /** When set to true, the &quot;Chosen&quot; jQuery script will be applied to this field, enabling search capabilities to Drop Down fields and a more user-friendly interface for Multi Select fields. */
  hasEnhancedUI?: Maybe<Scalars['Boolean']>;
  /** Field ID. */
  id: Scalars['Int'];
  /** Assigns a name to this field so that it can be populated dynamically via this input name. Only applicable when canPrepopulate is `true`. */
  inputName?: Maybe<Scalars['String']>;
  /** The base form field type used to display the input. A good example is the Post Custom Field that can be displayed as various different types of fields. */
  inputType?: Maybe<FormFieldTypeEnum>;
  /** Determines if the field requires the user to enter a value. Fields marked as required will prevent the form from being submitted if the user has not entered a value in it. */
  isRequired?: Maybe<Scalars['Boolean']>;
  /** Field label that will be displayed on the form and on the admin pages. */
  label?: Maybe<Scalars['String']>;
  /** The field label position. */
  labelPlacement?: Maybe<FormFieldLabelPlacementEnum>;
  /** The number of CSS grid columns the field should span. */
  layoutGridColumnSpan?: Maybe<Scalars['Int']>;
  /** The number of CSS grid columns the spacer field following this one should span. */
  layoutSpacerGridColumnSpan?: Maybe<Scalars['Int']>;
  /** The form page this field is located on. Default is 1. */
  pageNumber?: Maybe<Scalars['Int']>;
  /** The form field-specifc policies for exporting and erasing personal data. */
  personalData?: Maybe<FormFieldDataPolicy>;
  /** Determines if the field allows duplicate submissions. */
  shouldAllowDuplicates?: Maybe<Scalars['Boolean']>;
  /** Determines the size of the field when displayed on the page. */
  size?: Maybe<FormFieldSizeEnum>;
  /** The type of field to be displayed. */
  type?: Maybe<FormFieldTypeEnum>;
  /** The string-formatted entry value for the `formField`. For complex fields this might be a JSON-encoded or serialized array. */
  value?: Maybe<Scalars['String']>;
  /** An array of field values. */
  values?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Field visibility. */
  visibility?: Maybe<FormFieldVisibilityEnum>;
};

/** A Gravity Forms  post_category field. */
export type PostCategoryRadioField = FormField & PostCategoryField & {
  __typename?: 'PostCategoryRadioField';
  /** When specified, the value of this property will be used on the admin pages instead of the label. It is useful for fields with long labels. */
  adminLabel?: Maybe<Scalars['String']>;
  /** Determines if the field’s value can be pre-populated dynamically. */
  canPrepopulate?: Maybe<Scalars['Boolean']>;
  /** The available choices for the post_category field. */
  choices?: Maybe<Array<Maybe<PostCategoryFieldChoice>>>;
  /** Controls the visibility of the field based on values selected by the user. */
  conditionalLogic?: Maybe<ConditionalLogic>;
  /** String containing the custom CSS classes to be added to the &lt;li&gt; tag that contains the field. Useful for applying custom formatting to specific fields. */
  cssClass?: Maybe<Scalars['String']>;
  /** Field description. */
  description?: Maybe<Scalars['String']>;
  /** The placement of the field description. */
  descriptionPlacement?: Maybe<FormFieldDescriptionPlacementEnum>;
  /** Indicates the field is only displayed and its contents are not submitted with the form/saved with the entry. This is set to true. */
  displayOnly?: Maybe<Scalars['Boolean']>;
  /** The dropdown placeholder for the field. */
  dropdownPlaceholder?: Maybe<Scalars['String']>;
  /** Contains the message that is displayed for fields that fail validation. */
  errorMessage?: Maybe<Scalars['String']>;
  /** Determines if all categories should be displayed on the Post Category drop down. If this property is true (display all categories), the Post Category drop down will display the categories hierarchically. */
  hasAllCategories?: Maybe<Scalars['Boolean']>;
  /** Determines if the field (checkbox, select or radio) have choice values enabled, which allows the field to have choice values different from the labels that are displayed to the user. */
  hasChoiceValue?: Maybe<Scalars['Boolean']>;
  /** Indicates whether the &#039;Enable &quot;other&quot; choice&#039; option is checked in the editor. */
  hasOtherChoice?: Maybe<Scalars['Boolean']>;
  /** Field ID. */
  id: Scalars['Int'];
  /** Assigns a name to this field so that it can be populated dynamically via this input name. Only applicable when canPrepopulate is `true`. */
  inputName?: Maybe<Scalars['String']>;
  /** The base form field type used to display the input. A good example is the Post Custom Field that can be displayed as various different types of fields. */
  inputType?: Maybe<FormFieldTypeEnum>;
  /** Determines if the field requires the user to enter a value. Fields marked as required will prevent the form from being submitted if the user has not entered a value in it. */
  isRequired?: Maybe<Scalars['Boolean']>;
  /** Field label that will be displayed on the form and on the admin pages. */
  label?: Maybe<Scalars['String']>;
  /** The field label position. */
  labelPlacement?: Maybe<FormFieldLabelPlacementEnum>;
  /** The number of CSS grid columns the field should span. */
  layoutGridColumnSpan?: Maybe<Scalars['Int']>;
  /** The number of CSS grid columns the spacer field following this one should span. */
  layoutSpacerGridColumnSpan?: Maybe<Scalars['Int']>;
  /** The form page this field is located on. Default is 1. */
  pageNumber?: Maybe<Scalars['Int']>;
  /** The form field-specifc policies for exporting and erasing personal data. */
  personalData?: Maybe<FormFieldDataPolicy>;
  /** Determines if the field allows duplicate submissions. */
  shouldAllowDuplicates?: Maybe<Scalars['Boolean']>;
  /** Determines the size of the field when displayed on the page. */
  size?: Maybe<FormFieldSizeEnum>;
  /** The type of field to be displayed. */
  type?: Maybe<FormFieldTypeEnum>;
  /** The string-formatted entry value for the `formField`. For complex fields this might be a JSON-encoded or serialized array. */
  value?: Maybe<Scalars['String']>;
  /** Field visibility. */
  visibility?: Maybe<FormFieldVisibilityEnum>;
};

/** A Gravity Forms  post_category field. */
export type PostCategorySelectField = FormField & PostCategoryField & {
  __typename?: 'PostCategorySelectField';
  /** When specified, the value of this property will be used on the admin pages instead of the label. It is useful for fields with long labels. */
  adminLabel?: Maybe<Scalars['String']>;
  /** The autocomplete attribute for the field. */
  autocompleteAttribute?: Maybe<Scalars['String']>;
  /** Determines if the field’s value can be pre-populated dynamically. */
  canPrepopulate?: Maybe<Scalars['Boolean']>;
  /** The available choices for the post_category field. */
  choices?: Maybe<Array<Maybe<PostCategoryFieldChoice>>>;
  /** Controls the visibility of the field based on values selected by the user. */
  conditionalLogic?: Maybe<ConditionalLogic>;
  /** String containing the custom CSS classes to be added to the &lt;li&gt; tag that contains the field. Useful for applying custom formatting to specific fields. */
  cssClass?: Maybe<Scalars['String']>;
  /** Contains the default value for the field. When specified, the field&#039;s value will be populated with the contents of this property when the form is displayed. */
  defaultValue?: Maybe<Scalars['String']>;
  /** Field description. */
  description?: Maybe<Scalars['String']>;
  /** The placement of the field description. */
  descriptionPlacement?: Maybe<FormFieldDescriptionPlacementEnum>;
  /** Indicates the field is only displayed and its contents are not submitted with the form/saved with the entry. This is set to true. */
  displayOnly?: Maybe<Scalars['Boolean']>;
  /** The dropdown placeholder for the field. */
  dropdownPlaceholder?: Maybe<Scalars['String']>;
  /** Contains the message that is displayed for fields that fail validation. */
  errorMessage?: Maybe<Scalars['String']>;
  /** Determines if all categories should be displayed on the Post Category drop down. If this property is true (display all categories), the Post Category drop down will display the categories hierarchically. */
  hasAllCategories?: Maybe<Scalars['Boolean']>;
  /** Whether autocomplete should be enabled for this field. */
  hasAutocomplete?: Maybe<Scalars['Boolean']>;
  /** Determines if the field (checkbox, select or radio) have choice values enabled, which allows the field to have choice values different from the labels that are displayed to the user. */
  hasChoiceValue?: Maybe<Scalars['Boolean']>;
  /** When set to true, the &quot;Chosen&quot; jQuery script will be applied to this field, enabling search capabilities to Drop Down fields and a more user-friendly interface for Multi Select fields. */
  hasEnhancedUI?: Maybe<Scalars['Boolean']>;
  /** Field ID. */
  id: Scalars['Int'];
  /** Assigns a name to this field so that it can be populated dynamically via this input name. Only applicable when canPrepopulate is `true`. */
  inputName?: Maybe<Scalars['String']>;
  /** The base form field type used to display the input. A good example is the Post Custom Field that can be displayed as various different types of fields. */
  inputType?: Maybe<FormFieldTypeEnum>;
  /** Determines if the field requires the user to enter a value. Fields marked as required will prevent the form from being submitted if the user has not entered a value in it. */
  isRequired?: Maybe<Scalars['Boolean']>;
  /** Field label that will be displayed on the form and on the admin pages. */
  label?: Maybe<Scalars['String']>;
  /** The field label position. */
  labelPlacement?: Maybe<FormFieldLabelPlacementEnum>;
  /** The number of CSS grid columns the field should span. */
  layoutGridColumnSpan?: Maybe<Scalars['Int']>;
  /** The number of CSS grid columns the spacer field following this one should span. */
  layoutSpacerGridColumnSpan?: Maybe<Scalars['Int']>;
  /** The form page this field is located on. Default is 1. */
  pageNumber?: Maybe<Scalars['Int']>;
  /** The form field-specifc policies for exporting and erasing personal data. */
  personalData?: Maybe<FormFieldDataPolicy>;
  /** Placeholder text to give the user a hint on how to fill out the field. This is not submitted with the form. */
  placeholder?: Maybe<Scalars['String']>;
  /** Determines if the field allows duplicate submissions. */
  shouldAllowDuplicates?: Maybe<Scalars['Boolean']>;
  /** Determines the size of the field when displayed on the page. */
  size?: Maybe<FormFieldSizeEnum>;
  /** The type of field to be displayed. */
  type?: Maybe<FormFieldTypeEnum>;
  /** The string-formatted entry value for the `formField`. For complex fields this might be a JSON-encoded or serialized array. */
  value?: Maybe<Scalars['String']>;
  /** Field visibility. */
  visibility?: Maybe<FormFieldVisibilityEnum>;
};

/** Connection to post Nodes */
export type PostConnection = {
  /** A list of edges (relational context) between RootQuery and connected post Nodes */
  edges: Array<PostConnectionEdge>;
  /** A list of connected post Nodes */
  nodes: Array<Post>;
  /** Information about pagination in a connection. */
  pageInfo: PostConnectionPageInfo;
};

/** Edge between a Node and a connected post */
export type PostConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The connected post Node */
  node: Post;
};

/** Page Info on the connected PostConnectionEdge */
export type PostConnectionPageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** A Gravity Forms   field. */
export type PostContentField = FormField & {
  __typename?: 'PostContentField';
  /** When specified, the value of this property will be used on the admin pages instead of the label. It is useful for fields with long labels. */
  adminLabel?: Maybe<Scalars['String']>;
  /** Determines if the field’s value can be pre-populated dynamically. */
  canPrepopulate?: Maybe<Scalars['Boolean']>;
  /** Controls the visibility of the field based on values selected by the user. */
  conditionalLogic?: Maybe<ConditionalLogic>;
  /** String containing the custom CSS classes to be added to the &lt;li&gt; tag that contains the field. Useful for applying custom formatting to specific fields. */
  cssClass?: Maybe<Scalars['String']>;
  /** Contains the default value for the field. When specified, the field&#039;s value will be populated with the contents of this property when the form is displayed. */
  defaultValue?: Maybe<Scalars['String']>;
  /** Field description. */
  description?: Maybe<Scalars['String']>;
  /** The placement of the field description. */
  descriptionPlacement?: Maybe<FormFieldDescriptionPlacementEnum>;
  /** Indicates the field is only displayed and its contents are not submitted with the form/saved with the entry. This is set to true. */
  displayOnly?: Maybe<Scalars['Boolean']>;
  /** Contains the message that is displayed for fields that fail validation. */
  errorMessage?: Maybe<Scalars['String']>;
  /** Indicates whether the field uses the rich text editor interface. */
  hasRichTextEditor?: Maybe<Scalars['Boolean']>;
  /** Field ID. */
  id: Scalars['Int'];
  /** Assigns a name to this field so that it can be populated dynamically via this input name. Only applicable when canPrepopulate is `true`. */
  inputName?: Maybe<Scalars['String']>;
  /** The base form field type used to display the input. A good example is the Post Custom Field that can be displayed as various different types of fields. */
  inputType?: Maybe<FormFieldTypeEnum>;
  /** Determines if the field requires the user to enter a value. Fields marked as required will prevent the form from being submitted if the user has not entered a value in it. */
  isRequired?: Maybe<Scalars['Boolean']>;
  /** Field label that will be displayed on the form and on the admin pages. */
  label?: Maybe<Scalars['String']>;
  /** The field label position. */
  labelPlacement?: Maybe<FormFieldLabelPlacementEnum>;
  /** The number of CSS grid columns the field should span. */
  layoutGridColumnSpan?: Maybe<Scalars['Int']>;
  /** The number of CSS grid columns the spacer field following this one should span. */
  layoutSpacerGridColumnSpan?: Maybe<Scalars['Int']>;
  /** Specifies the maximum number of characters allowed in a text or textarea (paragraph) field. */
  maxLength?: Maybe<Scalars['Int']>;
  /** The form page this field is located on. Default is 1. */
  pageNumber?: Maybe<Scalars['Int']>;
  /** The form field-specifc policies for exporting and erasing personal data. */
  personalData?: Maybe<FormFieldDataPolicy>;
  /** Placeholder text to give the user a hint on how to fill out the field. This is not submitted with the form. */
  placeholder?: Maybe<Scalars['String']>;
  /** Determines the size of the field when displayed on the page. */
  size?: Maybe<FormFieldSizeEnum>;
  /** The type of field to be displayed. */
  type?: Maybe<FormFieldTypeEnum>;
  /** The string-formatted entry value for the `formField`. For complex fields this might be a JSON-encoded or serialized array. */
  value?: Maybe<Scalars['String']>;
  /** Field visibility. */
  visibility?: Maybe<FormFieldVisibilityEnum>;
};

/** A Gravity Forms  post_custom_field field. */
export type PostCustomCheckboxField = FormField & PostCustomField & {
  __typename?: 'PostCustomCheckboxField';
  /** When specified, the value of this property will be used on the admin pages instead of the label. It is useful for fields with long labels. */
  adminLabel?: Maybe<Scalars['String']>;
  /** Determines if the field’s value can be pre-populated dynamically. */
  canPrepopulate?: Maybe<Scalars['Boolean']>;
  /** Checkbox field value. */
  checkboxValues?: Maybe<Array<Maybe<CheckboxFieldValue>>>;
  /** The available choices for the post_custom_field field. */
  choices?: Maybe<Array<Maybe<PostCustomCheckboxFieldChoice>>>;
  /** Controls the visibility of the field based on values selected by the user. */
  conditionalLogic?: Maybe<ConditionalLogic>;
  /** String containing the custom CSS classes to be added to the &lt;li&gt; tag that contains the field. Useful for applying custom formatting to specific fields. */
  cssClass?: Maybe<Scalars['String']>;
  /** Field description. */
  description?: Maybe<Scalars['String']>;
  /** The placement of the field description. */
  descriptionPlacement?: Maybe<FormFieldDescriptionPlacementEnum>;
  /** Indicates the field is only displayed and its contents are not submitted with the form/saved with the entry. This is set to true. */
  displayOnly?: Maybe<Scalars['Boolean']>;
  /** Contains the message that is displayed for fields that fail validation. */
  errorMessage?: Maybe<Scalars['String']>;
  /** Determines if the field (checkbox, select or radio) have choice values enabled, which allows the field to have choice values different from the labels that are displayed to the user. */
  hasChoiceValue?: Maybe<Scalars['Boolean']>;
  /** Whether the \&quot;select all\&quot; choice should be displayed. */
  hasSelectAll?: Maybe<Scalars['Boolean']>;
  /** Field ID. */
  id: Scalars['Int'];
  /** Assigns a name to this field so that it can be populated dynamically via this input name. Only applicable when canPrepopulate is `true`. */
  inputName?: Maybe<Scalars['String']>;
  /** The base form field type used to display the input. A good example is the Post Custom Field that can be displayed as various different types of fields. */
  inputType?: Maybe<FormFieldTypeEnum>;
  /** An array of the available properties for each input of the post_custom_field field. */
  inputs?: Maybe<Array<Maybe<PostCustomInputProperty>>>;
  /** Determines if the field requires the user to enter a value. Fields marked as required will prevent the form from being submitted if the user has not entered a value in it. */
  isRequired?: Maybe<Scalars['Boolean']>;
  /** Field label that will be displayed on the form and on the admin pages. */
  label?: Maybe<Scalars['String']>;
  /** The field label position. */
  labelPlacement?: Maybe<FormFieldLabelPlacementEnum>;
  /** The number of CSS grid columns the field should span. */
  layoutGridColumnSpan?: Maybe<Scalars['Int']>;
  /** The number of CSS grid columns the spacer field following this one should span. */
  layoutSpacerGridColumnSpan?: Maybe<Scalars['Int']>;
  /** The form page this field is located on. Default is 1. */
  pageNumber?: Maybe<Scalars['Int']>;
  /** The form field-specifc policies for exporting and erasing personal data. */
  personalData?: Maybe<FormFieldDataPolicy>;
  /** The post meta key to which the value should be assigned. */
  postMetaFieldName?: Maybe<Scalars['String']>;
  /** Determines if the field allows duplicate submissions. */
  shouldAllowDuplicates?: Maybe<Scalars['Boolean']>;
  /** Determines the size of the field when displayed on the page. */
  size?: Maybe<FormFieldSizeEnum>;
  /** The type of field to be displayed. */
  type?: Maybe<FormFieldTypeEnum>;
  /** The string-formatted entry value for the `formField`. For complex fields this might be a JSON-encoded or serialized array. */
  value?: Maybe<Scalars['String']>;
  /** Field visibility. */
  visibility?: Maybe<FormFieldVisibilityEnum>;
};

/** Post_custom_field choice values. */
export type PostCustomCheckboxFieldChoice = {
  __typename?: 'PostCustomCheckboxFieldChoice';
  /** Determines if this choice should be selected by default when displayed. The value true will select the choice, whereas false will display it unselected. */
  isSelected?: Maybe<Scalars['Boolean']>;
  /** The text to be displayed to the user when displaying this choice. */
  text?: Maybe<Scalars['String']>;
  /** The value to be stored in the database when this choice is selected. Note: This property is only supported by the Drop Down and Post Category fields. Checkboxes and Radio fields will store the text property in the database regardless of the value property. */
  value?: Maybe<Scalars['String']>;
};

/** A Gravity Forms  post_custom_field field. */
export type PostCustomDateField = FormField & PostCustomField & {
  __typename?: 'PostCustomDateField';
  /** When specified, the value of this property will be used on the admin pages instead of the label. It is useful for fields with long labels. */
  adminLabel?: Maybe<Scalars['String']>;
  /** Determines how the date field displays it’s calendar icon. */
  calendarIconType?: Maybe<FormFieldCalendarIconTypeEnum>;
  /** Contains the URL to the custom calendar icon. Only applicable when calendarIconType is set to custom. */
  calendarIconUrl?: Maybe<Scalars['String']>;
  /** Determines if the field’s value can be pre-populated dynamically. */
  canPrepopulate?: Maybe<Scalars['Boolean']>;
  /** Controls the visibility of the field based on values selected by the user. */
  conditionalLogic?: Maybe<ConditionalLogic>;
  /** String containing the custom CSS classes to be added to the &lt;li&gt; tag that contains the field. Useful for applying custom formatting to specific fields. */
  cssClass?: Maybe<Scalars['String']>;
  /** Determines how the date is displayed. */
  dateFormat?: Maybe<DateFieldFormatEnum>;
  /** The type of date field to display. */
  dateType?: Maybe<DateFieldTypeEnum>;
  /** Contains the default value for the field. When specified, the field&#039;s value will be populated with the contents of this property when the form is displayed. */
  defaultValue?: Maybe<Scalars['String']>;
  /** Field description. */
  description?: Maybe<Scalars['String']>;
  /** The placement of the field description. */
  descriptionPlacement?: Maybe<FormFieldDescriptionPlacementEnum>;
  /** Indicates the field is only displayed and its contents are not submitted with the form/saved with the entry. This is set to true. */
  displayOnly?: Maybe<Scalars['Boolean']>;
  /** Contains the message that is displayed for fields that fail validation. */
  errorMessage?: Maybe<Scalars['String']>;
  /** Field ID. */
  id: Scalars['Int'];
  /** Assigns a name to this field so that it can be populated dynamically via this input name. Only applicable when canPrepopulate is `true`. */
  inputName?: Maybe<Scalars['String']>;
  /** The base form field type used to display the input. A good example is the Post Custom Field that can be displayed as various different types of fields. */
  inputType?: Maybe<FormFieldTypeEnum>;
  /** An array of the available properties for each input of the post_custom_field field. */
  inputs?: Maybe<Array<Maybe<PostCustomInputProperty>>>;
  /** Determines if the field requires the user to enter a value. Fields marked as required will prevent the form from being submitted if the user has not entered a value in it. */
  isRequired?: Maybe<Scalars['Boolean']>;
  /** Field label that will be displayed on the form and on the admin pages. */
  label?: Maybe<Scalars['String']>;
  /** The field label position. */
  labelPlacement?: Maybe<FormFieldLabelPlacementEnum>;
  /** The number of CSS grid columns the field should span. */
  layoutGridColumnSpan?: Maybe<Scalars['Int']>;
  /** The number of CSS grid columns the spacer field following this one should span. */
  layoutSpacerGridColumnSpan?: Maybe<Scalars['Int']>;
  /** The form page this field is located on. Default is 1. */
  pageNumber?: Maybe<Scalars['Int']>;
  /** The form field-specifc policies for exporting and erasing personal data. */
  personalData?: Maybe<FormFieldDataPolicy>;
  /** Placeholder text to give the user a hint on how to fill out the field. This is not submitted with the form. */
  placeholder?: Maybe<Scalars['String']>;
  /** The post meta key to which the value should be assigned. */
  postMetaFieldName?: Maybe<Scalars['String']>;
  /** Determines if the field allows duplicate submissions. */
  shouldAllowDuplicates?: Maybe<Scalars['Boolean']>;
  /** Determines the size of the field when displayed on the page. */
  size?: Maybe<FormFieldSizeEnum>;
  /** The placement of the labels for the subfields within the group. This setting controls all of the subfields, they cannot be set individually. They may be aligned above or below the inputs. If this property is not set, the “Sub-Label Placement” setting on the Form Settings-&gt;Form Layout page is used. If no setting is specified, the default is above inputs. */
  subLabelPlacement?: Maybe<FormFieldSubLabelPlacementEnum>;
  /** The type of field to be displayed. */
  type?: Maybe<FormFieldTypeEnum>;
  /** The string-formatted entry value for the `formField`. For complex fields this might be a JSON-encoded or serialized array. */
  value?: Maybe<Scalars['String']>;
  /** Field visibility. */
  visibility?: Maybe<FormFieldVisibilityEnum>;
};

/** A Gravity Forms  post_custom_field field. */
export type PostCustomEmailField = FormField & PostCustomField & {
  __typename?: 'PostCustomEmailField';
  /** When specified, the value of this property will be used on the admin pages instead of the label. It is useful for fields with long labels. */
  adminLabel?: Maybe<Scalars['String']>;
  /** The autocomplete attribute for the field. */
  autocompleteAttribute?: Maybe<Scalars['String']>;
  /** Determines if the field’s value can be pre-populated dynamically. */
  canPrepopulate?: Maybe<Scalars['Boolean']>;
  /** Controls the visibility of the field based on values selected by the user. */
  conditionalLogic?: Maybe<ConditionalLogic>;
  /** String containing the custom CSS classes to be added to the &lt;li&gt; tag that contains the field. Useful for applying custom formatting to specific fields. */
  cssClass?: Maybe<Scalars['String']>;
  /** Contains the default value for the field. When specified, the field&#039;s value will be populated with the contents of this property when the form is displayed. */
  defaultValue?: Maybe<Scalars['String']>;
  /** Field description. */
  description?: Maybe<Scalars['String']>;
  /** The placement of the field description. */
  descriptionPlacement?: Maybe<FormFieldDescriptionPlacementEnum>;
  /** Indicates the field is only displayed and its contents are not submitted with the form/saved with the entry. This is set to true. */
  displayOnly?: Maybe<Scalars['Boolean']>;
  /** Contains the message that is displayed for fields that fail validation. */
  errorMessage?: Maybe<Scalars['String']>;
  /** Whether autocomplete should be enabled for this field. */
  hasAutocomplete?: Maybe<Scalars['Boolean']>;
  /** Determines whether the Confirm Email field is active. */
  hasEmailConfirmation?: Maybe<Scalars['Boolean']>;
  /** Field ID. */
  id: Scalars['Int'];
  /** Assigns a name to this field so that it can be populated dynamically via this input name. Only applicable when canPrepopulate is `true`. */
  inputName?: Maybe<Scalars['String']>;
  /** The base form field type used to display the input. A good example is the Post Custom Field that can be displayed as various different types of fields. */
  inputType?: Maybe<FormFieldTypeEnum>;
  /** An array of the available properties for each input of the post_custom_field field. */
  inputs?: Maybe<Array<Maybe<PostCustomInputProperty>>>;
  /** Determines if the field requires the user to enter a value. Fields marked as required will prevent the form from being submitted if the user has not entered a value in it. */
  isRequired?: Maybe<Scalars['Boolean']>;
  /** Field label that will be displayed on the form and on the admin pages. */
  label?: Maybe<Scalars['String']>;
  /** The field label position. */
  labelPlacement?: Maybe<FormFieldLabelPlacementEnum>;
  /** The number of CSS grid columns the field should span. */
  layoutGridColumnSpan?: Maybe<Scalars['Int']>;
  /** The number of CSS grid columns the spacer field following this one should span. */
  layoutSpacerGridColumnSpan?: Maybe<Scalars['Int']>;
  /** The form page this field is located on. Default is 1. */
  pageNumber?: Maybe<Scalars['Int']>;
  /** The form field-specifc policies for exporting and erasing personal data. */
  personalData?: Maybe<FormFieldDataPolicy>;
  /** Placeholder text to give the user a hint on how to fill out the field. This is not submitted with the form. */
  placeholder?: Maybe<Scalars['String']>;
  /** The post meta key to which the value should be assigned. */
  postMetaFieldName?: Maybe<Scalars['String']>;
  /** Determines if the field allows duplicate submissions. */
  shouldAllowDuplicates?: Maybe<Scalars['Boolean']>;
  /** Determines the size of the field when displayed on the page. */
  size?: Maybe<FormFieldSizeEnum>;
  /** The placement of the labels for the subfields within the group. This setting controls all of the subfields, they cannot be set individually. They may be aligned above or below the inputs. If this property is not set, the “Sub-Label Placement” setting on the Form Settings-&gt;Form Layout page is used. If no setting is specified, the default is above inputs. */
  subLabelPlacement?: Maybe<FormFieldSubLabelPlacementEnum>;
  /** The type of field to be displayed. */
  type?: Maybe<FormFieldTypeEnum>;
  /** The string-formatted entry value for the `formField`. For complex fields this might be a JSON-encoded or serialized array. */
  value?: Maybe<Scalars['String']>;
  /** Field visibility. */
  visibility?: Maybe<FormFieldVisibilityEnum>;
};

/** A Gravity Forms   field. */
export type PostCustomField = {
  /** When specified, the value of this property will be used on the admin pages instead of the label. It is useful for fields with long labels. */
  adminLabel?: Maybe<Scalars['String']>;
  /** Determines if the field’s value can be pre-populated dynamically. */
  canPrepopulate?: Maybe<Scalars['Boolean']>;
  /** Controls the visibility of the field based on values selected by the user. */
  conditionalLogic?: Maybe<ConditionalLogic>;
  /** String containing the custom CSS classes to be added to the &lt;li&gt; tag that contains the field. Useful for applying custom formatting to specific fields. */
  cssClass?: Maybe<Scalars['String']>;
  /** Field description. */
  description?: Maybe<Scalars['String']>;
  /** The placement of the field description. */
  descriptionPlacement?: Maybe<FormFieldDescriptionPlacementEnum>;
  /** Indicates the field is only displayed and its contents are not submitted with the form/saved with the entry. This is set to true. */
  displayOnly?: Maybe<Scalars['Boolean']>;
  /** Contains the message that is displayed for fields that fail validation. */
  errorMessage?: Maybe<Scalars['String']>;
  /** Field ID. */
  id: Scalars['Int'];
  /** Assigns a name to this field so that it can be populated dynamically via this input name. Only applicable when canPrepopulate is `true`. */
  inputName?: Maybe<Scalars['String']>;
  /** The base form field type used to display the input. A good example is the Post Custom Field that can be displayed as various different types of fields. */
  inputType?: Maybe<FormFieldTypeEnum>;
  /** Determines if the field requires the user to enter a value. Fields marked as required will prevent the form from being submitted if the user has not entered a value in it. */
  isRequired?: Maybe<Scalars['Boolean']>;
  /** Field label that will be displayed on the form and on the admin pages. */
  label?: Maybe<Scalars['String']>;
  /** The field label position. */
  labelPlacement?: Maybe<FormFieldLabelPlacementEnum>;
  /** The number of CSS grid columns the field should span. */
  layoutGridColumnSpan?: Maybe<Scalars['Int']>;
  /** The number of CSS grid columns the spacer field following this one should span. */
  layoutSpacerGridColumnSpan?: Maybe<Scalars['Int']>;
  /** The form page this field is located on. Default is 1. */
  pageNumber?: Maybe<Scalars['Int']>;
  /** The form field-specifc policies for exporting and erasing personal data. */
  personalData?: Maybe<FormFieldDataPolicy>;
  /** The post meta key to which the value should be assigned. */
  postMetaFieldName?: Maybe<Scalars['String']>;
  /** Determines if the field allows duplicate submissions. */
  shouldAllowDuplicates?: Maybe<Scalars['Boolean']>;
  /** Determines the size of the field when displayed on the page. */
  size?: Maybe<FormFieldSizeEnum>;
  /** The type of field to be displayed. */
  type?: Maybe<FormFieldTypeEnum>;
  /** The string-formatted entry value for the `formField`. For complex fields this might be a JSON-encoded or serialized array. */
  value?: Maybe<Scalars['String']>;
  /** Field visibility. */
  visibility?: Maybe<FormFieldVisibilityEnum>;
};

/** A Gravity Forms  post_custom_field field. */
export type PostCustomFileuploadField = FormField & PostCustomField & {
  __typename?: 'PostCustomFileuploadField';
  /** When specified, the value of this property will be used on the admin pages instead of the label. It is useful for fields with long labels. */
  adminLabel?: Maybe<Scalars['String']>;
  /** A comma-delimited list of the file extensions which may be uploaded. */
  allowedExtensions?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Indicates whether multiple files may be uploaded. */
  canAcceptMultipleFiles?: Maybe<Scalars['Boolean']>;
  /** Determines if the field’s value can be pre-populated dynamically. */
  canPrepopulate?: Maybe<Scalars['Boolean']>;
  /** Controls the visibility of the field based on values selected by the user. */
  conditionalLogic?: Maybe<ConditionalLogic>;
  /** String containing the custom CSS classes to be added to the &lt;li&gt; tag that contains the field. Useful for applying custom formatting to specific fields. */
  cssClass?: Maybe<Scalars['String']>;
  /** Field description. */
  description?: Maybe<Scalars['String']>;
  /** The placement of the field description. */
  descriptionPlacement?: Maybe<FormFieldDescriptionPlacementEnum>;
  /** Indicates the field is only displayed and its contents are not submitted with the form/saved with the entry. This is set to true. */
  displayOnly?: Maybe<Scalars['Boolean']>;
  /** Contains the message that is displayed for fields that fail validation. */
  errorMessage?: Maybe<Scalars['String']>;
  /** File upload value */
  fileUploadValues?: Maybe<Array<Maybe<FileUploadFieldValue>>>;
  /** Field ID. */
  id: Scalars['Int'];
  /** Assigns a name to this field so that it can be populated dynamically via this input name. Only applicable when canPrepopulate is `true`. */
  inputName?: Maybe<Scalars['String']>;
  /** The base form field type used to display the input. A good example is the Post Custom Field that can be displayed as various different types of fields. */
  inputType?: Maybe<FormFieldTypeEnum>;
  /** Determines if the field requires the user to enter a value. Fields marked as required will prevent the form from being submitted if the user has not entered a value in it. */
  isRequired?: Maybe<Scalars['Boolean']>;
  /** Field label that will be displayed on the form and on the admin pages. */
  label?: Maybe<Scalars['String']>;
  /** The field label position. */
  labelPlacement?: Maybe<FormFieldLabelPlacementEnum>;
  /** The number of CSS grid columns the field should span. */
  layoutGridColumnSpan?: Maybe<Scalars['Int']>;
  /** The number of CSS grid columns the spacer field following this one should span. */
  layoutSpacerGridColumnSpan?: Maybe<Scalars['Int']>;
  /** The maximum size (in MB) an uploaded file may be . */
  maxFileSize?: Maybe<Scalars['Int']>;
  /** When the field is set to allow multiple files to be uploaded, this property is available to set a limit on how many may be uploaded. */
  maxFiles?: Maybe<Scalars['Int']>;
  /** The form page this field is located on. Default is 1. */
  pageNumber?: Maybe<Scalars['Int']>;
  /** The form field-specifc policies for exporting and erasing personal data. */
  personalData?: Maybe<FormFieldDataPolicy>;
  /** The post meta key to which the value should be assigned. */
  postMetaFieldName?: Maybe<Scalars['String']>;
  /** Determines if the field allows duplicate submissions. */
  shouldAllowDuplicates?: Maybe<Scalars['Boolean']>;
  /** Determines the size of the field when displayed on the page. */
  size?: Maybe<FormFieldSizeEnum>;
  /** The type of field to be displayed. */
  type?: Maybe<FormFieldTypeEnum>;
  /** The string-formatted entry value for the `formField`. For complex fields this might be a JSON-encoded or serialized array. */
  value?: Maybe<Scalars['String']>;
  /**
   * An array of field values.
   * @deprecated Use `fileUploadValues` instead.
   */
  values?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Field visibility. */
  visibility?: Maybe<FormFieldVisibilityEnum>;
};

/** A Gravity Forms  post_custom_field field. */
export type PostCustomHiddenField = FormField & PostCustomField & {
  __typename?: 'PostCustomHiddenField';
  /** When specified, the value of this property will be used on the admin pages instead of the label. It is useful for fields with long labels. */
  adminLabel?: Maybe<Scalars['String']>;
  /** Determines if the field’s value can be pre-populated dynamically. */
  canPrepopulate?: Maybe<Scalars['Boolean']>;
  /** Controls the visibility of the field based on values selected by the user. */
  conditionalLogic?: Maybe<ConditionalLogic>;
  /** String containing the custom CSS classes to be added to the &lt;li&gt; tag that contains the field. Useful for applying custom formatting to specific fields. */
  cssClass?: Maybe<Scalars['String']>;
  /** Contains the default value for the field. When specified, the field&#039;s value will be populated with the contents of this property when the form is displayed. */
  defaultValue?: Maybe<Scalars['String']>;
  /** Field description. */
  description?: Maybe<Scalars['String']>;
  /** The placement of the field description. */
  descriptionPlacement?: Maybe<FormFieldDescriptionPlacementEnum>;
  /** Indicates the field is only displayed and its contents are not submitted with the form/saved with the entry. This is set to true. */
  displayOnly?: Maybe<Scalars['Boolean']>;
  /** Contains the message that is displayed for fields that fail validation. */
  errorMessage?: Maybe<Scalars['String']>;
  /** Field ID. */
  id: Scalars['Int'];
  /** Assigns a name to this field so that it can be populated dynamically via this input name. Only applicable when canPrepopulate is `true`. */
  inputName?: Maybe<Scalars['String']>;
  /** The base form field type used to display the input. A good example is the Post Custom Field that can be displayed as various different types of fields. */
  inputType?: Maybe<FormFieldTypeEnum>;
  /** Determines if the field requires the user to enter a value. Fields marked as required will prevent the form from being submitted if the user has not entered a value in it. */
  isRequired?: Maybe<Scalars['Boolean']>;
  /** Field label that will be displayed on the form and on the admin pages. */
  label?: Maybe<Scalars['String']>;
  /** The field label position. */
  labelPlacement?: Maybe<FormFieldLabelPlacementEnum>;
  /** The number of CSS grid columns the field should span. */
  layoutGridColumnSpan?: Maybe<Scalars['Int']>;
  /** The number of CSS grid columns the spacer field following this one should span. */
  layoutSpacerGridColumnSpan?: Maybe<Scalars['Int']>;
  /** The form page this field is located on. Default is 1. */
  pageNumber?: Maybe<Scalars['Int']>;
  /** The form field-specifc policies for exporting and erasing personal data. */
  personalData?: Maybe<FormFieldDataPolicy>;
  /** The post meta key to which the value should be assigned. */
  postMetaFieldName?: Maybe<Scalars['String']>;
  /** Determines if the field allows duplicate submissions. */
  shouldAllowDuplicates?: Maybe<Scalars['Boolean']>;
  /** Determines the size of the field when displayed on the page. */
  size?: Maybe<FormFieldSizeEnum>;
  /** The type of field to be displayed. */
  type?: Maybe<FormFieldTypeEnum>;
  /** The string-formatted entry value for the `formField`. For complex fields this might be a JSON-encoded or serialized array. */
  value?: Maybe<Scalars['String']>;
  /** Field visibility. */
  visibility?: Maybe<FormFieldVisibilityEnum>;
};

/** Post_custom_field input values. */
export type PostCustomInputProperty = {
  __typename?: 'PostCustomInputProperty';
  /** The input ID. Input IDs follow the following naming convention: FIELDID.INPUTID (i.e. 5.1), where FIELDID is the id of the containing field and INPUTID specifies the input field. */
  id?: Maybe<Scalars['Float']>;
  /** Field label that will be displayed on the form and on the admin pages. */
  label?: Maybe<Scalars['String']>;
  /** Assigns a name to this field so that it can be populated dynamically via this input name. Only applicable when canPrepopulate is `true`. */
  name?: Maybe<Scalars['String']>;
};

/** A Gravity Forms  post_custom_field field. */
export type PostCustomListField = FormField & PostCustomField & {
  __typename?: 'PostCustomListField';
  /** The URL of the image to be used for the add row button. */
  addIconUrl?: Maybe<Scalars['String']>;
  /** When specified, the value of this property will be used on the admin pages instead of the label. It is useful for fields with long labels. */
  adminLabel?: Maybe<Scalars['String']>;
  /** Determines if the field’s value can be pre-populated dynamically. */
  canPrepopulate?: Maybe<Scalars['Boolean']>;
  /** The available choices for the post_custom_field field. */
  choices?: Maybe<Array<Maybe<PostCustomListFieldChoice>>>;
  /** Controls the visibility of the field based on values selected by the user. */
  conditionalLogic?: Maybe<ConditionalLogic>;
  /** String containing the custom CSS classes to be added to the &lt;li&gt; tag that contains the field. Useful for applying custom formatting to specific fields. */
  cssClass?: Maybe<Scalars['String']>;
  /** The URL of the image to be used for the delete row button. */
  deleteIconUrl?: Maybe<Scalars['String']>;
  /** Field description. */
  description?: Maybe<Scalars['String']>;
  /** The placement of the field description. */
  descriptionPlacement?: Maybe<FormFieldDescriptionPlacementEnum>;
  /** Indicates the field is only displayed and its contents are not submitted with the form/saved with the entry. This is set to true. */
  displayOnly?: Maybe<Scalars['Boolean']>;
  /** Contains the message that is displayed for fields that fail validation. */
  errorMessage?: Maybe<Scalars['String']>;
  /** Determines if the field should use multiple columns. Default is false. */
  hasColumns?: Maybe<Scalars['Boolean']>;
  /** Field ID. */
  id: Scalars['Int'];
  /** Assigns a name to this field so that it can be populated dynamically via this input name. Only applicable when canPrepopulate is `true`. */
  inputName?: Maybe<Scalars['String']>;
  /** The base form field type used to display the input. A good example is the Post Custom Field that can be displayed as various different types of fields. */
  inputType?: Maybe<FormFieldTypeEnum>;
  /** Determines if the field requires the user to enter a value. Fields marked as required will prevent the form from being submitted if the user has not entered a value in it. */
  isRequired?: Maybe<Scalars['Boolean']>;
  /** Field label that will be displayed on the form and on the admin pages. */
  label?: Maybe<Scalars['String']>;
  /** The field label position. */
  labelPlacement?: Maybe<FormFieldLabelPlacementEnum>;
  /** The number of CSS grid columns the field should span. */
  layoutGridColumnSpan?: Maybe<Scalars['Int']>;
  /** The number of CSS grid columns the spacer field following this one should span. */
  layoutSpacerGridColumnSpan?: Maybe<Scalars['Int']>;
  /** List field value. */
  listValues?: Maybe<Array<Maybe<ListFieldValue>>>;
  /** The maximum number of rows the user can add to the field. */
  maxRows?: Maybe<Scalars['Int']>;
  /** The form page this field is located on. Default is 1. */
  pageNumber?: Maybe<Scalars['Int']>;
  /** The form field-specifc policies for exporting and erasing personal data. */
  personalData?: Maybe<FormFieldDataPolicy>;
  /** The post meta key to which the value should be assigned. */
  postMetaFieldName?: Maybe<Scalars['String']>;
  /** Determines if the field allows duplicate submissions. */
  shouldAllowDuplicates?: Maybe<Scalars['Boolean']>;
  /** Determines the size of the field when displayed on the page. */
  size?: Maybe<FormFieldSizeEnum>;
  /** The type of field to be displayed. */
  type?: Maybe<FormFieldTypeEnum>;
  /** The string-formatted entry value for the `formField`. For complex fields this might be a JSON-encoded or serialized array. */
  value?: Maybe<Scalars['String']>;
  /** Field visibility. */
  visibility?: Maybe<FormFieldVisibilityEnum>;
};

/** Post_custom_field choice values. */
export type PostCustomListFieldChoice = {
  __typename?: 'PostCustomListFieldChoice';
  /** The text to be displayed to the user when displaying this choice. */
  text?: Maybe<Scalars['String']>;
  /** The value to be stored in the database when this choice is selected. Note: This property is only supported by the Drop Down and Post Category fields. Checkboxes and Radio fields will store the text property in the database regardless of the value property. */
  value?: Maybe<Scalars['String']>;
};

/** A Gravity Forms  post_custom_field field. */
export type PostCustomMultiSelectField = FormField & PostCustomField & {
  __typename?: 'PostCustomMultiSelectField';
  /** When specified, the value of this property will be used on the admin pages instead of the label. It is useful for fields with long labels. */
  adminLabel?: Maybe<Scalars['String']>;
  /** Determines if the field’s value can be pre-populated dynamically. */
  canPrepopulate?: Maybe<Scalars['Boolean']>;
  /** The available choices for the post_custom_field field. */
  choices?: Maybe<Array<Maybe<PostCustomMultiSelectFieldChoice>>>;
  /** Controls the visibility of the field based on values selected by the user. */
  conditionalLogic?: Maybe<ConditionalLogic>;
  /** String containing the custom CSS classes to be added to the &lt;li&gt; tag that contains the field. Useful for applying custom formatting to specific fields. */
  cssClass?: Maybe<Scalars['String']>;
  /** Field description. */
  description?: Maybe<Scalars['String']>;
  /** The placement of the field description. */
  descriptionPlacement?: Maybe<FormFieldDescriptionPlacementEnum>;
  /** Indicates the field is only displayed and its contents are not submitted with the form/saved with the entry. This is set to true. */
  displayOnly?: Maybe<Scalars['Boolean']>;
  /** Contains the message that is displayed for fields that fail validation. */
  errorMessage?: Maybe<Scalars['String']>;
  /** Determines if the field (checkbox, select or radio) have choice values enabled, which allows the field to have choice values different from the labels that are displayed to the user. */
  hasChoiceValue?: Maybe<Scalars['Boolean']>;
  /** When set to true, the &quot;Chosen&quot; jQuery script will be applied to this field, enabling search capabilities to Drop Down fields and a more user-friendly interface for Multi Select fields. */
  hasEnhancedUI?: Maybe<Scalars['Boolean']>;
  /** Field ID. */
  id: Scalars['Int'];
  /** Assigns a name to this field so that it can be populated dynamically via this input name. Only applicable when canPrepopulate is `true`. */
  inputName?: Maybe<Scalars['String']>;
  /** The base form field type used to display the input. A good example is the Post Custom Field that can be displayed as various different types of fields. */
  inputType?: Maybe<FormFieldTypeEnum>;
  /** Determines if the field requires the user to enter a value. Fields marked as required will prevent the form from being submitted if the user has not entered a value in it. */
  isRequired?: Maybe<Scalars['Boolean']>;
  /** Field label that will be displayed on the form and on the admin pages. */
  label?: Maybe<Scalars['String']>;
  /** The field label position. */
  labelPlacement?: Maybe<FormFieldLabelPlacementEnum>;
  /** The number of CSS grid columns the field should span. */
  layoutGridColumnSpan?: Maybe<Scalars['Int']>;
  /** The number of CSS grid columns the spacer field following this one should span. */
  layoutSpacerGridColumnSpan?: Maybe<Scalars['Int']>;
  /** The form page this field is located on. Default is 1. */
  pageNumber?: Maybe<Scalars['Int']>;
  /** The form field-specifc policies for exporting and erasing personal data. */
  personalData?: Maybe<FormFieldDataPolicy>;
  /** The post meta key to which the value should be assigned. */
  postMetaFieldName?: Maybe<Scalars['String']>;
  /** Determines if the field allows duplicate submissions. */
  shouldAllowDuplicates?: Maybe<Scalars['Boolean']>;
  /** Determines the size of the field when displayed on the page. */
  size?: Maybe<FormFieldSizeEnum>;
  /** The type of field to be displayed. */
  type?: Maybe<FormFieldTypeEnum>;
  /** The string-formatted entry value for the `formField`. For complex fields this might be a JSON-encoded or serialized array. */
  value?: Maybe<Scalars['String']>;
  /** An array of field values. */
  values?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Field visibility. */
  visibility?: Maybe<FormFieldVisibilityEnum>;
};

/** Post_custom_field choice values. */
export type PostCustomMultiSelectFieldChoice = {
  __typename?: 'PostCustomMultiSelectFieldChoice';
  /** Determines if this choice should be selected by default when displayed. The value true will select the choice, whereas false will display it unselected. */
  isSelected?: Maybe<Scalars['Boolean']>;
  /** The text to be displayed to the user when displaying this choice. */
  text?: Maybe<Scalars['String']>;
  /** The value to be stored in the database when this choice is selected. Note: This property is only supported by the Drop Down and Post Category fields. Checkboxes and Radio fields will store the text property in the database regardless of the value property. */
  value?: Maybe<Scalars['String']>;
};

/** A Gravity Forms  post_custom_field field. */
export type PostCustomNumberField = FormField & PostCustomField & {
  __typename?: 'PostCustomNumberField';
  /** When specified, the value of this property will be used on the admin pages instead of the label. It is useful for fields with long labels. */
  adminLabel?: Maybe<Scalars['String']>;
  /** The autocomplete attribute for the field. */
  autocompleteAttribute?: Maybe<Scalars['String']>;
  /** The formula used for the number field. */
  calculationFormula?: Maybe<Scalars['String']>;
  /** Specifies to how many decimal places the number should be rounded. This is available when `isCalculation` is true, but will return null if the number format is `CURRENCY` or if the calculation is set to `Do not round`. */
  calculationRounding?: Maybe<Scalars['Int']>;
  /** Determines if the field’s value can be pre-populated dynamically. */
  canPrepopulate?: Maybe<Scalars['Boolean']>;
  /** Controls the visibility of the field based on values selected by the user. */
  conditionalLogic?: Maybe<ConditionalLogic>;
  /** String containing the custom CSS classes to be added to the &lt;li&gt; tag that contains the field. Useful for applying custom formatting to specific fields. */
  cssClass?: Maybe<Scalars['String']>;
  /** Contains the default value for the field. When specified, the field&#039;s value will be populated with the contents of this property when the form is displayed. */
  defaultValue?: Maybe<Scalars['String']>;
  /** Field description. */
  description?: Maybe<Scalars['String']>;
  /** The placement of the field description. */
  descriptionPlacement?: Maybe<FormFieldDescriptionPlacementEnum>;
  /** Indicates the field is only displayed and its contents are not submitted with the form/saved with the entry. This is set to true. */
  displayOnly?: Maybe<Scalars['Boolean']>;
  /** Contains the message that is displayed for fields that fail validation. */
  errorMessage?: Maybe<Scalars['String']>;
  /** Whether autocomplete should be enabled for this field. */
  hasAutocomplete?: Maybe<Scalars['Boolean']>;
  /** Field ID. */
  id: Scalars['Int'];
  /** Assigns a name to this field so that it can be populated dynamically via this input name. Only applicable when canPrepopulate is `true`. */
  inputName?: Maybe<Scalars['String']>;
  /** The base form field type used to display the input. A good example is the Post Custom Field that can be displayed as various different types of fields. */
  inputType?: Maybe<FormFieldTypeEnum>;
  /** Indicates whether the number field is a calculation. */
  isCalculation?: Maybe<Scalars['Boolean']>;
  /** Determines if the field requires the user to enter a value. Fields marked as required will prevent the form from being submitted if the user has not entered a value in it. */
  isRequired?: Maybe<Scalars['Boolean']>;
  /** Field label that will be displayed on the form and on the admin pages. */
  label?: Maybe<Scalars['String']>;
  /** The field label position. */
  labelPlacement?: Maybe<FormFieldLabelPlacementEnum>;
  /** The number of CSS grid columns the field should span. */
  layoutGridColumnSpan?: Maybe<Scalars['Int']>;
  /** The number of CSS grid columns the spacer field following this one should span. */
  layoutSpacerGridColumnSpan?: Maybe<Scalars['Int']>;
  /** Specifies the format allowed for the number field. */
  numberFormat?: Maybe<NumberFieldFormatEnum>;
  /** The form page this field is located on. Default is 1. */
  pageNumber?: Maybe<Scalars['Int']>;
  /** The form field-specifc policies for exporting and erasing personal data. */
  personalData?: Maybe<FormFieldDataPolicy>;
  /** Placeholder text to give the user a hint on how to fill out the field. This is not submitted with the form. */
  placeholder?: Maybe<Scalars['String']>;
  /** The post meta key to which the value should be assigned. */
  postMetaFieldName?: Maybe<Scalars['String']>;
  /** Maximum allowed value for a number field. Values higher than the number specified by this property will cause the field to fail validation. */
  rangeMax?: Maybe<Scalars['Float']>;
  /** Minimum allowed value for a number field. Values lower than the number specified by this property will cause the field to fail validation. */
  rangeMin?: Maybe<Scalars['Float']>;
  /** Determines if the field allows duplicate submissions. */
  shouldAllowDuplicates?: Maybe<Scalars['Boolean']>;
  /** Determines the size of the field when displayed on the page. */
  size?: Maybe<FormFieldSizeEnum>;
  /** The type of field to be displayed. */
  type?: Maybe<FormFieldTypeEnum>;
  /** The string-formatted entry value for the `formField`. For complex fields this might be a JSON-encoded or serialized array. */
  value?: Maybe<Scalars['String']>;
  /** Field visibility. */
  visibility?: Maybe<FormFieldVisibilityEnum>;
};

/** A Gravity Forms  post_custom_field field. */
export type PostCustomPhoneField = FormField & PostCustomField & {
  __typename?: 'PostCustomPhoneField';
  /** When specified, the value of this property will be used on the admin pages instead of the label. It is useful for fields with long labels. */
  adminLabel?: Maybe<Scalars['String']>;
  /** The autocomplete attribute for the field. */
  autocompleteAttribute?: Maybe<Scalars['String']>;
  /** Determines if the field’s value can be pre-populated dynamically. */
  canPrepopulate?: Maybe<Scalars['Boolean']>;
  /** Controls the visibility of the field based on values selected by the user. */
  conditionalLogic?: Maybe<ConditionalLogic>;
  /** String containing the custom CSS classes to be added to the &lt;li&gt; tag that contains the field. Useful for applying custom formatting to specific fields. */
  cssClass?: Maybe<Scalars['String']>;
  /** Contains the default value for the field. When specified, the field&#039;s value will be populated with the contents of this property when the form is displayed. */
  defaultValue?: Maybe<Scalars['String']>;
  /** Field description. */
  description?: Maybe<Scalars['String']>;
  /** The placement of the field description. */
  descriptionPlacement?: Maybe<FormFieldDescriptionPlacementEnum>;
  /** Indicates the field is only displayed and its contents are not submitted with the form/saved with the entry. This is set to true. */
  displayOnly?: Maybe<Scalars['Boolean']>;
  /** Contains the message that is displayed for fields that fail validation. */
  errorMessage?: Maybe<Scalars['String']>;
  /** Whether autocomplete should be enabled for this field. */
  hasAutocomplete?: Maybe<Scalars['Boolean']>;
  /** Field ID. */
  id: Scalars['Int'];
  /** Assigns a name to this field so that it can be populated dynamically via this input name. Only applicable when canPrepopulate is `true`. */
  inputName?: Maybe<Scalars['String']>;
  /** The base form field type used to display the input. A good example is the Post Custom Field that can be displayed as various different types of fields. */
  inputType?: Maybe<FormFieldTypeEnum>;
  /** Determines if the field requires the user to enter a value. Fields marked as required will prevent the form from being submitted if the user has not entered a value in it. */
  isRequired?: Maybe<Scalars['Boolean']>;
  /** Field label that will be displayed on the form and on the admin pages. */
  label?: Maybe<Scalars['String']>;
  /** The field label position. */
  labelPlacement?: Maybe<FormFieldLabelPlacementEnum>;
  /** The number of CSS grid columns the field should span. */
  layoutGridColumnSpan?: Maybe<Scalars['Int']>;
  /** The number of CSS grid columns the spacer field following this one should span. */
  layoutSpacerGridColumnSpan?: Maybe<Scalars['Int']>;
  /** The form page this field is located on. Default is 1. */
  pageNumber?: Maybe<Scalars['Int']>;
  /** The form field-specifc policies for exporting and erasing personal data. */
  personalData?: Maybe<FormFieldDataPolicy>;
  /** Determines the allowed format for phones. If the phone value does not conform with the specified format, the field will fail validation. */
  phoneFormat?: Maybe<PhoneFieldFormatEnum>;
  /** Placeholder text to give the user a hint on how to fill out the field. This is not submitted with the form. */
  placeholder?: Maybe<Scalars['String']>;
  /** The post meta key to which the value should be assigned. */
  postMetaFieldName?: Maybe<Scalars['String']>;
  /** Determines if the field allows duplicate submissions. */
  shouldAllowDuplicates?: Maybe<Scalars['Boolean']>;
  /** Determines the size of the field when displayed on the page. */
  size?: Maybe<FormFieldSizeEnum>;
  /** The type of field to be displayed. */
  type?: Maybe<FormFieldTypeEnum>;
  /** The string-formatted entry value for the `formField`. For complex fields this might be a JSON-encoded or serialized array. */
  value?: Maybe<Scalars['String']>;
  /** Field visibility. */
  visibility?: Maybe<FormFieldVisibilityEnum>;
};

/** A Gravity Forms  post_custom_field field. */
export type PostCustomRadioField = FormField & PostCustomField & {
  __typename?: 'PostCustomRadioField';
  /** When specified, the value of this property will be used on the admin pages instead of the label. It is useful for fields with long labels. */
  adminLabel?: Maybe<Scalars['String']>;
  /** Determines if the field’s value can be pre-populated dynamically. */
  canPrepopulate?: Maybe<Scalars['Boolean']>;
  /** The available choices for the post_custom_field field. */
  choices?: Maybe<Array<Maybe<PostCustomRadioFieldChoice>>>;
  /** Controls the visibility of the field based on values selected by the user. */
  conditionalLogic?: Maybe<ConditionalLogic>;
  /** String containing the custom CSS classes to be added to the &lt;li&gt; tag that contains the field. Useful for applying custom formatting to specific fields. */
  cssClass?: Maybe<Scalars['String']>;
  /** Field description. */
  description?: Maybe<Scalars['String']>;
  /** The placement of the field description. */
  descriptionPlacement?: Maybe<FormFieldDescriptionPlacementEnum>;
  /** Indicates the field is only displayed and its contents are not submitted with the form/saved with the entry. This is set to true. */
  displayOnly?: Maybe<Scalars['Boolean']>;
  /** Contains the message that is displayed for fields that fail validation. */
  errorMessage?: Maybe<Scalars['String']>;
  /** Determines if the field (checkbox, select or radio) have choice values enabled, which allows the field to have choice values different from the labels that are displayed to the user. */
  hasChoiceValue?: Maybe<Scalars['Boolean']>;
  /** Indicates whether the &#039;Enable &quot;other&quot; choice&#039; option is checked in the editor. */
  hasOtherChoice?: Maybe<Scalars['Boolean']>;
  /** Field ID. */
  id: Scalars['Int'];
  /** Assigns a name to this field so that it can be populated dynamically via this input name. Only applicable when canPrepopulate is `true`. */
  inputName?: Maybe<Scalars['String']>;
  /** The base form field type used to display the input. A good example is the Post Custom Field that can be displayed as various different types of fields. */
  inputType?: Maybe<FormFieldTypeEnum>;
  /** Determines if the field requires the user to enter a value. Fields marked as required will prevent the form from being submitted if the user has not entered a value in it. */
  isRequired?: Maybe<Scalars['Boolean']>;
  /** Field label that will be displayed on the form and on the admin pages. */
  label?: Maybe<Scalars['String']>;
  /** The field label position. */
  labelPlacement?: Maybe<FormFieldLabelPlacementEnum>;
  /** The number of CSS grid columns the field should span. */
  layoutGridColumnSpan?: Maybe<Scalars['Int']>;
  /** The number of CSS grid columns the spacer field following this one should span. */
  layoutSpacerGridColumnSpan?: Maybe<Scalars['Int']>;
  /** The form page this field is located on. Default is 1. */
  pageNumber?: Maybe<Scalars['Int']>;
  /** The form field-specifc policies for exporting and erasing personal data. */
  personalData?: Maybe<FormFieldDataPolicy>;
  /** The post meta key to which the value should be assigned. */
  postMetaFieldName?: Maybe<Scalars['String']>;
  /** Determines if the field allows duplicate submissions. */
  shouldAllowDuplicates?: Maybe<Scalars['Boolean']>;
  /** Determines the size of the field when displayed on the page. */
  size?: Maybe<FormFieldSizeEnum>;
  /** The type of field to be displayed. */
  type?: Maybe<FormFieldTypeEnum>;
  /** The string-formatted entry value for the `formField`. For complex fields this might be a JSON-encoded or serialized array. */
  value?: Maybe<Scalars['String']>;
  /** Field visibility. */
  visibility?: Maybe<FormFieldVisibilityEnum>;
};

/** Post_custom_field choice values. */
export type PostCustomRadioFieldChoice = {
  __typename?: 'PostCustomRadioFieldChoice';
  /** Indicates the radio button item is the “Other” choice. */
  isOtherChoice?: Maybe<Scalars['Boolean']>;
  /** Determines if this choice should be selected by default when displayed. The value true will select the choice, whereas false will display it unselected. */
  isSelected?: Maybe<Scalars['Boolean']>;
  /** The text to be displayed to the user when displaying this choice. */
  text?: Maybe<Scalars['String']>;
  /** The value to be stored in the database when this choice is selected. Note: This property is only supported by the Drop Down and Post Category fields. Checkboxes and Radio fields will store the text property in the database regardless of the value property. */
  value?: Maybe<Scalars['String']>;
};

/** A Gravity Forms  post_custom_field field. */
export type PostCustomSelectField = FormField & PostCustomField & {
  __typename?: 'PostCustomSelectField';
  /** When specified, the value of this property will be used on the admin pages instead of the label. It is useful for fields with long labels. */
  adminLabel?: Maybe<Scalars['String']>;
  /** The autocomplete attribute for the field. */
  autocompleteAttribute?: Maybe<Scalars['String']>;
  /** Determines if the field’s value can be pre-populated dynamically. */
  canPrepopulate?: Maybe<Scalars['Boolean']>;
  /** The available choices for the post_custom_field field. */
  choices?: Maybe<Array<Maybe<PostCustomSelectFieldChoice>>>;
  /** Controls the visibility of the field based on values selected by the user. */
  conditionalLogic?: Maybe<ConditionalLogic>;
  /** String containing the custom CSS classes to be added to the &lt;li&gt; tag that contains the field. Useful for applying custom formatting to specific fields. */
  cssClass?: Maybe<Scalars['String']>;
  /** Contains the default value for the field. When specified, the field&#039;s value will be populated with the contents of this property when the form is displayed. */
  defaultValue?: Maybe<Scalars['String']>;
  /** Field description. */
  description?: Maybe<Scalars['String']>;
  /** The placement of the field description. */
  descriptionPlacement?: Maybe<FormFieldDescriptionPlacementEnum>;
  /** Indicates the field is only displayed and its contents are not submitted with the form/saved with the entry. This is set to true. */
  displayOnly?: Maybe<Scalars['Boolean']>;
  /** Contains the message that is displayed for fields that fail validation. */
  errorMessage?: Maybe<Scalars['String']>;
  /** Whether autocomplete should be enabled for this field. */
  hasAutocomplete?: Maybe<Scalars['Boolean']>;
  /** Determines if the field (checkbox, select or radio) have choice values enabled, which allows the field to have choice values different from the labels that are displayed to the user. */
  hasChoiceValue?: Maybe<Scalars['Boolean']>;
  /** When set to true, the &quot;Chosen&quot; jQuery script will be applied to this field, enabling search capabilities to Drop Down fields and a more user-friendly interface for Multi Select fields. */
  hasEnhancedUI?: Maybe<Scalars['Boolean']>;
  /** Field ID. */
  id: Scalars['Int'];
  /** Assigns a name to this field so that it can be populated dynamically via this input name. Only applicable when canPrepopulate is `true`. */
  inputName?: Maybe<Scalars['String']>;
  /** The base form field type used to display the input. A good example is the Post Custom Field that can be displayed as various different types of fields. */
  inputType?: Maybe<FormFieldTypeEnum>;
  /** Determines if the field requires the user to enter a value. Fields marked as required will prevent the form from being submitted if the user has not entered a value in it. */
  isRequired?: Maybe<Scalars['Boolean']>;
  /** Field label that will be displayed on the form and on the admin pages. */
  label?: Maybe<Scalars['String']>;
  /** The field label position. */
  labelPlacement?: Maybe<FormFieldLabelPlacementEnum>;
  /** The number of CSS grid columns the field should span. */
  layoutGridColumnSpan?: Maybe<Scalars['Int']>;
  /** The number of CSS grid columns the spacer field following this one should span. */
  layoutSpacerGridColumnSpan?: Maybe<Scalars['Int']>;
  /** The form page this field is located on. Default is 1. */
  pageNumber?: Maybe<Scalars['Int']>;
  /** The form field-specifc policies for exporting and erasing personal data. */
  personalData?: Maybe<FormFieldDataPolicy>;
  /** Placeholder text to give the user a hint on how to fill out the field. This is not submitted with the form. */
  placeholder?: Maybe<Scalars['String']>;
  /** The post meta key to which the value should be assigned. */
  postMetaFieldName?: Maybe<Scalars['String']>;
  /** Determines if the field allows duplicate submissions. */
  shouldAllowDuplicates?: Maybe<Scalars['Boolean']>;
  /** Determines the size of the field when displayed on the page. */
  size?: Maybe<FormFieldSizeEnum>;
  /** The type of field to be displayed. */
  type?: Maybe<FormFieldTypeEnum>;
  /** The string-formatted entry value for the `formField`. For complex fields this might be a JSON-encoded or serialized array. */
  value?: Maybe<Scalars['String']>;
  /** Field visibility. */
  visibility?: Maybe<FormFieldVisibilityEnum>;
};

/** Post_custom_field choice values. */
export type PostCustomSelectFieldChoice = {
  __typename?: 'PostCustomSelectFieldChoice';
  /** Determines if this choice should be selected by default when displayed. The value true will select the choice, whereas false will display it unselected. */
  isSelected?: Maybe<Scalars['Boolean']>;
  /** The text to be displayed to the user when displaying this choice. */
  text?: Maybe<Scalars['String']>;
  /** The value to be stored in the database when this choice is selected. Note: This property is only supported by the Drop Down and Post Category fields. Checkboxes and Radio fields will store the text property in the database regardless of the value property. */
  value?: Maybe<Scalars['String']>;
};

/** A Gravity Forms  post_custom_field field. */
export type PostCustomTextAreaField = FormField & PostCustomField & {
  __typename?: 'PostCustomTextAreaField';
  /** When specified, the value of this property will be used on the admin pages instead of the label. It is useful for fields with long labels. */
  adminLabel?: Maybe<Scalars['String']>;
  /** Determines if the field’s value can be pre-populated dynamically. */
  canPrepopulate?: Maybe<Scalars['Boolean']>;
  /** Controls the visibility of the field based on values selected by the user. */
  conditionalLogic?: Maybe<ConditionalLogic>;
  /** String containing the custom CSS classes to be added to the &lt;li&gt; tag that contains the field. Useful for applying custom formatting to specific fields. */
  cssClass?: Maybe<Scalars['String']>;
  /** Contains the default value for the field. When specified, the field&#039;s value will be populated with the contents of this property when the form is displayed. */
  defaultValue?: Maybe<Scalars['String']>;
  /** Field description. */
  description?: Maybe<Scalars['String']>;
  /** The placement of the field description. */
  descriptionPlacement?: Maybe<FormFieldDescriptionPlacementEnum>;
  /** Indicates the field is only displayed and its contents are not submitted with the form/saved with the entry. This is set to true. */
  displayOnly?: Maybe<Scalars['Boolean']>;
  /** Contains the message that is displayed for fields that fail validation. */
  errorMessage?: Maybe<Scalars['String']>;
  /** Indicates whether the field uses the rich text editor interface. */
  hasRichTextEditor?: Maybe<Scalars['Boolean']>;
  /** Field ID. */
  id: Scalars['Int'];
  /** Assigns a name to this field so that it can be populated dynamically via this input name. Only applicable when canPrepopulate is `true`. */
  inputName?: Maybe<Scalars['String']>;
  /** The base form field type used to display the input. A good example is the Post Custom Field that can be displayed as various different types of fields. */
  inputType?: Maybe<FormFieldTypeEnum>;
  /** Determines if the field requires the user to enter a value. Fields marked as required will prevent the form from being submitted if the user has not entered a value in it. */
  isRequired?: Maybe<Scalars['Boolean']>;
  /** Field label that will be displayed on the form and on the admin pages. */
  label?: Maybe<Scalars['String']>;
  /** The field label position. */
  labelPlacement?: Maybe<FormFieldLabelPlacementEnum>;
  /** The number of CSS grid columns the field should span. */
  layoutGridColumnSpan?: Maybe<Scalars['Int']>;
  /** The number of CSS grid columns the spacer field following this one should span. */
  layoutSpacerGridColumnSpan?: Maybe<Scalars['Int']>;
  /** Specifies the maximum number of characters allowed in a text or textarea (paragraph) field. */
  maxLength?: Maybe<Scalars['Int']>;
  /** The form page this field is located on. Default is 1. */
  pageNumber?: Maybe<Scalars['Int']>;
  /** The form field-specifc policies for exporting and erasing personal data. */
  personalData?: Maybe<FormFieldDataPolicy>;
  /** Placeholder text to give the user a hint on how to fill out the field. This is not submitted with the form. */
  placeholder?: Maybe<Scalars['String']>;
  /** The post meta key to which the value should be assigned. */
  postMetaFieldName?: Maybe<Scalars['String']>;
  /** Determines if the field allows duplicate submissions. */
  shouldAllowDuplicates?: Maybe<Scalars['Boolean']>;
  /** Determines the size of the field when displayed on the page. */
  size?: Maybe<FormFieldSizeEnum>;
  /** The type of field to be displayed. */
  type?: Maybe<FormFieldTypeEnum>;
  /** The string-formatted entry value for the `formField`. For complex fields this might be a JSON-encoded or serialized array. */
  value?: Maybe<Scalars['String']>;
  /** Field visibility. */
  visibility?: Maybe<FormFieldVisibilityEnum>;
};

/** A Gravity Forms  post_custom_field field. */
export type PostCustomTextField = FormField & PostCustomField & {
  __typename?: 'PostCustomTextField';
  /** When specified, the value of this property will be used on the admin pages instead of the label. It is useful for fields with long labels. */
  adminLabel?: Maybe<Scalars['String']>;
  /** The autocomplete attribute for the field. */
  autocompleteAttribute?: Maybe<Scalars['String']>;
  /** Determines if the field’s value can be pre-populated dynamically. */
  canPrepopulate?: Maybe<Scalars['Boolean']>;
  /** Controls the visibility of the field based on values selected by the user. */
  conditionalLogic?: Maybe<ConditionalLogic>;
  /** String containing the custom CSS classes to be added to the &lt;li&gt; tag that contains the field. Useful for applying custom formatting to specific fields. */
  cssClass?: Maybe<Scalars['String']>;
  /** Contains the default value for the field. When specified, the field&#039;s value will be populated with the contents of this property when the form is displayed. */
  defaultValue?: Maybe<Scalars['String']>;
  /** Field description. */
  description?: Maybe<Scalars['String']>;
  /** The placement of the field description. */
  descriptionPlacement?: Maybe<FormFieldDescriptionPlacementEnum>;
  /** Indicates the field is only displayed and its contents are not submitted with the form/saved with the entry. This is set to true. */
  displayOnly?: Maybe<Scalars['Boolean']>;
  /** Contains the message that is displayed for fields that fail validation. */
  errorMessage?: Maybe<Scalars['String']>;
  /** Whether autocomplete should be enabled for this field. */
  hasAutocomplete?: Maybe<Scalars['Boolean']>;
  /** Whether the field has an input mask. */
  hasInputMask?: Maybe<Scalars['Boolean']>;
  /** Field ID. */
  id: Scalars['Int'];
  /** The pattern used for the input mask. */
  inputMaskValue?: Maybe<Scalars['String']>;
  /** Assigns a name to this field so that it can be populated dynamically via this input name. Only applicable when canPrepopulate is `true`. */
  inputName?: Maybe<Scalars['String']>;
  /** The base form field type used to display the input. A good example is the Post Custom Field that can be displayed as various different types of fields. */
  inputType?: Maybe<FormFieldTypeEnum>;
  /** Determines if a text field input tag should be created with a &quot;password&quot; type. */
  isPasswordInput?: Maybe<Scalars['Boolean']>;
  /** Determines if the field requires the user to enter a value. Fields marked as required will prevent the form from being submitted if the user has not entered a value in it. */
  isRequired?: Maybe<Scalars['Boolean']>;
  /** Field label that will be displayed on the form and on the admin pages. */
  label?: Maybe<Scalars['String']>;
  /** The field label position. */
  labelPlacement?: Maybe<FormFieldLabelPlacementEnum>;
  /** The number of CSS grid columns the field should span. */
  layoutGridColumnSpan?: Maybe<Scalars['Int']>;
  /** The number of CSS grid columns the spacer field following this one should span. */
  layoutSpacerGridColumnSpan?: Maybe<Scalars['Int']>;
  /** Specifies the maximum number of characters allowed in a text or textarea (paragraph) field. */
  maxLength?: Maybe<Scalars['Int']>;
  /** The form page this field is located on. Default is 1. */
  pageNumber?: Maybe<Scalars['Int']>;
  /** The form field-specifc policies for exporting and erasing personal data. */
  personalData?: Maybe<FormFieldDataPolicy>;
  /** Placeholder text to give the user a hint on how to fill out the field. This is not submitted with the form. */
  placeholder?: Maybe<Scalars['String']>;
  /** The post meta key to which the value should be assigned. */
  postMetaFieldName?: Maybe<Scalars['String']>;
  /** Determines if the field allows duplicate submissions. */
  shouldAllowDuplicates?: Maybe<Scalars['Boolean']>;
  /** Determines the size of the field when displayed on the page. */
  size?: Maybe<FormFieldSizeEnum>;
  /** The type of field to be displayed. */
  type?: Maybe<FormFieldTypeEnum>;
  /** The string-formatted entry value for the `formField`. For complex fields this might be a JSON-encoded or serialized array. */
  value?: Maybe<Scalars['String']>;
  /** Field visibility. */
  visibility?: Maybe<FormFieldVisibilityEnum>;
};

/** A Gravity Forms  post_custom_field field. */
export type PostCustomTimeField = FormField & PostCustomField & {
  __typename?: 'PostCustomTimeField';
  /** When specified, the value of this property will be used on the admin pages instead of the label. It is useful for fields with long labels. */
  adminLabel?: Maybe<Scalars['String']>;
  /** Determines if the field’s value can be pre-populated dynamically. */
  canPrepopulate?: Maybe<Scalars['Boolean']>;
  /** Controls the visibility of the field based on values selected by the user. */
  conditionalLogic?: Maybe<ConditionalLogic>;
  /** String containing the custom CSS classes to be added to the &lt;li&gt; tag that contains the field. Useful for applying custom formatting to specific fields. */
  cssClass?: Maybe<Scalars['String']>;
  /** Field description. */
  description?: Maybe<Scalars['String']>;
  /** The placement of the field description. */
  descriptionPlacement?: Maybe<FormFieldDescriptionPlacementEnum>;
  /** Indicates the field is only displayed and its contents are not submitted with the form/saved with the entry. This is set to true. */
  displayOnly?: Maybe<Scalars['Boolean']>;
  /** Contains the message that is displayed for fields that fail validation. */
  errorMessage?: Maybe<Scalars['String']>;
  /** Field ID. */
  id: Scalars['Int'];
  /** Assigns a name to this field so that it can be populated dynamically via this input name. Only applicable when canPrepopulate is `true`. */
  inputName?: Maybe<Scalars['String']>;
  /** The base form field type used to display the input. A good example is the Post Custom Field that can be displayed as various different types of fields. */
  inputType?: Maybe<FormFieldTypeEnum>;
  /** An array of the available properties for each input of the post_custom_field field. */
  inputs?: Maybe<Array<Maybe<PostCustomInputProperty>>>;
  /** Determines if the field requires the user to enter a value. Fields marked as required will prevent the form from being submitted if the user has not entered a value in it. */
  isRequired?: Maybe<Scalars['Boolean']>;
  /** Field label that will be displayed on the form and on the admin pages. */
  label?: Maybe<Scalars['String']>;
  /** The field label position. */
  labelPlacement?: Maybe<FormFieldLabelPlacementEnum>;
  /** The number of CSS grid columns the field should span. */
  layoutGridColumnSpan?: Maybe<Scalars['Int']>;
  /** The number of CSS grid columns the spacer field following this one should span. */
  layoutSpacerGridColumnSpan?: Maybe<Scalars['Int']>;
  /** The form page this field is located on. Default is 1. */
  pageNumber?: Maybe<Scalars['Int']>;
  /** The form field-specifc policies for exporting and erasing personal data. */
  personalData?: Maybe<FormFieldDataPolicy>;
  /** The post meta key to which the value should be assigned. */
  postMetaFieldName?: Maybe<Scalars['String']>;
  /** Determines if the field allows duplicate submissions. */
  shouldAllowDuplicates?: Maybe<Scalars['Boolean']>;
  /** Determines the size of the field when displayed on the page. */
  size?: Maybe<FormFieldSizeEnum>;
  /** The placement of the labels for the subfields within the group. This setting controls all of the subfields, they cannot be set individually. They may be aligned above or below the inputs. If this property is not set, the “Sub-Label Placement” setting on the Form Settings-&gt;Form Layout page is used. If no setting is specified, the default is above inputs. */
  subLabelPlacement?: Maybe<FormFieldSubLabelPlacementEnum>;
  /** Determines how the time is displayed. */
  timeFormat?: Maybe<TimeFieldFormatEnum>;
  /** Time field value. */
  timeValues?: Maybe<TimeFieldValue>;
  /** The type of field to be displayed. */
  type?: Maybe<FormFieldTypeEnum>;
  /** The string-formatted entry value for the `formField`. For complex fields this might be a JSON-encoded or serialized array. */
  value?: Maybe<Scalars['String']>;
  /** Field visibility. */
  visibility?: Maybe<FormFieldVisibilityEnum>;
};

/** A Gravity Forms  post_custom_field field. */
export type PostCustomWebsiteField = FormField & PostCustomField & {
  __typename?: 'PostCustomWebsiteField';
  /** When specified, the value of this property will be used on the admin pages instead of the label. It is useful for fields with long labels. */
  adminLabel?: Maybe<Scalars['String']>;
  /** Determines if the field’s value can be pre-populated dynamically. */
  canPrepopulate?: Maybe<Scalars['Boolean']>;
  /** Controls the visibility of the field based on values selected by the user. */
  conditionalLogic?: Maybe<ConditionalLogic>;
  /** String containing the custom CSS classes to be added to the &lt;li&gt; tag that contains the field. Useful for applying custom formatting to specific fields. */
  cssClass?: Maybe<Scalars['String']>;
  /** Contains the default value for the field. When specified, the field&#039;s value will be populated with the contents of this property when the form is displayed. */
  defaultValue?: Maybe<Scalars['String']>;
  /** Field description. */
  description?: Maybe<Scalars['String']>;
  /** The placement of the field description. */
  descriptionPlacement?: Maybe<FormFieldDescriptionPlacementEnum>;
  /** Indicates the field is only displayed and its contents are not submitted with the form/saved with the entry. This is set to true. */
  displayOnly?: Maybe<Scalars['Boolean']>;
  /** Contains the message that is displayed for fields that fail validation. */
  errorMessage?: Maybe<Scalars['String']>;
  /** Field ID. */
  id: Scalars['Int'];
  /** Assigns a name to this field so that it can be populated dynamically via this input name. Only applicable when canPrepopulate is `true`. */
  inputName?: Maybe<Scalars['String']>;
  /** The base form field type used to display the input. A good example is the Post Custom Field that can be displayed as various different types of fields. */
  inputType?: Maybe<FormFieldTypeEnum>;
  /** Determines if the field requires the user to enter a value. Fields marked as required will prevent the form from being submitted if the user has not entered a value in it. */
  isRequired?: Maybe<Scalars['Boolean']>;
  /** Field label that will be displayed on the form and on the admin pages. */
  label?: Maybe<Scalars['String']>;
  /** The field label position. */
  labelPlacement?: Maybe<FormFieldLabelPlacementEnum>;
  /** The number of CSS grid columns the field should span. */
  layoutGridColumnSpan?: Maybe<Scalars['Int']>;
  /** The number of CSS grid columns the spacer field following this one should span. */
  layoutSpacerGridColumnSpan?: Maybe<Scalars['Int']>;
  /** The form page this field is located on. Default is 1. */
  pageNumber?: Maybe<Scalars['Int']>;
  /** The form field-specifc policies for exporting and erasing personal data. */
  personalData?: Maybe<FormFieldDataPolicy>;
  /** Placeholder text to give the user a hint on how to fill out the field. This is not submitted with the form. */
  placeholder?: Maybe<Scalars['String']>;
  /** The post meta key to which the value should be assigned. */
  postMetaFieldName?: Maybe<Scalars['String']>;
  /** Determines if the field allows duplicate submissions. */
  shouldAllowDuplicates?: Maybe<Scalars['Boolean']>;
  /** Determines the size of the field when displayed on the page. */
  size?: Maybe<FormFieldSizeEnum>;
  /** The type of field to be displayed. */
  type?: Maybe<FormFieldTypeEnum>;
  /** The string-formatted entry value for the `formField`. For complex fields this might be a JSON-encoded or serialized array. */
  value?: Maybe<Scalars['String']>;
  /** Field visibility. */
  visibility?: Maybe<FormFieldVisibilityEnum>;
};

/** A Gravity Forms   field. */
export type PostExcerptField = FormField & {
  __typename?: 'PostExcerptField';
  /** When specified, the value of this property will be used on the admin pages instead of the label. It is useful for fields with long labels. */
  adminLabel?: Maybe<Scalars['String']>;
  /** Determines if the field’s value can be pre-populated dynamically. */
  canPrepopulate?: Maybe<Scalars['Boolean']>;
  /** Controls the visibility of the field based on values selected by the user. */
  conditionalLogic?: Maybe<ConditionalLogic>;
  /** String containing the custom CSS classes to be added to the &lt;li&gt; tag that contains the field. Useful for applying custom formatting to specific fields. */
  cssClass?: Maybe<Scalars['String']>;
  /** Contains the default value for the field. When specified, the field&#039;s value will be populated with the contents of this property when the form is displayed. */
  defaultValue?: Maybe<Scalars['String']>;
  /** Field description. */
  description?: Maybe<Scalars['String']>;
  /** The placement of the field description. */
  descriptionPlacement?: Maybe<FormFieldDescriptionPlacementEnum>;
  /** Indicates the field is only displayed and its contents are not submitted with the form/saved with the entry. This is set to true. */
  displayOnly?: Maybe<Scalars['Boolean']>;
  /** Contains the message that is displayed for fields that fail validation. */
  errorMessage?: Maybe<Scalars['String']>;
  /** Field ID. */
  id: Scalars['Int'];
  /** Assigns a name to this field so that it can be populated dynamically via this input name. Only applicable when canPrepopulate is `true`. */
  inputName?: Maybe<Scalars['String']>;
  /** The base form field type used to display the input. A good example is the Post Custom Field that can be displayed as various different types of fields. */
  inputType?: Maybe<FormFieldTypeEnum>;
  /** Determines if the field requires the user to enter a value. Fields marked as required will prevent the form from being submitted if the user has not entered a value in it. */
  isRequired?: Maybe<Scalars['Boolean']>;
  /** Field label that will be displayed on the form and on the admin pages. */
  label?: Maybe<Scalars['String']>;
  /** The field label position. */
  labelPlacement?: Maybe<FormFieldLabelPlacementEnum>;
  /** The number of CSS grid columns the field should span. */
  layoutGridColumnSpan?: Maybe<Scalars['Int']>;
  /** The number of CSS grid columns the spacer field following this one should span. */
  layoutSpacerGridColumnSpan?: Maybe<Scalars['Int']>;
  /** Specifies the maximum number of characters allowed in a text or textarea (paragraph) field. */
  maxLength?: Maybe<Scalars['Int']>;
  /** The form page this field is located on. Default is 1. */
  pageNumber?: Maybe<Scalars['Int']>;
  /** The form field-specifc policies for exporting and erasing personal data. */
  personalData?: Maybe<FormFieldDataPolicy>;
  /** Placeholder text to give the user a hint on how to fill out the field. This is not submitted with the form. */
  placeholder?: Maybe<Scalars['String']>;
  /** Determines the size of the field when displayed on the page. */
  size?: Maybe<FormFieldSizeEnum>;
  /** The type of field to be displayed. */
  type?: Maybe<FormFieldTypeEnum>;
  /** The string-formatted entry value for the `formField`. For complex fields this might be a JSON-encoded or serialized array. */
  value?: Maybe<Scalars['String']>;
  /** Field visibility. */
  visibility?: Maybe<FormFieldVisibilityEnum>;
};

/** The postFormat type */
export type PostFormat = DatabaseIdentifier & Node & TermNode & UniformResourceIdentifiable & {
  __typename?: 'PostFormat';
  /** @deprecated Deprecated in favor of using Next.js pages */
  conditionalTags?: Maybe<ConditionalTags>;
  /** Connection between the PostFormat type and the ContentNode type */
  contentNodes?: Maybe<PostFormatToContentNodeConnection>;
  /** The number of objects connected to the object */
  count?: Maybe<Scalars['Int']>;
  /** The unique identifier stored in the database */
  databaseId: Scalars['Int'];
  /** The description of the object */
  description?: Maybe<Scalars['String']>;
  /** Connection between the TermNode type and the EnqueuedScript type */
  enqueuedScripts?: Maybe<TermNodeToEnqueuedScriptConnection>;
  /** Connection between the TermNode type and the EnqueuedStylesheet type */
  enqueuedStylesheets?: Maybe<TermNodeToEnqueuedStylesheetConnection>;
  /** The unique resource identifier path */
  id: Scalars['ID'];
  /** Whether the node is a Content Node */
  isContentNode: Scalars['Boolean'];
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** Whether the node is a Term */
  isTermNode: Scalars['Boolean'];
  /** The link to the term */
  link?: Maybe<Scalars['String']>;
  /** The human friendly name of the object. */
  name?: Maybe<Scalars['String']>;
  /**
   * The id field matches the WP_Post-&gt;ID field.
   * @deprecated Deprecated in favor of databaseId
   */
  postFormatId?: Maybe<Scalars['Int']>;
  /** Connection between the PostFormat type and the post type */
  posts?: Maybe<PostFormatToPostConnection>;
  /** The Yoast SEO data of the Formats taxonomy. */
  seo?: Maybe<TaxonomySeo>;
  /** An alphanumeric identifier for the object unique to its type. */
  slug?: Maybe<Scalars['String']>;
  /** Connection between the PostFormat type and the Taxonomy type */
  taxonomy?: Maybe<PostFormatToTaxonomyConnectionEdge>;
  /** The name of the taxonomy that the object is associated with */
  taxonomyName?: Maybe<Scalars['String']>;
  templates?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The ID of the term group that this term object belongs to */
  termGroupId?: Maybe<Scalars['Int']>;
  /** The taxonomy ID that the object is associated with */
  termTaxonomyId?: Maybe<Scalars['Int']>;
  /** The unique resource identifier path */
  uri?: Maybe<Scalars['String']>;
};


/** The postFormat type */
export type PostFormatContentNodesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PostFormatToContentNodeConnectionWhereArgs>;
};


/** The postFormat type */
export type PostFormatEnqueuedScriptsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** The postFormat type */
export type PostFormatEnqueuedStylesheetsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** The postFormat type */
export type PostFormatPostsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PostFormatToPostConnectionWhereArgs>;
};

/** Connection to postFormat Nodes */
export type PostFormatConnection = {
  /** A list of edges (relational context) between RootQuery and connected postFormat Nodes */
  edges: Array<PostFormatConnectionEdge>;
  /** A list of connected postFormat Nodes */
  nodes: Array<PostFormat>;
  /** Information about pagination in a connection. */
  pageInfo: PostFormatConnectionPageInfo;
};

/** Edge between a Node and a connected postFormat */
export type PostFormatConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The connected postFormat Node */
  node: PostFormat;
};

/** Page Info on the connected PostFormatConnectionEdge */
export type PostFormatConnectionPageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum PostFormatIdType {
  /** The Database ID for the node */
  DatabaseId = 'DATABASE_ID',
  /** The hashed Global ID */
  Id = 'ID',
  /** The name of the node */
  Name = 'NAME',
  /** Url friendly name of the node */
  Slug = 'SLUG',
  /** The URI for the node */
  Uri = 'URI'
}

/** Connection between the PostFormat type and the ContentNode type */
export type PostFormatToContentNodeConnection = Connection & ContentNodeConnection & {
  __typename?: 'PostFormatToContentNodeConnection';
  /** Edges for the PostFormatToContentNodeConnection connection */
  edges: Array<PostFormatToContentNodeConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<ContentNode>;
  /** Information about pagination in a connection. */
  pageInfo: PostFormatToContentNodeConnectionPageInfo;
};

/** An edge in a connection */
export type PostFormatToContentNodeConnectionEdge = ContentNodeConnectionEdge & Edge & {
  __typename?: 'PostFormatToContentNodeConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: ContentNode;
};

/** Page Info on the &quot;PostFormatToContentNodeConnection&quot; */
export type PostFormatToContentNodeConnectionPageInfo = ContentNodeConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'PostFormatToContentNodeConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the PostFormatToContentNodeConnection connection */
export type PostFormatToContentNodeConnectionWhereArgs = {
  /** The Types of content to filter */
  contentTypes?: InputMaybe<Array<InputMaybe<ContentTypesOfPostFormatEnum>>>;
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']>;
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>;
  /** Title of the object */
  title?: InputMaybe<Scalars['String']>;
};

/** Connection between the PostFormat type and the post type */
export type PostFormatToPostConnection = Connection & PostConnection & {
  __typename?: 'PostFormatToPostConnection';
  /** Edges for the PostFormatToPostConnection connection */
  edges: Array<PostFormatToPostConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<Post>;
  /** Information about pagination in a connection. */
  pageInfo: PostFormatToPostConnectionPageInfo;
};

/** An edge in a connection */
export type PostFormatToPostConnectionEdge = Edge & PostConnectionEdge & {
  __typename?: 'PostFormatToPostConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: Post;
};

/** Page Info on the &quot;PostFormatToPostConnection&quot; */
export type PostFormatToPostConnectionPageInfo = PageInfo & PostConnectionPageInfo & WpPageInfo & {
  __typename?: 'PostFormatToPostConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the PostFormatToPostConnection connection */
export type PostFormatToPostConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: InputMaybe<Scalars['Int']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: InputMaybe<Scalars['String']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Category ID */
  categoryId?: InputMaybe<Scalars['Int']>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Use Category Slug */
  categoryName?: InputMaybe<Scalars['String']>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']>;
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>;
  /** Tag Slug */
  tag?: InputMaybe<Scalars['String']>;
  /** Use Tag ID */
  tagId?: InputMaybe<Scalars['String']>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of tag slugs, used to display objects from one tag AND another */
  tagSlugAnd?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Array of tag slugs, used to include objects in ANY specified tags */
  tagSlugIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Title of the object */
  title?: InputMaybe<Scalars['String']>;
};

/** Connection between the PostFormat type and the Taxonomy type */
export type PostFormatToTaxonomyConnectionEdge = Edge & OneToOneConnection & TaxonomyConnectionEdge & {
  __typename?: 'PostFormatToTaxonomyConnectionEdge';
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The node of the connection, without the edges */
  node: Taxonomy;
};

/** List of possible post formats. */
export enum PostFormatTypeEnum {
  /** A standard post format. */
  Standard = 'STANDARD'
}

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum PostIdType {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID',
  /** Identify a resource by the slug. Available to non-hierarchcial Types where the slug is a unique identifier. */
  Slug = 'SLUG',
  /** Identify a resource by the URI. */
  Uri = 'URI'
}

/** A Gravity Forms   field. */
export type PostImageField = FormField & {
  __typename?: 'PostImageField';
  /** When specified, the value of this property will be used on the admin pages instead of the label. It is useful for fields with long labels. */
  adminLabel?: Maybe<Scalars['String']>;
  /** A comma-delimited list of the file extensions which may be uploaded. */
  allowedExtensions?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Controls the visibility of the field based on values selected by the user. */
  conditionalLogic?: Maybe<ConditionalLogic>;
  /** String containing the custom CSS classes to be added to the &lt;li&gt; tag that contains the field. Useful for applying custom formatting to specific fields. */
  cssClass?: Maybe<Scalars['String']>;
  /** Field description. */
  description?: Maybe<Scalars['String']>;
  /** The placement of the field description. */
  descriptionPlacement?: Maybe<FormFieldDescriptionPlacementEnum>;
  /** Indicates the field is only displayed and its contents are not submitted with the form/saved with the entry. This is set to true. */
  displayOnly?: Maybe<Scalars['Boolean']>;
  /** Contains the message that is displayed for fields that fail validation. */
  errorMessage?: Maybe<Scalars['String']>;
  /** Controls the visibility of the alt metadata for Post Image fields. */
  hasAlt?: Maybe<Scalars['Boolean']>;
  /** Controls the visibility of the caption metadata for Post Image fields. */
  hasCaption?: Maybe<Scalars['Boolean']>;
  /** Controls the visibility of the description metadata for Post Image fields. */
  hasDescription?: Maybe<Scalars['Boolean']>;
  /** Controls the visibility of the title metadata for Post Image fields. */
  hasTitle?: Maybe<Scalars['Boolean']>;
  /** Field ID. */
  id: Scalars['Int'];
  /** Image field value. */
  imageValues?: Maybe<ImageFieldValue>;
  /** The base form field type used to display the input. A good example is the Post Custom Field that can be displayed as various different types of fields. */
  inputType?: Maybe<FormFieldTypeEnum>;
  /** Whether the image field should be used to set the post&#039;s Featured Image */
  isFeaturedImage?: Maybe<Scalars['Boolean']>;
  /** Determines if the field requires the user to enter a value. Fields marked as required will prevent the form from being submitted if the user has not entered a value in it. */
  isRequired?: Maybe<Scalars['Boolean']>;
  /** Field label that will be displayed on the form and on the admin pages. */
  label?: Maybe<Scalars['String']>;
  /** The field label position. */
  labelPlacement?: Maybe<FormFieldLabelPlacementEnum>;
  /** The number of CSS grid columns the field should span. */
  layoutGridColumnSpan?: Maybe<Scalars['Int']>;
  /** The number of CSS grid columns the spacer field following this one should span. */
  layoutSpacerGridColumnSpan?: Maybe<Scalars['Int']>;
  /** The form page this field is located on. Default is 1. */
  pageNumber?: Maybe<Scalars['Int']>;
  /** The form field-specifc policies for exporting and erasing personal data. */
  personalData?: Maybe<FormFieldDataPolicy>;
  /** The placement of the labels for the subfields within the group. This setting controls all of the subfields, they cannot be set individually. They may be aligned above or below the inputs. If this property is not set, the “Sub-Label Placement” setting on the Form Settings-&gt;Form Layout page is used. If no setting is specified, the default is above inputs. */
  subLabelPlacement?: Maybe<FormFieldSubLabelPlacementEnum>;
  /** The type of field to be displayed. */
  type?: Maybe<FormFieldTypeEnum>;
  /** The string-formatted entry value for the `formField`. For complex fields this might be a JSON-encoded or serialized array. */
  value?: Maybe<Scalars['String']>;
  /** Field visibility. */
  visibility?: Maybe<FormFieldVisibilityEnum>;
};

/** The format of post field data. */
export enum PostObjectFieldFormatEnum {
  /** Provide the field value directly from database. Null on unauthenticated requests. */
  Raw = 'RAW',
  /** Provide the field value as rendered by WordPress. Default. */
  Rendered = 'RENDERED'
}

/** The column to use when filtering by date */
export enum PostObjectsConnectionDateColumnEnum {
  /** The date the comment was created in local time. */
  Date = 'DATE',
  /** The most recent modification date of the comment. */
  Modified = 'MODIFIED'
}

/** Field to order the connection by */
export enum PostObjectsConnectionOrderbyEnum {
  /** Order by author */
  Author = 'AUTHOR',
  /** Order by the number of comments it has acquired */
  CommentCount = 'COMMENT_COUNT',
  /** Order by publish date */
  Date = 'DATE',
  /** Preserve the ID order given in the IN array */
  In = 'IN',
  /** Order by the menu order value */
  MenuOrder = 'MENU_ORDER',
  /** Order by last modified date */
  Modified = 'MODIFIED',
  /** Preserve slug order given in the NAME_IN array */
  NameIn = 'NAME_IN',
  /** Order by parent ID */
  Parent = 'PARENT',
  /** Order by slug */
  Slug = 'SLUG',
  /** Order by title */
  Title = 'TITLE'
}

/** Options for ordering the connection */
export type PostObjectsConnectionOrderbyInput = {
  /** The field to order the connection by */
  field: PostObjectsConnectionOrderbyEnum;
  /** Possible directions in which to order a list of items */
  order: OrderEnum;
};

/** Set relationships between the post to postFormats */
export type PostPostFormatsInput = {
  /** If true, this will append the postFormat to existing related postFormats. If false, this will replace existing relationships. Default true. */
  append?: InputMaybe<Scalars['Boolean']>;
  /** The input list of items to set. */
  nodes?: InputMaybe<Array<InputMaybe<PostPostFormatsNodeInput>>>;
};

/** List of postFormats to connect the post to. If an ID is set, it will be used to create the connection. If not, it will look for a slug. If neither are valid existing terms, and the site is configured to allow terms to be created during post mutations, a term will be created using the Name if it exists in the input, then fallback to the slug if it exists. */
export type PostPostFormatsNodeInput = {
  /** The description of the postFormat. This field is used to set a description of the postFormat if a new one is created during the mutation. */
  description?: InputMaybe<Scalars['String']>;
  /** The ID of the postFormat. If present, this will be used to connect to the post. If no existing postFormat exists with this ID, no connection will be made. */
  id?: InputMaybe<Scalars['ID']>;
  /** The name of the postFormat. This field is used to create a new term, if term creation is enabled in nested mutations, and if one does not already exist with the provided slug or ID or if a slug or ID is not provided. If no name is included and a term is created, the creation will fallback to the slug field. */
  name?: InputMaybe<Scalars['String']>;
  /** The slug of the postFormat. If no ID is present, this field will be used to make a connection. If no existing term exists with this slug, this field will be used as a fallback to the Name field when creating a new term to connect to, if term creation is enabled as a nested mutation. */
  slug?: InputMaybe<Scalars['String']>;
};

/** The status of the object. */
export enum PostStatusEnum {
  /** Objects with the acf-disabled status */
  AcfDisabled = 'ACF_DISABLED',
  /** Objects with the auto-draft status */
  AutoDraft = 'AUTO_DRAFT',
  /** Objects with the draft status */
  Draft = 'DRAFT',
  /** Objects with the future status */
  Future = 'FUTURE',
  /** Objects with the inherit status */
  Inherit = 'INHERIT',
  /** Objects with the pending status */
  Pending = 'PENDING',
  /** Objects with the private status */
  Private = 'PRIVATE',
  /** Objects with the publish status */
  Publish = 'PUBLISH',
  /** Objects with the request-completed status */
  RequestCompleted = 'REQUEST_COMPLETED',
  /** Objects with the request-confirmed status */
  RequestConfirmed = 'REQUEST_CONFIRMED',
  /** Objects with the request-failed status */
  RequestFailed = 'REQUEST_FAILED',
  /** Objects with the request-pending status */
  RequestPending = 'REQUEST_PENDING',
  /** Objects with the trash status */
  Trash = 'TRASH'
}

/** A Gravity Forms  post_tags field. */
export type PostTagsCheckboxField = FormField & PostTagsField & {
  __typename?: 'PostTagsCheckboxField';
  /** When specified, the value of this property will be used on the admin pages instead of the label. It is useful for fields with long labels. */
  adminLabel?: Maybe<Scalars['String']>;
  /** Determines if the field’s value can be pre-populated dynamically. */
  canPrepopulate?: Maybe<Scalars['Boolean']>;
  /** Checkbox field value. */
  checkboxValues?: Maybe<Array<Maybe<CheckboxFieldValue>>>;
  /** The available choices for the post_tags field. */
  choices?: Maybe<Array<Maybe<PostTagsCheckboxFieldChoice>>>;
  /** Controls the visibility of the field based on values selected by the user. */
  conditionalLogic?: Maybe<ConditionalLogic>;
  /** String containing the custom CSS classes to be added to the &lt;li&gt; tag that contains the field. Useful for applying custom formatting to specific fields. */
  cssClass?: Maybe<Scalars['String']>;
  /** Contains the default value for the field. When specified, the field&#039;s value will be populated with the contents of this property when the form is displayed. */
  defaultValue?: Maybe<Scalars['String']>;
  /** Field description. */
  description?: Maybe<Scalars['String']>;
  /** The placement of the field description. */
  descriptionPlacement?: Maybe<FormFieldDescriptionPlacementEnum>;
  /** Indicates the field is only displayed and its contents are not submitted with the form/saved with the entry. This is set to true. */
  displayOnly?: Maybe<Scalars['Boolean']>;
  /** Contains the message that is displayed for fields that fail validation. */
  errorMessage?: Maybe<Scalars['String']>;
  /** Determines if the field (checkbox, select or radio) have choice values enabled, which allows the field to have choice values different from the labels that are displayed to the user. */
  hasChoiceValue?: Maybe<Scalars['Boolean']>;
  /** Whether the \&quot;select all\&quot; choice should be displayed. */
  hasSelectAll?: Maybe<Scalars['Boolean']>;
  /** Field ID. */
  id: Scalars['Int'];
  /** Assigns a name to this field so that it can be populated dynamically via this input name. Only applicable when canPrepopulate is `true`. */
  inputName?: Maybe<Scalars['String']>;
  /** The base form field type used to display the input. A good example is the Post Custom Field that can be displayed as various different types of fields. */
  inputType?: Maybe<FormFieldTypeEnum>;
  /** An array of the available properties for each input of the post_tags field. */
  inputs?: Maybe<Array<Maybe<PostTagsInputProperty>>>;
  /** Determines if the field requires the user to enter a value. Fields marked as required will prevent the form from being submitted if the user has not entered a value in it. */
  isRequired?: Maybe<Scalars['Boolean']>;
  /** Field label that will be displayed on the form and on the admin pages. */
  label?: Maybe<Scalars['String']>;
  /** The field label position. */
  labelPlacement?: Maybe<FormFieldLabelPlacementEnum>;
  /** The number of CSS grid columns the field should span. */
  layoutGridColumnSpan?: Maybe<Scalars['Int']>;
  /** The number of CSS grid columns the spacer field following this one should span. */
  layoutSpacerGridColumnSpan?: Maybe<Scalars['Int']>;
  /** The form page this field is located on. Default is 1. */
  pageNumber?: Maybe<Scalars['Int']>;
  /** The form field-specifc policies for exporting and erasing personal data. */
  personalData?: Maybe<FormFieldDataPolicy>;
  /** Placeholder text to give the user a hint on how to fill out the field. This is not submitted with the form. */
  placeholder?: Maybe<Scalars['String']>;
  /** Determines the size of the field when displayed on the page. */
  size?: Maybe<FormFieldSizeEnum>;
  /** The type of field to be displayed. */
  type?: Maybe<FormFieldTypeEnum>;
  /** The string-formatted entry value for the `formField`. For complex fields this might be a JSON-encoded or serialized array. */
  value?: Maybe<Scalars['String']>;
  /** Field visibility. */
  visibility?: Maybe<FormFieldVisibilityEnum>;
};

/** Post_tags choice values. */
export type PostTagsCheckboxFieldChoice = {
  __typename?: 'PostTagsCheckboxFieldChoice';
  /** Determines if this choice should be selected by default when displayed. The value true will select the choice, whereas false will display it unselected. */
  isSelected?: Maybe<Scalars['Boolean']>;
  /** The text to be displayed to the user when displaying this choice. */
  text?: Maybe<Scalars['String']>;
  /** The value to be stored in the database when this choice is selected. Note: This property is only supported by the Drop Down and Post Category fields. Checkboxes and Radio fields will store the text property in the database regardless of the value property. */
  value?: Maybe<Scalars['String']>;
};

/** A Gravity Forms   field. */
export type PostTagsField = {
  /** When specified, the value of this property will be used on the admin pages instead of the label. It is useful for fields with long labels. */
  adminLabel?: Maybe<Scalars['String']>;
  /** Determines if the field’s value can be pre-populated dynamically. */
  canPrepopulate?: Maybe<Scalars['Boolean']>;
  /** Controls the visibility of the field based on values selected by the user. */
  conditionalLogic?: Maybe<ConditionalLogic>;
  /** String containing the custom CSS classes to be added to the &lt;li&gt; tag that contains the field. Useful for applying custom formatting to specific fields. */
  cssClass?: Maybe<Scalars['String']>;
  /** Contains the default value for the field. When specified, the field&#039;s value will be populated with the contents of this property when the form is displayed. */
  defaultValue?: Maybe<Scalars['String']>;
  /** Field description. */
  description?: Maybe<Scalars['String']>;
  /** The placement of the field description. */
  descriptionPlacement?: Maybe<FormFieldDescriptionPlacementEnum>;
  /** Indicates the field is only displayed and its contents are not submitted with the form/saved with the entry. This is set to true. */
  displayOnly?: Maybe<Scalars['Boolean']>;
  /** Contains the message that is displayed for fields that fail validation. */
  errorMessage?: Maybe<Scalars['String']>;
  /** Field ID. */
  id: Scalars['Int'];
  /** Assigns a name to this field so that it can be populated dynamically via this input name. Only applicable when canPrepopulate is `true`. */
  inputName?: Maybe<Scalars['String']>;
  /** The base form field type used to display the input. A good example is the Post Custom Field that can be displayed as various different types of fields. */
  inputType?: Maybe<FormFieldTypeEnum>;
  /** Determines if the field requires the user to enter a value. Fields marked as required will prevent the form from being submitted if the user has not entered a value in it. */
  isRequired?: Maybe<Scalars['Boolean']>;
  /** Field label that will be displayed on the form and on the admin pages. */
  label?: Maybe<Scalars['String']>;
  /** The field label position. */
  labelPlacement?: Maybe<FormFieldLabelPlacementEnum>;
  /** The number of CSS grid columns the field should span. */
  layoutGridColumnSpan?: Maybe<Scalars['Int']>;
  /** The number of CSS grid columns the spacer field following this one should span. */
  layoutSpacerGridColumnSpan?: Maybe<Scalars['Int']>;
  /** The form page this field is located on. Default is 1. */
  pageNumber?: Maybe<Scalars['Int']>;
  /** The form field-specifc policies for exporting and erasing personal data. */
  personalData?: Maybe<FormFieldDataPolicy>;
  /** Placeholder text to give the user a hint on how to fill out the field. This is not submitted with the form. */
  placeholder?: Maybe<Scalars['String']>;
  /** Determines the size of the field when displayed on the page. */
  size?: Maybe<FormFieldSizeEnum>;
  /** The type of field to be displayed. */
  type?: Maybe<FormFieldTypeEnum>;
  /** The string-formatted entry value for the `formField`. For complex fields this might be a JSON-encoded or serialized array. */
  value?: Maybe<Scalars['String']>;
  /** Field visibility. */
  visibility?: Maybe<FormFieldVisibilityEnum>;
};

/** Set relationships between the post to tags */
export type PostTagsInput = {
  /** If true, this will append the tag to existing related tags. If false, this will replace existing relationships. Default true. */
  append?: InputMaybe<Scalars['Boolean']>;
  /** The input list of items to set. */
  nodes?: InputMaybe<Array<InputMaybe<PostTagsNodeInput>>>;
};

/** Post_tags input values. */
export type PostTagsInputProperty = {
  __typename?: 'PostTagsInputProperty';
  /** The input ID. Input IDs follow the following naming convention: FIELDID.INPUTID (i.e. 5.1), where FIELDID is the id of the containing field and INPUTID specifies the input field. */
  id?: Maybe<Scalars['Float']>;
  /** Field label that will be displayed on the form and on the admin pages. */
  label?: Maybe<Scalars['String']>;
  /** Assigns a name to this field so that it can be populated dynamically via this input name. Only applicable when canPrepopulate is `true`. */
  name?: Maybe<Scalars['String']>;
};

/** A Gravity Forms  post_tags field. */
export type PostTagsMultiSelectField = FormField & PostTagsField & {
  __typename?: 'PostTagsMultiSelectField';
  /** When specified, the value of this property will be used on the admin pages instead of the label. It is useful for fields with long labels. */
  adminLabel?: Maybe<Scalars['String']>;
  /** Determines if the field’s value can be pre-populated dynamically. */
  canPrepopulate?: Maybe<Scalars['Boolean']>;
  /** The available choices for the post_tags field. */
  choices?: Maybe<Array<Maybe<PostTagsMultiSelectFieldChoice>>>;
  /** Controls the visibility of the field based on values selected by the user. */
  conditionalLogic?: Maybe<ConditionalLogic>;
  /** String containing the custom CSS classes to be added to the &lt;li&gt; tag that contains the field. Useful for applying custom formatting to specific fields. */
  cssClass?: Maybe<Scalars['String']>;
  /** Contains the default value for the field. When specified, the field&#039;s value will be populated with the contents of this property when the form is displayed. */
  defaultValue?: Maybe<Scalars['String']>;
  /** Field description. */
  description?: Maybe<Scalars['String']>;
  /** The placement of the field description. */
  descriptionPlacement?: Maybe<FormFieldDescriptionPlacementEnum>;
  /** Indicates the field is only displayed and its contents are not submitted with the form/saved with the entry. This is set to true. */
  displayOnly?: Maybe<Scalars['Boolean']>;
  /** Contains the message that is displayed for fields that fail validation. */
  errorMessage?: Maybe<Scalars['String']>;
  /** Determines if the field (checkbox, select or radio) have choice values enabled, which allows the field to have choice values different from the labels that are displayed to the user. */
  hasChoiceValue?: Maybe<Scalars['Boolean']>;
  /** When set to true, the &quot;Chosen&quot; jQuery script will be applied to this field, enabling search capabilities to Drop Down fields and a more user-friendly interface for Multi Select fields. */
  hasEnhancedUI?: Maybe<Scalars['Boolean']>;
  /** Field ID. */
  id: Scalars['Int'];
  /** Assigns a name to this field so that it can be populated dynamically via this input name. Only applicable when canPrepopulate is `true`. */
  inputName?: Maybe<Scalars['String']>;
  /** The base form field type used to display the input. A good example is the Post Custom Field that can be displayed as various different types of fields. */
  inputType?: Maybe<FormFieldTypeEnum>;
  /** Determines if the field requires the user to enter a value. Fields marked as required will prevent the form from being submitted if the user has not entered a value in it. */
  isRequired?: Maybe<Scalars['Boolean']>;
  /** Field label that will be displayed on the form and on the admin pages. */
  label?: Maybe<Scalars['String']>;
  /** The field label position. */
  labelPlacement?: Maybe<FormFieldLabelPlacementEnum>;
  /** The number of CSS grid columns the field should span. */
  layoutGridColumnSpan?: Maybe<Scalars['Int']>;
  /** The number of CSS grid columns the spacer field following this one should span. */
  layoutSpacerGridColumnSpan?: Maybe<Scalars['Int']>;
  /** The form page this field is located on. Default is 1. */
  pageNumber?: Maybe<Scalars['Int']>;
  /** The form field-specifc policies for exporting and erasing personal data. */
  personalData?: Maybe<FormFieldDataPolicy>;
  /** Placeholder text to give the user a hint on how to fill out the field. This is not submitted with the form. */
  placeholder?: Maybe<Scalars['String']>;
  /** Determines the size of the field when displayed on the page. */
  size?: Maybe<FormFieldSizeEnum>;
  /** The type of field to be displayed. */
  type?: Maybe<FormFieldTypeEnum>;
  /** The string-formatted entry value for the `formField`. For complex fields this might be a JSON-encoded or serialized array. */
  value?: Maybe<Scalars['String']>;
  /** An array of field values. */
  values?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Field visibility. */
  visibility?: Maybe<FormFieldVisibilityEnum>;
};

/** Post_tags choice values. */
export type PostTagsMultiSelectFieldChoice = {
  __typename?: 'PostTagsMultiSelectFieldChoice';
  /** Determines if this choice should be selected by default when displayed. The value true will select the choice, whereas false will display it unselected. */
  isSelected?: Maybe<Scalars['Boolean']>;
  /** The text to be displayed to the user when displaying this choice. */
  text?: Maybe<Scalars['String']>;
  /** The value to be stored in the database when this choice is selected. Note: This property is only supported by the Drop Down and Post Category fields. Checkboxes and Radio fields will store the text property in the database regardless of the value property. */
  value?: Maybe<Scalars['String']>;
};

/** List of tags to connect the post to. If an ID is set, it will be used to create the connection. If not, it will look for a slug. If neither are valid existing terms, and the site is configured to allow terms to be created during post mutations, a term will be created using the Name if it exists in the input, then fallback to the slug if it exists. */
export type PostTagsNodeInput = {
  /** The description of the tag. This field is used to set a description of the tag if a new one is created during the mutation. */
  description?: InputMaybe<Scalars['String']>;
  /** The ID of the tag. If present, this will be used to connect to the post. If no existing tag exists with this ID, no connection will be made. */
  id?: InputMaybe<Scalars['ID']>;
  /** The name of the tag. This field is used to create a new term, if term creation is enabled in nested mutations, and if one does not already exist with the provided slug or ID or if a slug or ID is not provided. If no name is included and a term is created, the creation will fallback to the slug field. */
  name?: InputMaybe<Scalars['String']>;
  /** The slug of the tag. If no ID is present, this field will be used to make a connection. If no existing term exists with this slug, this field will be used as a fallback to the Name field when creating a new term to connect to, if term creation is enabled as a nested mutation. */
  slug?: InputMaybe<Scalars['String']>;
};

/** A Gravity Forms  post_tags field. */
export type PostTagsRadioField = FormField & PostTagsField & {
  __typename?: 'PostTagsRadioField';
  /** When specified, the value of this property will be used on the admin pages instead of the label. It is useful for fields with long labels. */
  adminLabel?: Maybe<Scalars['String']>;
  /** Determines if the field’s value can be pre-populated dynamically. */
  canPrepopulate?: Maybe<Scalars['Boolean']>;
  /** The available choices for the post_tags field. */
  choices?: Maybe<Array<Maybe<PostTagsRadioFieldChoice>>>;
  /** Controls the visibility of the field based on values selected by the user. */
  conditionalLogic?: Maybe<ConditionalLogic>;
  /** String containing the custom CSS classes to be added to the &lt;li&gt; tag that contains the field. Useful for applying custom formatting to specific fields. */
  cssClass?: Maybe<Scalars['String']>;
  /** Contains the default value for the field. When specified, the field&#039;s value will be populated with the contents of this property when the form is displayed. */
  defaultValue?: Maybe<Scalars['String']>;
  /** Field description. */
  description?: Maybe<Scalars['String']>;
  /** The placement of the field description. */
  descriptionPlacement?: Maybe<FormFieldDescriptionPlacementEnum>;
  /** Indicates the field is only displayed and its contents are not submitted with the form/saved with the entry. This is set to true. */
  displayOnly?: Maybe<Scalars['Boolean']>;
  /** Contains the message that is displayed for fields that fail validation. */
  errorMessage?: Maybe<Scalars['String']>;
  /** Determines if the field (checkbox, select or radio) have choice values enabled, which allows the field to have choice values different from the labels that are displayed to the user. */
  hasChoiceValue?: Maybe<Scalars['Boolean']>;
  /** Indicates whether the &#039;Enable &quot;other&quot; choice&#039; option is checked in the editor. */
  hasOtherChoice?: Maybe<Scalars['Boolean']>;
  /** Field ID. */
  id: Scalars['Int'];
  /** Assigns a name to this field so that it can be populated dynamically via this input name. Only applicable when canPrepopulate is `true`. */
  inputName?: Maybe<Scalars['String']>;
  /** The base form field type used to display the input. A good example is the Post Custom Field that can be displayed as various different types of fields. */
  inputType?: Maybe<FormFieldTypeEnum>;
  /** Determines if the field requires the user to enter a value. Fields marked as required will prevent the form from being submitted if the user has not entered a value in it. */
  isRequired?: Maybe<Scalars['Boolean']>;
  /** Field label that will be displayed on the form and on the admin pages. */
  label?: Maybe<Scalars['String']>;
  /** The field label position. */
  labelPlacement?: Maybe<FormFieldLabelPlacementEnum>;
  /** The number of CSS grid columns the field should span. */
  layoutGridColumnSpan?: Maybe<Scalars['Int']>;
  /** The number of CSS grid columns the spacer field following this one should span. */
  layoutSpacerGridColumnSpan?: Maybe<Scalars['Int']>;
  /** The form page this field is located on. Default is 1. */
  pageNumber?: Maybe<Scalars['Int']>;
  /** The form field-specifc policies for exporting and erasing personal data. */
  personalData?: Maybe<FormFieldDataPolicy>;
  /** Placeholder text to give the user a hint on how to fill out the field. This is not submitted with the form. */
  placeholder?: Maybe<Scalars['String']>;
  /** Determines if the field allows duplicate submissions. */
  shouldAllowDuplicates?: Maybe<Scalars['Boolean']>;
  /** Determines the size of the field when displayed on the page. */
  size?: Maybe<FormFieldSizeEnum>;
  /** The type of field to be displayed. */
  type?: Maybe<FormFieldTypeEnum>;
  /** The string-formatted entry value for the `formField`. For complex fields this might be a JSON-encoded or serialized array. */
  value?: Maybe<Scalars['String']>;
  /** Field visibility. */
  visibility?: Maybe<FormFieldVisibilityEnum>;
};

/** Post_tags choice values. */
export type PostTagsRadioFieldChoice = {
  __typename?: 'PostTagsRadioFieldChoice';
  /** Indicates the radio button item is the “Other” choice. */
  isOtherChoice?: Maybe<Scalars['Boolean']>;
  /** Determines if this choice should be selected by default when displayed. The value true will select the choice, whereas false will display it unselected. */
  isSelected?: Maybe<Scalars['Boolean']>;
  /** The text to be displayed to the user when displaying this choice. */
  text?: Maybe<Scalars['String']>;
  /** The value to be stored in the database when this choice is selected. Note: This property is only supported by the Drop Down and Post Category fields. Checkboxes and Radio fields will store the text property in the database regardless of the value property. */
  value?: Maybe<Scalars['String']>;
};

/** A Gravity Forms  post_tags field. */
export type PostTagsSelectField = FormField & PostTagsField & {
  __typename?: 'PostTagsSelectField';
  /** When specified, the value of this property will be used on the admin pages instead of the label. It is useful for fields with long labels. */
  adminLabel?: Maybe<Scalars['String']>;
  /** The autocomplete attribute for the field. */
  autocompleteAttribute?: Maybe<Scalars['String']>;
  /** Determines if the field’s value can be pre-populated dynamically. */
  canPrepopulate?: Maybe<Scalars['Boolean']>;
  /** The available choices for the post_tags field. */
  choices?: Maybe<Array<Maybe<PostTagsSelectFieldChoice>>>;
  /** Controls the visibility of the field based on values selected by the user. */
  conditionalLogic?: Maybe<ConditionalLogic>;
  /** String containing the custom CSS classes to be added to the &lt;li&gt; tag that contains the field. Useful for applying custom formatting to specific fields. */
  cssClass?: Maybe<Scalars['String']>;
  /** Contains the default value for the field. When specified, the field&#039;s value will be populated with the contents of this property when the form is displayed. */
  defaultValue?: Maybe<Scalars['String']>;
  /** Field description. */
  description?: Maybe<Scalars['String']>;
  /** The placement of the field description. */
  descriptionPlacement?: Maybe<FormFieldDescriptionPlacementEnum>;
  /** Indicates the field is only displayed and its contents are not submitted with the form/saved with the entry. This is set to true. */
  displayOnly?: Maybe<Scalars['Boolean']>;
  /** Contains the message that is displayed for fields that fail validation. */
  errorMessage?: Maybe<Scalars['String']>;
  /** Whether autocomplete should be enabled for this field. */
  hasAutocomplete?: Maybe<Scalars['Boolean']>;
  /** Determines if the field (checkbox, select or radio) have choice values enabled, which allows the field to have choice values different from the labels that are displayed to the user. */
  hasChoiceValue?: Maybe<Scalars['Boolean']>;
  /** When set to true, the &quot;Chosen&quot; jQuery script will be applied to this field, enabling search capabilities to Drop Down fields and a more user-friendly interface for Multi Select fields. */
  hasEnhancedUI?: Maybe<Scalars['Boolean']>;
  /** Field ID. */
  id: Scalars['Int'];
  /** Assigns a name to this field so that it can be populated dynamically via this input name. Only applicable when canPrepopulate is `true`. */
  inputName?: Maybe<Scalars['String']>;
  /** The base form field type used to display the input. A good example is the Post Custom Field that can be displayed as various different types of fields. */
  inputType?: Maybe<FormFieldTypeEnum>;
  /** Determines if the field requires the user to enter a value. Fields marked as required will prevent the form from being submitted if the user has not entered a value in it. */
  isRequired?: Maybe<Scalars['Boolean']>;
  /** Field label that will be displayed on the form and on the admin pages. */
  label?: Maybe<Scalars['String']>;
  /** The field label position. */
  labelPlacement?: Maybe<FormFieldLabelPlacementEnum>;
  /** The number of CSS grid columns the field should span. */
  layoutGridColumnSpan?: Maybe<Scalars['Int']>;
  /** The number of CSS grid columns the spacer field following this one should span. */
  layoutSpacerGridColumnSpan?: Maybe<Scalars['Int']>;
  /** The form page this field is located on. Default is 1. */
  pageNumber?: Maybe<Scalars['Int']>;
  /** The form field-specifc policies for exporting and erasing personal data. */
  personalData?: Maybe<FormFieldDataPolicy>;
  /** Placeholder text to give the user a hint on how to fill out the field. This is not submitted with the form. */
  placeholder?: Maybe<Scalars['String']>;
  /** Determines if the field allows duplicate submissions. */
  shouldAllowDuplicates?: Maybe<Scalars['Boolean']>;
  /** Determines the size of the field when displayed on the page. */
  size?: Maybe<FormFieldSizeEnum>;
  /** The type of field to be displayed. */
  type?: Maybe<FormFieldTypeEnum>;
  /** The string-formatted entry value for the `formField`. For complex fields this might be a JSON-encoded or serialized array. */
  value?: Maybe<Scalars['String']>;
  /** Field visibility. */
  visibility?: Maybe<FormFieldVisibilityEnum>;
};

/** Post_tags choice values. */
export type PostTagsSelectFieldChoice = {
  __typename?: 'PostTagsSelectFieldChoice';
  /** Determines if this choice should be selected by default when displayed. The value true will select the choice, whereas false will display it unselected. */
  isSelected?: Maybe<Scalars['Boolean']>;
  /** The text to be displayed to the user when displaying this choice. */
  text?: Maybe<Scalars['String']>;
  /** The value to be stored in the database when this choice is selected. Note: This property is only supported by the Drop Down and Post Category fields. Checkboxes and Radio fields will store the text property in the database regardless of the value property. */
  value?: Maybe<Scalars['String']>;
};

/** A Gravity Forms  post_tags field. */
export type PostTagsTextField = FormField & PostTagsField & {
  __typename?: 'PostTagsTextField';
  /** When specified, the value of this property will be used on the admin pages instead of the label. It is useful for fields with long labels. */
  adminLabel?: Maybe<Scalars['String']>;
  /** The autocomplete attribute for the field. */
  autocompleteAttribute?: Maybe<Scalars['String']>;
  /** Determines if the field’s value can be pre-populated dynamically. */
  canPrepopulate?: Maybe<Scalars['Boolean']>;
  /** Controls the visibility of the field based on values selected by the user. */
  conditionalLogic?: Maybe<ConditionalLogic>;
  /** String containing the custom CSS classes to be added to the &lt;li&gt; tag that contains the field. Useful for applying custom formatting to specific fields. */
  cssClass?: Maybe<Scalars['String']>;
  /** Contains the default value for the field. When specified, the field&#039;s value will be populated with the contents of this property when the form is displayed. */
  defaultValue?: Maybe<Scalars['String']>;
  /** Field description. */
  description?: Maybe<Scalars['String']>;
  /** The placement of the field description. */
  descriptionPlacement?: Maybe<FormFieldDescriptionPlacementEnum>;
  /** Indicates the field is only displayed and its contents are not submitted with the form/saved with the entry. This is set to true. */
  displayOnly?: Maybe<Scalars['Boolean']>;
  /** Contains the message that is displayed for fields that fail validation. */
  errorMessage?: Maybe<Scalars['String']>;
  /** Whether autocomplete should be enabled for this field. */
  hasAutocomplete?: Maybe<Scalars['Boolean']>;
  /** Whether the field has an input mask. */
  hasInputMask?: Maybe<Scalars['Boolean']>;
  /** Field ID. */
  id: Scalars['Int'];
  /** The pattern used for the input mask. */
  inputMaskValue?: Maybe<Scalars['String']>;
  /** Assigns a name to this field so that it can be populated dynamically via this input name. Only applicable when canPrepopulate is `true`. */
  inputName?: Maybe<Scalars['String']>;
  /** The base form field type used to display the input. A good example is the Post Custom Field that can be displayed as various different types of fields. */
  inputType?: Maybe<FormFieldTypeEnum>;
  /** Determines if a text field input tag should be created with a &quot;password&quot; type. */
  isPasswordInput?: Maybe<Scalars['Boolean']>;
  /** Determines if the field requires the user to enter a value. Fields marked as required will prevent the form from being submitted if the user has not entered a value in it. */
  isRequired?: Maybe<Scalars['Boolean']>;
  /** Field label that will be displayed on the form and on the admin pages. */
  label?: Maybe<Scalars['String']>;
  /** The field label position. */
  labelPlacement?: Maybe<FormFieldLabelPlacementEnum>;
  /** The number of CSS grid columns the field should span. */
  layoutGridColumnSpan?: Maybe<Scalars['Int']>;
  /** The number of CSS grid columns the spacer field following this one should span. */
  layoutSpacerGridColumnSpan?: Maybe<Scalars['Int']>;
  /** Specifies the maximum number of characters allowed in a text or textarea (paragraph) field. */
  maxLength?: Maybe<Scalars['Int']>;
  /** The form page this field is located on. Default is 1. */
  pageNumber?: Maybe<Scalars['Int']>;
  /** The form field-specifc policies for exporting and erasing personal data. */
  personalData?: Maybe<FormFieldDataPolicy>;
  /** Placeholder text to give the user a hint on how to fill out the field. This is not submitted with the form. */
  placeholder?: Maybe<Scalars['String']>;
  /** Determines if the field allows duplicate submissions. */
  shouldAllowDuplicates?: Maybe<Scalars['Boolean']>;
  /** Determines the size of the field when displayed on the page. */
  size?: Maybe<FormFieldSizeEnum>;
  /** The type of field to be displayed. */
  type?: Maybe<FormFieldTypeEnum>;
  /** The string-formatted entry value for the `formField`. For complex fields this might be a JSON-encoded or serialized array. */
  value?: Maybe<Scalars['String']>;
  /** Field visibility. */
  visibility?: Maybe<FormFieldVisibilityEnum>;
};

/** A Gravity Forms   field. */
export type PostTitleField = FormField & {
  __typename?: 'PostTitleField';
  /** When specified, the value of this property will be used on the admin pages instead of the label. It is useful for fields with long labels. */
  adminLabel?: Maybe<Scalars['String']>;
  /** Determines if the field’s value can be pre-populated dynamically. */
  canPrepopulate?: Maybe<Scalars['Boolean']>;
  /** Controls the visibility of the field based on values selected by the user. */
  conditionalLogic?: Maybe<ConditionalLogic>;
  /** String containing the custom CSS classes to be added to the &lt;li&gt; tag that contains the field. Useful for applying custom formatting to specific fields. */
  cssClass?: Maybe<Scalars['String']>;
  /** Contains the default value for the field. When specified, the field&#039;s value will be populated with the contents of this property when the form is displayed. */
  defaultValue?: Maybe<Scalars['String']>;
  /** Field description. */
  description?: Maybe<Scalars['String']>;
  /** The placement of the field description. */
  descriptionPlacement?: Maybe<FormFieldDescriptionPlacementEnum>;
  /** Indicates the field is only displayed and its contents are not submitted with the form/saved with the entry. This is set to true. */
  displayOnly?: Maybe<Scalars['Boolean']>;
  /** Contains the message that is displayed for fields that fail validation. */
  errorMessage?: Maybe<Scalars['String']>;
  /** Field ID. */
  id: Scalars['Int'];
  /** Assigns a name to this field so that it can be populated dynamically via this input name. Only applicable when canPrepopulate is `true`. */
  inputName?: Maybe<Scalars['String']>;
  /** The base form field type used to display the input. A good example is the Post Custom Field that can be displayed as various different types of fields. */
  inputType?: Maybe<FormFieldTypeEnum>;
  /** Determines if the field requires the user to enter a value. Fields marked as required will prevent the form from being submitted if the user has not entered a value in it. */
  isRequired?: Maybe<Scalars['Boolean']>;
  /** Field label that will be displayed on the form and on the admin pages. */
  label?: Maybe<Scalars['String']>;
  /** The field label position. */
  labelPlacement?: Maybe<FormFieldLabelPlacementEnum>;
  /** The number of CSS grid columns the field should span. */
  layoutGridColumnSpan?: Maybe<Scalars['Int']>;
  /** The number of CSS grid columns the spacer field following this one should span. */
  layoutSpacerGridColumnSpan?: Maybe<Scalars['Int']>;
  /** The form page this field is located on. Default is 1. */
  pageNumber?: Maybe<Scalars['Int']>;
  /** The form field-specifc policies for exporting and erasing personal data. */
  personalData?: Maybe<FormFieldDataPolicy>;
  /** Placeholder text to give the user a hint on how to fill out the field. This is not submitted with the form. */
  placeholder?: Maybe<Scalars['String']>;
  /** Determines the size of the field when displayed on the page. */
  size?: Maybe<FormFieldSizeEnum>;
  /** The type of field to be displayed. */
  type?: Maybe<FormFieldTypeEnum>;
  /** The string-formatted entry value for the `formField`. For complex fields this might be a JSON-encoded or serialized array. */
  value?: Maybe<Scalars['String']>;
  /** Field visibility. */
  visibility?: Maybe<FormFieldVisibilityEnum>;
};

/** Connection between the Post type and the category type */
export type PostToCategoryConnection = CategoryConnection & Connection & {
  __typename?: 'PostToCategoryConnection';
  /** Edges for the PostToCategoryConnection connection */
  edges: Array<PostToCategoryConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<Category>;
  /** Information about pagination in a connection. */
  pageInfo: PostToCategoryConnectionPageInfo;
};

/** An edge in a connection */
export type PostToCategoryConnectionEdge = CategoryConnectionEdge & Edge & {
  __typename?: 'PostToCategoryConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The Yoast SEO Primary category */
  isPrimary?: Maybe<Scalars['Boolean']>;
  /** The item at the end of the edge */
  node: Category;
};

/** Page Info on the &quot;PostToCategoryConnection&quot; */
export type PostToCategoryConnectionPageInfo = CategoryConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'PostToCategoryConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the PostToCategoryConnection connection */
export type PostToCategoryConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: InputMaybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: InputMaybe<Scalars['Int']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: InputMaybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: InputMaybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: InputMaybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: InputMaybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: InputMaybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Direction the connection should be ordered in */
  order?: InputMaybe<OrderEnum>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: InputMaybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: InputMaybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: InputMaybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: InputMaybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomyId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: InputMaybe<Scalars['Boolean']>;
};

/** Connection between the Post type and the Comment type */
export type PostToCommentConnection = CommentConnection & Connection & {
  __typename?: 'PostToCommentConnection';
  /** Edges for the PostToCommentConnection connection */
  edges: Array<PostToCommentConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<Comment>;
  /** Information about pagination in a connection. */
  pageInfo: PostToCommentConnectionPageInfo;
};

/** An edge in a connection */
export type PostToCommentConnectionEdge = CommentConnectionEdge & Edge & {
  __typename?: 'PostToCommentConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: Comment;
};

/** Page Info on the &quot;PostToCommentConnection&quot; */
export type PostToCommentConnectionPageInfo = CommentConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'PostToCommentConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the PostToCommentConnection connection */
export type PostToCommentConnectionWhereArgs = {
  /** Comment author email address. */
  authorEmail?: InputMaybe<Scalars['String']>;
  /** Array of author IDs to include comments for. */
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of author IDs to exclude comments for. */
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Comment author URL. */
  authorUrl?: InputMaybe<Scalars['String']>;
  /** Array of comment IDs to include. */
  commentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
  commentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Include comments of a given type. */
  commentType?: InputMaybe<Scalars['String']>;
  /** Include comments from a given array of comment types. */
  commentTypeIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Exclude comments from a given array of comment types. */
  commentTypeNotIn?: InputMaybe<Scalars['String']>;
  /** Content object author ID to limit results by. */
  contentAuthor?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of author IDs to retrieve comments for. */
  contentAuthorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of author IDs *not* to retrieve comments for. */
  contentAuthorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Limit results to those affiliated with a given content object ID. */
  contentId?: InputMaybe<Scalars['ID']>;
  /** Array of content object IDs to include affiliated comments for. */
  contentIdIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of content object IDs to exclude affiliated comments for. */
  contentIdNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Content object name (i.e. slug ) to retrieve affiliated comments for. */
  contentName?: InputMaybe<Scalars['String']>;
  /** Content Object parent ID to retrieve affiliated comments for. */
  contentParent?: InputMaybe<Scalars['Int']>;
  /** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentStatus?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentType?: InputMaybe<Array<InputMaybe<ContentTypeEnum>>>;
  /** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
  includeUnapproved?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Karma score to retrieve matching comments for. */
  karma?: InputMaybe<Scalars['Int']>;
  /** The cardinality of the order of the connection */
  order?: InputMaybe<OrderEnum>;
  /** Field to order the comments by. */
  orderby?: InputMaybe<CommentsConnectionOrderbyEnum>;
  /** Parent ID of comment to retrieve children of. */
  parent?: InputMaybe<Scalars['Int']>;
  /** Array of parent IDs of comments to retrieve children for. */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of parent IDs of comments *not* to retrieve children for. */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Search term(s) to retrieve matching comments for. */
  search?: InputMaybe<Scalars['String']>;
  /** Comment status to limit results by. */
  status?: InputMaybe<Scalars['String']>;
  /** Include comments for a specific user ID. */
  userId?: InputMaybe<Scalars['ID']>;
};

/** Connection between the Post type and the postFormat type */
export type PostToPostFormatConnection = Connection & PostFormatConnection & {
  __typename?: 'PostToPostFormatConnection';
  /** Edges for the PostToPostFormatConnection connection */
  edges: Array<PostToPostFormatConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<PostFormat>;
  /** Information about pagination in a connection. */
  pageInfo: PostToPostFormatConnectionPageInfo;
};

/** An edge in a connection */
export type PostToPostFormatConnectionEdge = Edge & PostFormatConnectionEdge & {
  __typename?: 'PostToPostFormatConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The Yoast SEO Primary post_format */
  isPrimary?: Maybe<Scalars['Boolean']>;
  /** The item at the end of the edge */
  node: PostFormat;
};

/** Page Info on the &quot;PostToPostFormatConnection&quot; */
export type PostToPostFormatConnectionPageInfo = PageInfo & PostFormatConnectionPageInfo & WpPageInfo & {
  __typename?: 'PostToPostFormatConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the PostToPostFormatConnection connection */
export type PostToPostFormatConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: InputMaybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: InputMaybe<Scalars['Int']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: InputMaybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: InputMaybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: InputMaybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: InputMaybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: InputMaybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Direction the connection should be ordered in */
  order?: InputMaybe<OrderEnum>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: InputMaybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: InputMaybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: InputMaybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: InputMaybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomyId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: InputMaybe<Scalars['Boolean']>;
};

/** Connection between the Post type and the post type */
export type PostToPreviewConnectionEdge = Edge & OneToOneConnection & PostConnectionEdge & {
  __typename?: 'PostToPreviewConnectionEdge';
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The node of the connection, without the edges */
  node: Post;
};

/** Connection between the Post type and the post type */
export type PostToRevisionConnection = Connection & PostConnection & {
  __typename?: 'PostToRevisionConnection';
  /** Edges for the PostToRevisionConnection connection */
  edges: Array<PostToRevisionConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<Post>;
  /** Information about pagination in a connection. */
  pageInfo: PostToRevisionConnectionPageInfo;
};

/** An edge in a connection */
export type PostToRevisionConnectionEdge = Edge & PostConnectionEdge & {
  __typename?: 'PostToRevisionConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: Post;
};

/** Page Info on the &quot;PostToRevisionConnection&quot; */
export type PostToRevisionConnectionPageInfo = PageInfo & PostConnectionPageInfo & WpPageInfo & {
  __typename?: 'PostToRevisionConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the PostToRevisionConnection connection */
export type PostToRevisionConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: InputMaybe<Scalars['Int']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: InputMaybe<Scalars['String']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Category ID */
  categoryId?: InputMaybe<Scalars['Int']>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Use Category Slug */
  categoryName?: InputMaybe<Scalars['String']>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']>;
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>;
  /** Tag Slug */
  tag?: InputMaybe<Scalars['String']>;
  /** Use Tag ID */
  tagId?: InputMaybe<Scalars['String']>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of tag slugs, used to display objects from one tag AND another */
  tagSlugAnd?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Array of tag slugs, used to include objects in ANY specified tags */
  tagSlugIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Title of the object */
  title?: InputMaybe<Scalars['String']>;
};

/** Connection between the Post type and the tag type */
export type PostToTagConnection = Connection & TagConnection & {
  __typename?: 'PostToTagConnection';
  /** Edges for the PostToTagConnection connection */
  edges: Array<PostToTagConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<Tag>;
  /** Information about pagination in a connection. */
  pageInfo: PostToTagConnectionPageInfo;
};

/** An edge in a connection */
export type PostToTagConnectionEdge = Edge & TagConnectionEdge & {
  __typename?: 'PostToTagConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The Yoast SEO Primary post_tag */
  isPrimary?: Maybe<Scalars['Boolean']>;
  /** The item at the end of the edge */
  node: Tag;
};

/** Page Info on the &quot;PostToTagConnection&quot; */
export type PostToTagConnectionPageInfo = PageInfo & TagConnectionPageInfo & WpPageInfo & {
  __typename?: 'PostToTagConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the PostToTagConnection connection */
export type PostToTagConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: InputMaybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: InputMaybe<Scalars['Int']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: InputMaybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: InputMaybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: InputMaybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: InputMaybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: InputMaybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Direction the connection should be ordered in */
  order?: InputMaybe<OrderEnum>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: InputMaybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: InputMaybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: InputMaybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: InputMaybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomyId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: InputMaybe<Scalars['Boolean']>;
};

/** Connection between the Post type and the TermNode type */
export type PostToTermNodeConnection = Connection & TermNodeConnection & {
  __typename?: 'PostToTermNodeConnection';
  /** Edges for the PostToTermNodeConnection connection */
  edges: Array<PostToTermNodeConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<TermNode>;
  /** Information about pagination in a connection. */
  pageInfo: PostToTermNodeConnectionPageInfo;
};

/** An edge in a connection */
export type PostToTermNodeConnectionEdge = Edge & TermNodeConnectionEdge & {
  __typename?: 'PostToTermNodeConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: TermNode;
};

/** Page Info on the &quot;PostToTermNodeConnection&quot; */
export type PostToTermNodeConnectionPageInfo = PageInfo & TermNodeConnectionPageInfo & WpPageInfo & {
  __typename?: 'PostToTermNodeConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the PostToTermNodeConnection connection */
export type PostToTermNodeConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: InputMaybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: InputMaybe<Scalars['Int']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: InputMaybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: InputMaybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: InputMaybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: InputMaybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: InputMaybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Direction the connection should be ordered in */
  order?: InputMaybe<OrderEnum>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: InputMaybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: InputMaybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: InputMaybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: InputMaybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** The Taxonomy to filter terms by */
  taxonomies?: InputMaybe<Array<InputMaybe<TaxonomyEnum>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomyId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: InputMaybe<Scalars['Boolean']>;
};

/** Details for labels of the PostType */
export type PostTypeLabelDetails = {
  __typename?: 'PostTypeLabelDetails';
  /** Default is ‘Add New’ for both hierarchical and non-hierarchical types. */
  addNew?: Maybe<Scalars['String']>;
  /** Label for adding a new singular item. */
  addNewItem?: Maybe<Scalars['String']>;
  /** Label to signify all items in a submenu link. */
  allItems?: Maybe<Scalars['String']>;
  /** Label for archives in nav menus */
  archives?: Maybe<Scalars['String']>;
  /** Label for the attributes meta box. */
  attributes?: Maybe<Scalars['String']>;
  /** Label for editing a singular item. */
  editItem?: Maybe<Scalars['String']>;
  /** Label for the Featured Image meta box title. */
  featuredImage?: Maybe<Scalars['String']>;
  /** Label for the table views hidden heading. */
  filterItemsList?: Maybe<Scalars['String']>;
  /** Label for the media frame button. */
  insertIntoItem?: Maybe<Scalars['String']>;
  /** Label for the table hidden heading. */
  itemsList?: Maybe<Scalars['String']>;
  /** Label for the table pagination hidden heading. */
  itemsListNavigation?: Maybe<Scalars['String']>;
  /** Label for the menu name. */
  menuName?: Maybe<Scalars['String']>;
  /** General name for the post type, usually plural. */
  name?: Maybe<Scalars['String']>;
  /** Label for the new item page title. */
  newItem?: Maybe<Scalars['String']>;
  /** Label used when no items are found. */
  notFound?: Maybe<Scalars['String']>;
  /** Label used when no items are in the trash. */
  notFoundInTrash?: Maybe<Scalars['String']>;
  /** Label used to prefix parents of hierarchical items. */
  parentItemColon?: Maybe<Scalars['String']>;
  /** Label for removing the featured image. */
  removeFeaturedImage?: Maybe<Scalars['String']>;
  /** Label for searching plural items. */
  searchItems?: Maybe<Scalars['String']>;
  /** Label for setting the featured image. */
  setFeaturedImage?: Maybe<Scalars['String']>;
  /** Name for one object of this post type. */
  singularName?: Maybe<Scalars['String']>;
  /** Label for the media frame filter. */
  uploadedToThisItem?: Maybe<Scalars['String']>;
  /** Label in the media frame for using a featured image. */
  useFeaturedImage?: Maybe<Scalars['String']>;
  /** Label for viewing a singular item. */
  viewItem?: Maybe<Scalars['String']>;
  /** Label for viewing post type archives. */
  viewItems?: Maybe<Scalars['String']>;
};

export type PostTypeSeo = {
  __typename?: 'PostTypeSEO';
  breadcrumbs?: Maybe<Array<Maybe<SeoPostTypeBreadcrumbs>>>;
  canonical?: Maybe<Scalars['String']>;
  cornerstone?: Maybe<Scalars['Boolean']>;
  focuskw?: Maybe<Scalars['String']>;
  fullHead?: Maybe<Scalars['String']>;
  metaDesc?: Maybe<Scalars['String']>;
  metaKeywords?: Maybe<Scalars['String']>;
  metaRobotsNofollow?: Maybe<Scalars['String']>;
  metaRobotsNoindex?: Maybe<Scalars['String']>;
  opengraphAuthor?: Maybe<Scalars['String']>;
  opengraphDescription?: Maybe<Scalars['String']>;
  opengraphImage?: Maybe<MediaItem>;
  opengraphModifiedTime?: Maybe<Scalars['String']>;
  opengraphPublishedTime?: Maybe<Scalars['String']>;
  opengraphPublisher?: Maybe<Scalars['String']>;
  opengraphSiteName?: Maybe<Scalars['String']>;
  opengraphTitle?: Maybe<Scalars['String']>;
  opengraphType?: Maybe<Scalars['String']>;
  opengraphUrl?: Maybe<Scalars['String']>;
  readingTime?: Maybe<Scalars['Float']>;
  schema?: Maybe<SeoPostTypeSchema>;
  title?: Maybe<Scalars['String']>;
  twitterDescription?: Maybe<Scalars['String']>;
  twitterImage?: Maybe<MediaItem>;
  twitterTitle?: Maybe<Scalars['String']>;
};

/** Field Group */
export type Post_Postoptions = AcfFieldGroup & {
  __typename?: 'Post_Postoptions';
  externalLink?: Maybe<Scalars['String']>;
  /** The name of the ACF Field Group */
  fieldGroupName?: Maybe<Scalars['String']>;
  isExternal?: Maybe<Scalars['Boolean']>;
  outletLogo?: Maybe<MediaItem>;
};

/** Edge between a Node and a connected press_release */
export type PressReleaseConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The connected press_release Node */
  node: Press_Release;
};

/** The press_release type */
export type Press_Release = ContentNode & DatabaseIdentifier & HierarchicalContentNode & HierarchicalNode & MenuItemLinkable & Node & NodeWithContentEditor & NodeWithExcerpt & NodeWithFeaturedImage & NodeWithPageAttributes & NodeWithRevisions & NodeWithTemplate & NodeWithTitle & Previewable & UniformResourceIdentifiable & {
  __typename?: 'Press_release';
  /** Returns ancestors of the node. Default ordered as lowest (closest to the child) to highest (closest to the root). */
  ancestors?: Maybe<HierarchicalContentNodeToContentNodeAncestorsConnection>;
  /** Connection between the HierarchicalContentNode type and the ContentNode type */
  children?: Maybe<HierarchicalContentNodeToContentNodeChildrenConnection>;
  /** @deprecated Deprecated in favor of using Next.js pages */
  conditionalTags?: Maybe<ConditionalTags>;
  /** The content of the post. */
  content?: Maybe<Scalars['String']>;
  /** Connection between the ContentNode type and the ContentType type */
  contentType?: Maybe<ContentNodeToContentTypeConnectionEdge>;
  /** The name of the Content Type the node belongs to */
  contentTypeName: Scalars['String'];
  /** The unique identifier stored in the database */
  databaseId: Scalars['Int'];
  /** Post publishing date. */
  date?: Maybe<Scalars['String']>;
  /** The publishing date set in GMT. */
  dateGmt?: Maybe<Scalars['String']>;
  /** The desired slug of the post */
  desiredSlug?: Maybe<Scalars['String']>;
  /** If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds */
  editingLockedBy?: Maybe<ContentNodeToEditLockConnectionEdge>;
  /** The RSS enclosure for the object */
  enclosure?: Maybe<Scalars['String']>;
  /** Connection between the ContentNode type and the EnqueuedScript type */
  enqueuedScripts?: Maybe<ContentNodeToEnqueuedScriptConnection>;
  /** Connection between the ContentNode type and the EnqueuedStylesheet type */
  enqueuedStylesheets?: Maybe<ContentNodeToEnqueuedStylesheetConnection>;
  /** The excerpt of the post. */
  excerpt?: Maybe<Scalars['String']>;
  /** Connection between the NodeWithFeaturedImage type and the MediaItem type */
  featuredImage?: Maybe<NodeWithFeaturedImageToMediaItemConnectionEdge>;
  /** The database identifier for the featured image node assigned to the content node */
  featuredImageDatabaseId?: Maybe<Scalars['Int']>;
  /** Globally unique ID of the featured image assigned to the node */
  featuredImageId?: Maybe<Scalars['ID']>;
  /** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
  guid?: Maybe<Scalars['String']>;
  /** The globally unique identifier of the press_releases object. */
  id: Scalars['ID'];
  /** Whether the node is a Content Node */
  isContentNode: Scalars['Boolean'];
  /** Whether the object is a node in the preview state */
  isPreview?: Maybe<Scalars['Boolean']>;
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** True if the node is a revision of another node */
  isRevision?: Maybe<Scalars['Boolean']>;
  /** Whether the node is a Term */
  isTermNode: Scalars['Boolean'];
  /** The user that most recently edited the node */
  lastEditedBy?: Maybe<ContentNodeToEditLastConnectionEdge>;
  /** The permalink of the post */
  link?: Maybe<Scalars['String']>;
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: Maybe<Scalars['Int']>;
  /** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
  modified?: Maybe<Scalars['String']>;
  /** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
  modifiedGmt?: Maybe<Scalars['String']>;
  /** The parent of the node. The parent object can be of various types */
  parent?: Maybe<HierarchicalContentNodeToParentContentNodeConnectionEdge>;
  /** Database id of the parent node */
  parentDatabaseId?: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the parent node. */
  parentId?: Maybe<Scalars['ID']>;
  /** Added to the GraphQL Schema because the ACF Field Group &quot;Press Options&quot; was set to Show in GraphQL. */
  pressOptions?: Maybe<Press_Release_Pressoptions>;
  /**
   * The id field matches the WP_Post-&gt;ID field.
   * @deprecated Deprecated in favor of the databaseId field
   */
  press_releaseId: Scalars['Int'];
  /** Connection between the Press_release type and the press_release type */
  preview?: Maybe<Press_ReleaseToPreviewConnectionEdge>;
  /** The database id of the preview node */
  previewRevisionDatabaseId?: Maybe<Scalars['Int']>;
  /** Whether the object is a node in the preview state */
  previewRevisionId?: Maybe<Scalars['ID']>;
  /** If the current node is a revision, this field exposes the node this is a revision of. Returns null if the node is not a revision of another node. */
  revisionOf?: Maybe<NodeWithRevisionsToContentNodeConnectionEdge>;
  /** Connection between the Press_release type and the press_release type */
  revisions?: Maybe<Press_ReleaseToRevisionConnection>;
  /** The Yoast SEO data of the ContentNode */
  seo?: Maybe<PostTypeSeo>;
  /** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
  slug?: Maybe<Scalars['String']>;
  /** The current status of the object */
  status?: Maybe<Scalars['String']>;
  /** The template assigned to a node of content */
  template?: Maybe<ContentTemplate>;
  templates?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
  title?: Maybe<Scalars['String']>;
  /** The unique resource identifier path */
  uri?: Maybe<Scalars['String']>;
};


/** The press_release type */
export type Press_ReleaseAncestorsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<HierarchicalContentNodeToContentNodeAncestorsConnectionWhereArgs>;
};


/** The press_release type */
export type Press_ReleaseChildrenArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<HierarchicalContentNodeToContentNodeChildrenConnectionWhereArgs>;
};


/** The press_release type */
export type Press_ReleaseContentArgs = {
  format?: InputMaybe<PostObjectFieldFormatEnum>;
};


/** The press_release type */
export type Press_ReleaseEnqueuedScriptsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** The press_release type */
export type Press_ReleaseEnqueuedStylesheetsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** The press_release type */
export type Press_ReleaseExcerptArgs = {
  format?: InputMaybe<PostObjectFieldFormatEnum>;
};


/** The press_release type */
export type Press_ReleaseRevisionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Press_ReleaseToRevisionConnectionWhereArgs>;
};


/** The press_release type */
export type Press_ReleaseTitleArgs = {
  format?: InputMaybe<PostObjectFieldFormatEnum>;
};

/** Page Info on the connected PressReleaseConnectionEdge */
export type Press_ReleaseConnectionPageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum Press_ReleaseIdType {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID',
  /** Identify a resource by the URI. */
  Uri = 'URI'
}

/** Connection between the Press_release type and the press_release type */
export type Press_ReleaseToPreviewConnectionEdge = Edge & OneToOneConnection & PressReleaseConnectionEdge & {
  __typename?: 'Press_releaseToPreviewConnectionEdge';
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The node of the connection, without the edges */
  node: Press_Release;
};

/** Connection between the Press_release type and the press_release type */
export type Press_ReleaseToRevisionConnection = Connection & {
  __typename?: 'Press_releaseToRevisionConnection';
  /** Edges for the Press_releaseToRevisionConnection connection */
  edges: Array<Press_ReleaseToRevisionConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<Press_Release>;
  /** Information about pagination in a connection. */
  pageInfo: Press_ReleaseToRevisionConnectionPageInfo;
};

/** An edge in a connection */
export type Press_ReleaseToRevisionConnectionEdge = Edge & PressReleaseConnectionEdge & {
  __typename?: 'Press_releaseToRevisionConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: Press_Release;
};

/** Page Info on the &quot;Press_releaseToRevisionConnection&quot; */
export type Press_ReleaseToRevisionConnectionPageInfo = PageInfo & Press_ReleaseConnectionPageInfo & WpPageInfo & {
  __typename?: 'Press_releaseToRevisionConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the Press_releaseToRevisionConnection connection */
export type Press_ReleaseToRevisionConnectionWhereArgs = {
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']>;
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>;
  /** Title of the object */
  title?: InputMaybe<Scalars['String']>;
};

/** Field Group */
export type Press_Release_Pressoptions = AcfFieldGroup & {
  __typename?: 'Press_release_Pressoptions';
  externalLink?: Maybe<Scalars['String']>;
  /** The name of the ACF Field Group */
  fieldGroupName?: Maybe<Scalars['String']>;
  isExternal?: Maybe<Scalars['Boolean']>;
  outletLogo?: Maybe<MediaItem>;
};

/** Nodes that can be seen in a preview (unpublished) state. */
export type Previewable = {
  /** Whether the object is a node in the preview state */
  isPreview?: Maybe<Scalars['Boolean']>;
  /** The database id of the preview node */
  previewRevisionDatabaseId?: Maybe<Scalars['Int']>;
  /** Whether the object is a node in the preview state */
  previewRevisionId?: Maybe<Scalars['ID']>;
};

/** A Gravity Forms   field. */
export type RadioField = FormField & {
  __typename?: 'RadioField';
  /** When specified, the value of this property will be used on the admin pages instead of the label. It is useful for fields with long labels. */
  adminLabel?: Maybe<Scalars['String']>;
  /** Determines if the field’s value can be pre-populated dynamically. */
  canPrepopulate?: Maybe<Scalars['Boolean']>;
  /** The available choices for the radio field. */
  choices?: Maybe<Array<Maybe<RadioFieldChoice>>>;
  /** Controls the visibility of the field based on values selected by the user. */
  conditionalLogic?: Maybe<ConditionalLogic>;
  /** String containing the custom CSS classes to be added to the &lt;li&gt; tag that contains the field. Useful for applying custom formatting to specific fields. */
  cssClass?: Maybe<Scalars['String']>;
  /** Field description. */
  description?: Maybe<Scalars['String']>;
  /** The placement of the field description. */
  descriptionPlacement?: Maybe<FormFieldDescriptionPlacementEnum>;
  /** Indicates the field is only displayed and its contents are not submitted with the form/saved with the entry. This is set to true. */
  displayOnly?: Maybe<Scalars['Boolean']>;
  /** Contains the message that is displayed for fields that fail validation. */
  errorMessage?: Maybe<Scalars['String']>;
  /** Determines if the field (checkbox, select or radio) have choice values enabled, which allows the field to have choice values different from the labels that are displayed to the user. */
  hasChoiceValue?: Maybe<Scalars['Boolean']>;
  /** Indicates whether the &#039;Enable &quot;other&quot; choice&#039; option is checked in the editor. */
  hasOtherChoice?: Maybe<Scalars['Boolean']>;
  /** Field ID. */
  id: Scalars['Int'];
  /** Assigns a name to this field so that it can be populated dynamically via this input name. Only applicable when canPrepopulate is `true`. */
  inputName?: Maybe<Scalars['String']>;
  /** The base form field type used to display the input. A good example is the Post Custom Field that can be displayed as various different types of fields. */
  inputType?: Maybe<FormFieldTypeEnum>;
  /** Determines if the field requires the user to enter a value. Fields marked as required will prevent the form from being submitted if the user has not entered a value in it. */
  isRequired?: Maybe<Scalars['Boolean']>;
  /** Field label that will be displayed on the form and on the admin pages. */
  label?: Maybe<Scalars['String']>;
  /** The field label position. */
  labelPlacement?: Maybe<FormFieldLabelPlacementEnum>;
  /** The number of CSS grid columns the field should span. */
  layoutGridColumnSpan?: Maybe<Scalars['Int']>;
  /** The number of CSS grid columns the spacer field following this one should span. */
  layoutSpacerGridColumnSpan?: Maybe<Scalars['Int']>;
  /** The form page this field is located on. Default is 1. */
  pageNumber?: Maybe<Scalars['Int']>;
  /** The form field-specifc policies for exporting and erasing personal data. */
  personalData?: Maybe<FormFieldDataPolicy>;
  /** Determines if the field allows duplicate submissions. */
  shouldAllowDuplicates?: Maybe<Scalars['Boolean']>;
  /** The type of field to be displayed. */
  type?: Maybe<FormFieldTypeEnum>;
  /** The string-formatted entry value for the `formField`. For complex fields this might be a JSON-encoded or serialized array. */
  value?: Maybe<Scalars['String']>;
  /** Field visibility. */
  visibility?: Maybe<FormFieldVisibilityEnum>;
};

/** Radio choice values. */
export type RadioFieldChoice = {
  __typename?: 'RadioFieldChoice';
  /** Indicates the radio button item is the “Other” choice. */
  isOtherChoice?: Maybe<Scalars['Boolean']>;
  /** Determines if this choice should be selected by default when displayed. The value true will select the choice, whereas false will display it unselected. */
  isSelected?: Maybe<Scalars['Boolean']>;
  /** The text to be displayed to the user when displaying this choice. */
  text?: Maybe<Scalars['String']>;
  /** The value to be stored in the database when this choice is selected. Note: This property is only supported by the Drop Down and Post Category fields. Checkboxes and Radio fields will store the text property in the database regardless of the value property. */
  value?: Maybe<Scalars['String']>;
};

/** The reading setting type */
export type ReadingSettings = {
  __typename?: 'ReadingSettings';
  /** The ID of the page that should display the latest posts */
  pageForPosts?: Maybe<Scalars['Int']>;
  /** The ID of the page that should be displayed on the front page */
  pageOnFront?: Maybe<Scalars['Int']>;
  /** Blog pages show at most. */
  postsPerPage?: Maybe<Scalars['Int']>;
  /** What to show on the front page */
  showOnFront?: Maybe<Scalars['String']>;
};

/** Determines which version of reCAPTCHA v2 will be used.  */
export enum RecaptchaTypeEnum {
  /** A checkbox reCAPTCHA type. */
  Checkbox = 'CHECKBOX',
  /** An invisible reCAPTCHA type. */
  Invisible = 'INVISIBLE'
}

/** Input for the registerUser mutation. */
export type RegisterUserInput = {
  /** User's AOL IM account. */
  aim?: InputMaybe<Scalars['String']>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** A string containing content about the user. */
  description?: InputMaybe<Scalars['String']>;
  /** A string that will be shown on the site. Defaults to user's username. It is likely that you will want to change this, for both appearance and security through obscurity (that is if you dont use and delete the default admin user). */
  displayName?: InputMaybe<Scalars['String']>;
  /** A string containing the user's email address. */
  email?: InputMaybe<Scalars['String']>;
  /** 	The user's first name. */
  firstName?: InputMaybe<Scalars['String']>;
  /** User's Jabber account. */
  jabber?: InputMaybe<Scalars['String']>;
  /** The user's last name. */
  lastName?: InputMaybe<Scalars['String']>;
  /** User's locale. */
  locale?: InputMaybe<Scalars['String']>;
  /** A string that contains a URL-friendly name for the user. The default is the user's username. */
  nicename?: InputMaybe<Scalars['String']>;
  /** The user's nickname, defaults to the user's username. */
  nickname?: InputMaybe<Scalars['String']>;
  /** A string that contains the plain text password for the user. */
  password?: InputMaybe<Scalars['String']>;
  /** The date the user registered. Format is Y-m-d H:i:s. */
  registered?: InputMaybe<Scalars['String']>;
  /** A string for whether to enable the rich editor or not. False if not empty. */
  richEditing?: InputMaybe<Scalars['String']>;
  /** A string that contains the user's username. */
  username: Scalars['String'];
  /** A string containing the user's URL for the user's web site. */
  websiteUrl?: InputMaybe<Scalars['String']>;
  /** User's Yahoo IM account. */
  yim?: InputMaybe<Scalars['String']>;
};

/** The payload for the registerUser mutation. */
export type RegisterUserPayload = {
  __typename?: 'RegisterUserPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The User object mutation type. */
  user?: Maybe<User>;
};

/** Connection between the Post type and the Post type */
export type RelatedPostsConnection = Connection & PostConnection & {
  __typename?: 'RelatedPostsConnection';
  /** Edges for the RelatedPostsConnection connection */
  edges: Array<RelatedPostsConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<Post>;
  /** Information about pagination in a connection. */
  pageInfo: RelatedPostsConnectionPageInfo;
};

/** An edge in a connection */
export type RelatedPostsConnectionEdge = Edge & PostConnectionEdge & {
  __typename?: 'RelatedPostsConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: Post;
};

/** Page Info on the &quot;RelatedPostsConnection&quot; */
export type RelatedPostsConnectionPageInfo = PageInfo & PostConnectionPageInfo & WpPageInfo & {
  __typename?: 'RelatedPostsConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the RelatedPostsConnection connection */
export type RelatedPostsConnectionWhereArgs = {
  /** Override's YARPP setting's "Maximum number of related posts." The maximum number is 20. */
  limit?: InputMaybe<Scalars['Int']>;
};

/** The logical relation between each item in the array when there are more than one. */
export enum RelationEnum {
  /** The logical AND condition returns true if both operands are true, otherwise, it returns false. */
  And = 'AND',
  /** The logical OR condition returns false if both operands are false, otherwise, it returns true. */
  Or = 'OR'
}

/** Input for the resetUserPassword mutation. */
export type ResetUserPasswordInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Password reset key */
  key?: InputMaybe<Scalars['String']>;
  /** The user's login (username). */
  login?: InputMaybe<Scalars['String']>;
  /** The new password. */
  password?: InputMaybe<Scalars['String']>;
};

/** The payload for the resetUserPassword mutation. */
export type ResetUserPasswordPayload = {
  __typename?: 'ResetUserPasswordPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The User object mutation type. */
  user?: Maybe<User>;
};

/** Input for the restoreComment mutation. */
export type RestoreCommentInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The ID of the comment to be restored */
  id: Scalars['ID'];
};

/** The payload for the restoreComment mutation. */
export type RestoreCommentPayload = {
  __typename?: 'RestoreCommentPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The restored comment object */
  comment?: Maybe<Comment>;
  /** The ID of the restored comment */
  restoredId?: Maybe<Scalars['ID']>;
};

/** The root mutation */
export type RootMutation = {
  __typename?: 'RootMutation';
  /** The createCategory mutation */
  createCategory?: Maybe<CreateCategoryPayload>;
  /** The createClient mutation */
  createClient?: Maybe<CreateClientPayload>;
  /** The createComment mutation */
  createComment?: Maybe<CreateCommentPayload>;
  /** The createGraphqlDocument mutation */
  createGraphqlDocument?: Maybe<CreateGraphqlDocumentPayload>;
  /** The createMediaItem mutation */
  createMediaItem?: Maybe<CreateMediaItemPayload>;
  /** The createPage mutation */
  createPage?: Maybe<CreatePagePayload>;
  /** The createPost mutation */
  createPost?: Maybe<CreatePostPayload>;
  /** The createPostFormat mutation */
  createPostFormat?: Maybe<CreatePostFormatPayload>;
  /** The createPress_release mutation */
  createPress_release?: Maybe<CreatePress_ReleasePayload>;
  /** The createTag mutation */
  createTag?: Maybe<CreateTagPayload>;
  /** The createTeamMember mutation */
  createTeamMember?: Maybe<CreateTeamMemberPayload>;
  /** The createUser mutation */
  createUser?: Maybe<CreateUserPayload>;
  /** The createWork mutation */
  createWork?: Maybe<CreateWorkPayload>;
  /** The createWorkCategory mutation */
  createWorkCategory?: Maybe<CreateWorkCategoryPayload>;
  /** The deleteCategory mutation */
  deleteCategory?: Maybe<DeleteCategoryPayload>;
  /** The deleteClient mutation */
  deleteClient?: Maybe<DeleteClientPayload>;
  /** The deleteComment mutation */
  deleteComment?: Maybe<DeleteCommentPayload>;
  /** The deleteGfDraftEntry mutation */
  deleteGfDraftEntry?: Maybe<DeleteGfDraftEntryPayload>;
  /** The deleteGfEntry mutation */
  deleteGfEntry?: Maybe<DeleteGfEntryPayload>;
  /** The deleteGraphqlDocument mutation */
  deleteGraphqlDocument?: Maybe<DeleteGraphqlDocumentPayload>;
  /** The deleteMediaItem mutation */
  deleteMediaItem?: Maybe<DeleteMediaItemPayload>;
  /** The deletePage mutation */
  deletePage?: Maybe<DeletePagePayload>;
  /** The deletePost mutation */
  deletePost?: Maybe<DeletePostPayload>;
  /** The deletePostFormat mutation */
  deletePostFormat?: Maybe<DeletePostFormatPayload>;
  /** The deletePress_release mutation */
  deletePress_release?: Maybe<DeletePress_ReleasePayload>;
  /** The deleteTag mutation */
  deleteTag?: Maybe<DeleteTagPayload>;
  /** The deleteTeamMember mutation */
  deleteTeamMember?: Maybe<DeleteTeamMemberPayload>;
  /** The deleteUser mutation */
  deleteUser?: Maybe<DeleteUserPayload>;
  /** The deleteWork mutation */
  deleteWork?: Maybe<DeleteWorkPayload>;
  /** The deleteWorkCategory mutation */
  deleteWorkCategory?: Maybe<DeleteWorkCategoryPayload>;
  /** The generateAuthorizationCode mutation */
  generateAuthorizationCode?: Maybe<GenerateAuthorizationCodePayload>;
  /** Increase the count. */
  increaseCount?: Maybe<Scalars['Int']>;
  /** The registerUser mutation */
  registerUser?: Maybe<RegisterUserPayload>;
  /** The resetUserPassword mutation */
  resetUserPassword?: Maybe<ResetUserPasswordPayload>;
  /** The restoreComment mutation */
  restoreComment?: Maybe<RestoreCommentPayload>;
  /** Send password reset email to user */
  sendPasswordResetEmail?: Maybe<SendPasswordResetEmailPayload>;
  /** The submitGfDraftEntry mutation */
  submitGfDraftEntry?: Maybe<SubmitGfDraftEntryPayload>;
  /** The submitGfForm mutation */
  submitGfForm?: Maybe<SubmitGfFormPayload>;
  /** The updateCategory mutation */
  updateCategory?: Maybe<UpdateCategoryPayload>;
  /** The updateClient mutation */
  updateClient?: Maybe<UpdateClientPayload>;
  /** The updateComment mutation */
  updateComment?: Maybe<UpdateCommentPayload>;
  /** The updateGfDraftEntry mutation */
  updateGfDraftEntry?: Maybe<UpdateGfDraftEntryPayload>;
  /** The updateGfEntry mutation */
  updateGfEntry?: Maybe<UpdateGfEntryPayload>;
  /** The updateGraphqlDocument mutation */
  updateGraphqlDocument?: Maybe<UpdateGraphqlDocumentPayload>;
  /** The updateMediaItem mutation */
  updateMediaItem?: Maybe<UpdateMediaItemPayload>;
  /** The updatePage mutation */
  updatePage?: Maybe<UpdatePagePayload>;
  /** The updatePost mutation */
  updatePost?: Maybe<UpdatePostPayload>;
  /** The updatePostFormat mutation */
  updatePostFormat?: Maybe<UpdatePostFormatPayload>;
  /** The updatePress_release mutation */
  updatePress_release?: Maybe<UpdatePress_ReleasePayload>;
  /** The updateSettings mutation */
  updateSettings?: Maybe<UpdateSettingsPayload>;
  /** The updateTag mutation */
  updateTag?: Maybe<UpdateTagPayload>;
  /** The updateTeamMember mutation */
  updateTeamMember?: Maybe<UpdateTeamMemberPayload>;
  /** The updateUser mutation */
  updateUser?: Maybe<UpdateUserPayload>;
  /** The updateWork mutation */
  updateWork?: Maybe<UpdateWorkPayload>;
  /** The updateWorkCategory mutation */
  updateWorkCategory?: Maybe<UpdateWorkCategoryPayload>;
};


/** The root mutation */
export type RootMutationCreateCategoryArgs = {
  input: CreateCategoryInput;
};


/** The root mutation */
export type RootMutationCreateClientArgs = {
  input: CreateClientInput;
};


/** The root mutation */
export type RootMutationCreateCommentArgs = {
  input: CreateCommentInput;
};


/** The root mutation */
export type RootMutationCreateGraphqlDocumentArgs = {
  input: CreateGraphqlDocumentInput;
};


/** The root mutation */
export type RootMutationCreateMediaItemArgs = {
  input: CreateMediaItemInput;
};


/** The root mutation */
export type RootMutationCreatePageArgs = {
  input: CreatePageInput;
};


/** The root mutation */
export type RootMutationCreatePostArgs = {
  input: CreatePostInput;
};


/** The root mutation */
export type RootMutationCreatePostFormatArgs = {
  input: CreatePostFormatInput;
};


/** The root mutation */
export type RootMutationCreatePress_ReleaseArgs = {
  input: CreatePress_ReleaseInput;
};


/** The root mutation */
export type RootMutationCreateTagArgs = {
  input: CreateTagInput;
};


/** The root mutation */
export type RootMutationCreateTeamMemberArgs = {
  input: CreateTeamMemberInput;
};


/** The root mutation */
export type RootMutationCreateUserArgs = {
  input: CreateUserInput;
};


/** The root mutation */
export type RootMutationCreateWorkArgs = {
  input: CreateWorkInput;
};


/** The root mutation */
export type RootMutationCreateWorkCategoryArgs = {
  input: CreateWorkCategoryInput;
};


/** The root mutation */
export type RootMutationDeleteCategoryArgs = {
  input: DeleteCategoryInput;
};


/** The root mutation */
export type RootMutationDeleteClientArgs = {
  input: DeleteClientInput;
};


/** The root mutation */
export type RootMutationDeleteCommentArgs = {
  input: DeleteCommentInput;
};


/** The root mutation */
export type RootMutationDeleteGfDraftEntryArgs = {
  input: DeleteGfDraftEntryInput;
};


/** The root mutation */
export type RootMutationDeleteGfEntryArgs = {
  input: DeleteGfEntryInput;
};


/** The root mutation */
export type RootMutationDeleteGraphqlDocumentArgs = {
  input: DeleteGraphqlDocumentInput;
};


/** The root mutation */
export type RootMutationDeleteMediaItemArgs = {
  input: DeleteMediaItemInput;
};


/** The root mutation */
export type RootMutationDeletePageArgs = {
  input: DeletePageInput;
};


/** The root mutation */
export type RootMutationDeletePostArgs = {
  input: DeletePostInput;
};


/** The root mutation */
export type RootMutationDeletePostFormatArgs = {
  input: DeletePostFormatInput;
};


/** The root mutation */
export type RootMutationDeletePress_ReleaseArgs = {
  input: DeletePress_ReleaseInput;
};


/** The root mutation */
export type RootMutationDeleteTagArgs = {
  input: DeleteTagInput;
};


/** The root mutation */
export type RootMutationDeleteTeamMemberArgs = {
  input: DeleteTeamMemberInput;
};


/** The root mutation */
export type RootMutationDeleteUserArgs = {
  input: DeleteUserInput;
};


/** The root mutation */
export type RootMutationDeleteWorkArgs = {
  input: DeleteWorkInput;
};


/** The root mutation */
export type RootMutationDeleteWorkCategoryArgs = {
  input: DeleteWorkCategoryInput;
};


/** The root mutation */
export type RootMutationGenerateAuthorizationCodeArgs = {
  input: GenerateAuthorizationCodeInput;
};


/** The root mutation */
export type RootMutationIncreaseCountArgs = {
  count?: InputMaybe<Scalars['Int']>;
};


/** The root mutation */
export type RootMutationRegisterUserArgs = {
  input: RegisterUserInput;
};


/** The root mutation */
export type RootMutationResetUserPasswordArgs = {
  input: ResetUserPasswordInput;
};


/** The root mutation */
export type RootMutationRestoreCommentArgs = {
  input: RestoreCommentInput;
};


/** The root mutation */
export type RootMutationSendPasswordResetEmailArgs = {
  input: SendPasswordResetEmailInput;
};


/** The root mutation */
export type RootMutationSubmitGfDraftEntryArgs = {
  input: SubmitGfDraftEntryInput;
};


/** The root mutation */
export type RootMutationSubmitGfFormArgs = {
  input: SubmitGfFormInput;
};


/** The root mutation */
export type RootMutationUpdateCategoryArgs = {
  input: UpdateCategoryInput;
};


/** The root mutation */
export type RootMutationUpdateClientArgs = {
  input: UpdateClientInput;
};


/** The root mutation */
export type RootMutationUpdateCommentArgs = {
  input: UpdateCommentInput;
};


/** The root mutation */
export type RootMutationUpdateGfDraftEntryArgs = {
  input: UpdateGfDraftEntryInput;
};


/** The root mutation */
export type RootMutationUpdateGfEntryArgs = {
  input: UpdateGfEntryInput;
};


/** The root mutation */
export type RootMutationUpdateGraphqlDocumentArgs = {
  input: UpdateGraphqlDocumentInput;
};


/** The root mutation */
export type RootMutationUpdateMediaItemArgs = {
  input: UpdateMediaItemInput;
};


/** The root mutation */
export type RootMutationUpdatePageArgs = {
  input: UpdatePageInput;
};


/** The root mutation */
export type RootMutationUpdatePostArgs = {
  input: UpdatePostInput;
};


/** The root mutation */
export type RootMutationUpdatePostFormatArgs = {
  input: UpdatePostFormatInput;
};


/** The root mutation */
export type RootMutationUpdatePress_ReleaseArgs = {
  input: UpdatePress_ReleaseInput;
};


/** The root mutation */
export type RootMutationUpdateSettingsArgs = {
  input: UpdateSettingsInput;
};


/** The root mutation */
export type RootMutationUpdateTagArgs = {
  input: UpdateTagInput;
};


/** The root mutation */
export type RootMutationUpdateTeamMemberArgs = {
  input: UpdateTeamMemberInput;
};


/** The root mutation */
export type RootMutationUpdateUserArgs = {
  input: UpdateUserInput;
};


/** The root mutation */
export type RootMutationUpdateWorkArgs = {
  input: UpdateWorkInput;
};


/** The root mutation */
export type RootMutationUpdateWorkCategoryArgs = {
  input: UpdateWorkCategoryInput;
};

/** The root entry point into the Graph */
export type RootQuery = {
  __typename?: 'RootQuery';
  /** Entry point to get all settings for the site */
  allSettings?: Maybe<Settings>;
  /** Fields of the &#039;AtlasContentModelerSettingsSettings&#039; settings group */
  atlasContentModelerSettingsSettings?: Maybe<AtlasContentModelerSettingsSettings>;
  /** Connection between the RootQuery type and the category type */
  categories?: Maybe<RootQueryToCategoryConnection>;
  /** A 0bject */
  category?: Maybe<Category>;
  /** A 0bject */
  client?: Maybe<Client>;
  /** Connection between the RootQuery type and the client type */
  clients?: Maybe<RootQueryToClientConnection>;
  /** Returns a Comment */
  comment?: Maybe<Comment>;
  /** Connection between the RootQuery type and the Comment type */
  comments?: Maybe<RootQueryToCommentConnection>;
  /** A node used to manage content */
  contentNode?: Maybe<ContentNode>;
  /** Connection between the RootQuery type and the ContentNode type */
  contentNodes?: Maybe<RootQueryToContentNodeConnection>;
  /** Fetch a Content Type node by unique Identifier */
  contentType?: Maybe<ContentType>;
  /** Connection between the RootQuery type and the ContentType type */
  contentTypes?: Maybe<RootQueryToContentTypeConnection>;
  /** Fields of the &#039;DiscussionSettings&#039; settings group */
  discussionSettings?: Maybe<DiscussionSettings>;
  /** Fields of the &#039;GeneralSettings&#039; settings group */
  generalSettings?: Maybe<GeneralSettings>;
  /** Get a Gravity Forms entry. */
  gfDraftEntry?: Maybe<GfDraftEntry>;
  /** Connection between the RootQuery type and the GfEntry type */
  gfEntries?: Maybe<RootQueryToGfEntryConnection>;
  /** Get a Gravity Forms entry. */
  gfEntry?: Maybe<GfEntry>;
  /** Get a Gravity Forms form. */
  gfForm?: Maybe<GfForm>;
  /** Connection between the RootQuery type and the GfForm type */
  gfForms?: Maybe<RootQueryToGfFormConnection>;
  /** Gravity Forms settings. */
  gfSettings?: Maybe<GfSettings>;
  /** Connection between the RootQuery type and the GfSubmittedEntry type */
  gfSubmittedEntries?: Maybe<RootQueryToGfSubmittedEntryConnection>;
  /** Get a Gravity Forms entry. */
  gfSubmittedEntry?: Maybe<GfSubmittedEntry>;
  /** An object of the graphqlDocument Type. Saved GraphQL Documents */
  graphqlDocument?: Maybe<GraphqlDocument>;
  /**
   * A graphqlDocument object
   * @deprecated Deprecated in favor of using the single entry point for this type with ID and IDType fields. For example, instead of postBy( id: &quot;&quot; ), use post(id: &quot;&quot; idType: &quot;&quot;)
   */
  graphqlDocumentBy?: Maybe<GraphqlDocument>;
  /** Connection between the RootQuery type and the graphqlDocument type */
  graphqlDocuments?: Maybe<RootQueryToGraphqlDocumentConnection>;
  /** An object of the mediaItem Type.  */
  mediaItem?: Maybe<MediaItem>;
  /**
   * A mediaItem object
   * @deprecated Deprecated in favor of using the single entry point for this type with ID and IDType fields. For example, instead of postBy( id: &quot;&quot; ), use post(id: &quot;&quot; idType: &quot;&quot;)
   */
  mediaItemBy?: Maybe<MediaItem>;
  /** Connection between the RootQuery type and the mediaItem type */
  mediaItems?: Maybe<RootQueryToMediaItemConnection>;
  /** A WordPress navigation menu */
  menu?: Maybe<Menu>;
  /** A WordPress navigation menu item */
  menuItem?: Maybe<MenuItem>;
  /** Connection between the RootQuery type and the MenuItem type */
  menuItems?: Maybe<RootQueryToMenuItemConnection>;
  /** Connection between the RootQuery type and the Menu type */
  menus?: Maybe<RootQueryToMenuConnection>;
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  /** Fetches an object given its Unique Resource Identifier */
  nodeByUri?: Maybe<UniformResourceIdentifiable>;
  /** An object of the page Type.  */
  page?: Maybe<Page>;
  /**
   * A page object
   * @deprecated Deprecated in favor of using the single entry point for this type with ID and IDType fields. For example, instead of postBy( id: &quot;&quot; ), use post(id: &quot;&quot; idType: &quot;&quot;)
   */
  pageBy?: Maybe<Page>;
  /** Connection between the RootQuery type and the page type */
  pages?: Maybe<RootQueryToPageConnection>;
  /** A WordPress plugin */
  plugin?: Maybe<Plugin>;
  /** Connection between the RootQuery type and the Plugin type */
  plugins?: Maybe<RootQueryToPluginConnection>;
  /** An object of the post Type.  */
  post?: Maybe<Post>;
  /**
   * A post object
   * @deprecated Deprecated in favor of using the single entry point for this type with ID and IDType fields. For example, instead of postBy( id: &quot;&quot; ), use post(id: &quot;&quot; idType: &quot;&quot;)
   */
  postBy?: Maybe<Post>;
  /** A 0bject */
  postFormat?: Maybe<PostFormat>;
  /** Connection between the RootQuery type and the postFormat type */
  postFormats?: Maybe<RootQueryToPostFormatConnection>;
  /** Connection between the RootQuery type and the post type */
  posts?: Maybe<RootQueryToPostConnection>;
  /** An object of the press_release Type. Press Release information page. */
  pressRelease?: Maybe<Press_Release>;
  /**
   * A press_release object
   * @deprecated Deprecated in favor of using the single entry point for this type with ID and IDType fields. For example, instead of postBy( id: &quot;&quot; ), use post(id: &quot;&quot; idType: &quot;&quot;)
   */
  pressReleaseBy?: Maybe<Press_Release>;
  /** Connection between the RootQuery type and the press_release type */
  pressReleases?: Maybe<RootQueryToPress_ReleaseConnection>;
  /** Fields of the &#039;ReadingSettings&#039; settings group */
  readingSettings?: Maybe<ReadingSettings>;
  /** Connection between the RootQuery type and the EnqueuedScript type */
  registeredScripts?: Maybe<RootQueryToEnqueuedScriptConnection>;
  /** Connection between the RootQuery type and the EnqueuedStylesheet type */
  registeredStylesheets?: Maybe<RootQueryToEnqueuedStylesheetConnection>;
  /** Connection between the RootQuery type and the ContentNode type */
  revisions?: Maybe<RootQueryToRevisionsConnection>;
  /** Returns seo site data */
  seo?: Maybe<SeoConfig>;
  /** Site Settings options. */
  siteSettings?: Maybe<SiteSettings>;
  /** A 0bject */
  tag?: Maybe<Tag>;
  /** Connection between the RootQuery type and the tag type */
  tags?: Maybe<RootQueryToTagConnection>;
  /** Connection between the RootQuery type and the Taxonomy type */
  taxonomies?: Maybe<RootQueryToTaxonomyConnection>;
  /** Fetch a Taxonomy node by unique Identifier */
  taxonomy?: Maybe<Taxonomy>;
  /** An object of the teamMember Type. Team Members */
  teamMember?: Maybe<TeamMember>;
  /**
   * A teamMember object
   * @deprecated Deprecated in favor of using the single entry point for this type with ID and IDType fields. For example, instead of postBy( id: &quot;&quot; ), use post(id: &quot;&quot; idType: &quot;&quot;)
   */
  teamMemberBy?: Maybe<TeamMember>;
  /** Connection between the RootQuery type and the teamMember type */
  teamMembers?: Maybe<RootQueryToTeamMemberConnection>;
  /** A node in a taxonomy used to group and relate content nodes */
  termNode?: Maybe<TermNode>;
  /** Connection between the RootQuery type and the TermNode type */
  terms?: Maybe<RootQueryToTermNodeConnection>;
  /** A Theme object */
  theme?: Maybe<Theme>;
  /** Connection between the RootQuery type and the Theme type */
  themes?: Maybe<RootQueryToThemeConnection>;
  /** Returns a user */
  user?: Maybe<User>;
  /** Returns a user role */
  userRole?: Maybe<UserRole>;
  /** Connection between the RootQuery type and the UserRole type */
  userRoles?: Maybe<RootQueryToUserRoleConnection>;
  /** Connection between the RootQuery type and the User type */
  users?: Maybe<RootQueryToUserConnection>;
  /** Returns the current user */
  viewer?: Maybe<User>;
  /** An object of the work Type. Work information page. */
  work?: Maybe<Work>;
  /**
   * A work object
   * @deprecated Deprecated in favor of using the single entry point for this type with ID and IDType fields. For example, instead of postBy( id: &quot;&quot; ), use post(id: &quot;&quot; idType: &quot;&quot;)
   */
  workBy?: Maybe<Work>;
  /** Connection between the RootQuery type and the workCategory type */
  workCategories?: Maybe<RootQueryToWorkCategoryConnection>;
  /** A 0bject */
  workCategory?: Maybe<WorkCategory>;
  /** Connection between the RootQuery type and the work type */
  works?: Maybe<RootQueryToWorkConnection>;
  /** Fields of the &#039;WritingSettings&#039; settings group */
  writingSettings?: Maybe<WritingSettings>;
};


/** The root entry point into the Graph */
export type RootQueryCategoriesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RootQueryToCategoryConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryCategoryArgs = {
  id: Scalars['ID'];
  idType?: InputMaybe<CategoryIdType>;
};


/** The root entry point into the Graph */
export type RootQueryClientArgs = {
  id: Scalars['ID'];
  idType?: InputMaybe<ClientIdType>;
};


/** The root entry point into the Graph */
export type RootQueryClientsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RootQueryToClientConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryCommentArgs = {
  id: Scalars['ID'];
  idType?: InputMaybe<CommentNodeIdTypeEnum>;
};


/** The root entry point into the Graph */
export type RootQueryCommentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RootQueryToCommentConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryContentNodeArgs = {
  asPreview?: InputMaybe<Scalars['Boolean']>;
  contentType?: InputMaybe<ContentTypeEnum>;
  id: Scalars['ID'];
  idType?: InputMaybe<ContentNodeIdTypeEnum>;
};


/** The root entry point into the Graph */
export type RootQueryContentNodesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RootQueryToContentNodeConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryContentTypeArgs = {
  id: Scalars['ID'];
  idType?: InputMaybe<ContentTypeIdTypeEnum>;
};


/** The root entry point into the Graph */
export type RootQueryContentTypesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** The root entry point into the Graph */
export type RootQueryGfDraftEntryArgs = {
  id: Scalars['ID'];
  idType?: InputMaybe<DraftEntryIdTypeEnum>;
};


/** The root entry point into the Graph */
export type RootQueryGfEntriesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RootQueryToGfEntryConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryGfEntryArgs = {
  id: Scalars['ID'];
  idType?: InputMaybe<EntryIdTypeEnum>;
};


/** The root entry point into the Graph */
export type RootQueryGfFormArgs = {
  id: Scalars['ID'];
  idType?: InputMaybe<FormIdTypeEnum>;
};


/** The root entry point into the Graph */
export type RootQueryGfFormsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RootQueryToGfFormConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryGfSubmittedEntriesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RootQueryToGfSubmittedEntryConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryGfSubmittedEntryArgs = {
  id: Scalars['ID'];
  idType?: InputMaybe<SubmittedEntryIdTypeEnum>;
};


/** The root entry point into the Graph */
export type RootQueryGraphqlDocumentArgs = {
  asPreview?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  idType?: InputMaybe<GraphqlDocumentIdType>;
};


/** The root entry point into the Graph */
export type RootQueryGraphqlDocumentByArgs = {
  graphqlDocumentId?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
  uri?: InputMaybe<Scalars['String']>;
};


/** The root entry point into the Graph */
export type RootQueryGraphqlDocumentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RootQueryToGraphqlDocumentConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryMediaItemArgs = {
  asPreview?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  idType?: InputMaybe<MediaItemIdType>;
};


/** The root entry point into the Graph */
export type RootQueryMediaItemByArgs = {
  id?: InputMaybe<Scalars['ID']>;
  mediaItemId?: InputMaybe<Scalars['Int']>;
  slug?: InputMaybe<Scalars['String']>;
  uri?: InputMaybe<Scalars['String']>;
};


/** The root entry point into the Graph */
export type RootQueryMediaItemsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RootQueryToMediaItemConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryMenuArgs = {
  id: Scalars['ID'];
  idType?: InputMaybe<MenuNodeIdTypeEnum>;
};


/** The root entry point into the Graph */
export type RootQueryMenuItemArgs = {
  id: Scalars['ID'];
  idType?: InputMaybe<MenuItemNodeIdTypeEnum>;
};


/** The root entry point into the Graph */
export type RootQueryMenuItemsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RootQueryToMenuItemConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryMenusArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RootQueryToMenuConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryNodeArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


/** The root entry point into the Graph */
export type RootQueryNodeByUriArgs = {
  uri: Scalars['String'];
};


/** The root entry point into the Graph */
export type RootQueryPageArgs = {
  asPreview?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  idType?: InputMaybe<PageIdType>;
};


/** The root entry point into the Graph */
export type RootQueryPageByArgs = {
  id?: InputMaybe<Scalars['ID']>;
  pageId?: InputMaybe<Scalars['Int']>;
  uri?: InputMaybe<Scalars['String']>;
};


/** The root entry point into the Graph */
export type RootQueryPagesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RootQueryToPageConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryPluginArgs = {
  id: Scalars['ID'];
};


/** The root entry point into the Graph */
export type RootQueryPluginsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RootQueryToPluginConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryPostArgs = {
  asPreview?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  idType?: InputMaybe<PostIdType>;
};


/** The root entry point into the Graph */
export type RootQueryPostByArgs = {
  id?: InputMaybe<Scalars['ID']>;
  postId?: InputMaybe<Scalars['Int']>;
  slug?: InputMaybe<Scalars['String']>;
  uri?: InputMaybe<Scalars['String']>;
};


/** The root entry point into the Graph */
export type RootQueryPostFormatArgs = {
  id: Scalars['ID'];
  idType?: InputMaybe<PostFormatIdType>;
};


/** The root entry point into the Graph */
export type RootQueryPostFormatsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RootQueryToPostFormatConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryPostsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RootQueryToPostConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryPressReleaseArgs = {
  asPreview?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  idType?: InputMaybe<Press_ReleaseIdType>;
};


/** The root entry point into the Graph */
export type RootQueryPressReleaseByArgs = {
  id?: InputMaybe<Scalars['ID']>;
  press_releaseId?: InputMaybe<Scalars['Int']>;
  uri?: InputMaybe<Scalars['String']>;
};


/** The root entry point into the Graph */
export type RootQueryPressReleasesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RootQueryToPress_ReleaseConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryRegisteredScriptsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** The root entry point into the Graph */
export type RootQueryRegisteredStylesheetsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** The root entry point into the Graph */
export type RootQueryRevisionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RootQueryToRevisionsConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryTagArgs = {
  id: Scalars['ID'];
  idType?: InputMaybe<TagIdType>;
};


/** The root entry point into the Graph */
export type RootQueryTagsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RootQueryToTagConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryTaxonomiesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** The root entry point into the Graph */
export type RootQueryTaxonomyArgs = {
  id: Scalars['ID'];
  idType?: InputMaybe<TaxonomyIdTypeEnum>;
};


/** The root entry point into the Graph */
export type RootQueryTeamMemberArgs = {
  asPreview?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  idType?: InputMaybe<TeamMemberIdType>;
};


/** The root entry point into the Graph */
export type RootQueryTeamMemberByArgs = {
  id?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
  teamMemberId?: InputMaybe<Scalars['Int']>;
  uri?: InputMaybe<Scalars['String']>;
};


/** The root entry point into the Graph */
export type RootQueryTeamMembersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RootQueryToTeamMemberConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryTermNodeArgs = {
  id: Scalars['ID'];
  idType?: InputMaybe<TermNodeIdTypeEnum>;
  taxonomy?: InputMaybe<TaxonomyEnum>;
};


/** The root entry point into the Graph */
export type RootQueryTermsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RootQueryToTermNodeConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryThemeArgs = {
  id: Scalars['ID'];
};


/** The root entry point into the Graph */
export type RootQueryThemesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** The root entry point into the Graph */
export type RootQueryUserArgs = {
  id: Scalars['ID'];
  idType?: InputMaybe<UserNodeIdTypeEnum>;
};


/** The root entry point into the Graph */
export type RootQueryUserRoleArgs = {
  id: Scalars['ID'];
};


/** The root entry point into the Graph */
export type RootQueryUserRolesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** The root entry point into the Graph */
export type RootQueryUsersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RootQueryToUserConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryWorkArgs = {
  asPreview?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  idType?: InputMaybe<WorkIdType>;
};


/** The root entry point into the Graph */
export type RootQueryWorkByArgs = {
  id?: InputMaybe<Scalars['ID']>;
  uri?: InputMaybe<Scalars['String']>;
  workId?: InputMaybe<Scalars['Int']>;
};


/** The root entry point into the Graph */
export type RootQueryWorkCategoriesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RootQueryToWorkCategoryConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryWorkCategoryArgs = {
  id: Scalars['ID'];
  idType?: InputMaybe<WorkCategoryIdType>;
};


/** The root entry point into the Graph */
export type RootQueryWorksArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RootQueryToWorkConnectionWhereArgs>;
};

/** Connection between the RootQuery type and the category type */
export type RootQueryToCategoryConnection = CategoryConnection & Connection & {
  __typename?: 'RootQueryToCategoryConnection';
  /** Edges for the RootQueryToCategoryConnection connection */
  edges: Array<RootQueryToCategoryConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<Category>;
  /** Information about pagination in a connection. */
  pageInfo: RootQueryToCategoryConnectionPageInfo;
};

/** An edge in a connection */
export type RootQueryToCategoryConnectionEdge = CategoryConnectionEdge & Edge & {
  __typename?: 'RootQueryToCategoryConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: Category;
};

/** Page Info on the &quot;RootQueryToCategoryConnection&quot; */
export type RootQueryToCategoryConnectionPageInfo = CategoryConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'RootQueryToCategoryConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the RootQueryToCategoryConnection connection */
export type RootQueryToCategoryConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: InputMaybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: InputMaybe<Scalars['Int']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: InputMaybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: InputMaybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: InputMaybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: InputMaybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: InputMaybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Direction the connection should be ordered in */
  order?: InputMaybe<OrderEnum>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: InputMaybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: InputMaybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: InputMaybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: InputMaybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomyId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: InputMaybe<Scalars['Boolean']>;
};

/** Connection between the RootQuery type and the client type */
export type RootQueryToClientConnection = ClientConnection & Connection & {
  __typename?: 'RootQueryToClientConnection';
  /** Edges for the RootQueryToClientConnection connection */
  edges: Array<RootQueryToClientConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<Client>;
  /** Information about pagination in a connection. */
  pageInfo: RootQueryToClientConnectionPageInfo;
};

/** An edge in a connection */
export type RootQueryToClientConnectionEdge = ClientConnectionEdge & Edge & {
  __typename?: 'RootQueryToClientConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: Client;
};

/** Page Info on the &quot;RootQueryToClientConnection&quot; */
export type RootQueryToClientConnectionPageInfo = ClientConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'RootQueryToClientConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the RootQueryToClientConnection connection */
export type RootQueryToClientConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: InputMaybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: InputMaybe<Scalars['Int']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: InputMaybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: InputMaybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: InputMaybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: InputMaybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: InputMaybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Direction the connection should be ordered in */
  order?: InputMaybe<OrderEnum>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: InputMaybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: InputMaybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: InputMaybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: InputMaybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomyId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: InputMaybe<Scalars['Boolean']>;
};

/** Connection between the RootQuery type and the Comment type */
export type RootQueryToCommentConnection = CommentConnection & Connection & {
  __typename?: 'RootQueryToCommentConnection';
  /** Edges for the RootQueryToCommentConnection connection */
  edges: Array<RootQueryToCommentConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<Comment>;
  /** Information about pagination in a connection. */
  pageInfo: RootQueryToCommentConnectionPageInfo;
};

/** An edge in a connection */
export type RootQueryToCommentConnectionEdge = CommentConnectionEdge & Edge & {
  __typename?: 'RootQueryToCommentConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: Comment;
};

/** Page Info on the &quot;RootQueryToCommentConnection&quot; */
export type RootQueryToCommentConnectionPageInfo = CommentConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'RootQueryToCommentConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the RootQueryToCommentConnection connection */
export type RootQueryToCommentConnectionWhereArgs = {
  /** Comment author email address. */
  authorEmail?: InputMaybe<Scalars['String']>;
  /** Array of author IDs to include comments for. */
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of author IDs to exclude comments for. */
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Comment author URL. */
  authorUrl?: InputMaybe<Scalars['String']>;
  /** Array of comment IDs to include. */
  commentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
  commentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Include comments of a given type. */
  commentType?: InputMaybe<Scalars['String']>;
  /** Include comments from a given array of comment types. */
  commentTypeIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Exclude comments from a given array of comment types. */
  commentTypeNotIn?: InputMaybe<Scalars['String']>;
  /** Content object author ID to limit results by. */
  contentAuthor?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of author IDs to retrieve comments for. */
  contentAuthorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of author IDs *not* to retrieve comments for. */
  contentAuthorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Limit results to those affiliated with a given content object ID. */
  contentId?: InputMaybe<Scalars['ID']>;
  /** Array of content object IDs to include affiliated comments for. */
  contentIdIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of content object IDs to exclude affiliated comments for. */
  contentIdNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Content object name (i.e. slug ) to retrieve affiliated comments for. */
  contentName?: InputMaybe<Scalars['String']>;
  /** Content Object parent ID to retrieve affiliated comments for. */
  contentParent?: InputMaybe<Scalars['Int']>;
  /** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentStatus?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentType?: InputMaybe<Array<InputMaybe<ContentTypeEnum>>>;
  /** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
  includeUnapproved?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Karma score to retrieve matching comments for. */
  karma?: InputMaybe<Scalars['Int']>;
  /** The cardinality of the order of the connection */
  order?: InputMaybe<OrderEnum>;
  /** Field to order the comments by. */
  orderby?: InputMaybe<CommentsConnectionOrderbyEnum>;
  /** Parent ID of comment to retrieve children of. */
  parent?: InputMaybe<Scalars['Int']>;
  /** Array of parent IDs of comments to retrieve children for. */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of parent IDs of comments *not* to retrieve children for. */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Search term(s) to retrieve matching comments for. */
  search?: InputMaybe<Scalars['String']>;
  /** Comment status to limit results by. */
  status?: InputMaybe<Scalars['String']>;
  /** Include comments for a specific user ID. */
  userId?: InputMaybe<Scalars['ID']>;
};

/** Connection between the RootQuery type and the ContentNode type */
export type RootQueryToContentNodeConnection = Connection & ContentNodeConnection & {
  __typename?: 'RootQueryToContentNodeConnection';
  /** Edges for the RootQueryToContentNodeConnection connection */
  edges: Array<RootQueryToContentNodeConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<ContentNode>;
  /** Information about pagination in a connection. */
  pageInfo: RootQueryToContentNodeConnectionPageInfo;
};

/** An edge in a connection */
export type RootQueryToContentNodeConnectionEdge = ContentNodeConnectionEdge & Edge & {
  __typename?: 'RootQueryToContentNodeConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: ContentNode;
};

/** Page Info on the &quot;RootQueryToContentNodeConnection&quot; */
export type RootQueryToContentNodeConnectionPageInfo = ContentNodeConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'RootQueryToContentNodeConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the RootQueryToContentNodeConnection connection */
export type RootQueryToContentNodeConnectionWhereArgs = {
  /** The Types of content to filter */
  contentTypes?: InputMaybe<Array<InputMaybe<ContentTypeEnum>>>;
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']>;
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>;
  /** Title of the object */
  title?: InputMaybe<Scalars['String']>;
};

/** Connection between the RootQuery type and the ContentType type */
export type RootQueryToContentTypeConnection = Connection & ContentTypeConnection & {
  __typename?: 'RootQueryToContentTypeConnection';
  /** Edges for the RootQueryToContentTypeConnection connection */
  edges: Array<RootQueryToContentTypeConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<ContentType>;
  /** Information about pagination in a connection. */
  pageInfo: RootQueryToContentTypeConnectionPageInfo;
};

/** An edge in a connection */
export type RootQueryToContentTypeConnectionEdge = ContentTypeConnectionEdge & Edge & {
  __typename?: 'RootQueryToContentTypeConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: ContentType;
};

/** Page Info on the &quot;RootQueryToContentTypeConnection&quot; */
export type RootQueryToContentTypeConnectionPageInfo = ContentTypeConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'RootQueryToContentTypeConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Connection between the RootQuery type and the EnqueuedScript type */
export type RootQueryToEnqueuedScriptConnection = Connection & EnqueuedScriptConnection & {
  __typename?: 'RootQueryToEnqueuedScriptConnection';
  /** Edges for the RootQueryToEnqueuedScriptConnection connection */
  edges: Array<RootQueryToEnqueuedScriptConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<EnqueuedScript>;
  /** Information about pagination in a connection. */
  pageInfo: RootQueryToEnqueuedScriptConnectionPageInfo;
};

/** An edge in a connection */
export type RootQueryToEnqueuedScriptConnectionEdge = Edge & EnqueuedScriptConnectionEdge & {
  __typename?: 'RootQueryToEnqueuedScriptConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: EnqueuedScript;
};

/** Page Info on the &quot;RootQueryToEnqueuedScriptConnection&quot; */
export type RootQueryToEnqueuedScriptConnectionPageInfo = EnqueuedScriptConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'RootQueryToEnqueuedScriptConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Connection between the RootQuery type and the EnqueuedStylesheet type */
export type RootQueryToEnqueuedStylesheetConnection = Connection & EnqueuedStylesheetConnection & {
  __typename?: 'RootQueryToEnqueuedStylesheetConnection';
  /** Edges for the RootQueryToEnqueuedStylesheetConnection connection */
  edges: Array<RootQueryToEnqueuedStylesheetConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<EnqueuedStylesheet>;
  /** Information about pagination in a connection. */
  pageInfo: RootQueryToEnqueuedStylesheetConnectionPageInfo;
};

/** An edge in a connection */
export type RootQueryToEnqueuedStylesheetConnectionEdge = Edge & EnqueuedStylesheetConnectionEdge & {
  __typename?: 'RootQueryToEnqueuedStylesheetConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: EnqueuedStylesheet;
};

/** Page Info on the &quot;RootQueryToEnqueuedStylesheetConnection&quot; */
export type RootQueryToEnqueuedStylesheetConnectionPageInfo = EnqueuedStylesheetConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'RootQueryToEnqueuedStylesheetConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Connection between the RootQuery type and the GfEntry type */
export type RootQueryToGfEntryConnection = Connection & GfEntryConnection & {
  __typename?: 'RootQueryToGfEntryConnection';
  /** Edges for the RootQueryToGfEntryConnection connection */
  edges: Array<RootQueryToGfEntryConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<GfEntry>;
  /** Information about pagination in a connection. */
  pageInfo: RootQueryToGfEntryConnectionPageInfo;
};

/** An edge in a connection */
export type RootQueryToGfEntryConnectionEdge = Edge & GfEntryConnectionEdge & {
  __typename?: 'RootQueryToGfEntryConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: GfEntry;
};

/** Page Info on the &quot;RootQueryToGfEntryConnection&quot; */
export type RootQueryToGfEntryConnectionPageInfo = GfEntryConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'RootQueryToGfEntryConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the RootQueryToGfEntryConnection connection */
export type RootQueryToGfEntryConnectionWhereArgs = {
  /** Date filters to apply. */
  dateFilters?: InputMaybe<EntriesDateFiltersInput>;
  /** Entry status. Default is `SUBMITTED`. Currently no other types are supported. */
  entryType?: InputMaybe<EntryTypeEnum>;
  /** Field-specific filters to apply. */
  fieldFilters?: InputMaybe<Array<InputMaybe<EntriesFieldFiltersInput>>>;
  /** Whether to filter by ALL or ANY of the field filters. Default is ALL. */
  fieldFiltersMode?: InputMaybe<FieldFiltersModeEnum>;
  /** Array of form IDs to limit the entries to. Exclude this argument to query all forms. */
  formIds?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** How to sort the entries. */
  orderby?: InputMaybe<EntriesConnectionOrderbyInput>;
  /** Entry status. Default is "ACTIVE". */
  status?: InputMaybe<EntryStatusEnum>;
};

/** Connection between the RootQuery type and the GfForm type */
export type RootQueryToGfFormConnection = Connection & GfFormConnection & {
  __typename?: 'RootQueryToGfFormConnection';
  /** Edges for the RootQueryToGfFormConnection connection */
  edges: Array<RootQueryToGfFormConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<GfForm>;
  /** Information about pagination in a connection. */
  pageInfo: RootQueryToGfFormConnectionPageInfo;
};

/** An edge in a connection */
export type RootQueryToGfFormConnectionEdge = Edge & GfFormConnectionEdge & {
  __typename?: 'RootQueryToGfFormConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: GfForm;
};

/** Page Info on the &quot;RootQueryToGfFormConnection&quot; */
export type RootQueryToGfFormConnectionPageInfo = GfFormConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'RootQueryToGfFormConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the RootQueryToGfFormConnection connection */
export type RootQueryToGfFormConnectionWhereArgs = {
  /** Array of form database IDs to return. Exclude this argument to query all forms. */
  formIds?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** How to sort the entries. */
  orderby?: InputMaybe<FormsConnectionOrderbyInput>;
  /** Status of the forms to get. */
  status?: InputMaybe<FormStatusEnum>;
};

/** Connection between the RootQuery type and the GfSubmittedEntry type */
export type RootQueryToGfSubmittedEntryConnection = Connection & GfSubmittedEntryConnection & {
  __typename?: 'RootQueryToGfSubmittedEntryConnection';
  /** Edges for the RootQueryToGfSubmittedEntryConnection connection */
  edges: Array<RootQueryToGfSubmittedEntryConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<GfSubmittedEntry>;
  /** Information about pagination in a connection. */
  pageInfo: RootQueryToGfSubmittedEntryConnectionPageInfo;
};

/** An edge in a connection */
export type RootQueryToGfSubmittedEntryConnectionEdge = Edge & GfSubmittedEntryConnectionEdge & {
  __typename?: 'RootQueryToGfSubmittedEntryConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: GfSubmittedEntry;
};

/** Page Info on the &quot;RootQueryToGfSubmittedEntryConnection&quot; */
export type RootQueryToGfSubmittedEntryConnectionPageInfo = GfSubmittedEntryConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'RootQueryToGfSubmittedEntryConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the RootQueryToGfSubmittedEntryConnection connection */
export type RootQueryToGfSubmittedEntryConnectionWhereArgs = {
  /** Date filters to apply. */
  dateFilters?: InputMaybe<EntriesDateFiltersInput>;
  /** Field-specific filters to apply. */
  fieldFilters?: InputMaybe<Array<InputMaybe<EntriesFieldFiltersInput>>>;
  /** Whether to filter by ALL or ANY of the field filters. Default is ALL. */
  fieldFiltersMode?: InputMaybe<FieldFiltersModeEnum>;
  /** Array of form IDs to limit the entries to. Exclude this argument to query all forms. */
  formIds?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** How to sort the entries. */
  orderby?: InputMaybe<EntriesConnectionOrderbyInput>;
  /** Entry status. Default is "ACTIVE". */
  status?: InputMaybe<EntryStatusEnum>;
};

/** Connection between the RootQuery type and the graphqlDocument type */
export type RootQueryToGraphqlDocumentConnection = Connection & GraphqlDocumentConnection & {
  __typename?: 'RootQueryToGraphqlDocumentConnection';
  /** Edges for the RootQueryToGraphqlDocumentConnection connection */
  edges: Array<RootQueryToGraphqlDocumentConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<GraphqlDocument>;
  /** Information about pagination in a connection. */
  pageInfo: RootQueryToGraphqlDocumentConnectionPageInfo;
};

/** An edge in a connection */
export type RootQueryToGraphqlDocumentConnectionEdge = Edge & GraphqlDocumentConnectionEdge & {
  __typename?: 'RootQueryToGraphqlDocumentConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: GraphqlDocument;
};

/** Page Info on the &quot;RootQueryToGraphqlDocumentConnection&quot; */
export type RootQueryToGraphqlDocumentConnectionPageInfo = GraphqlDocumentConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'RootQueryToGraphqlDocumentConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the RootQueryToGraphqlDocumentConnection connection */
export type RootQueryToGraphqlDocumentConnectionWhereArgs = {
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']>;
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>;
  /** Title of the object */
  title?: InputMaybe<Scalars['String']>;
};

/** Connection between the RootQuery type and the mediaItem type */
export type RootQueryToMediaItemConnection = Connection & MediaItemConnection & {
  __typename?: 'RootQueryToMediaItemConnection';
  /** Edges for the RootQueryToMediaItemConnection connection */
  edges: Array<RootQueryToMediaItemConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<MediaItem>;
  /** Information about pagination in a connection. */
  pageInfo: RootQueryToMediaItemConnectionPageInfo;
};

/** An edge in a connection */
export type RootQueryToMediaItemConnectionEdge = Edge & MediaItemConnectionEdge & {
  __typename?: 'RootQueryToMediaItemConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: MediaItem;
};

/** Page Info on the &quot;RootQueryToMediaItemConnection&quot; */
export type RootQueryToMediaItemConnectionPageInfo = MediaItemConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'RootQueryToMediaItemConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the RootQueryToMediaItemConnection connection */
export type RootQueryToMediaItemConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: InputMaybe<Scalars['Int']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: InputMaybe<Scalars['String']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']>;
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>;
  /** Title of the object */
  title?: InputMaybe<Scalars['String']>;
};

/** Connection between the RootQuery type and the Menu type */
export type RootQueryToMenuConnection = Connection & MenuConnection & {
  __typename?: 'RootQueryToMenuConnection';
  /** Edges for the RootQueryToMenuConnection connection */
  edges: Array<RootQueryToMenuConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<Menu>;
  /** Information about pagination in a connection. */
  pageInfo: RootQueryToMenuConnectionPageInfo;
};

/** An edge in a connection */
export type RootQueryToMenuConnectionEdge = Edge & MenuConnectionEdge & {
  __typename?: 'RootQueryToMenuConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: Menu;
};

/** Page Info on the &quot;RootQueryToMenuConnection&quot; */
export type RootQueryToMenuConnectionPageInfo = MenuConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'RootQueryToMenuConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the RootQueryToMenuConnection connection */
export type RootQueryToMenuConnectionWhereArgs = {
  /** The database ID of the object */
  id?: InputMaybe<Scalars['Int']>;
  /** The menu location for the menu being queried */
  location?: InputMaybe<MenuLocationEnum>;
  /** The slug of the menu to query items for */
  slug?: InputMaybe<Scalars['String']>;
};

/** Connection between the RootQuery type and the MenuItem type */
export type RootQueryToMenuItemConnection = Connection & MenuItemConnection & {
  __typename?: 'RootQueryToMenuItemConnection';
  /** Edges for the RootQueryToMenuItemConnection connection */
  edges: Array<RootQueryToMenuItemConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<MenuItem>;
  /** Information about pagination in a connection. */
  pageInfo: RootQueryToMenuItemConnectionPageInfo;
};

/** An edge in a connection */
export type RootQueryToMenuItemConnectionEdge = Edge & MenuItemConnectionEdge & {
  __typename?: 'RootQueryToMenuItemConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: MenuItem;
};

/** Page Info on the &quot;RootQueryToMenuItemConnection&quot; */
export type RootQueryToMenuItemConnectionPageInfo = MenuItemConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'RootQueryToMenuItemConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the RootQueryToMenuItemConnection connection */
export type RootQueryToMenuItemConnectionWhereArgs = {
  /** The database ID of the object */
  id?: InputMaybe<Scalars['Int']>;
  /** The menu location for the menu being queried */
  location?: InputMaybe<MenuLocationEnum>;
  /** The database ID of the parent menu object */
  parentDatabaseId?: InputMaybe<Scalars['Int']>;
  /** The ID of the parent menu object */
  parentId?: InputMaybe<Scalars['ID']>;
};

/** Connection between the RootQuery type and the page type */
export type RootQueryToPageConnection = Connection & PageConnection & {
  __typename?: 'RootQueryToPageConnection';
  /** Edges for the RootQueryToPageConnection connection */
  edges: Array<RootQueryToPageConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<Page>;
  /** Information about pagination in a connection. */
  pageInfo: RootQueryToPageConnectionPageInfo;
};

/** An edge in a connection */
export type RootQueryToPageConnectionEdge = Edge & PageConnectionEdge & {
  __typename?: 'RootQueryToPageConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: Page;
};

/** Page Info on the &quot;RootQueryToPageConnection&quot; */
export type RootQueryToPageConnectionPageInfo = PageConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'RootQueryToPageConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the RootQueryToPageConnection connection */
export type RootQueryToPageConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: InputMaybe<Scalars['Int']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: InputMaybe<Scalars['String']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']>;
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>;
  /** Title of the object */
  title?: InputMaybe<Scalars['String']>;
};

/** Connection between the RootQuery type and the Plugin type */
export type RootQueryToPluginConnection = Connection & PluginConnection & {
  __typename?: 'RootQueryToPluginConnection';
  /** Edges for the RootQueryToPluginConnection connection */
  edges: Array<RootQueryToPluginConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<Plugin>;
  /** Information about pagination in a connection. */
  pageInfo: RootQueryToPluginConnectionPageInfo;
};

/** An edge in a connection */
export type RootQueryToPluginConnectionEdge = Edge & PluginConnectionEdge & {
  __typename?: 'RootQueryToPluginConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: Plugin;
};

/** Page Info on the &quot;RootQueryToPluginConnection&quot; */
export type RootQueryToPluginConnectionPageInfo = PageInfo & PluginConnectionPageInfo & WpPageInfo & {
  __typename?: 'RootQueryToPluginConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the RootQueryToPluginConnection connection */
export type RootQueryToPluginConnectionWhereArgs = {
  /** Show plugin based on a keyword search. */
  search?: InputMaybe<Scalars['String']>;
  /** Retrieve plugins where plugin status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PluginStatusEnum>>>;
  /** Show plugins with a specific status. */
  status?: InputMaybe<PluginStatusEnum>;
};

/** Connection between the RootQuery type and the post type */
export type RootQueryToPostConnection = Connection & PostConnection & {
  __typename?: 'RootQueryToPostConnection';
  /** Edges for the RootQueryToPostConnection connection */
  edges: Array<RootQueryToPostConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<Post>;
  /** Information about pagination in a connection. */
  pageInfo: RootQueryToPostConnectionPageInfo;
};

/** An edge in a connection */
export type RootQueryToPostConnectionEdge = Edge & PostConnectionEdge & {
  __typename?: 'RootQueryToPostConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: Post;
};

/** Page Info on the &quot;RootQueryToPostConnection&quot; */
export type RootQueryToPostConnectionPageInfo = PageInfo & PostConnectionPageInfo & WpPageInfo & {
  __typename?: 'RootQueryToPostConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the RootQueryToPostConnection connection */
export type RootQueryToPostConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: InputMaybe<Scalars['Int']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: InputMaybe<Scalars['String']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Category ID */
  categoryId?: InputMaybe<Scalars['Int']>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Use Category Slug */
  categoryName?: InputMaybe<Scalars['String']>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']>;
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>;
  /** Tag Slug */
  tag?: InputMaybe<Scalars['String']>;
  /** Use Tag ID */
  tagId?: InputMaybe<Scalars['String']>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of tag slugs, used to display objects from one tag AND another */
  tagSlugAnd?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Array of tag slugs, used to include objects in ANY specified tags */
  tagSlugIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Title of the object */
  title?: InputMaybe<Scalars['String']>;
};

/** Connection between the RootQuery type and the postFormat type */
export type RootQueryToPostFormatConnection = Connection & PostFormatConnection & {
  __typename?: 'RootQueryToPostFormatConnection';
  /** Edges for the RootQueryToPostFormatConnection connection */
  edges: Array<RootQueryToPostFormatConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<PostFormat>;
  /** Information about pagination in a connection. */
  pageInfo: RootQueryToPostFormatConnectionPageInfo;
};

/** An edge in a connection */
export type RootQueryToPostFormatConnectionEdge = Edge & PostFormatConnectionEdge & {
  __typename?: 'RootQueryToPostFormatConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: PostFormat;
};

/** Page Info on the &quot;RootQueryToPostFormatConnection&quot; */
export type RootQueryToPostFormatConnectionPageInfo = PageInfo & PostFormatConnectionPageInfo & WpPageInfo & {
  __typename?: 'RootQueryToPostFormatConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the RootQueryToPostFormatConnection connection */
export type RootQueryToPostFormatConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: InputMaybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: InputMaybe<Scalars['Int']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: InputMaybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: InputMaybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: InputMaybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: InputMaybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: InputMaybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Direction the connection should be ordered in */
  order?: InputMaybe<OrderEnum>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: InputMaybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: InputMaybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: InputMaybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: InputMaybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomyId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: InputMaybe<Scalars['Boolean']>;
};

/** Connection between the RootQuery type and the press_release type */
export type RootQueryToPress_ReleaseConnection = Connection & {
  __typename?: 'RootQueryToPress_releaseConnection';
  /** Edges for the RootQueryToPress_releaseConnection connection */
  edges: Array<RootQueryToPress_ReleaseConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<Press_Release>;
  /** Information about pagination in a connection. */
  pageInfo: RootQueryToPress_ReleaseConnectionPageInfo;
};

/** An edge in a connection */
export type RootQueryToPress_ReleaseConnectionEdge = Edge & PressReleaseConnectionEdge & {
  __typename?: 'RootQueryToPress_releaseConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: Press_Release;
};

/** Page Info on the &quot;RootQueryToPress_releaseConnection&quot; */
export type RootQueryToPress_ReleaseConnectionPageInfo = PageInfo & Press_ReleaseConnectionPageInfo & WpPageInfo & {
  __typename?: 'RootQueryToPress_releaseConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the RootQueryToPress_releaseConnection connection */
export type RootQueryToPress_ReleaseConnectionWhereArgs = {
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']>;
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>;
  /** Title of the object */
  title?: InputMaybe<Scalars['String']>;
};

/** Connection between the RootQuery type and the ContentNode type */
export type RootQueryToRevisionsConnection = Connection & ContentNodeConnection & {
  __typename?: 'RootQueryToRevisionsConnection';
  /** Edges for the RootQueryToRevisionsConnection connection */
  edges: Array<RootQueryToRevisionsConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<ContentNode>;
  /** Information about pagination in a connection. */
  pageInfo: RootQueryToRevisionsConnectionPageInfo;
};

/** An edge in a connection */
export type RootQueryToRevisionsConnectionEdge = ContentNodeConnectionEdge & Edge & {
  __typename?: 'RootQueryToRevisionsConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: ContentNode;
};

/** Page Info on the &quot;RootQueryToRevisionsConnection&quot; */
export type RootQueryToRevisionsConnectionPageInfo = ContentNodeConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'RootQueryToRevisionsConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the RootQueryToRevisionsConnection connection */
export type RootQueryToRevisionsConnectionWhereArgs = {
  /** The Types of content to filter */
  contentTypes?: InputMaybe<Array<InputMaybe<ContentTypeEnum>>>;
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']>;
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>;
  /** Title of the object */
  title?: InputMaybe<Scalars['String']>;
};

/** Connection between the RootQuery type and the tag type */
export type RootQueryToTagConnection = Connection & TagConnection & {
  __typename?: 'RootQueryToTagConnection';
  /** Edges for the RootQueryToTagConnection connection */
  edges: Array<RootQueryToTagConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<Tag>;
  /** Information about pagination in a connection. */
  pageInfo: RootQueryToTagConnectionPageInfo;
};

/** An edge in a connection */
export type RootQueryToTagConnectionEdge = Edge & TagConnectionEdge & {
  __typename?: 'RootQueryToTagConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: Tag;
};

/** Page Info on the &quot;RootQueryToTagConnection&quot; */
export type RootQueryToTagConnectionPageInfo = PageInfo & TagConnectionPageInfo & WpPageInfo & {
  __typename?: 'RootQueryToTagConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the RootQueryToTagConnection connection */
export type RootQueryToTagConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: InputMaybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: InputMaybe<Scalars['Int']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: InputMaybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: InputMaybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: InputMaybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: InputMaybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: InputMaybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Direction the connection should be ordered in */
  order?: InputMaybe<OrderEnum>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: InputMaybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: InputMaybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: InputMaybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: InputMaybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomyId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: InputMaybe<Scalars['Boolean']>;
};

/** Connection between the RootQuery type and the Taxonomy type */
export type RootQueryToTaxonomyConnection = Connection & TaxonomyConnection & {
  __typename?: 'RootQueryToTaxonomyConnection';
  /** Edges for the RootQueryToTaxonomyConnection connection */
  edges: Array<RootQueryToTaxonomyConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<Taxonomy>;
  /** Information about pagination in a connection. */
  pageInfo: RootQueryToTaxonomyConnectionPageInfo;
};

/** An edge in a connection */
export type RootQueryToTaxonomyConnectionEdge = Edge & TaxonomyConnectionEdge & {
  __typename?: 'RootQueryToTaxonomyConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: Taxonomy;
};

/** Page Info on the &quot;RootQueryToTaxonomyConnection&quot; */
export type RootQueryToTaxonomyConnectionPageInfo = PageInfo & TaxonomyConnectionPageInfo & WpPageInfo & {
  __typename?: 'RootQueryToTaxonomyConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Connection between the RootQuery type and the teamMember type */
export type RootQueryToTeamMemberConnection = Connection & TeamMemberConnection & {
  __typename?: 'RootQueryToTeamMemberConnection';
  /** Edges for the RootQueryToTeamMemberConnection connection */
  edges: Array<RootQueryToTeamMemberConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<TeamMember>;
  /** Information about pagination in a connection. */
  pageInfo: RootQueryToTeamMemberConnectionPageInfo;
};

/** An edge in a connection */
export type RootQueryToTeamMemberConnectionEdge = Edge & TeamMemberConnectionEdge & {
  __typename?: 'RootQueryToTeamMemberConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: TeamMember;
};

/** Page Info on the &quot;RootQueryToTeamMemberConnection&quot; */
export type RootQueryToTeamMemberConnectionPageInfo = PageInfo & TeamMemberConnectionPageInfo & WpPageInfo & {
  __typename?: 'RootQueryToTeamMemberConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the RootQueryToTeamMemberConnection connection */
export type RootQueryToTeamMemberConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: InputMaybe<Scalars['Int']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: InputMaybe<Scalars['String']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']>;
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>;
  /** Title of the object */
  title?: InputMaybe<Scalars['String']>;
};

/** Connection between the RootQuery type and the TermNode type */
export type RootQueryToTermNodeConnection = Connection & TermNodeConnection & {
  __typename?: 'RootQueryToTermNodeConnection';
  /** Edges for the RootQueryToTermNodeConnection connection */
  edges: Array<RootQueryToTermNodeConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<TermNode>;
  /** Information about pagination in a connection. */
  pageInfo: RootQueryToTermNodeConnectionPageInfo;
};

/** An edge in a connection */
export type RootQueryToTermNodeConnectionEdge = Edge & TermNodeConnectionEdge & {
  __typename?: 'RootQueryToTermNodeConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: TermNode;
};

/** Page Info on the &quot;RootQueryToTermNodeConnection&quot; */
export type RootQueryToTermNodeConnectionPageInfo = PageInfo & TermNodeConnectionPageInfo & WpPageInfo & {
  __typename?: 'RootQueryToTermNodeConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the RootQueryToTermNodeConnection connection */
export type RootQueryToTermNodeConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: InputMaybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: InputMaybe<Scalars['Int']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: InputMaybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: InputMaybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: InputMaybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: InputMaybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: InputMaybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Direction the connection should be ordered in */
  order?: InputMaybe<OrderEnum>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: InputMaybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: InputMaybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: InputMaybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: InputMaybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** The Taxonomy to filter terms by */
  taxonomies?: InputMaybe<Array<InputMaybe<TaxonomyEnum>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomyId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: InputMaybe<Scalars['Boolean']>;
};

/** Connection between the RootQuery type and the Theme type */
export type RootQueryToThemeConnection = Connection & ThemeConnection & {
  __typename?: 'RootQueryToThemeConnection';
  /** Edges for the RootQueryToThemeConnection connection */
  edges: Array<RootQueryToThemeConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<Theme>;
  /** Information about pagination in a connection. */
  pageInfo: RootQueryToThemeConnectionPageInfo;
};

/** An edge in a connection */
export type RootQueryToThemeConnectionEdge = Edge & ThemeConnectionEdge & {
  __typename?: 'RootQueryToThemeConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: Theme;
};

/** Page Info on the &quot;RootQueryToThemeConnection&quot; */
export type RootQueryToThemeConnectionPageInfo = PageInfo & ThemeConnectionPageInfo & WpPageInfo & {
  __typename?: 'RootQueryToThemeConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Connection between the RootQuery type and the User type */
export type RootQueryToUserConnection = Connection & UserConnection & {
  __typename?: 'RootQueryToUserConnection';
  /** Edges for the RootQueryToUserConnection connection */
  edges: Array<RootQueryToUserConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<User>;
  /** Information about pagination in a connection. */
  pageInfo: RootQueryToUserConnectionPageInfo;
};

/** An edge in a connection */
export type RootQueryToUserConnectionEdge = Edge & UserConnectionEdge & {
  __typename?: 'RootQueryToUserConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: User;
};

/** Page Info on the &quot;RootQueryToUserConnection&quot; */
export type RootQueryToUserConnectionPageInfo = PageInfo & UserConnectionPageInfo & WpPageInfo & {
  __typename?: 'RootQueryToUserConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the RootQueryToUserConnection connection */
export type RootQueryToUserConnectionWhereArgs = {
  /** Array of userIds to exclude. */
  exclude?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** Pass an array of post types to filter results to users who have published posts in those post types. */
  hasPublishedPosts?: InputMaybe<Array<InputMaybe<ContentTypeEnum>>>;
  /** Array of userIds to include. */
  include?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** The user login. */
  login?: InputMaybe<Scalars['String']>;
  /** An array of logins to include. Users matching one of these logins will be included in results. */
  loginIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** An array of logins to exclude. Users matching one of these logins will not be included in results. */
  loginNotIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** The user nicename. */
  nicename?: InputMaybe<Scalars['String']>;
  /** An array of nicenames to include. Users matching one of these nicenames will be included in results. */
  nicenameIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** An array of nicenames to exclude. Users matching one of these nicenames will not be included in results. */
  nicenameNotIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<UsersConnectionOrderbyInput>>>;
  /** An array of role names that users must match to be included in results. Note that this is an inclusive list: users must match *each* role. */
  role?: InputMaybe<UserRoleEnum>;
  /** An array of role names. Matched users must have at least one of these roles. */
  roleIn?: InputMaybe<Array<InputMaybe<UserRoleEnum>>>;
  /** An array of role names to exclude. Users matching one or more of these roles will not be included in results. */
  roleNotIn?: InputMaybe<Array<InputMaybe<UserRoleEnum>>>;
  /** Search keyword. Searches for possible string matches on columns. When "searchColumns" is left empty, it tries to determine which column to search in based on search string. */
  search?: InputMaybe<Scalars['String']>;
  /** Array of column names to be searched. Accepts 'ID', 'login', 'nicename', 'email', 'url'. */
  searchColumns?: InputMaybe<Array<InputMaybe<UsersConnectionSearchColumnEnum>>>;
};

/** Connection between the RootQuery type and the UserRole type */
export type RootQueryToUserRoleConnection = Connection & UserRoleConnection & {
  __typename?: 'RootQueryToUserRoleConnection';
  /** Edges for the RootQueryToUserRoleConnection connection */
  edges: Array<RootQueryToUserRoleConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<UserRole>;
  /** Information about pagination in a connection. */
  pageInfo: RootQueryToUserRoleConnectionPageInfo;
};

/** An edge in a connection */
export type RootQueryToUserRoleConnectionEdge = Edge & UserRoleConnectionEdge & {
  __typename?: 'RootQueryToUserRoleConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: UserRole;
};

/** Page Info on the &quot;RootQueryToUserRoleConnection&quot; */
export type RootQueryToUserRoleConnectionPageInfo = PageInfo & UserRoleConnectionPageInfo & WpPageInfo & {
  __typename?: 'RootQueryToUserRoleConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Connection between the RootQuery type and the workCategory type */
export type RootQueryToWorkCategoryConnection = Connection & WorkCategoryConnection & {
  __typename?: 'RootQueryToWorkCategoryConnection';
  /** Edges for the RootQueryToWorkCategoryConnection connection */
  edges: Array<RootQueryToWorkCategoryConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<WorkCategory>;
  /** Information about pagination in a connection. */
  pageInfo: RootQueryToWorkCategoryConnectionPageInfo;
};

/** An edge in a connection */
export type RootQueryToWorkCategoryConnectionEdge = Edge & WorkCategoryConnectionEdge & {
  __typename?: 'RootQueryToWorkCategoryConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: WorkCategory;
};

/** Page Info on the &quot;RootQueryToWorkCategoryConnection&quot; */
export type RootQueryToWorkCategoryConnectionPageInfo = PageInfo & WpPageInfo & WorkCategoryConnectionPageInfo & {
  __typename?: 'RootQueryToWorkCategoryConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the RootQueryToWorkCategoryConnection connection */
export type RootQueryToWorkCategoryConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: InputMaybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: InputMaybe<Scalars['Int']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: InputMaybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: InputMaybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: InputMaybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: InputMaybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: InputMaybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Direction the connection should be ordered in */
  order?: InputMaybe<OrderEnum>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: InputMaybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: InputMaybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: InputMaybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: InputMaybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomyId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: InputMaybe<Scalars['Boolean']>;
};

/** Connection between the RootQuery type and the work type */
export type RootQueryToWorkConnection = Connection & WorkConnection & {
  __typename?: 'RootQueryToWorkConnection';
  /** Edges for the RootQueryToWorkConnection connection */
  edges: Array<RootQueryToWorkConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<Work>;
  /** Information about pagination in a connection. */
  pageInfo: RootQueryToWorkConnectionPageInfo;
};

/** An edge in a connection */
export type RootQueryToWorkConnectionEdge = Edge & WorkConnectionEdge & {
  __typename?: 'RootQueryToWorkConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: Work;
};

/** Page Info on the &quot;RootQueryToWorkConnection&quot; */
export type RootQueryToWorkConnectionPageInfo = PageInfo & WpPageInfo & WorkConnectionPageInfo & {
  __typename?: 'RootQueryToWorkConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the RootQueryToWorkConnection connection */
export type RootQueryToWorkConnectionWhereArgs = {
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']>;
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>;
  /** Title of the object */
  title?: InputMaybe<Scalars['String']>;
};

/** The Yoast SEO breadcrumb config */
export type SeoBreadcrumbs = {
  __typename?: 'SEOBreadcrumbs';
  archivePrefix?: Maybe<Scalars['String']>;
  boldLast?: Maybe<Scalars['Boolean']>;
  enabled?: Maybe<Scalars['Boolean']>;
  homeText?: Maybe<Scalars['String']>;
  notFoundText?: Maybe<Scalars['String']>;
  prefix?: Maybe<Scalars['String']>;
  searchPrefix?: Maybe<Scalars['String']>;
  separator?: Maybe<Scalars['String']>;
  showBlogPage?: Maybe<Scalars['Boolean']>;
};

/** Types of cards */
export enum SeoCardType {
  Summary = 'summary',
  SummaryLargeImage = 'summary_large_image'
}

/** The Yoast SEO site level configuration data */
export type SeoConfig = {
  __typename?: 'SEOConfig';
  breadcrumbs?: Maybe<SeoBreadcrumbs>;
  contentTypes?: Maybe<SeoContentTypes>;
  meta?: Maybe<SeoGlobalMeta>;
  openGraph?: Maybe<SeoOpenGraph>;
  redirects?: Maybe<Array<Maybe<SeoRedirect>>>;
  schema?: Maybe<SeoSchema>;
  social?: Maybe<SeoSocial>;
  webmaster?: Maybe<SeoWebmaster>;
};

/** The Yoast SEO search appearance content types fields */
export type SeoContentType = {
  __typename?: 'SEOContentType';
  archive?: Maybe<SeoContentTypeArchive>;
  metaDesc?: Maybe<Scalars['String']>;
  metaRobotsNoindex?: Maybe<Scalars['Boolean']>;
  schema?: Maybe<SeoPageInfoSchema>;
  schemaType?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

/** The Yoast SEO search appearance content types fields */
export type SeoContentTypeArchive = {
  __typename?: 'SEOContentTypeArchive';
  archiveLink?: Maybe<Scalars['String']>;
  breadcrumbTitle?: Maybe<Scalars['String']>;
  fullHead?: Maybe<Scalars['String']>;
  hasArchive?: Maybe<Scalars['Boolean']>;
  metaDesc?: Maybe<Scalars['String']>;
  metaRobotsFollow?: Maybe<Scalars['String']>;
  metaRobotsIndex?: Maybe<Scalars['String']>;
  metaRobotsNofollow?: Maybe<Scalars['Boolean']>;
  metaRobotsNoindex?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
};

/** The Yoast SEO search appearance content types */
export type SeoContentTypes = {
  __typename?: 'SEOContentTypes';
  graphqlDocument?: Maybe<SeoContentType>;
  mediaItem?: Maybe<SeoContentType>;
  page?: Maybe<SeoContentType>;
  post?: Maybe<SeoContentType>;
  pressRelease?: Maybe<SeoContentType>;
  teamMember?: Maybe<SeoContentType>;
  work?: Maybe<SeoContentType>;
};

/** The Yoast SEO meta data */
export type SeoGlobalMeta = {
  __typename?: 'SEOGlobalMeta';
  author?: Maybe<SeoGlobalMetaAuthor>;
  config?: Maybe<SeoGlobalMetaConfig>;
  date?: Maybe<SeoGlobalMetaDate>;
  homepage?: Maybe<SeoGlobalMetaHome>;
  notFound?: Maybe<SeoGlobalMeta404>;
};

/** The Yoast SEO meta 404 data */
export type SeoGlobalMeta404 = {
  __typename?: 'SEOGlobalMeta404';
  breadcrumb?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

/** The Yoast SEO Author data */
export type SeoGlobalMetaAuthor = {
  __typename?: 'SEOGlobalMetaAuthor';
  description?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

/** The Yoast SEO meta config data */
export type SeoGlobalMetaConfig = {
  __typename?: 'SEOGlobalMetaConfig';
  separator?: Maybe<Scalars['String']>;
};

/** The Yoast SEO Date data */
export type SeoGlobalMetaDate = {
  __typename?: 'SEOGlobalMetaDate';
  description?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

/** The Yoast SEO homepage data */
export type SeoGlobalMetaHome = {
  __typename?: 'SEOGlobalMetaHome';
  description?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

/** The Open Graph data */
export type SeoOpenGraph = {
  __typename?: 'SEOOpenGraph';
  defaultImage?: Maybe<MediaItem>;
  frontPage?: Maybe<SeoOpenGraphFrontPage>;
};

/** The Open Graph Front page data */
export type SeoOpenGraphFrontPage = {
  __typename?: 'SEOOpenGraphFrontPage';
  description?: Maybe<Scalars['String']>;
  image?: Maybe<MediaItem>;
  title?: Maybe<Scalars['String']>;
};

/** The Schema for post type */
export type SeoPageInfoSchema = {
  __typename?: 'SEOPageInfoSchema';
  raw?: Maybe<Scalars['String']>;
};

export type SeoPostTypeBreadcrumbs = {
  __typename?: 'SEOPostTypeBreadcrumbs';
  text?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

/** The page info SEO details */
export type SeoPostTypePageInfo = {
  __typename?: 'SEOPostTypePageInfo';
  schema?: Maybe<SeoPageInfoSchema>;
};

/** The Schema types */
export type SeoPostTypeSchema = {
  __typename?: 'SEOPostTypeSchema';
  articleType?: Maybe<Array<Maybe<Scalars['String']>>>;
  pageType?: Maybe<Array<Maybe<Scalars['String']>>>;
  raw?: Maybe<Scalars['String']>;
};

/** The Yoast redirect data  (Yoast Premium only) */
export type SeoRedirect = {
  __typename?: 'SEORedirect';
  format?: Maybe<Scalars['String']>;
  origin?: Maybe<Scalars['String']>;
  target?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['Int']>;
};

/** The Yoast SEO schema data */
export type SeoSchema = {
  __typename?: 'SEOSchema';
  companyLogo?: Maybe<MediaItem>;
  companyName?: Maybe<Scalars['String']>;
  companyOrPerson?: Maybe<Scalars['String']>;
  homeUrl?: Maybe<Scalars['String']>;
  inLanguage?: Maybe<Scalars['String']>;
  logo?: Maybe<MediaItem>;
  personLogo?: Maybe<MediaItem>;
  personName?: Maybe<Scalars['String']>;
  siteName?: Maybe<Scalars['String']>;
  siteUrl?: Maybe<Scalars['String']>;
  wordpressSiteName?: Maybe<Scalars['String']>;
};

/** The Yoast SEO Social media links */
export type SeoSocial = {
  __typename?: 'SEOSocial';
  facebook?: Maybe<SeoSocialFacebook>;
  instagram?: Maybe<SeoSocialInstagram>;
  linkedIn?: Maybe<SeoSocialLinkedIn>;
  mySpace?: Maybe<SeoSocialMySpace>;
  otherSocials?: Maybe<Array<Maybe<Scalars['String']>>>;
  pinterest?: Maybe<SeoSocialPinterest>;
  twitter?: Maybe<SeoSocialTwitter>;
  wikipedia?: Maybe<SeoSocialWikipedia>;
  youTube?: Maybe<SeoSocialYoutube>;
};

export type SeoSocialFacebook = {
  __typename?: 'SEOSocialFacebook';
  defaultImage?: Maybe<MediaItem>;
  url?: Maybe<Scalars['String']>;
};

export type SeoSocialInstagram = {
  __typename?: 'SEOSocialInstagram';
  url?: Maybe<Scalars['String']>;
};

export type SeoSocialLinkedIn = {
  __typename?: 'SEOSocialLinkedIn';
  url?: Maybe<Scalars['String']>;
};

export type SeoSocialMySpace = {
  __typename?: 'SEOSocialMySpace';
  url?: Maybe<Scalars['String']>;
};

export type SeoSocialPinterest = {
  __typename?: 'SEOSocialPinterest';
  metaTag?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type SeoSocialTwitter = {
  __typename?: 'SEOSocialTwitter';
  cardType?: Maybe<SeoCardType>;
  username?: Maybe<Scalars['String']>;
};

export type SeoSocialWikipedia = {
  __typename?: 'SEOSocialWikipedia';
  url?: Maybe<Scalars['String']>;
};

export type SeoSocialYoutube = {
  __typename?: 'SEOSocialYoutube';
  url?: Maybe<Scalars['String']>;
};

/** The Schema types for Taxonomy */
export type SeoTaxonomySchema = {
  __typename?: 'SEOTaxonomySchema';
  raw?: Maybe<Scalars['String']>;
};

export type SeoUser = {
  __typename?: 'SEOUser';
  breadcrumbTitle?: Maybe<Scalars['String']>;
  canonical?: Maybe<Scalars['String']>;
  fullHead?: Maybe<Scalars['String']>;
  language?: Maybe<Scalars['String']>;
  metaDesc?: Maybe<Scalars['String']>;
  metaRobotsNofollow?: Maybe<Scalars['String']>;
  metaRobotsNoindex?: Maybe<Scalars['String']>;
  opengraphDescription?: Maybe<Scalars['String']>;
  opengraphImage?: Maybe<MediaItem>;
  opengraphTitle?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  schema?: Maybe<SeoUserSchema>;
  social?: Maybe<SeoUserSocial>;
  title?: Maybe<Scalars['String']>;
  twitterDescription?: Maybe<Scalars['String']>;
  twitterImage?: Maybe<MediaItem>;
  twitterTitle?: Maybe<Scalars['String']>;
};

/** The Schema types for User */
export type SeoUserSchema = {
  __typename?: 'SEOUserSchema';
  articleType?: Maybe<Array<Maybe<Scalars['String']>>>;
  pageType?: Maybe<Array<Maybe<Scalars['String']>>>;
  raw?: Maybe<Scalars['String']>;
};

export type SeoUserSocial = {
  __typename?: 'SEOUserSocial';
  facebook?: Maybe<Scalars['String']>;
  instagram?: Maybe<Scalars['String']>;
  linkedIn?: Maybe<Scalars['String']>;
  mySpace?: Maybe<Scalars['String']>;
  pinterest?: Maybe<Scalars['String']>;
  soundCloud?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  wikipedia?: Maybe<Scalars['String']>;
  youTube?: Maybe<Scalars['String']>;
};

/** The Yoast SEO  webmaster fields */
export type SeoWebmaster = {
  __typename?: 'SEOWebmaster';
  baiduVerify?: Maybe<Scalars['String']>;
  googleVerify?: Maybe<Scalars['String']>;
  msVerify?: Maybe<Scalars['String']>;
  yandexVerify?: Maybe<Scalars['String']>;
};

/** A Gravity Forms   field. */
export type SectionField = FormField & {
  __typename?: 'SectionField';
  /** Controls the visibility of the field based on values selected by the user. */
  conditionalLogic?: Maybe<ConditionalLogic>;
  /** String containing the custom CSS classes to be added to the &lt;li&gt; tag that contains the field. Useful for applying custom formatting to specific fields. */
  cssClass?: Maybe<Scalars['String']>;
  /** Field description. */
  description?: Maybe<Scalars['String']>;
  /** Indicates the field is only displayed and its contents are not submitted with the form/saved with the entry. This is set to true. */
  displayOnly?: Maybe<Scalars['Boolean']>;
  /** Field ID. */
  id: Scalars['Int'];
  /** The base form field type used to display the input. A good example is the Post Custom Field that can be displayed as various different types of fields. */
  inputType?: Maybe<FormFieldTypeEnum>;
  /** Field label that will be displayed on the form and on the admin pages. */
  label?: Maybe<Scalars['String']>;
  /** The number of CSS grid columns the field should span. */
  layoutGridColumnSpan?: Maybe<Scalars['Int']>;
  /** The number of CSS grid columns the spacer field following this one should span. */
  layoutSpacerGridColumnSpan?: Maybe<Scalars['Int']>;
  /** The form page this field is located on. Default is 1. */
  pageNumber?: Maybe<Scalars['Int']>;
  /** The type of field to be displayed. */
  type?: Maybe<FormFieldTypeEnum>;
  /** Field visibility. */
  visibility?: Maybe<FormFieldVisibilityEnum>;
};

/** A Gravity Forms   field. */
export type SelectField = FormField & {
  __typename?: 'SelectField';
  /** When specified, the value of this property will be used on the admin pages instead of the label. It is useful for fields with long labels. */
  adminLabel?: Maybe<Scalars['String']>;
  /** The autocomplete attribute for the field. */
  autocompleteAttribute?: Maybe<Scalars['String']>;
  /** Determines if the field’s value can be pre-populated dynamically. */
  canPrepopulate?: Maybe<Scalars['Boolean']>;
  /** The available choices for the select field. */
  choices?: Maybe<Array<Maybe<SelectFieldChoice>>>;
  /** Controls the visibility of the field based on values selected by the user. */
  conditionalLogic?: Maybe<ConditionalLogic>;
  /** String containing the custom CSS classes to be added to the &lt;li&gt; tag that contains the field. Useful for applying custom formatting to specific fields. */
  cssClass?: Maybe<Scalars['String']>;
  /** Contains the default value for the field. When specified, the field&#039;s value will be populated with the contents of this property when the form is displayed. */
  defaultValue?: Maybe<Scalars['String']>;
  /** Field description. */
  description?: Maybe<Scalars['String']>;
  /** The placement of the field description. */
  descriptionPlacement?: Maybe<FormFieldDescriptionPlacementEnum>;
  /** Indicates the field is only displayed and its contents are not submitted with the form/saved with the entry. This is set to true. */
  displayOnly?: Maybe<Scalars['Boolean']>;
  /** Contains the message that is displayed for fields that fail validation. */
  errorMessage?: Maybe<Scalars['String']>;
  /** Whether autocomplete should be enabled for this field. */
  hasAutocomplete?: Maybe<Scalars['Boolean']>;
  /** Determines if the field (checkbox, select or radio) have choice values enabled, which allows the field to have choice values different from the labels that are displayed to the user. */
  hasChoiceValue?: Maybe<Scalars['Boolean']>;
  /** When set to true, the &quot;Chosen&quot; jQuery script will be applied to this field, enabling search capabilities to Drop Down fields and a more user-friendly interface for Multi Select fields. */
  hasEnhancedUI?: Maybe<Scalars['Boolean']>;
  /** Field ID. */
  id: Scalars['Int'];
  /** Assigns a name to this field so that it can be populated dynamically via this input name. Only applicable when canPrepopulate is `true`. */
  inputName?: Maybe<Scalars['String']>;
  /** The base form field type used to display the input. A good example is the Post Custom Field that can be displayed as various different types of fields. */
  inputType?: Maybe<FormFieldTypeEnum>;
  /** Determines if the field requires the user to enter a value. Fields marked as required will prevent the form from being submitted if the user has not entered a value in it. */
  isRequired?: Maybe<Scalars['Boolean']>;
  /** Field label that will be displayed on the form and on the admin pages. */
  label?: Maybe<Scalars['String']>;
  /** The field label position. */
  labelPlacement?: Maybe<FormFieldLabelPlacementEnum>;
  /** The number of CSS grid columns the field should span. */
  layoutGridColumnSpan?: Maybe<Scalars['Int']>;
  /** The number of CSS grid columns the spacer field following this one should span. */
  layoutSpacerGridColumnSpan?: Maybe<Scalars['Int']>;
  /** The form page this field is located on. Default is 1. */
  pageNumber?: Maybe<Scalars['Int']>;
  /** The form field-specifc policies for exporting and erasing personal data. */
  personalData?: Maybe<FormFieldDataPolicy>;
  /** Placeholder text to give the user a hint on how to fill out the field. This is not submitted with the form. */
  placeholder?: Maybe<Scalars['String']>;
  /** Determines if the field allows duplicate submissions. */
  shouldAllowDuplicates?: Maybe<Scalars['Boolean']>;
  /** Determines the size of the field when displayed on the page. */
  size?: Maybe<FormFieldSizeEnum>;
  /** The type of field to be displayed. */
  type?: Maybe<FormFieldTypeEnum>;
  /** The string-formatted entry value for the `formField`. For complex fields this might be a JSON-encoded or serialized array. */
  value?: Maybe<Scalars['String']>;
  /** Field visibility. */
  visibility?: Maybe<FormFieldVisibilityEnum>;
};

/** Select choice values. */
export type SelectFieldChoice = {
  __typename?: 'SelectFieldChoice';
  /** Determines if this choice should be selected by default when displayed. The value true will select the choice, whereas false will display it unselected. */
  isSelected?: Maybe<Scalars['Boolean']>;
  /** The text to be displayed to the user when displaying this choice. */
  text?: Maybe<Scalars['String']>;
  /** The value to be stored in the database when this choice is selected. Note: This property is only supported by the Drop Down and Post Category fields. Checkboxes and Radio fields will store the text property in the database regardless of the value property. */
  value?: Maybe<Scalars['String']>;
};

/** Input for the sendPasswordResetEmail mutation. */
export type SendPasswordResetEmailInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** A string that contains the user's username or email address. */
  username: Scalars['String'];
};

/** The payload for the sendPasswordResetEmail mutation. */
export type SendPasswordResetEmailPayload = {
  __typename?: 'SendPasswordResetEmailPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Whether the mutation completed successfully. This does NOT necessarily mean that an email was sent. */
  success?: Maybe<Scalars['Boolean']>;
  /**
   * The user that the password reset email was sent to
   * @deprecated This field will be removed in a future version of WPGraphQL
   */
  user?: Maybe<User>;
};

/** All of the registered settings */
export type Settings = {
  __typename?: 'Settings';
  /** Settings of the the string Settings Group */
  atlasContentModelerSettingsSettingsAtlasContentModelerUsageTracking?: Maybe<Scalars['String']>;
  /** Settings of the the string Settings Group */
  discussionSettingsDefaultCommentStatus?: Maybe<Scalars['String']>;
  /** Settings of the the string Settings Group */
  discussionSettingsDefaultPingStatus?: Maybe<Scalars['String']>;
  /** Settings of the the string Settings Group */
  generalSettingsDateFormat?: Maybe<Scalars['String']>;
  /** Settings of the the string Settings Group */
  generalSettingsDescription?: Maybe<Scalars['String']>;
  /** Settings of the the string Settings Group */
  generalSettingsEmail?: Maybe<Scalars['String']>;
  /** Settings of the the string Settings Group */
  generalSettingsLanguage?: Maybe<Scalars['String']>;
  /** Settings of the the integer Settings Group */
  generalSettingsStartOfWeek?: Maybe<Scalars['Int']>;
  /** Settings of the the string Settings Group */
  generalSettingsTimeFormat?: Maybe<Scalars['String']>;
  /** Settings of the the string Settings Group */
  generalSettingsTimezone?: Maybe<Scalars['String']>;
  /** Settings of the the string Settings Group */
  generalSettingsTitle?: Maybe<Scalars['String']>;
  /** Settings of the the string Settings Group */
  generalSettingsUrl?: Maybe<Scalars['String']>;
  /** Settings of the the integer Settings Group */
  readingSettingsPageForPosts?: Maybe<Scalars['Int']>;
  /** Settings of the the integer Settings Group */
  readingSettingsPageOnFront?: Maybe<Scalars['Int']>;
  /** Settings of the the integer Settings Group */
  readingSettingsPostsPerPage?: Maybe<Scalars['Int']>;
  /** Settings of the the string Settings Group */
  readingSettingsShowOnFront?: Maybe<Scalars['String']>;
  /** Settings of the the integer Settings Group */
  writingSettingsDefaultCategory?: Maybe<Scalars['Int']>;
  /** Settings of the the string Settings Group */
  writingSettingsDefaultPostFormat?: Maybe<Scalars['String']>;
  /** Settings of the the boolean Settings Group */
  writingSettingsUseSmilies?: Maybe<Scalars['Boolean']>;
};

/** Site Settings options. */
export type SiteSettings = {
  __typename?: 'SiteSettings';
  pageSlug?: Maybe<Scalars['String']>;
  pageTitle?: Maybe<Scalars['String']>;
  /** Added to the GraphQL Schema because the ACF Field Group &quot;Site Settings&quot; was set to Show in GraphQL. */
  siteSettings?: Maybe<SiteSettings_Sitesettings>;
};

/** Field Group */
export type SiteSettings_Sitesettings = AcfFieldGroup & {
  __typename?: 'SiteSettings_Sitesettings';
  address?: Maybe<Acf_GoogleMap>;
  announcements?: Maybe<Array<Maybe<SiteSettings_Sitesettings_Announcements>>>;
  cta?: Maybe<AcfLink>;
  customAddressLabel?: Maybe<Scalars['String']>;
  email?: Maybe<AcfLink>;
  /** The name of the ACF Field Group */
  fieldGroupName?: Maybe<Scalars['String']>;
  footerLogo?: Maybe<MediaItem>;
  logo?: Maybe<MediaItem>;
  logoAlt?: Maybe<MediaItem>;
  logoWhite?: Maybe<MediaItem>;
  phoneNumber?: Maybe<AcfLink>;
  turnOnAnnouncements?: Maybe<Scalars['Boolean']>;
};

/** Field Group */
export type SiteSettings_Sitesettings_Announcements = AcfFieldGroup & {
  __typename?: 'SiteSettings_Sitesettings_announcements';
  backgroundColor?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  cta?: Maybe<AcfLink>;
  ctaType?: Maybe<Scalars['String']>;
  /** The name of the ACF Field Group */
  fieldGroupName?: Maybe<Scalars['String']>;
};

/** The Confirmation object returned on submission. Null if the submission was not successful. */
export type SubmissionConfirmation = {
  __typename?: 'SubmissionConfirmation';
  /** Contains the confirmation message HTML to display. Only applicable when type is set to `MESSAGE`. */
  message?: Maybe<Scalars['String']>;
  /** Connection between the SubmissionConfirmation type and the Page type */
  page?: Maybe<SubmissionConfirmationToPageConnectionEdge>;
  /** Contains the Id of the WordPress page that the browser will be redirected to. Only applicable when type is set to `PAGE`. */
  pageId?: Maybe<Scalars['Int']>;
  /** Contains the query string to be appended to the redirection url. Only applicable when type is set to `REDIRECT` or `PAGE` . */
  queryString?: Maybe<Scalars['String']>;
  /** Determines the type of confirmation to be used. */
  type?: Maybe<SubmissionConfirmationTypeEnum>;
  /** The URL the submission should redirect to. Only applicable when type is set to `REDIRECT`. */
  url?: Maybe<Scalars['String']>;
};

/** Connection between the SubmissionConfirmation type and the Page type */
export type SubmissionConfirmationToPageConnectionEdge = Edge & OneToOneConnection & PageConnectionEdge & {
  __typename?: 'SubmissionConfirmationToPageConnectionEdge';
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The node of the connection, without the edges */
  node: Page;
};

/** Type of confirmation returned by the submission. */
export enum SubmissionConfirmationTypeEnum {
  /** A confirmation "message". */
  Message = 'MESSAGE',
  /** A "redirect" to a given URL. */
  Redirect = 'REDIRECT'
}

/** A Gravity Forms   field. */
export type SubmitField = FormField & {
  __typename?: 'SubmitField';
  /** Indicates the field is only displayed and its contents are not submitted with the form/saved with the entry. This is set to true. */
  displayOnly?: Maybe<Scalars['Boolean']>;
  /** Field ID. */
  id: Scalars['Int'];
  /** The base form field type used to display the input. A good example is the Post Custom Field that can be displayed as various different types of fields. */
  inputType?: Maybe<FormFieldTypeEnum>;
  /** The number of CSS grid columns the field should span. */
  layoutGridColumnSpan?: Maybe<Scalars['Int']>;
  /** The number of CSS grid columns the spacer field following this one should span. */
  layoutSpacerGridColumnSpan?: Maybe<Scalars['Int']>;
  /** The form page this field is located on. Default is 1. */
  pageNumber?: Maybe<Scalars['Int']>;
  /** The form field-specifc policies for exporting and erasing personal data. */
  personalData?: Maybe<FormFieldDataPolicy>;
  /** The type of field to be displayed. */
  type?: Maybe<FormFieldTypeEnum>;
  /** The string-formatted entry value for the `formField`. For complex fields this might be a JSON-encoded or serialized array. */
  value?: Maybe<Scalars['String']>;
  /** Field visibility. */
  visibility?: Maybe<FormFieldVisibilityEnum>;
};

/** Entry meta input fields for submitting Gravity Forms forms. */
export type SubmitFormMetaInput = {
  /** ID of the user that submitted of the form if a logged in user submitted the form. */
  createdById?: InputMaybe<Scalars['Int']>;
  /** The UTC date the entry was created, in `Y-m-d H:i:s` format. */
  dateCreatedGmt?: InputMaybe<Scalars['String']>;
  /** Client IP of user who submitted the form. */
  ip?: InputMaybe<Scalars['String']>;
  /** Used to overwrite the sourceUrl the form was submitted from. */
  sourceUrl?: InputMaybe<Scalars['String']>;
  /** The name and version of both the browser and operating system from which the entry was submitted. */
  userAgent?: InputMaybe<Scalars['String']>;
};

/** Input for the submitGfDraftEntry mutation. */
export type SubmitGfDraftEntryInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Either the global ID of the draft entry, or its resume token. */
  id: Scalars['ID'];
  /** The ID type for the draft entry. Defaults to `ID` . */
  idType?: InputMaybe<DraftEntryIdTypeEnum>;
};

/** The payload for the submitGfDraftEntry mutation. */
export type SubmitGfDraftEntryPayload = {
  __typename?: 'SubmitGfDraftEntryPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The form confirmation data. Null if the submission has `errors` */
  confirmation?: Maybe<SubmissionConfirmation>;
  /** The entry that was created. */
  entry?: Maybe<GfSubmittedEntry>;
  /** Field errors. */
  errors?: Maybe<Array<Maybe<FieldError>>>;
};

/** Input for the submitGfForm mutation. */
export type SubmitGfFormInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The entry meta associated with the submission. */
  entryMeta?: InputMaybe<SubmitFormMetaInput>;
  /** The field ids and their values. */
  fieldValues: Array<InputMaybe<FormFieldValuesInput>>;
  /** The form ID. Accepts either a global or Database ID. */
  id: Scalars['ID'];
  /** Set to `true` if submitting a draft entry. Defaults to `false`. */
  saveAsDraft?: InputMaybe<Scalars['Boolean']>;
  /** Useful for multi-page forms to indicate which page of the form was just submitted. */
  sourcePage?: InputMaybe<Scalars['Int']>;
  /** Useful for multi-page forms to indicate which page is to be loaded if the current page passes validation. */
  targetPage?: InputMaybe<Scalars['Int']>;
};

/** The payload for the submitGfForm mutation. */
export type SubmitGfFormPayload = {
  __typename?: 'SubmitGfFormPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The form confirmation data. Null if the submission has `errors` */
  confirmation?: Maybe<SubmissionConfirmation>;
  /** The entry that was created. */
  entry?: Maybe<GfEntry>;
  /** Field errors. */
  errors?: Maybe<Array<Maybe<FieldError>>>;
  /** Draft resume URL. Null if submitting an entry. If the &quot;Referer&quot; header is not included in the request, this will be an empty string. */
  resumeUrl?: Maybe<Scalars['String']>;
};

/** The Type of Identifier used to fetch a single resource. */
export enum SubmittedEntryIdTypeEnum {
  /** The database ID assigned by Gravity Forms. Used by submitted entries. */
  DatabaseId = 'DATABASE_ID',
  /** Unique global ID for the object. */
  Id = 'ID'
}

/** The tag type */
export type Tag = DatabaseIdentifier & MenuItemLinkable & Node & TermNode & UniformResourceIdentifiable & {
  __typename?: 'Tag';
  /** @deprecated Deprecated in favor of using Next.js pages */
  conditionalTags?: Maybe<ConditionalTags>;
  /** Connection between the Tag type and the ContentNode type */
  contentNodes?: Maybe<TagToContentNodeConnection>;
  /** The number of objects connected to the object */
  count?: Maybe<Scalars['Int']>;
  /** The unique identifier stored in the database */
  databaseId: Scalars['Int'];
  /** The description of the object */
  description?: Maybe<Scalars['String']>;
  /** Connection between the TermNode type and the EnqueuedScript type */
  enqueuedScripts?: Maybe<TermNodeToEnqueuedScriptConnection>;
  /** Connection between the TermNode type and the EnqueuedStylesheet type */
  enqueuedStylesheets?: Maybe<TermNodeToEnqueuedStylesheetConnection>;
  /** The unique resource identifier path */
  id: Scalars['ID'];
  /** Whether the node is a Content Node */
  isContentNode: Scalars['Boolean'];
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** Whether the node is a Term */
  isTermNode: Scalars['Boolean'];
  /** The link to the term */
  link?: Maybe<Scalars['String']>;
  /** The human friendly name of the object. */
  name?: Maybe<Scalars['String']>;
  /** Connection between the Tag type and the post type */
  posts?: Maybe<TagToPostConnection>;
  /** The Yoast SEO data of the Tags taxonomy. */
  seo?: Maybe<TaxonomySeo>;
  /** An alphanumeric identifier for the object unique to its type. */
  slug?: Maybe<Scalars['String']>;
  /**
   * The id field matches the WP_Post-&gt;ID field.
   * @deprecated Deprecated in favor of databaseId
   */
  tagId?: Maybe<Scalars['Int']>;
  /** Connection between the Tag type and the Taxonomy type */
  taxonomy?: Maybe<TagToTaxonomyConnectionEdge>;
  /** The name of the taxonomy that the object is associated with */
  taxonomyName?: Maybe<Scalars['String']>;
  templates?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The ID of the term group that this term object belongs to */
  termGroupId?: Maybe<Scalars['Int']>;
  /** The taxonomy ID that the object is associated with */
  termTaxonomyId?: Maybe<Scalars['Int']>;
  /** The unique resource identifier path */
  uri?: Maybe<Scalars['String']>;
};


/** The tag type */
export type TagContentNodesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TagToContentNodeConnectionWhereArgs>;
};


/** The tag type */
export type TagEnqueuedScriptsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** The tag type */
export type TagEnqueuedStylesheetsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** The tag type */
export type TagPostsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TagToPostConnectionWhereArgs>;
};

/** Connection to tag Nodes */
export type TagConnection = {
  /** A list of edges (relational context) between RootQuery and connected tag Nodes */
  edges: Array<TagConnectionEdge>;
  /** A list of connected tag Nodes */
  nodes: Array<Tag>;
  /** Information about pagination in a connection. */
  pageInfo: TagConnectionPageInfo;
};

/** Edge between a Node and a connected tag */
export type TagConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The connected tag Node */
  node: Tag;
};

/** Page Info on the connected TagConnectionEdge */
export type TagConnectionPageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum TagIdType {
  /** The Database ID for the node */
  DatabaseId = 'DATABASE_ID',
  /** The hashed Global ID */
  Id = 'ID',
  /** The name of the node */
  Name = 'NAME',
  /** Url friendly name of the node */
  Slug = 'SLUG',
  /** The URI for the node */
  Uri = 'URI'
}

/** Connection between the Tag type and the ContentNode type */
export type TagToContentNodeConnection = Connection & ContentNodeConnection & {
  __typename?: 'TagToContentNodeConnection';
  /** Edges for the TagToContentNodeConnection connection */
  edges: Array<TagToContentNodeConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<ContentNode>;
  /** Information about pagination in a connection. */
  pageInfo: TagToContentNodeConnectionPageInfo;
};

/** An edge in a connection */
export type TagToContentNodeConnectionEdge = ContentNodeConnectionEdge & Edge & {
  __typename?: 'TagToContentNodeConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: ContentNode;
};

/** Page Info on the &quot;TagToContentNodeConnection&quot; */
export type TagToContentNodeConnectionPageInfo = ContentNodeConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'TagToContentNodeConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the TagToContentNodeConnection connection */
export type TagToContentNodeConnectionWhereArgs = {
  /** The Types of content to filter */
  contentTypes?: InputMaybe<Array<InputMaybe<ContentTypesOfTagEnum>>>;
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']>;
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>;
  /** Title of the object */
  title?: InputMaybe<Scalars['String']>;
};

/** Connection between the Tag type and the post type */
export type TagToPostConnection = Connection & PostConnection & {
  __typename?: 'TagToPostConnection';
  /** Edges for the TagToPostConnection connection */
  edges: Array<TagToPostConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<Post>;
  /** Information about pagination in a connection. */
  pageInfo: TagToPostConnectionPageInfo;
};

/** An edge in a connection */
export type TagToPostConnectionEdge = Edge & PostConnectionEdge & {
  __typename?: 'TagToPostConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: Post;
};

/** Page Info on the &quot;TagToPostConnection&quot; */
export type TagToPostConnectionPageInfo = PageInfo & PostConnectionPageInfo & WpPageInfo & {
  __typename?: 'TagToPostConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the TagToPostConnection connection */
export type TagToPostConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: InputMaybe<Scalars['Int']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: InputMaybe<Scalars['String']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Category ID */
  categoryId?: InputMaybe<Scalars['Int']>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Use Category Slug */
  categoryName?: InputMaybe<Scalars['String']>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']>;
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>;
  /** Tag Slug */
  tag?: InputMaybe<Scalars['String']>;
  /** Use Tag ID */
  tagId?: InputMaybe<Scalars['String']>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of tag slugs, used to display objects from one tag AND another */
  tagSlugAnd?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Array of tag slugs, used to include objects in ANY specified tags */
  tagSlugIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Title of the object */
  title?: InputMaybe<Scalars['String']>;
};

/** Connection between the Tag type and the Taxonomy type */
export type TagToTaxonomyConnectionEdge = Edge & OneToOneConnection & TaxonomyConnectionEdge & {
  __typename?: 'TagToTaxonomyConnectionEdge';
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The node of the connection, without the edges */
  node: Taxonomy;
};

/** A taxonomy object */
export type Taxonomy = Node & {
  __typename?: 'Taxonomy';
  /** List of Content Types associated with the Taxonomy */
  connectedContentTypes?: Maybe<TaxonomyToContentTypeConnection>;
  /** Description of the taxonomy. This field is equivalent to WP_Taxonomy-&gt;description */
  description?: Maybe<Scalars['String']>;
  /** The plural name of the post type within the GraphQL Schema. */
  graphqlPluralName?: Maybe<Scalars['String']>;
  /** The singular name of the post type within the GraphQL Schema. */
  graphqlSingleName?: Maybe<Scalars['String']>;
  /** Whether the taxonomy is hierarchical */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** The globally unique identifier of the taxonomy object. */
  id: Scalars['ID'];
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** Name of the taxonomy shown in the menu. Usually plural. */
  label?: Maybe<Scalars['String']>;
  /** The display name of the taxonomy. This field is equivalent to WP_Taxonomy-&gt;label */
  name?: Maybe<Scalars['String']>;
  /** Whether the taxonomy is publicly queryable */
  public?: Maybe<Scalars['Boolean']>;
  /** Name of content type to diplay in REST API &quot;wp/v2&quot; namespace. */
  restBase?: Maybe<Scalars['String']>;
  /** The REST Controller class assigned to handling this content type. */
  restControllerClass?: Maybe<Scalars['String']>;
  /** Whether to show the taxonomy as part of a tag cloud widget. This field is equivalent to WP_Taxonomy-&gt;show_tagcloud */
  showCloud?: Maybe<Scalars['Boolean']>;
  /** Whether to display a column for the taxonomy on its post type listing screens. */
  showInAdminColumn?: Maybe<Scalars['Boolean']>;
  /** Whether to add the post type to the GraphQL Schema. */
  showInGraphql?: Maybe<Scalars['Boolean']>;
  /** Whether to show the taxonomy in the admin menu */
  showInMenu?: Maybe<Scalars['Boolean']>;
  /** Whether the taxonomy is available for selection in navigation menus. */
  showInNavMenus?: Maybe<Scalars['Boolean']>;
  /** Whether to show the taxonomy in the quick/bulk edit panel. */
  showInQuickEdit?: Maybe<Scalars['Boolean']>;
  /** Whether to add the post type route in the REST API &quot;wp/v2&quot; namespace. */
  showInRest?: Maybe<Scalars['Boolean']>;
  /** Whether to generate and allow a UI for managing terms in this taxonomy in the admin */
  showUi?: Maybe<Scalars['Boolean']>;
};


/** A taxonomy object */
export type TaxonomyConnectedContentTypesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** Connection to Taxonomy Nodes */
export type TaxonomyConnection = {
  /** A list of edges (relational context) between RootQuery and connected Taxonomy Nodes */
  edges: Array<TaxonomyConnectionEdge>;
  /** A list of connected Taxonomy Nodes */
  nodes: Array<Taxonomy>;
  /** Information about pagination in a connection. */
  pageInfo: TaxonomyConnectionPageInfo;
};

/** Edge between a Node and a connected Taxonomy */
export type TaxonomyConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The connected Taxonomy Node */
  node: Taxonomy;
};

/** Page Info on the connected TaxonomyConnectionEdge */
export type TaxonomyConnectionPageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Allowed taxonomies */
export enum TaxonomyEnum {
  /** Taxonomy enum category */
  Category = 'CATEGORY',
  /** Taxonomy enum work_tag */
  Client = 'CLIENT',
  /** Taxonomy enum post_format */
  Postformat = 'POSTFORMAT',
  /** Taxonomy enum post_tag */
  Tag = 'TAG',
  /** Taxonomy enum work_cat */
  Workcategory = 'WORKCATEGORY'
}

/** The Type of Identifier used to fetch a single Taxonomy node. To be used along with the "id" field. Default is "ID". */
export enum TaxonomyIdTypeEnum {
  /** The globally unique ID */
  Id = 'ID',
  /** The name of the taxonomy */
  Name = 'NAME'
}

export type TaxonomySeo = {
  __typename?: 'TaxonomySEO';
  breadcrumbs?: Maybe<Array<Maybe<SeoPostTypeBreadcrumbs>>>;
  canonical?: Maybe<Scalars['String']>;
  cornerstone?: Maybe<Scalars['Boolean']>;
  focuskw?: Maybe<Scalars['String']>;
  fullHead?: Maybe<Scalars['String']>;
  metaDesc?: Maybe<Scalars['String']>;
  metaKeywords?: Maybe<Scalars['String']>;
  metaRobotsNofollow?: Maybe<Scalars['String']>;
  metaRobotsNoindex?: Maybe<Scalars['String']>;
  opengraphAuthor?: Maybe<Scalars['String']>;
  opengraphDescription?: Maybe<Scalars['String']>;
  opengraphImage?: Maybe<MediaItem>;
  opengraphModifiedTime?: Maybe<Scalars['String']>;
  opengraphPublishedTime?: Maybe<Scalars['String']>;
  opengraphPublisher?: Maybe<Scalars['String']>;
  opengraphSiteName?: Maybe<Scalars['String']>;
  opengraphTitle?: Maybe<Scalars['String']>;
  opengraphType?: Maybe<Scalars['String']>;
  opengraphUrl?: Maybe<Scalars['String']>;
  schema?: Maybe<SeoTaxonomySchema>;
  title?: Maybe<Scalars['String']>;
  twitterDescription?: Maybe<Scalars['String']>;
  twitterImage?: Maybe<MediaItem>;
  twitterTitle?: Maybe<Scalars['String']>;
};

/** Connection between the Taxonomy type and the ContentType type */
export type TaxonomyToContentTypeConnection = Connection & ContentTypeConnection & {
  __typename?: 'TaxonomyToContentTypeConnection';
  /** Edges for the TaxonomyToContentTypeConnection connection */
  edges: Array<TaxonomyToContentTypeConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<ContentType>;
  /** Information about pagination in a connection. */
  pageInfo: TaxonomyToContentTypeConnectionPageInfo;
};

/** An edge in a connection */
export type TaxonomyToContentTypeConnectionEdge = ContentTypeConnectionEdge & Edge & {
  __typename?: 'TaxonomyToContentTypeConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: ContentType;
};

/** Page Info on the &quot;TaxonomyToContentTypeConnection&quot; */
export type TaxonomyToContentTypeConnectionPageInfo = ContentTypeConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'TaxonomyToContentTypeConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** The teamMember type */
export type TeamMember = ContentNode & DatabaseIdentifier & Node & NodeWithAuthor & NodeWithTemplate & NodeWithTitle & Previewable & UniformResourceIdentifiable & {
  __typename?: 'TeamMember';
  /** Connection between the NodeWithAuthor type and the User type */
  author?: Maybe<NodeWithAuthorToUserConnectionEdge>;
  /** The database identifier of the author of the node */
  authorDatabaseId?: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the author of the node */
  authorId?: Maybe<Scalars['ID']>;
  /** @deprecated Deprecated in favor of using Next.js pages */
  conditionalTags?: Maybe<ConditionalTags>;
  /** Connection between the ContentNode type and the ContentType type */
  contentType?: Maybe<ContentNodeToContentTypeConnectionEdge>;
  /** The name of the Content Type the node belongs to */
  contentTypeName: Scalars['String'];
  /** The unique identifier stored in the database */
  databaseId: Scalars['Int'];
  /** Post publishing date. */
  date?: Maybe<Scalars['String']>;
  /** The publishing date set in GMT. */
  dateGmt?: Maybe<Scalars['String']>;
  /** The desired slug of the post */
  desiredSlug?: Maybe<Scalars['String']>;
  /** If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds */
  editingLockedBy?: Maybe<ContentNodeToEditLockConnectionEdge>;
  /** The RSS enclosure for the object */
  enclosure?: Maybe<Scalars['String']>;
  /** Connection between the ContentNode type and the EnqueuedScript type */
  enqueuedScripts?: Maybe<ContentNodeToEnqueuedScriptConnection>;
  /** Connection between the ContentNode type and the EnqueuedStylesheet type */
  enqueuedStylesheets?: Maybe<ContentNodeToEnqueuedStylesheetConnection>;
  /** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
  guid?: Maybe<Scalars['String']>;
  /** The globally unique identifier of the teammember object. */
  id: Scalars['ID'];
  /** Whether the node is a Content Node */
  isContentNode: Scalars['Boolean'];
  /** Whether the object is a node in the preview state */
  isPreview?: Maybe<Scalars['Boolean']>;
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** Whether the node is a Term */
  isTermNode: Scalars['Boolean'];
  /** The user that most recently edited the node */
  lastEditedBy?: Maybe<ContentNodeToEditLastConnectionEdge>;
  /** The permalink of the post */
  link?: Maybe<Scalars['String']>;
  /** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
  modified?: Maybe<Scalars['String']>;
  /** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
  modifiedGmt?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  /** Connection between the TeamMember type and the teamMember type */
  preview?: Maybe<TeamMemberToPreviewConnectionEdge>;
  /** The database id of the preview node */
  previewRevisionDatabaseId?: Maybe<Scalars['Int']>;
  /** Whether the object is a node in the preview state */
  previewRevisionId?: Maybe<Scalars['ID']>;
  /** The Yoast SEO data of the ContentNode */
  seo?: Maybe<PostTypeSeo>;
  /** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
  slug?: Maybe<Scalars['String']>;
  /** The current status of the object */
  status?: Maybe<Scalars['String']>;
  /**
   * The id field matches the WP_Post-&gt;ID field.
   * @deprecated Deprecated in favor of the databaseId field
   */
  teamMemberId: Scalars['Int'];
  /** Added to the GraphQL Schema because the ACF Field Group &quot;Team Member Options&quot; was set to Show in GraphQL. */
  teamMemberOptions?: Maybe<TeamMember_Teammemberoptions>;
  /** The template assigned to the node */
  template?: Maybe<ContentTemplate>;
  templates?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
  title?: Maybe<Scalars['String']>;
  /** The unique resource identifier path */
  uri?: Maybe<Scalars['String']>;
};


/** The teamMember type */
export type TeamMemberEnqueuedScriptsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** The teamMember type */
export type TeamMemberEnqueuedStylesheetsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** The teamMember type */
export type TeamMemberTitleArgs = {
  format?: InputMaybe<PostObjectFieldFormatEnum>;
};

/** Connection to teamMember Nodes */
export type TeamMemberConnection = {
  /** A list of edges (relational context) between RootQuery and connected teamMember Nodes */
  edges: Array<TeamMemberConnectionEdge>;
  /** A list of connected teamMember Nodes */
  nodes: Array<TeamMember>;
  /** Information about pagination in a connection. */
  pageInfo: TeamMemberConnectionPageInfo;
};

/** Edge between a Node and a connected teamMember */
export type TeamMemberConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The connected teamMember Node */
  node: TeamMember;
};

/** Page Info on the connected TeamMemberConnectionEdge */
export type TeamMemberConnectionPageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum TeamMemberIdType {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID',
  /** Identify a resource by the slug. Available to non-hierarchcial Types where the slug is a unique identifier. */
  Slug = 'SLUG',
  /** Identify a resource by the URI. */
  Uri = 'URI'
}

/** Connection between the TeamMember type and the teamMember type */
export type TeamMemberToPreviewConnectionEdge = Edge & OneToOneConnection & TeamMemberConnectionEdge & {
  __typename?: 'TeamMemberToPreviewConnectionEdge';
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The node of the connection, without the edges */
  node: TeamMember;
};

/** Field Group */
export type TeamMember_Teammemberoptions = AcfFieldGroup & {
  __typename?: 'TeamMember_Teammemberoptions';
  biography?: Maybe<Scalars['String']>;
  /** The name of the ACF Field Group */
  fieldGroupName?: Maybe<Scalars['String']>;
  headshot?: Maybe<MediaItem>;
  title?: Maybe<Scalars['String']>;
};

/** The template assigned to the node */
export type Template_Blank = ContentTemplate & {
  __typename?: 'Template_Blank';
  /** The name of the template */
  templateName?: Maybe<Scalars['String']>;
};

/** The template assigned to the node */
export type Template_BlogAlternative = ContentTemplate & {
  __typename?: 'Template_BlogAlternative';
  /** The name of the template */
  templateName?: Maybe<Scalars['String']>;
};

/** Terms are nodes within a Taxonomy, used to group and relate other nodes. */
export type TermNode = {
  /** @deprecated Deprecated in favor of using Next.js pages */
  conditionalTags?: Maybe<ConditionalTags>;
  /** The number of objects connected to the object */
  count?: Maybe<Scalars['Int']>;
  /** Identifies the primary key from the database. */
  databaseId: Scalars['Int'];
  /** The description of the object */
  description?: Maybe<Scalars['String']>;
  /** Connection between the TermNode type and the EnqueuedScript type */
  enqueuedScripts?: Maybe<TermNodeToEnqueuedScriptConnection>;
  /** Connection between the TermNode type and the EnqueuedStylesheet type */
  enqueuedStylesheets?: Maybe<TermNodeToEnqueuedStylesheetConnection>;
  /** The unique resource identifier path */
  id: Scalars['ID'];
  /** Whether the node is a Content Node */
  isContentNode: Scalars['Boolean'];
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** Whether the node is a Term */
  isTermNode: Scalars['Boolean'];
  /** The link to the term */
  link?: Maybe<Scalars['String']>;
  /** The human friendly name of the object. */
  name?: Maybe<Scalars['String']>;
  /** An alphanumeric identifier for the object unique to its type. */
  slug?: Maybe<Scalars['String']>;
  /** The name of the taxonomy that the object is associated with */
  taxonomyName?: Maybe<Scalars['String']>;
  templates?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The ID of the term group that this term object belongs to */
  termGroupId?: Maybe<Scalars['Int']>;
  /** The taxonomy ID that the object is associated with */
  termTaxonomyId?: Maybe<Scalars['Int']>;
  /** The unique resource identifier path */
  uri?: Maybe<Scalars['String']>;
};


/** Terms are nodes within a Taxonomy, used to group and relate other nodes. */
export type TermNodeEnqueuedScriptsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** Terms are nodes within a Taxonomy, used to group and relate other nodes. */
export type TermNodeEnqueuedStylesheetsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** Connection to TermNode Nodes */
export type TermNodeConnection = {
  /** A list of edges (relational context) between RootQuery and connected TermNode Nodes */
  edges: Array<TermNodeConnectionEdge>;
  /** A list of connected TermNode Nodes */
  nodes: Array<TermNode>;
  /** Information about pagination in a connection. */
  pageInfo: TermNodeConnectionPageInfo;
};

/** Edge between a Node and a connected TermNode */
export type TermNodeConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The connected TermNode Node */
  node: TermNode;
};

/** Page Info on the connected TermNodeConnectionEdge */
export type TermNodeConnectionPageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** The Type of Identifier used to fetch a single resource. Default is "ID". To be used along with the "id" field. */
export enum TermNodeIdTypeEnum {
  /** The Database ID for the node */
  DatabaseId = 'DATABASE_ID',
  /** The hashed Global ID */
  Id = 'ID',
  /** The name of the node */
  Name = 'NAME',
  /** Url friendly name of the node */
  Slug = 'SLUG',
  /** The URI for the node */
  Uri = 'URI'
}

/** Connection between the TermNode type and the EnqueuedScript type */
export type TermNodeToEnqueuedScriptConnection = Connection & EnqueuedScriptConnection & {
  __typename?: 'TermNodeToEnqueuedScriptConnection';
  /** Edges for the TermNodeToEnqueuedScriptConnection connection */
  edges: Array<TermNodeToEnqueuedScriptConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<EnqueuedScript>;
  /** Information about pagination in a connection. */
  pageInfo: TermNodeToEnqueuedScriptConnectionPageInfo;
};

/** An edge in a connection */
export type TermNodeToEnqueuedScriptConnectionEdge = Edge & EnqueuedScriptConnectionEdge & {
  __typename?: 'TermNodeToEnqueuedScriptConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: EnqueuedScript;
};

/** Page Info on the &quot;TermNodeToEnqueuedScriptConnection&quot; */
export type TermNodeToEnqueuedScriptConnectionPageInfo = EnqueuedScriptConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'TermNodeToEnqueuedScriptConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Connection between the TermNode type and the EnqueuedStylesheet type */
export type TermNodeToEnqueuedStylesheetConnection = Connection & EnqueuedStylesheetConnection & {
  __typename?: 'TermNodeToEnqueuedStylesheetConnection';
  /** Edges for the TermNodeToEnqueuedStylesheetConnection connection */
  edges: Array<TermNodeToEnqueuedStylesheetConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<EnqueuedStylesheet>;
  /** Information about pagination in a connection. */
  pageInfo: TermNodeToEnqueuedStylesheetConnectionPageInfo;
};

/** An edge in a connection */
export type TermNodeToEnqueuedStylesheetConnectionEdge = Edge & EnqueuedStylesheetConnectionEdge & {
  __typename?: 'TermNodeToEnqueuedStylesheetConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: EnqueuedStylesheet;
};

/** Page Info on the &quot;TermNodeToEnqueuedStylesheetConnection&quot; */
export type TermNodeToEnqueuedStylesheetConnectionPageInfo = EnqueuedStylesheetConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'TermNodeToEnqueuedStylesheetConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Options for ordering the connection by */
export enum TermObjectsConnectionOrderbyEnum {
  /** Order the connection by item count. */
  Count = 'COUNT',
  /** Order the connection by description. */
  Description = 'DESCRIPTION',
  /** Order the connection by name. */
  Name = 'NAME',
  /** Order the connection by slug. */
  Slug = 'SLUG',
  /** Order the connection by term group. */
  TermGroup = 'TERM_GROUP',
  /** Order the connection by term id. */
  TermId = 'TERM_ID',
  /** Order the connection by term order. */
  TermOrder = 'TERM_ORDER'
}

/** A Gravity Forms   field. */
export type TextAreaField = FormField & {
  __typename?: 'TextAreaField';
  /** When specified, the value of this property will be used on the admin pages instead of the label. It is useful for fields with long labels. */
  adminLabel?: Maybe<Scalars['String']>;
  /** Determines if the field’s value can be pre-populated dynamically. */
  canPrepopulate?: Maybe<Scalars['Boolean']>;
  /** Controls the visibility of the field based on values selected by the user. */
  conditionalLogic?: Maybe<ConditionalLogic>;
  /** String containing the custom CSS classes to be added to the &lt;li&gt; tag that contains the field. Useful for applying custom formatting to specific fields. */
  cssClass?: Maybe<Scalars['String']>;
  /** Contains the default value for the field. When specified, the field&#039;s value will be populated with the contents of this property when the form is displayed. */
  defaultValue?: Maybe<Scalars['String']>;
  /** Field description. */
  description?: Maybe<Scalars['String']>;
  /** The placement of the field description. */
  descriptionPlacement?: Maybe<FormFieldDescriptionPlacementEnum>;
  /** Indicates the field is only displayed and its contents are not submitted with the form/saved with the entry. This is set to true. */
  displayOnly?: Maybe<Scalars['Boolean']>;
  /** Contains the message that is displayed for fields that fail validation. */
  errorMessage?: Maybe<Scalars['String']>;
  /** Indicates whether the field uses the rich text editor interface. */
  hasRichTextEditor?: Maybe<Scalars['Boolean']>;
  /** Field ID. */
  id: Scalars['Int'];
  /** Assigns a name to this field so that it can be populated dynamically via this input name. Only applicable when canPrepopulate is `true`. */
  inputName?: Maybe<Scalars['String']>;
  /** The base form field type used to display the input. A good example is the Post Custom Field that can be displayed as various different types of fields. */
  inputType?: Maybe<FormFieldTypeEnum>;
  /** Determines if the field requires the user to enter a value. Fields marked as required will prevent the form from being submitted if the user has not entered a value in it. */
  isRequired?: Maybe<Scalars['Boolean']>;
  /** Field label that will be displayed on the form and on the admin pages. */
  label?: Maybe<Scalars['String']>;
  /** The field label position. */
  labelPlacement?: Maybe<FormFieldLabelPlacementEnum>;
  /** The number of CSS grid columns the field should span. */
  layoutGridColumnSpan?: Maybe<Scalars['Int']>;
  /** The number of CSS grid columns the spacer field following this one should span. */
  layoutSpacerGridColumnSpan?: Maybe<Scalars['Int']>;
  /** Specifies the maximum number of characters allowed in a text or textarea (paragraph) field. */
  maxLength?: Maybe<Scalars['Int']>;
  /** The form page this field is located on. Default is 1. */
  pageNumber?: Maybe<Scalars['Int']>;
  /** The form field-specifc policies for exporting and erasing personal data. */
  personalData?: Maybe<FormFieldDataPolicy>;
  /** Placeholder text to give the user a hint on how to fill out the field. This is not submitted with the form. */
  placeholder?: Maybe<Scalars['String']>;
  /** Determines if the field allows duplicate submissions. */
  shouldAllowDuplicates?: Maybe<Scalars['Boolean']>;
  /** Determines the size of the field when displayed on the page. */
  size?: Maybe<FormFieldSizeEnum>;
  /** The type of field to be displayed. */
  type?: Maybe<FormFieldTypeEnum>;
  /** The string-formatted entry value for the `formField`. For complex fields this might be a JSON-encoded or serialized array. */
  value?: Maybe<Scalars['String']>;
  /** Field visibility. */
  visibility?: Maybe<FormFieldVisibilityEnum>;
};

/** A Gravity Forms   field. */
export type TextField = FormField & {
  __typename?: 'TextField';
  /** When specified, the value of this property will be used on the admin pages instead of the label. It is useful for fields with long labels. */
  adminLabel?: Maybe<Scalars['String']>;
  /** The autocomplete attribute for the field. */
  autocompleteAttribute?: Maybe<Scalars['String']>;
  /** Determines if the field’s value can be pre-populated dynamically. */
  canPrepopulate?: Maybe<Scalars['Boolean']>;
  /** Controls the visibility of the field based on values selected by the user. */
  conditionalLogic?: Maybe<ConditionalLogic>;
  /** String containing the custom CSS classes to be added to the &lt;li&gt; tag that contains the field. Useful for applying custom formatting to specific fields. */
  cssClass?: Maybe<Scalars['String']>;
  /** Contains the default value for the field. When specified, the field&#039;s value will be populated with the contents of this property when the form is displayed. */
  defaultValue?: Maybe<Scalars['String']>;
  /** Field description. */
  description?: Maybe<Scalars['String']>;
  /** The placement of the field description. */
  descriptionPlacement?: Maybe<FormFieldDescriptionPlacementEnum>;
  /** Indicates the field is only displayed and its contents are not submitted with the form/saved with the entry. This is set to true. */
  displayOnly?: Maybe<Scalars['Boolean']>;
  /** Contains the message that is displayed for fields that fail validation. */
  errorMessage?: Maybe<Scalars['String']>;
  /** Whether autocomplete should be enabled for this field. */
  hasAutocomplete?: Maybe<Scalars['Boolean']>;
  /** Whether the field has an input mask. */
  hasInputMask?: Maybe<Scalars['Boolean']>;
  /** Field ID. */
  id: Scalars['Int'];
  /** The pattern used for the input mask. */
  inputMaskValue?: Maybe<Scalars['String']>;
  /** Assigns a name to this field so that it can be populated dynamically via this input name. Only applicable when canPrepopulate is `true`. */
  inputName?: Maybe<Scalars['String']>;
  /** The base form field type used to display the input. A good example is the Post Custom Field that can be displayed as various different types of fields. */
  inputType?: Maybe<FormFieldTypeEnum>;
  /** Determines if a text field input tag should be created with a &quot;password&quot; type. */
  isPasswordInput?: Maybe<Scalars['Boolean']>;
  /** Determines if the field requires the user to enter a value. Fields marked as required will prevent the form from being submitted if the user has not entered a value in it. */
  isRequired?: Maybe<Scalars['Boolean']>;
  /** Field label that will be displayed on the form and on the admin pages. */
  label?: Maybe<Scalars['String']>;
  /** The field label position. */
  labelPlacement?: Maybe<FormFieldLabelPlacementEnum>;
  /** The number of CSS grid columns the field should span. */
  layoutGridColumnSpan?: Maybe<Scalars['Int']>;
  /** The number of CSS grid columns the spacer field following this one should span. */
  layoutSpacerGridColumnSpan?: Maybe<Scalars['Int']>;
  /** Specifies the maximum number of characters allowed in a text or textarea (paragraph) field. */
  maxLength?: Maybe<Scalars['Int']>;
  /** The form page this field is located on. Default is 1. */
  pageNumber?: Maybe<Scalars['Int']>;
  /** The form field-specifc policies for exporting and erasing personal data. */
  personalData?: Maybe<FormFieldDataPolicy>;
  /** Placeholder text to give the user a hint on how to fill out the field. This is not submitted with the form. */
  placeholder?: Maybe<Scalars['String']>;
  /** Determines if the field allows duplicate submissions. */
  shouldAllowDuplicates?: Maybe<Scalars['Boolean']>;
  /** Determines the size of the field when displayed on the page. */
  size?: Maybe<FormFieldSizeEnum>;
  /** The type of field to be displayed. */
  type?: Maybe<FormFieldTypeEnum>;
  /** The string-formatted entry value for the `formField`. For complex fields this might be a JSON-encoded or serialized array. */
  value?: Maybe<Scalars['String']>;
  /** Field visibility. */
  visibility?: Maybe<FormFieldVisibilityEnum>;
};

/** A theme object */
export type Theme = Node & {
  __typename?: 'Theme';
  /** Name of the theme author(s), could also be a company name. This field is equivalent to WP_Theme-&gt;get( &quot;Author&quot; ). */
  author?: Maybe<Scalars['String']>;
  /** URI for the author/company website. This field is equivalent to WP_Theme-&gt;get( &quot;AuthorURI&quot; ). */
  authorUri?: Maybe<Scalars['String']>;
  /** The description of the theme. This field is equivalent to WP_Theme-&gt;get( &quot;Description&quot; ). */
  description?: Maybe<Scalars['String']>;
  /** The globally unique identifier of the theme object. */
  id: Scalars['ID'];
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** Display name of the theme. This field is equivalent to WP_Theme-&gt;get( &quot;Name&quot; ). */
  name?: Maybe<Scalars['String']>;
  /** The URL of the screenshot for the theme. The screenshot is intended to give an overview of what the theme looks like. This field is equivalent to WP_Theme-&gt;get_screenshot(). */
  screenshot?: Maybe<Scalars['String']>;
  /** The theme slug is used to internally match themes. Theme slugs can have subdirectories like: my-theme/sub-theme. This field is equivalent to WP_Theme-&gt;get_stylesheet(). */
  slug?: Maybe<Scalars['String']>;
  /** URI for the author/company website. This field is equivalent to WP_Theme-&gt;get( &quot;Tags&quot; ). */
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** A URI if the theme has a website associated with it. The Theme URI is handy for directing users to a theme site for support etc. This field is equivalent to WP_Theme-&gt;get( &quot;ThemeURI&quot; ). */
  themeUri?: Maybe<Scalars['String']>;
  /** The current version of the theme. This field is equivalent to WP_Theme-&gt;get( &quot;Version&quot; ). */
  version?: Maybe<Scalars['String']>;
};

/** Connection to Theme Nodes */
export type ThemeConnection = {
  /** A list of edges (relational context) between RootQuery and connected Theme Nodes */
  edges: Array<ThemeConnectionEdge>;
  /** A list of connected Theme Nodes */
  nodes: Array<Theme>;
  /** Information about pagination in a connection. */
  pageInfo: ThemeConnectionPageInfo;
};

/** Edge between a Node and a connected Theme */
export type ThemeConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The connected Theme Node */
  node: Theme;
};

/** Page Info on the connected ThemeConnectionEdge */
export type ThemeConnectionPageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** A Gravity Forms   field. */
export type TimeField = FormField & {
  __typename?: 'TimeField';
  /** When specified, the value of this property will be used on the admin pages instead of the label. It is useful for fields with long labels. */
  adminLabel?: Maybe<Scalars['String']>;
  /** Determines if the field’s value can be pre-populated dynamically. */
  canPrepopulate?: Maybe<Scalars['Boolean']>;
  /** Controls the visibility of the field based on values selected by the user. */
  conditionalLogic?: Maybe<ConditionalLogic>;
  /** String containing the custom CSS classes to be added to the &lt;li&gt; tag that contains the field. Useful for applying custom formatting to specific fields. */
  cssClass?: Maybe<Scalars['String']>;
  /** Field description. */
  description?: Maybe<Scalars['String']>;
  /** The placement of the field description. */
  descriptionPlacement?: Maybe<FormFieldDescriptionPlacementEnum>;
  /** Indicates the field is only displayed and its contents are not submitted with the form/saved with the entry. This is set to true. */
  displayOnly?: Maybe<Scalars['Boolean']>;
  /** Contains the message that is displayed for fields that fail validation. */
  errorMessage?: Maybe<Scalars['String']>;
  /** Field ID. */
  id: Scalars['Int'];
  /** The base form field type used to display the input. A good example is the Post Custom Field that can be displayed as various different types of fields. */
  inputType?: Maybe<FormFieldTypeEnum>;
  /** An array of the available properties for each input of the time field. */
  inputs?: Maybe<Array<Maybe<TimeInputProperty>>>;
  /** Determines if the field requires the user to enter a value. Fields marked as required will prevent the form from being submitted if the user has not entered a value in it. */
  isRequired?: Maybe<Scalars['Boolean']>;
  /** Field label that will be displayed on the form and on the admin pages. */
  label?: Maybe<Scalars['String']>;
  /** The field label position. */
  labelPlacement?: Maybe<FormFieldLabelPlacementEnum>;
  /** The number of CSS grid columns the field should span. */
  layoutGridColumnSpan?: Maybe<Scalars['Int']>;
  /** The number of CSS grid columns the spacer field following this one should span. */
  layoutSpacerGridColumnSpan?: Maybe<Scalars['Int']>;
  /** The form page this field is located on. Default is 1. */
  pageNumber?: Maybe<Scalars['Int']>;
  /** The form field-specifc policies for exporting and erasing personal data. */
  personalData?: Maybe<FormFieldDataPolicy>;
  /** Determines if the field allows duplicate submissions. */
  shouldAllowDuplicates?: Maybe<Scalars['Boolean']>;
  /** The placement of the labels for the subfields within the group. This setting controls all of the subfields, they cannot be set individually. They may be aligned above or below the inputs. If this property is not set, the “Sub-Label Placement” setting on the Form Settings-&gt;Form Layout page is used. If no setting is specified, the default is above inputs. */
  subLabelPlacement?: Maybe<FormFieldSubLabelPlacementEnum>;
  /** Determines how the time is displayed. */
  timeFormat?: Maybe<TimeFieldFormatEnum>;
  /** Time field value. */
  timeValues?: Maybe<TimeFieldValue>;
  /** The type of field to be displayed. */
  type?: Maybe<FormFieldTypeEnum>;
  /** The string-formatted entry value for the `formField`. For complex fields this might be a JSON-encoded or serialized array. */
  value?: Maybe<Scalars['String']>;
  /** Field visibility. */
  visibility?: Maybe<FormFieldVisibilityEnum>;
};

/** How the time is displayed. */
export enum TimeFieldFormatEnum {
  /** 12-hour time format. */
  H12 = 'H12',
  /** 24-hour time format. */
  H24 = 'H24'
}

/** The individual properties for each element of the Time value field. */
export type TimeFieldValue = {
  __typename?: 'TimeFieldValue';
  /** AM or PM. */
  amPm?: Maybe<AmPmEnum>;
  /** The full display value in 12-hour format. Example: &quot;08:25 am&quot;. */
  displayValue?: Maybe<Scalars['String']>;
  /** The hours, in this format: hh. */
  hours?: Maybe<Scalars['String']>;
  /** The minutes, in this format: mm. */
  minutes?: Maybe<Scalars['String']>;
};

/** Time input values. */
export type TimeInputProperty = {
  __typename?: 'TimeInputProperty';
  /** The autocomplete attribute for the field. */
  autocompleteAttribute?: Maybe<Scalars['String']>;
  /** The custom label for the input. When set, this is used in place of the label. */
  customLabel?: Maybe<Scalars['String']>;
  /** Contains the default value for the field. When specified, the field&#039;s value will be populated with the contents of this property when the form is displayed. */
  defaultValue?: Maybe<Scalars['String']>;
  /** The input ID. Input IDs follow the following naming convention: FIELDID.INPUTID (i.e. 5.1), where FIELDID is the id of the containing field and INPUTID specifies the input field. */
  id?: Maybe<Scalars['Float']>;
  /** Field label that will be displayed on the form and on the admin pages. */
  label?: Maybe<Scalars['String']>;
  /** Placeholder text to give the user a hint on how to fill out the field. This is not submitted with the form. */
  placeholder?: Maybe<Scalars['String']>;
};

/** Any node that has a URI */
export type UniformResourceIdentifiable = {
  /** @deprecated Deprecated in favor of using Next.js pages */
  conditionalTags?: Maybe<ConditionalTags>;
  /** The unique resource identifier path */
  id: Scalars['ID'];
  /** Whether the node is a Content Node */
  isContentNode: Scalars['Boolean'];
  /** Whether the node is a Term */
  isTermNode: Scalars['Boolean'];
  templates?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The unique resource identifier path */
  uri?: Maybe<Scalars['String']>;
};

/** Input for the updateCategory mutation. */
export type UpdateCategoryInput = {
  /** The slug that the category will be an alias of */
  aliasOf?: InputMaybe<Scalars['String']>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The description of the category object */
  description?: InputMaybe<Scalars['String']>;
  /** The ID of the category object to update */
  id: Scalars['ID'];
  /** The name of the category object to mutate */
  name?: InputMaybe<Scalars['String']>;
  /** The ID of the category that should be set as the parent */
  parentId?: InputMaybe<Scalars['ID']>;
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug?: InputMaybe<Scalars['String']>;
};

/** The payload for the updateCategory mutation. */
export type UpdateCategoryPayload = {
  __typename?: 'UpdateCategoryPayload';
  /** The created category */
  category?: Maybe<Category>;
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Input for the updateClient mutation. */
export type UpdateClientInput = {
  /** The slug that the work_tag will be an alias of */
  aliasOf?: InputMaybe<Scalars['String']>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The description of the work_tag object */
  description?: InputMaybe<Scalars['String']>;
  /** The ID of the client object to update */
  id: Scalars['ID'];
  /** The name of the work_tag object to mutate */
  name?: InputMaybe<Scalars['String']>;
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug?: InputMaybe<Scalars['String']>;
};

/** The payload for the updateClient mutation. */
export type UpdateClientPayload = {
  __typename?: 'UpdateClientPayload';
  /** The created work_tag */
  client?: Maybe<Client>;
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Input for the updateComment mutation. */
export type UpdateCommentInput = {
  /** The approval status of the comment. */
  approved?: InputMaybe<Scalars['String']>;
  /** The name of the comment's author. */
  author?: InputMaybe<Scalars['String']>;
  /** The email of the comment's author. */
  authorEmail?: InputMaybe<Scalars['String']>;
  /** The url of the comment's author. */
  authorUrl?: InputMaybe<Scalars['String']>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The database ID of the post object the comment belongs to. */
  commentOn?: InputMaybe<Scalars['Int']>;
  /** Content of the comment. */
  content?: InputMaybe<Scalars['String']>;
  /** The date of the object. Preferable to enter as year/month/day ( e.g. 01/31/2017 ) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: InputMaybe<Scalars['String']>;
  /** The ID of the comment being updated. */
  id: Scalars['ID'];
  /** Parent comment ID of current comment. */
  parent?: InputMaybe<Scalars['ID']>;
  /** The approval status of the comment */
  status?: InputMaybe<CommentStatusEnum>;
  /** Type of comment. */
  type?: InputMaybe<Scalars['String']>;
};

/** The payload for the updateComment mutation. */
export type UpdateCommentPayload = {
  __typename?: 'UpdateCommentPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The comment that was created */
  comment?: Maybe<Comment>;
  /** Whether the mutation succeeded. If the comment is not approved, the server will not return the comment to a non authenticated user, but a success message can be returned if the create succeeded, and the client can optimistically add the comment to the client cache */
  success?: Maybe<Scalars['Boolean']>;
};

/** Entry meta input fields for updating draft Gravity Forms entries. */
export type UpdateDraftEntryMetaInput = {
  /** ID of the user that submitted of the form if a logged in user submitted the form. */
  createdById?: InputMaybe<Scalars['Int']>;
  /** The UTC date the entry was created, in `Y-m-d H:i:s` format. */
  dateCreatedGmt?: InputMaybe<Scalars['String']>;
  /** Client IP of user who submitted the form. */
  ip?: InputMaybe<Scalars['String']>;
  /** Used to overwrite the sourceUrl the form was submitted from. */
  sourceUrl?: InputMaybe<Scalars['String']>;
  /** The name and version of both the browser and operating system from which the entry was submitted. */
  userAgent?: InputMaybe<Scalars['String']>;
};

/** Entry meta input fields for updating Gravity Forms entries. */
export type UpdateEntryMetaInput = {
  /** ID of the user that submitted of the form if a logged in user submitted the form. */
  createdById?: InputMaybe<Scalars['Int']>;
  /** The UTC date the entry was created, in `Y-m-d H:i:s` format. */
  dateCreatedGmt?: InputMaybe<Scalars['String']>;
  /** Client IP of user who submitted the form. */
  ip?: InputMaybe<Scalars['String']>;
  /** Whether the entry has been read. */
  isRead?: InputMaybe<Scalars['Boolean']>;
  /** Whether the entry has been starred (i.e marked with a star). */
  isStarred?: InputMaybe<Scalars['Boolean']>;
  /** Used to overwrite the sourceUrl the form was submitted from. */
  sourceUrl?: InputMaybe<Scalars['String']>;
  /** The current status of the entry. */
  status?: InputMaybe<EntryStatusEnum>;
  /** The name and version of both the browser and operating system from which the entry was submitted. */
  userAgent?: InputMaybe<Scalars['String']>;
};

/** Input for the updateGfDraftEntry mutation. */
export type UpdateGfDraftEntryInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The entry meta values to update. */
  entryMeta?: InputMaybe<UpdateDraftEntryMetaInput>;
  /** The field ids and their values. */
  fieldValues?: InputMaybe<Array<InputMaybe<FormFieldValuesInput>>>;
  /** Either the global ID of the draft entry, or its resume token. */
  id: Scalars['ID'];
  /** The ID type for the draft entry. Defaults to `ID` . */
  idType?: InputMaybe<DraftEntryIdTypeEnum>;
  /** Whether the field values should be validated on submission. Defaults to false. */
  shouldValidate?: InputMaybe<Scalars['Boolean']>;
};

/** The payload for the updateGfDraftEntry mutation. */
export type UpdateGfDraftEntryPayload = {
  __typename?: 'UpdateGfDraftEntryPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The draft entry after the update mutation has been applied. If a validation error occurred, the draft entry will NOT have been updated with the invalid value provided. */
  draftEntry?: Maybe<GfDraftEntry>;
  /** Field validation errors. */
  errors?: Maybe<Array<Maybe<FieldError>>>;
  /** Draft resume URL. If the &quot;Referer&quot; header is not included in the request, this will be an empty string. */
  resumeUrl?: Maybe<Scalars['String']>;
};

/** Input for the updateGfEntry mutation. */
export type UpdateGfEntryInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The entry meta values to update. */
  entryMeta?: InputMaybe<UpdateEntryMetaInput>;
  /** The field ids and their values to update. */
  fieldValues?: InputMaybe<Array<InputMaybe<FormFieldValuesInput>>>;
  /** ID of the entry to update, either a global or database ID. */
  id: Scalars['ID'];
  /** Whether the field values should be validated on submission. Defaults to false. */
  shouldValidate?: InputMaybe<Scalars['Boolean']>;
};

/** The payload for the updateGfEntry mutation. */
export type UpdateGfEntryPayload = {
  __typename?: 'UpdateGfEntryPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The entry that was created. */
  entry?: Maybe<GfSubmittedEntry>;
  /** Field errors. */
  errors?: Maybe<Array<Maybe<FieldError>>>;
};

/** Input for the updateGraphqlDocument mutation. */
export type UpdateGraphqlDocumentInput = {
  /** Alias names for saved GraphQL query documents */
  alias?: InputMaybe<Array<Scalars['String']>>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The content of the object */
  content?: InputMaybe<Scalars['String']>;
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: InputMaybe<Scalars['String']>;
  /** Description for the saved GraphQL document */
  description?: InputMaybe<Scalars['String']>;
  /** Allow, deny or default access grant for specific query */
  grant?: InputMaybe<Scalars['String']>;
  /** The ID of the graphqlDocument object */
  id: Scalars['ID'];
  /** Override the edit lock when another user is editing the post */
  ignoreEditLock?: InputMaybe<Scalars['Boolean']>;
  /** HTTP Cache-Control max-age directive for a saved GraphQL document */
  maxAgeHeader?: InputMaybe<Scalars['Int']>;
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: InputMaybe<Scalars['Int']>;
  /** The password used to protect the content of the object */
  password?: InputMaybe<Scalars['String']>;
  /** The slug of the object */
  slug?: InputMaybe<Scalars['String']>;
  /** The status of the object */
  status?: InputMaybe<PostStatusEnum>;
  /** The title of the object */
  title?: InputMaybe<Scalars['String']>;
};

/** The payload for the updateGraphqlDocument mutation. */
export type UpdateGraphqlDocumentPayload = {
  __typename?: 'UpdateGraphqlDocumentPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The Post object mutation type. */
  graphqlDocument?: Maybe<GraphqlDocument>;
};

/** Input for the updateMediaItem mutation. */
export type UpdateMediaItemInput = {
  /** Alternative text to display when mediaItem is not displayed */
  altText?: InputMaybe<Scalars['String']>;
  /** The userId to assign as the author of the mediaItem */
  authorId?: InputMaybe<Scalars['ID']>;
  /** The caption for the mediaItem */
  caption?: InputMaybe<Scalars['String']>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The comment status for the mediaItem */
  commentStatus?: InputMaybe<Scalars['String']>;
  /** The date of the mediaItem */
  date?: InputMaybe<Scalars['String']>;
  /** The date (in GMT zone) of the mediaItem */
  dateGmt?: InputMaybe<Scalars['String']>;
  /** Description of the mediaItem */
  description?: InputMaybe<Scalars['String']>;
  /** The file name of the mediaItem */
  filePath?: InputMaybe<Scalars['String']>;
  /** The file type of the mediaItem */
  fileType?: InputMaybe<MimeTypeEnum>;
  /** The ID of the mediaItem object */
  id: Scalars['ID'];
  /** The ID of the parent object */
  parentId?: InputMaybe<Scalars['ID']>;
  /** The ping status for the mediaItem */
  pingStatus?: InputMaybe<Scalars['String']>;
  /** The slug of the mediaItem */
  slug?: InputMaybe<Scalars['String']>;
  /** The status of the mediaItem */
  status?: InputMaybe<MediaItemStatusEnum>;
  /** The title of the mediaItem */
  title?: InputMaybe<Scalars['String']>;
};

/** The payload for the updateMediaItem mutation. */
export type UpdateMediaItemPayload = {
  __typename?: 'UpdateMediaItemPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The MediaItem object mutation type. */
  mediaItem?: Maybe<MediaItem>;
};

/** Input for the updatePage mutation. */
export type UpdatePageInput = {
  /** The userId to assign as the author of the object */
  authorId?: InputMaybe<Scalars['ID']>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The comment status for the object */
  commentStatus?: InputMaybe<Scalars['String']>;
  /** The content of the object */
  content?: InputMaybe<Scalars['String']>;
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: InputMaybe<Scalars['String']>;
  /** The ID of the page object */
  id: Scalars['ID'];
  /** Override the edit lock when another user is editing the post */
  ignoreEditLock?: InputMaybe<Scalars['Boolean']>;
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: InputMaybe<Scalars['Int']>;
  /** The ID of the parent object */
  parentId?: InputMaybe<Scalars['ID']>;
  /** The password used to protect the content of the object */
  password?: InputMaybe<Scalars['String']>;
  /** The slug of the object */
  slug?: InputMaybe<Scalars['String']>;
  /** The status of the object */
  status?: InputMaybe<PostStatusEnum>;
  /** The title of the object */
  title?: InputMaybe<Scalars['String']>;
};

/** The payload for the updatePage mutation. */
export type UpdatePagePayload = {
  __typename?: 'UpdatePagePayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The Post object mutation type. */
  page?: Maybe<Page>;
};

/** Input for the updatePostFormat mutation. */
export type UpdatePostFormatInput = {
  /** The slug that the post_format will be an alias of */
  aliasOf?: InputMaybe<Scalars['String']>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The description of the post_format object */
  description?: InputMaybe<Scalars['String']>;
  /** The ID of the postFormat object to update */
  id: Scalars['ID'];
  /** The name of the post_format object to mutate */
  name?: InputMaybe<Scalars['String']>;
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug?: InputMaybe<Scalars['String']>;
};

/** The payload for the updatePostFormat mutation. */
export type UpdatePostFormatPayload = {
  __typename?: 'UpdatePostFormatPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The created post_format */
  postFormat?: Maybe<PostFormat>;
};

/** Input for the updatePost mutation. */
export type UpdatePostInput = {
  /** The userId to assign as the author of the object */
  authorId?: InputMaybe<Scalars['ID']>;
  /** Set connections between the post and categories */
  categories?: InputMaybe<PostCategoriesInput>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The comment status for the object */
  commentStatus?: InputMaybe<Scalars['String']>;
  /** The content of the object */
  content?: InputMaybe<Scalars['String']>;
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: InputMaybe<Scalars['String']>;
  /** The excerpt of the object */
  excerpt?: InputMaybe<Scalars['String']>;
  /** The ID of the post object */
  id: Scalars['ID'];
  /** Override the edit lock when another user is editing the post */
  ignoreEditLock?: InputMaybe<Scalars['Boolean']>;
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: InputMaybe<Scalars['Int']>;
  /** The password used to protect the content of the object */
  password?: InputMaybe<Scalars['String']>;
  /** The ping status for the object */
  pingStatus?: InputMaybe<Scalars['String']>;
  /** URLs that have been pinged. */
  pinged?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Set connections between the post and postFormats */
  postFormats?: InputMaybe<PostPostFormatsInput>;
  /** The slug of the object */
  slug?: InputMaybe<Scalars['String']>;
  /** The status of the object */
  status?: InputMaybe<PostStatusEnum>;
  /** Set connections between the post and tags */
  tags?: InputMaybe<PostTagsInput>;
  /** The title of the object */
  title?: InputMaybe<Scalars['String']>;
  /** URLs queued to be pinged. */
  toPing?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/** The payload for the updatePost mutation. */
export type UpdatePostPayload = {
  __typename?: 'UpdatePostPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The Post object mutation type. */
  post?: Maybe<Post>;
};

/** Input for the updatePress_release mutation. */
export type UpdatePress_ReleaseInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The content of the object */
  content?: InputMaybe<Scalars['String']>;
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: InputMaybe<Scalars['String']>;
  /** The excerpt of the object */
  excerpt?: InputMaybe<Scalars['String']>;
  /** The ID of the press_release object */
  id: Scalars['ID'];
  /** Override the edit lock when another user is editing the post */
  ignoreEditLock?: InputMaybe<Scalars['Boolean']>;
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: InputMaybe<Scalars['Int']>;
  /** The ID of the parent object */
  parentId?: InputMaybe<Scalars['ID']>;
  /** The password used to protect the content of the object */
  password?: InputMaybe<Scalars['String']>;
  /** The slug of the object */
  slug?: InputMaybe<Scalars['String']>;
  /** The status of the object */
  status?: InputMaybe<PostStatusEnum>;
  /** The title of the object */
  title?: InputMaybe<Scalars['String']>;
};

/** The payload for the updatePress_release mutation. */
export type UpdatePress_ReleasePayload = {
  __typename?: 'UpdatePress_releasePayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The Post object mutation type. */
  press_release?: Maybe<Press_Release>;
};

/** Input for the updateSettings mutation. */
export type UpdateSettingsInput = {
  /** Opt into anonymous usage tracking to help us make Atlas Content Modeler better. */
  atlasContentModelerSettingsSettingsAtlasContentModelerUsageTracking?: InputMaybe<Scalars['String']>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Allow people to submit comments on new posts. */
  discussionSettingsDefaultCommentStatus?: InputMaybe<Scalars['String']>;
  /** Allow link notifications from other blogs (pingbacks and trackbacks) on new articles. */
  discussionSettingsDefaultPingStatus?: InputMaybe<Scalars['String']>;
  /** A date format for all date strings. */
  generalSettingsDateFormat?: InputMaybe<Scalars['String']>;
  /** Site tagline. */
  generalSettingsDescription?: InputMaybe<Scalars['String']>;
  /** This address is used for admin purposes, like new user notification. */
  generalSettingsEmail?: InputMaybe<Scalars['String']>;
  /** WordPress locale code. */
  generalSettingsLanguage?: InputMaybe<Scalars['String']>;
  /** A day number of the week that the week should start on. */
  generalSettingsStartOfWeek?: InputMaybe<Scalars['Int']>;
  /** A time format for all time strings. */
  generalSettingsTimeFormat?: InputMaybe<Scalars['String']>;
  /** A city in the same timezone as you. */
  generalSettingsTimezone?: InputMaybe<Scalars['String']>;
  /** Site title. */
  generalSettingsTitle?: InputMaybe<Scalars['String']>;
  /** Site URL. */
  generalSettingsUrl?: InputMaybe<Scalars['String']>;
  /** The ID of the page that should display the latest posts */
  readingSettingsPageForPosts?: InputMaybe<Scalars['Int']>;
  /** The ID of the page that should be displayed on the front page */
  readingSettingsPageOnFront?: InputMaybe<Scalars['Int']>;
  /** Blog pages show at most. */
  readingSettingsPostsPerPage?: InputMaybe<Scalars['Int']>;
  /** What to show on the front page */
  readingSettingsShowOnFront?: InputMaybe<Scalars['String']>;
  /** Default post category. */
  writingSettingsDefaultCategory?: InputMaybe<Scalars['Int']>;
  /** Default post format. */
  writingSettingsDefaultPostFormat?: InputMaybe<Scalars['String']>;
  /** Convert emoticons like :-) and :-P to graphics on display. */
  writingSettingsUseSmilies?: InputMaybe<Scalars['Boolean']>;
};

/** The payload for the updateSettings mutation. */
export type UpdateSettingsPayload = {
  __typename?: 'UpdateSettingsPayload';
  /** Update all settings. */
  allSettings?: Maybe<Settings>;
  /** Update the AtlasContentModelerSettingsSettings setting. */
  atlasContentModelerSettingsSettings?: Maybe<AtlasContentModelerSettingsSettings>;
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Update the DiscussionSettings setting. */
  discussionSettings?: Maybe<DiscussionSettings>;
  /** Update the GeneralSettings setting. */
  generalSettings?: Maybe<GeneralSettings>;
  /** Update the ReadingSettings setting. */
  readingSettings?: Maybe<ReadingSettings>;
  /** Update the WritingSettings setting. */
  writingSettings?: Maybe<WritingSettings>;
};

/** Input for the updateTag mutation. */
export type UpdateTagInput = {
  /** The slug that the post_tag will be an alias of */
  aliasOf?: InputMaybe<Scalars['String']>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The description of the post_tag object */
  description?: InputMaybe<Scalars['String']>;
  /** The ID of the tag object to update */
  id: Scalars['ID'];
  /** The name of the post_tag object to mutate */
  name?: InputMaybe<Scalars['String']>;
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug?: InputMaybe<Scalars['String']>;
};

/** The payload for the updateTag mutation. */
export type UpdateTagPayload = {
  __typename?: 'UpdateTagPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The created post_tag */
  tag?: Maybe<Tag>;
};

/** Input for the updateTeamMember mutation. */
export type UpdateTeamMemberInput = {
  /** The userId to assign as the author of the object */
  authorId?: InputMaybe<Scalars['ID']>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: InputMaybe<Scalars['String']>;
  /** The ID of the teamMember object */
  id: Scalars['ID'];
  /** Override the edit lock when another user is editing the post */
  ignoreEditLock?: InputMaybe<Scalars['Boolean']>;
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  /** The password used to protect the content of the object */
  password?: InputMaybe<Scalars['String']>;
  /** The slug of the object */
  slug?: InputMaybe<Scalars['String']>;
  /** The status of the object */
  status?: InputMaybe<PostStatusEnum>;
  /** The title of the object */
  title?: InputMaybe<Scalars['String']>;
};

/** The payload for the updateTeamMember mutation. */
export type UpdateTeamMemberPayload = {
  __typename?: 'UpdateTeamMemberPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The Post object mutation type. */
  teamMember?: Maybe<TeamMember>;
};

/** Input for the updateUser mutation. */
export type UpdateUserInput = {
  /** User's AOL IM account. */
  aim?: InputMaybe<Scalars['String']>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** A string containing content about the user. */
  description?: InputMaybe<Scalars['String']>;
  /** A string that will be shown on the site. Defaults to user's username. It is likely that you will want to change this, for both appearance and security through obscurity (that is if you dont use and delete the default admin user). */
  displayName?: InputMaybe<Scalars['String']>;
  /** A string containing the user's email address. */
  email?: InputMaybe<Scalars['String']>;
  /** 	The user's first name. */
  firstName?: InputMaybe<Scalars['String']>;
  /** The ID of the user */
  id: Scalars['ID'];
  /** User's Jabber account. */
  jabber?: InputMaybe<Scalars['String']>;
  /** The user's last name. */
  lastName?: InputMaybe<Scalars['String']>;
  /** User's locale. */
  locale?: InputMaybe<Scalars['String']>;
  /** A string that contains a URL-friendly name for the user. The default is the user's username. */
  nicename?: InputMaybe<Scalars['String']>;
  /** The user's nickname, defaults to the user's username. */
  nickname?: InputMaybe<Scalars['String']>;
  /** A string that contains the plain text password for the user. */
  password?: InputMaybe<Scalars['String']>;
  /** The date the user registered. Format is Y-m-d H:i:s. */
  registered?: InputMaybe<Scalars['String']>;
  /** A string for whether to enable the rich editor or not. False if not empty. */
  richEditing?: InputMaybe<Scalars['String']>;
  /** An array of roles to be assigned to the user. */
  roles?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** A string containing the user's URL for the user's web site. */
  websiteUrl?: InputMaybe<Scalars['String']>;
  /** User's Yahoo IM account. */
  yim?: InputMaybe<Scalars['String']>;
};

/** The payload for the updateUser mutation. */
export type UpdateUserPayload = {
  __typename?: 'UpdateUserPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The User object mutation type. */
  user?: Maybe<User>;
};

/** Input for the updateWorkCategory mutation. */
export type UpdateWorkCategoryInput = {
  /** The slug that the work_cat will be an alias of */
  aliasOf?: InputMaybe<Scalars['String']>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The description of the work_cat object */
  description?: InputMaybe<Scalars['String']>;
  /** The ID of the workCategory object to update */
  id: Scalars['ID'];
  /** The name of the work_cat object to mutate */
  name?: InputMaybe<Scalars['String']>;
  /** The ID of the work_cat that should be set as the parent */
  parentId?: InputMaybe<Scalars['ID']>;
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug?: InputMaybe<Scalars['String']>;
};

/** The payload for the updateWorkCategory mutation. */
export type UpdateWorkCategoryPayload = {
  __typename?: 'UpdateWorkCategoryPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The created work_cat */
  workCategory?: Maybe<WorkCategory>;
};

/** Input for the updateWork mutation. */
export type UpdateWorkInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Set connections between the work and clients */
  clients?: InputMaybe<WorkClientsInput>;
  /** The content of the object */
  content?: InputMaybe<Scalars['String']>;
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: InputMaybe<Scalars['String']>;
  /** The excerpt of the object */
  excerpt?: InputMaybe<Scalars['String']>;
  /** The ID of the work object */
  id: Scalars['ID'];
  /** Override the edit lock when another user is editing the post */
  ignoreEditLock?: InputMaybe<Scalars['Boolean']>;
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: InputMaybe<Scalars['Int']>;
  /** The ID of the parent object */
  parentId?: InputMaybe<Scalars['ID']>;
  /** The password used to protect the content of the object */
  password?: InputMaybe<Scalars['String']>;
  /** The slug of the object */
  slug?: InputMaybe<Scalars['String']>;
  /** The status of the object */
  status?: InputMaybe<PostStatusEnum>;
  /** The title of the object */
  title?: InputMaybe<Scalars['String']>;
  /** Set connections between the work and workCategories */
  workCategories?: InputMaybe<WorkWorkCategoriesInput>;
};

/** The payload for the updateWork mutation. */
export type UpdateWorkPayload = {
  __typename?: 'UpdateWorkPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The Post object mutation type. */
  work?: Maybe<Work>;
};

/** A User object */
export type User = Commenter & DatabaseIdentifier & Node & UniformResourceIdentifiable & {
  __typename?: 'User';
  /** Avatar object for user. The avatar object can be retrieved in different sizes by specifying the size argument. */
  avatar?: Maybe<Avatar>;
  /** User metadata option name. Usually it will be &quot;wp_capabilities&quot;. */
  capKey?: Maybe<Scalars['String']>;
  /** A list of capabilities (permissions) granted to the user */
  capabilities?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Connection between the User type and the Comment type */
  comments?: Maybe<UserToCommentConnection>;
  /** @deprecated Deprecated in favor of using Next.js pages */
  conditionalTags?: Maybe<ConditionalTags>;
  /** Identifies the primary key from the database. */
  databaseId: Scalars['Int'];
  /** Description of the user. */
  description?: Maybe<Scalars['String']>;
  /** Email address of the user. This is equivalent to the WP_User-&gt;user_email property. */
  email?: Maybe<Scalars['String']>;
  /** Connection between the User type and the EnqueuedScript type */
  enqueuedScripts?: Maybe<UserToEnqueuedScriptConnection>;
  /** Connection between the User type and the EnqueuedStylesheet type */
  enqueuedStylesheets?: Maybe<UserToEnqueuedStylesheetConnection>;
  /** A complete list of capabilities including capabilities inherited from a role. This is equivalent to the array keys of WP_User-&gt;allcaps. */
  extraCapabilities?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** First name of the user. This is equivalent to the WP_User-&gt;user_first_name property. */
  firstName?: Maybe<Scalars['String']>;
  /** The globally unique identifier for the user object. */
  id: Scalars['ID'];
  /** Whether the node is a Content Node */
  isContentNode: Scalars['Boolean'];
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** Whether the node is a Term */
  isTermNode: Scalars['Boolean'];
  /** Last name of the user. This is equivalent to the WP_User-&gt;user_last_name property. */
  lastName?: Maybe<Scalars['String']>;
  /** The preferred language locale set for the user. Value derived from get_user_locale(). */
  locale?: Maybe<Scalars['String']>;
  /** Connection between the User type and the mediaItem type */
  mediaItems?: Maybe<UserToMediaItemConnection>;
  /** Display name of the user. This is equivalent to the WP_User-&gt;dispaly_name property. */
  name?: Maybe<Scalars['String']>;
  /** The nicename for the user. This field is equivalent to WP_User-&gt;user_nicename */
  nicename?: Maybe<Scalars['String']>;
  /** Nickname of the user. */
  nickname?: Maybe<Scalars['String']>;
  /** Connection between the User type and the page type */
  pages?: Maybe<UserToPageConnection>;
  /** Connection between the User type and the post type */
  posts?: Maybe<UserToPostConnection>;
  /** The date the user registered or was created. The field follows a full ISO8601 date string format. */
  registeredDate?: Maybe<Scalars['String']>;
  /** Connection between the User and Revisions authored by the user */
  revisions?: Maybe<UserToRevisionsConnection>;
  /** Connection between the User type and the UserRole type */
  roles?: Maybe<UserToUserRoleConnection>;
  /** The Yoast SEO data of a user */
  seo?: Maybe<SeoUser>;
  /** Whether the Toolbar should be displayed when the user is viewing the site. */
  shouldShowAdminToolbar?: Maybe<Scalars['Boolean']>;
  shouldShowFaustToolbar?: Maybe<Scalars['Boolean']>;
  /** The slug for the user. This field is equivalent to WP_User-&gt;user_nicename */
  slug?: Maybe<Scalars['String']>;
  /** Connection between the User type and the teamMember type */
  teamMembers?: Maybe<UserToTeamMemberConnection>;
  templates?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The unique resource identifier path */
  uri?: Maybe<Scalars['String']>;
  /** A website url that is associated with the user. */
  url?: Maybe<Scalars['String']>;
  /**
   * The Id of the user. Equivalent to WP_User-&gt;ID
   * @deprecated Deprecated in favor of the databaseId field
   */
  userId?: Maybe<Scalars['Int']>;
  /** Username for the user. This field is equivalent to WP_User-&gt;user_login. */
  username?: Maybe<Scalars['String']>;
};


/** A User object */
export type UserAvatarArgs = {
  forceDefault?: InputMaybe<Scalars['Boolean']>;
  rating?: InputMaybe<AvatarRatingEnum>;
  size?: InputMaybe<Scalars['Int']>;
};


/** A User object */
export type UserCommentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserToCommentConnectionWhereArgs>;
};


/** A User object */
export type UserEnqueuedScriptsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** A User object */
export type UserEnqueuedStylesheetsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** A User object */
export type UserMediaItemsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserToMediaItemConnectionWhereArgs>;
};


/** A User object */
export type UserPagesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserToPageConnectionWhereArgs>;
};


/** A User object */
export type UserPostsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserToPostConnectionWhereArgs>;
};


/** A User object */
export type UserRevisionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserToRevisionsConnectionWhereArgs>;
};


/** A User object */
export type UserRolesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** A User object */
export type UserTeamMembersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserToTeamMemberConnectionWhereArgs>;
};

/** Connection to User Nodes */
export type UserConnection = {
  /** A list of edges (relational context) between RootQuery and connected User Nodes */
  edges: Array<UserConnectionEdge>;
  /** A list of connected User Nodes */
  nodes: Array<User>;
  /** Information about pagination in a connection. */
  pageInfo: UserConnectionPageInfo;
};

/** Edge between a Node and a connected User */
export type UserConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The connected User Node */
  node: User;
};

/** Page Info on the connected UserConnectionEdge */
export type UserConnectionPageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** The Type of Identifier used to fetch a single User node. To be used along with the "id" field. Default is "ID". */
export enum UserNodeIdTypeEnum {
  /** The Database ID for the node */
  DatabaseId = 'DATABASE_ID',
  /** The Email of the User */
  Email = 'EMAIL',
  /** The hashed Global ID */
  Id = 'ID',
  /** The slug of the User */
  Slug = 'SLUG',
  /** The URI for the node */
  Uri = 'URI',
  /** The username the User uses to login with */
  Username = 'USERNAME'
}

/** A user role object */
export type UserRole = Node & {
  __typename?: 'UserRole';
  /** The capabilities that belong to this role */
  capabilities?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The display name of the role */
  displayName?: Maybe<Scalars['String']>;
  /** The globally unique identifier for the user role object. */
  id: Scalars['ID'];
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** The registered name of the role */
  name?: Maybe<Scalars['String']>;
};

/** Connection to UserRole Nodes */
export type UserRoleConnection = {
  /** A list of edges (relational context) between RootQuery and connected UserRole Nodes */
  edges: Array<UserRoleConnectionEdge>;
  /** A list of connected UserRole Nodes */
  nodes: Array<UserRole>;
  /** Information about pagination in a connection. */
  pageInfo: UserRoleConnectionPageInfo;
};

/** Edge between a Node and a connected UserRole */
export type UserRoleConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The connected UserRole Node */
  node: UserRole;
};

/** Page Info on the connected UserRoleConnectionEdge */
export type UserRoleConnectionPageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Names of available user roles */
export enum UserRoleEnum {
  /** User role with specific capabilities */
  Administrator = 'ADMINISTRATOR',
  /** User role with specific capabilities */
  Author = 'AUTHOR',
  /** User role with specific capabilities */
  Contributor = 'CONTRIBUTOR',
  /** User role with specific capabilities */
  Editor = 'EDITOR',
  /** User role with specific capabilities */
  SeoEditor = 'SEO_EDITOR',
  /** User role with specific capabilities */
  SeoManager = 'SEO_MANAGER',
  /** User role with specific capabilities */
  Subscriber = 'SUBSCRIBER'
}

/** Connection between the User type and the Comment type */
export type UserToCommentConnection = CommentConnection & Connection & {
  __typename?: 'UserToCommentConnection';
  /** Edges for the UserToCommentConnection connection */
  edges: Array<UserToCommentConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<Comment>;
  /** Information about pagination in a connection. */
  pageInfo: UserToCommentConnectionPageInfo;
};

/** An edge in a connection */
export type UserToCommentConnectionEdge = CommentConnectionEdge & Edge & {
  __typename?: 'UserToCommentConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: Comment;
};

/** Page Info on the &quot;UserToCommentConnection&quot; */
export type UserToCommentConnectionPageInfo = CommentConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'UserToCommentConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the UserToCommentConnection connection */
export type UserToCommentConnectionWhereArgs = {
  /** Comment author email address. */
  authorEmail?: InputMaybe<Scalars['String']>;
  /** Array of author IDs to include comments for. */
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of author IDs to exclude comments for. */
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Comment author URL. */
  authorUrl?: InputMaybe<Scalars['String']>;
  /** Array of comment IDs to include. */
  commentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
  commentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Include comments of a given type. */
  commentType?: InputMaybe<Scalars['String']>;
  /** Include comments from a given array of comment types. */
  commentTypeIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Exclude comments from a given array of comment types. */
  commentTypeNotIn?: InputMaybe<Scalars['String']>;
  /** Content object author ID to limit results by. */
  contentAuthor?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of author IDs to retrieve comments for. */
  contentAuthorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of author IDs *not* to retrieve comments for. */
  contentAuthorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Limit results to those affiliated with a given content object ID. */
  contentId?: InputMaybe<Scalars['ID']>;
  /** Array of content object IDs to include affiliated comments for. */
  contentIdIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of content object IDs to exclude affiliated comments for. */
  contentIdNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Content object name (i.e. slug ) to retrieve affiliated comments for. */
  contentName?: InputMaybe<Scalars['String']>;
  /** Content Object parent ID to retrieve affiliated comments for. */
  contentParent?: InputMaybe<Scalars['Int']>;
  /** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentStatus?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentType?: InputMaybe<Array<InputMaybe<ContentTypeEnum>>>;
  /** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
  includeUnapproved?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Karma score to retrieve matching comments for. */
  karma?: InputMaybe<Scalars['Int']>;
  /** The cardinality of the order of the connection */
  order?: InputMaybe<OrderEnum>;
  /** Field to order the comments by. */
  orderby?: InputMaybe<CommentsConnectionOrderbyEnum>;
  /** Parent ID of comment to retrieve children of. */
  parent?: InputMaybe<Scalars['Int']>;
  /** Array of parent IDs of comments to retrieve children for. */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of parent IDs of comments *not* to retrieve children for. */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Search term(s) to retrieve matching comments for. */
  search?: InputMaybe<Scalars['String']>;
  /** Comment status to limit results by. */
  status?: InputMaybe<Scalars['String']>;
  /** Include comments for a specific user ID. */
  userId?: InputMaybe<Scalars['ID']>;
};

/** Connection between the User type and the EnqueuedScript type */
export type UserToEnqueuedScriptConnection = Connection & EnqueuedScriptConnection & {
  __typename?: 'UserToEnqueuedScriptConnection';
  /** Edges for the UserToEnqueuedScriptConnection connection */
  edges: Array<UserToEnqueuedScriptConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<EnqueuedScript>;
  /** Information about pagination in a connection. */
  pageInfo: UserToEnqueuedScriptConnectionPageInfo;
};

/** An edge in a connection */
export type UserToEnqueuedScriptConnectionEdge = Edge & EnqueuedScriptConnectionEdge & {
  __typename?: 'UserToEnqueuedScriptConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: EnqueuedScript;
};

/** Page Info on the &quot;UserToEnqueuedScriptConnection&quot; */
export type UserToEnqueuedScriptConnectionPageInfo = EnqueuedScriptConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'UserToEnqueuedScriptConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Connection between the User type and the EnqueuedStylesheet type */
export type UserToEnqueuedStylesheetConnection = Connection & EnqueuedStylesheetConnection & {
  __typename?: 'UserToEnqueuedStylesheetConnection';
  /** Edges for the UserToEnqueuedStylesheetConnection connection */
  edges: Array<UserToEnqueuedStylesheetConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<EnqueuedStylesheet>;
  /** Information about pagination in a connection. */
  pageInfo: UserToEnqueuedStylesheetConnectionPageInfo;
};

/** An edge in a connection */
export type UserToEnqueuedStylesheetConnectionEdge = Edge & EnqueuedStylesheetConnectionEdge & {
  __typename?: 'UserToEnqueuedStylesheetConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: EnqueuedStylesheet;
};

/** Page Info on the &quot;UserToEnqueuedStylesheetConnection&quot; */
export type UserToEnqueuedStylesheetConnectionPageInfo = EnqueuedStylesheetConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'UserToEnqueuedStylesheetConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Connection between the User type and the mediaItem type */
export type UserToMediaItemConnection = Connection & MediaItemConnection & {
  __typename?: 'UserToMediaItemConnection';
  /** Edges for the UserToMediaItemConnection connection */
  edges: Array<UserToMediaItemConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<MediaItem>;
  /** Information about pagination in a connection. */
  pageInfo: UserToMediaItemConnectionPageInfo;
};

/** An edge in a connection */
export type UserToMediaItemConnectionEdge = Edge & MediaItemConnectionEdge & {
  __typename?: 'UserToMediaItemConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: MediaItem;
};

/** Page Info on the &quot;UserToMediaItemConnection&quot; */
export type UserToMediaItemConnectionPageInfo = MediaItemConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'UserToMediaItemConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the UserToMediaItemConnection connection */
export type UserToMediaItemConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: InputMaybe<Scalars['Int']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: InputMaybe<Scalars['String']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']>;
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>;
  /** Title of the object */
  title?: InputMaybe<Scalars['String']>;
};

/** Connection between the User type and the page type */
export type UserToPageConnection = Connection & PageConnection & {
  __typename?: 'UserToPageConnection';
  /** Edges for the UserToPageConnection connection */
  edges: Array<UserToPageConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<Page>;
  /** Information about pagination in a connection. */
  pageInfo: UserToPageConnectionPageInfo;
};

/** An edge in a connection */
export type UserToPageConnectionEdge = Edge & PageConnectionEdge & {
  __typename?: 'UserToPageConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: Page;
};

/** Page Info on the &quot;UserToPageConnection&quot; */
export type UserToPageConnectionPageInfo = PageConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'UserToPageConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the UserToPageConnection connection */
export type UserToPageConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: InputMaybe<Scalars['Int']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: InputMaybe<Scalars['String']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']>;
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>;
  /** Title of the object */
  title?: InputMaybe<Scalars['String']>;
};

/** Connection between the User type and the post type */
export type UserToPostConnection = Connection & PostConnection & {
  __typename?: 'UserToPostConnection';
  /** Edges for the UserToPostConnection connection */
  edges: Array<UserToPostConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<Post>;
  /** Information about pagination in a connection. */
  pageInfo: UserToPostConnectionPageInfo;
};

/** An edge in a connection */
export type UserToPostConnectionEdge = Edge & PostConnectionEdge & {
  __typename?: 'UserToPostConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: Post;
};

/** Page Info on the &quot;UserToPostConnection&quot; */
export type UserToPostConnectionPageInfo = PageInfo & PostConnectionPageInfo & WpPageInfo & {
  __typename?: 'UserToPostConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the UserToPostConnection connection */
export type UserToPostConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: InputMaybe<Scalars['Int']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: InputMaybe<Scalars['String']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Category ID */
  categoryId?: InputMaybe<Scalars['Int']>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Use Category Slug */
  categoryName?: InputMaybe<Scalars['String']>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']>;
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>;
  /** Tag Slug */
  tag?: InputMaybe<Scalars['String']>;
  /** Use Tag ID */
  tagId?: InputMaybe<Scalars['String']>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of tag slugs, used to display objects from one tag AND another */
  tagSlugAnd?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Array of tag slugs, used to include objects in ANY specified tags */
  tagSlugIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Title of the object */
  title?: InputMaybe<Scalars['String']>;
};

/** Connection between the User type and the ContentNode type */
export type UserToRevisionsConnection = Connection & ContentNodeConnection & {
  __typename?: 'UserToRevisionsConnection';
  /** Edges for the UserToRevisionsConnection connection */
  edges: Array<UserToRevisionsConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<ContentNode>;
  /** Information about pagination in a connection. */
  pageInfo: UserToRevisionsConnectionPageInfo;
};

/** An edge in a connection */
export type UserToRevisionsConnectionEdge = ContentNodeConnectionEdge & Edge & {
  __typename?: 'UserToRevisionsConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: ContentNode;
};

/** Page Info on the &quot;UserToRevisionsConnection&quot; */
export type UserToRevisionsConnectionPageInfo = ContentNodeConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'UserToRevisionsConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the UserToRevisionsConnection connection */
export type UserToRevisionsConnectionWhereArgs = {
  /** The Types of content to filter */
  contentTypes?: InputMaybe<Array<InputMaybe<ContentTypeEnum>>>;
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']>;
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>;
  /** Title of the object */
  title?: InputMaybe<Scalars['String']>;
};

/** Connection between the User type and the teamMember type */
export type UserToTeamMemberConnection = Connection & TeamMemberConnection & {
  __typename?: 'UserToTeamMemberConnection';
  /** Edges for the UserToTeamMemberConnection connection */
  edges: Array<UserToTeamMemberConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<TeamMember>;
  /** Information about pagination in a connection. */
  pageInfo: UserToTeamMemberConnectionPageInfo;
};

/** An edge in a connection */
export type UserToTeamMemberConnectionEdge = Edge & TeamMemberConnectionEdge & {
  __typename?: 'UserToTeamMemberConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: TeamMember;
};

/** Page Info on the &quot;UserToTeamMemberConnection&quot; */
export type UserToTeamMemberConnectionPageInfo = PageInfo & TeamMemberConnectionPageInfo & WpPageInfo & {
  __typename?: 'UserToTeamMemberConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the UserToTeamMemberConnection connection */
export type UserToTeamMemberConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: InputMaybe<Scalars['Int']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: InputMaybe<Scalars['String']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']>;
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>;
  /** Title of the object */
  title?: InputMaybe<Scalars['String']>;
};

/** Connection between the User type and the UserRole type */
export type UserToUserRoleConnection = Connection & UserRoleConnection & {
  __typename?: 'UserToUserRoleConnection';
  /** Edges for the UserToUserRoleConnection connection */
  edges: Array<UserToUserRoleConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<UserRole>;
  /** Information about pagination in a connection. */
  pageInfo: UserToUserRoleConnectionPageInfo;
};

/** An edge in a connection */
export type UserToUserRoleConnectionEdge = Edge & UserRoleConnectionEdge & {
  __typename?: 'UserToUserRoleConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: UserRole;
};

/** Page Info on the &quot;UserToUserRoleConnection&quot; */
export type UserToUserRoleConnectionPageInfo = PageInfo & UserRoleConnectionPageInfo & WpPageInfo & {
  __typename?: 'UserToUserRoleConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Field to order the connection by */
export enum UsersConnectionOrderbyEnum {
  /** Order by display name */
  DisplayName = 'DISPLAY_NAME',
  /** Order by email address */
  Email = 'EMAIL',
  /** Order by login */
  Login = 'LOGIN',
  /** Preserve the login order given in the LOGIN_IN array */
  LoginIn = 'LOGIN_IN',
  /** Order by nice name */
  NiceName = 'NICE_NAME',
  /** Preserve the nice name order given in the NICE_NAME_IN array */
  NiceNameIn = 'NICE_NAME_IN',
  /** Order by registration date */
  Registered = 'REGISTERED',
  /** Order by URL */
  Url = 'URL'
}

/** Options for ordering the connection */
export type UsersConnectionOrderbyInput = {
  /** The field name used to sort the results. */
  field: UsersConnectionOrderbyEnum;
  /** The cardinality of the order of the connection */
  order?: InputMaybe<OrderEnum>;
};

/** Column used for searching for users. */
export enum UsersConnectionSearchColumnEnum {
  /** The user's email address. */
  Email = 'EMAIL',
  /** The globally unique ID. */
  Id = 'ID',
  /** The username the User uses to login with. */
  Login = 'LOGIN',
  /** A URL-friendly name for the user. The default is the user's username. */
  Nicename = 'NICENAME',
  /** The URL of the user's website. */
  Url = 'URL'
}

/** Information about pagination in a connection. */
export type WpPageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** A Gravity Forms   field. */
export type WebsiteField = FormField & {
  __typename?: 'WebsiteField';
  /** When specified, the value of this property will be used on the admin pages instead of the label. It is useful for fields with long labels. */
  adminLabel?: Maybe<Scalars['String']>;
  /** Determines if the field’s value can be pre-populated dynamically. */
  canPrepopulate?: Maybe<Scalars['Boolean']>;
  /** Controls the visibility of the field based on values selected by the user. */
  conditionalLogic?: Maybe<ConditionalLogic>;
  /** String containing the custom CSS classes to be added to the &lt;li&gt; tag that contains the field. Useful for applying custom formatting to specific fields. */
  cssClass?: Maybe<Scalars['String']>;
  /** Contains the default value for the field. When specified, the field&#039;s value will be populated with the contents of this property when the form is displayed. */
  defaultValue?: Maybe<Scalars['String']>;
  /** Field description. */
  description?: Maybe<Scalars['String']>;
  /** The placement of the field description. */
  descriptionPlacement?: Maybe<FormFieldDescriptionPlacementEnum>;
  /** Indicates the field is only displayed and its contents are not submitted with the form/saved with the entry. This is set to true. */
  displayOnly?: Maybe<Scalars['Boolean']>;
  /** Contains the message that is displayed for fields that fail validation. */
  errorMessage?: Maybe<Scalars['String']>;
  /** Field ID. */
  id: Scalars['Int'];
  /** Assigns a name to this field so that it can be populated dynamically via this input name. Only applicable when canPrepopulate is `true`. */
  inputName?: Maybe<Scalars['String']>;
  /** The base form field type used to display the input. A good example is the Post Custom Field that can be displayed as various different types of fields. */
  inputType?: Maybe<FormFieldTypeEnum>;
  /** Determines if the field requires the user to enter a value. Fields marked as required will prevent the form from being submitted if the user has not entered a value in it. */
  isRequired?: Maybe<Scalars['Boolean']>;
  /** Field label that will be displayed on the form and on the admin pages. */
  label?: Maybe<Scalars['String']>;
  /** The field label position. */
  labelPlacement?: Maybe<FormFieldLabelPlacementEnum>;
  /** The number of CSS grid columns the field should span. */
  layoutGridColumnSpan?: Maybe<Scalars['Int']>;
  /** The number of CSS grid columns the spacer field following this one should span. */
  layoutSpacerGridColumnSpan?: Maybe<Scalars['Int']>;
  /** The form page this field is located on. Default is 1. */
  pageNumber?: Maybe<Scalars['Int']>;
  /** The form field-specifc policies for exporting and erasing personal data. */
  personalData?: Maybe<FormFieldDataPolicy>;
  /** Placeholder text to give the user a hint on how to fill out the field. This is not submitted with the form. */
  placeholder?: Maybe<Scalars['String']>;
  /** Determines if the field allows duplicate submissions. */
  shouldAllowDuplicates?: Maybe<Scalars['Boolean']>;
  /** Determines the size of the field when displayed on the page. */
  size?: Maybe<FormFieldSizeEnum>;
  /** The type of field to be displayed. */
  type?: Maybe<FormFieldTypeEnum>;
  /** The string-formatted entry value for the `formField`. For complex fields this might be a JSON-encoded or serialized array. */
  value?: Maybe<Scalars['String']>;
  /** Field visibility. */
  visibility?: Maybe<FormFieldVisibilityEnum>;
};

/** The work type */
export type Work = ContentNode & DatabaseIdentifier & HierarchicalContentNode & HierarchicalNode & MenuItemLinkable & Node & NodeWithContentEditor & NodeWithExcerpt & NodeWithFeaturedImage & NodeWithPageAttributes & NodeWithRevisions & NodeWithTemplate & NodeWithTitle & Previewable & UniformResourceIdentifiable & {
  __typename?: 'Work';
  /** Returns ancestors of the node. Default ordered as lowest (closest to the child) to highest (closest to the root). */
  ancestors?: Maybe<HierarchicalContentNodeToContentNodeAncestorsConnection>;
  /** Connection between the HierarchicalContentNode type and the ContentNode type */
  children?: Maybe<HierarchicalContentNodeToContentNodeChildrenConnection>;
  /** Connection between the Work type and the client type */
  clients?: Maybe<WorkToClientConnection>;
  /** @deprecated Deprecated in favor of using Next.js pages */
  conditionalTags?: Maybe<ConditionalTags>;
  /** The content of the post. */
  content?: Maybe<Scalars['String']>;
  /** Connection between the ContentNode type and the ContentType type */
  contentType?: Maybe<ContentNodeToContentTypeConnectionEdge>;
  /** The name of the Content Type the node belongs to */
  contentTypeName: Scalars['String'];
  /** The unique identifier stored in the database */
  databaseId: Scalars['Int'];
  /** Post publishing date. */
  date?: Maybe<Scalars['String']>;
  /** The publishing date set in GMT. */
  dateGmt?: Maybe<Scalars['String']>;
  /** The desired slug of the post */
  desiredSlug?: Maybe<Scalars['String']>;
  /** If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds */
  editingLockedBy?: Maybe<ContentNodeToEditLockConnectionEdge>;
  /** The RSS enclosure for the object */
  enclosure?: Maybe<Scalars['String']>;
  /** Connection between the ContentNode type and the EnqueuedScript type */
  enqueuedScripts?: Maybe<ContentNodeToEnqueuedScriptConnection>;
  /** Connection between the ContentNode type and the EnqueuedStylesheet type */
  enqueuedStylesheets?: Maybe<ContentNodeToEnqueuedStylesheetConnection>;
  /** The excerpt of the post. */
  excerpt?: Maybe<Scalars['String']>;
  /** Connection between the NodeWithFeaturedImage type and the MediaItem type */
  featuredImage?: Maybe<NodeWithFeaturedImageToMediaItemConnectionEdge>;
  /** The database identifier for the featured image node assigned to the content node */
  featuredImageDatabaseId?: Maybe<Scalars['Int']>;
  /** Globally unique ID of the featured image assigned to the node */
  featuredImageId?: Maybe<Scalars['ID']>;
  /** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
  guid?: Maybe<Scalars['String']>;
  /** The globally unique identifier of the works object. */
  id: Scalars['ID'];
  /** Whether the node is a Content Node */
  isContentNode: Scalars['Boolean'];
  /** Whether the object is a node in the preview state */
  isPreview?: Maybe<Scalars['Boolean']>;
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** True if the node is a revision of another node */
  isRevision?: Maybe<Scalars['Boolean']>;
  /** Whether the node is a Term */
  isTermNode: Scalars['Boolean'];
  /** The user that most recently edited the node */
  lastEditedBy?: Maybe<ContentNodeToEditLastConnectionEdge>;
  /** The permalink of the post */
  link?: Maybe<Scalars['String']>;
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: Maybe<Scalars['Int']>;
  /** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
  modified?: Maybe<Scalars['String']>;
  /** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
  modifiedGmt?: Maybe<Scalars['String']>;
  /** The parent of the node. The parent object can be of various types */
  parent?: Maybe<HierarchicalContentNodeToParentContentNodeConnectionEdge>;
  /** Database id of the parent node */
  parentDatabaseId?: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the parent node. */
  parentId?: Maybe<Scalars['ID']>;
  /** Connection between the Work type and the work type */
  preview?: Maybe<WorkToPreviewConnectionEdge>;
  /** The database id of the preview node */
  previewRevisionDatabaseId?: Maybe<Scalars['Int']>;
  /** Whether the object is a node in the preview state */
  previewRevisionId?: Maybe<Scalars['ID']>;
  /** If the current node is a revision, this field exposes the node this is a revision of. Returns null if the node is not a revision of another node. */
  revisionOf?: Maybe<NodeWithRevisionsToContentNodeConnectionEdge>;
  /** Connection between the Work type and the work type */
  revisions?: Maybe<WorkToRevisionConnection>;
  /** The Yoast SEO data of the ContentNode */
  seo?: Maybe<PostTypeSeo>;
  /** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
  slug?: Maybe<Scalars['String']>;
  /** The current status of the object */
  status?: Maybe<Scalars['String']>;
  /** The template assigned to a node of content */
  template?: Maybe<ContentTemplate>;
  templates?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Connection between the Work type and the TermNode type */
  terms?: Maybe<WorkToTermNodeConnection>;
  /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
  title?: Maybe<Scalars['String']>;
  /** The unique resource identifier path */
  uri?: Maybe<Scalars['String']>;
  /** Connection between the Work type and the workCategory type */
  workCategories?: Maybe<WorkToWorkCategoryConnection>;
  /**
   * The id field matches the WP_Post-&gt;ID field.
   * @deprecated Deprecated in favor of the databaseId field
   */
  workId: Scalars['Int'];
  /** Added to the GraphQL Schema because the ACF Field Group &quot;Work Options&quot; was set to Show in GraphQL. */
  workOptions?: Maybe<Work_Workoptions>;
};


/** The work type */
export type WorkAncestorsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<HierarchicalContentNodeToContentNodeAncestorsConnectionWhereArgs>;
};


/** The work type */
export type WorkChildrenArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<HierarchicalContentNodeToContentNodeChildrenConnectionWhereArgs>;
};


/** The work type */
export type WorkClientsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<WorkToClientConnectionWhereArgs>;
};


/** The work type */
export type WorkContentArgs = {
  format?: InputMaybe<PostObjectFieldFormatEnum>;
};


/** The work type */
export type WorkEnqueuedScriptsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** The work type */
export type WorkEnqueuedStylesheetsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** The work type */
export type WorkExcerptArgs = {
  format?: InputMaybe<PostObjectFieldFormatEnum>;
};


/** The work type */
export type WorkRevisionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<WorkToRevisionConnectionWhereArgs>;
};


/** The work type */
export type WorkTermsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<WorkToTermNodeConnectionWhereArgs>;
};


/** The work type */
export type WorkTitleArgs = {
  format?: InputMaybe<PostObjectFieldFormatEnum>;
};


/** The work type */
export type WorkWorkCategoriesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<WorkToWorkCategoryConnectionWhereArgs>;
};

/** The workCategory type */
export type WorkCategory = DatabaseIdentifier & HierarchicalNode & HierarchicalTermNode & MenuItemLinkable & Node & TermNode & UniformResourceIdentifiable & {
  __typename?: 'WorkCategory';
  /** The ancestors of the node. Default ordered as lowest (closest to the child) to highest (closest to the root). */
  ancestors?: Maybe<WorkCategoryToAncestorsWorkCategoryConnection>;
  /** Connection between the workCategory type and its children workCategories. */
  children?: Maybe<WorkCategoryToWorkCategoryConnection>;
  /** @deprecated Deprecated in favor of using Next.js pages */
  conditionalTags?: Maybe<ConditionalTags>;
  /** Connection between the WorkCategory type and the ContentNode type */
  contentNodes?: Maybe<WorkCategoryToContentNodeConnection>;
  /** The number of objects connected to the object */
  count?: Maybe<Scalars['Int']>;
  /** The unique identifier stored in the database */
  databaseId: Scalars['Int'];
  /** The description of the object */
  description?: Maybe<Scalars['String']>;
  /** Connection between the TermNode type and the EnqueuedScript type */
  enqueuedScripts?: Maybe<TermNodeToEnqueuedScriptConnection>;
  /** Connection between the TermNode type and the EnqueuedStylesheet type */
  enqueuedStylesheets?: Maybe<TermNodeToEnqueuedStylesheetConnection>;
  /** The unique resource identifier path */
  id: Scalars['ID'];
  /** Whether the node is a Content Node */
  isContentNode: Scalars['Boolean'];
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** Whether the node is a Term */
  isTermNode: Scalars['Boolean'];
  /** The link to the term */
  link?: Maybe<Scalars['String']>;
  /** The human friendly name of the object. */
  name?: Maybe<Scalars['String']>;
  /** Connection between the workCategory type and its parent workCategory. */
  parent?: Maybe<WorkCategoryToParentWorkCategoryConnectionEdge>;
  /** Database id of the parent node */
  parentDatabaseId?: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the parent node. */
  parentId?: Maybe<Scalars['ID']>;
  /** The Yoast SEO data of the Work Categories taxonomy. */
  seo?: Maybe<TaxonomySeo>;
  /** An alphanumeric identifier for the object unique to its type. */
  slug?: Maybe<Scalars['String']>;
  /** Connection between the WorkCategory type and the Taxonomy type */
  taxonomy?: Maybe<WorkCategoryToTaxonomyConnectionEdge>;
  /** The name of the taxonomy that the object is associated with */
  taxonomyName?: Maybe<Scalars['String']>;
  templates?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The ID of the term group that this term object belongs to */
  termGroupId?: Maybe<Scalars['Int']>;
  /** The taxonomy ID that the object is associated with */
  termTaxonomyId?: Maybe<Scalars['Int']>;
  /** The unique resource identifier path */
  uri?: Maybe<Scalars['String']>;
  /**
   * The id field matches the WP_Post-&gt;ID field.
   * @deprecated Deprecated in favor of databaseId
   */
  workCategoryId?: Maybe<Scalars['Int']>;
  /** Connection between the WorkCategory type and the work type */
  works?: Maybe<WorkCategoryToWorkConnection>;
};


/** The workCategory type */
export type WorkCategoryAncestorsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** The workCategory type */
export type WorkCategoryChildrenArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<WorkCategoryToWorkCategoryConnectionWhereArgs>;
};


/** The workCategory type */
export type WorkCategoryContentNodesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<WorkCategoryToContentNodeConnectionWhereArgs>;
};


/** The workCategory type */
export type WorkCategoryEnqueuedScriptsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** The workCategory type */
export type WorkCategoryEnqueuedStylesheetsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** The workCategory type */
export type WorkCategoryWorksArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<WorkCategoryToWorkConnectionWhereArgs>;
};

/** Connection to workCategory Nodes */
export type WorkCategoryConnection = {
  /** A list of edges (relational context) between RootQuery and connected workCategory Nodes */
  edges: Array<WorkCategoryConnectionEdge>;
  /** A list of connected workCategory Nodes */
  nodes: Array<WorkCategory>;
  /** Information about pagination in a connection. */
  pageInfo: WorkCategoryConnectionPageInfo;
};

/** Edge between a Node and a connected workCategory */
export type WorkCategoryConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The connected workCategory Node */
  node: WorkCategory;
};

/** Page Info on the connected WorkCategoryConnectionEdge */
export type WorkCategoryConnectionPageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum WorkCategoryIdType {
  /** The Database ID for the node */
  DatabaseId = 'DATABASE_ID',
  /** The hashed Global ID */
  Id = 'ID',
  /** The name of the node */
  Name = 'NAME',
  /** Url friendly name of the node */
  Slug = 'SLUG',
  /** The URI for the node */
  Uri = 'URI'
}

/** Connection between the WorkCategory type and the workCategory type */
export type WorkCategoryToAncestorsWorkCategoryConnection = Connection & WorkCategoryConnection & {
  __typename?: 'WorkCategoryToAncestorsWorkCategoryConnection';
  /** Edges for the WorkCategoryToAncestorsWorkCategoryConnection connection */
  edges: Array<WorkCategoryToAncestorsWorkCategoryConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<WorkCategory>;
  /** Information about pagination in a connection. */
  pageInfo: WorkCategoryToAncestorsWorkCategoryConnectionPageInfo;
};

/** An edge in a connection */
export type WorkCategoryToAncestorsWorkCategoryConnectionEdge = Edge & WorkCategoryConnectionEdge & {
  __typename?: 'WorkCategoryToAncestorsWorkCategoryConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: WorkCategory;
};

/** Page Info on the &quot;WorkCategoryToAncestorsWorkCategoryConnection&quot; */
export type WorkCategoryToAncestorsWorkCategoryConnectionPageInfo = PageInfo & WpPageInfo & WorkCategoryConnectionPageInfo & {
  __typename?: 'WorkCategoryToAncestorsWorkCategoryConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Connection between the WorkCategory type and the ContentNode type */
export type WorkCategoryToContentNodeConnection = Connection & ContentNodeConnection & {
  __typename?: 'WorkCategoryToContentNodeConnection';
  /** Edges for the WorkCategoryToContentNodeConnection connection */
  edges: Array<WorkCategoryToContentNodeConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<ContentNode>;
  /** Information about pagination in a connection. */
  pageInfo: WorkCategoryToContentNodeConnectionPageInfo;
};

/** An edge in a connection */
export type WorkCategoryToContentNodeConnectionEdge = ContentNodeConnectionEdge & Edge & {
  __typename?: 'WorkCategoryToContentNodeConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: ContentNode;
};

/** Page Info on the &quot;WorkCategoryToContentNodeConnection&quot; */
export type WorkCategoryToContentNodeConnectionPageInfo = ContentNodeConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'WorkCategoryToContentNodeConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the WorkCategoryToContentNodeConnection connection */
export type WorkCategoryToContentNodeConnectionWhereArgs = {
  /** The Types of content to filter */
  contentTypes?: InputMaybe<Array<InputMaybe<ContentTypesOfWorkCategoryEnum>>>;
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']>;
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>;
  /** Title of the object */
  title?: InputMaybe<Scalars['String']>;
};

/** Connection between the WorkCategory type and the workCategory type */
export type WorkCategoryToParentWorkCategoryConnectionEdge = Edge & OneToOneConnection & WorkCategoryConnectionEdge & {
  __typename?: 'WorkCategoryToParentWorkCategoryConnectionEdge';
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The node of the connection, without the edges */
  node: WorkCategory;
};

/** Connection between the WorkCategory type and the Taxonomy type */
export type WorkCategoryToTaxonomyConnectionEdge = Edge & OneToOneConnection & TaxonomyConnectionEdge & {
  __typename?: 'WorkCategoryToTaxonomyConnectionEdge';
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The node of the connection, without the edges */
  node: Taxonomy;
};

/** Connection between the WorkCategory type and the workCategory type */
export type WorkCategoryToWorkCategoryConnection = Connection & WorkCategoryConnection & {
  __typename?: 'WorkCategoryToWorkCategoryConnection';
  /** Edges for the WorkCategoryToWorkCategoryConnection connection */
  edges: Array<WorkCategoryToWorkCategoryConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<WorkCategory>;
  /** Information about pagination in a connection. */
  pageInfo: WorkCategoryToWorkCategoryConnectionPageInfo;
};

/** An edge in a connection */
export type WorkCategoryToWorkCategoryConnectionEdge = Edge & WorkCategoryConnectionEdge & {
  __typename?: 'WorkCategoryToWorkCategoryConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: WorkCategory;
};

/** Page Info on the &quot;WorkCategoryToWorkCategoryConnection&quot; */
export type WorkCategoryToWorkCategoryConnectionPageInfo = PageInfo & WpPageInfo & WorkCategoryConnectionPageInfo & {
  __typename?: 'WorkCategoryToWorkCategoryConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the WorkCategoryToWorkCategoryConnection connection */
export type WorkCategoryToWorkCategoryConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: InputMaybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: InputMaybe<Scalars['Int']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: InputMaybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: InputMaybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: InputMaybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: InputMaybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: InputMaybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Direction the connection should be ordered in */
  order?: InputMaybe<OrderEnum>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: InputMaybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: InputMaybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: InputMaybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: InputMaybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomyId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: InputMaybe<Scalars['Boolean']>;
};

/** Connection between the WorkCategory type and the work type */
export type WorkCategoryToWorkConnection = Connection & WorkConnection & {
  __typename?: 'WorkCategoryToWorkConnection';
  /** Edges for the WorkCategoryToWorkConnection connection */
  edges: Array<WorkCategoryToWorkConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<Work>;
  /** Information about pagination in a connection. */
  pageInfo: WorkCategoryToWorkConnectionPageInfo;
};

/** An edge in a connection */
export type WorkCategoryToWorkConnectionEdge = Edge & WorkConnectionEdge & {
  __typename?: 'WorkCategoryToWorkConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: Work;
};

/** Page Info on the &quot;WorkCategoryToWorkConnection&quot; */
export type WorkCategoryToWorkConnectionPageInfo = PageInfo & WpPageInfo & WorkConnectionPageInfo & {
  __typename?: 'WorkCategoryToWorkConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the WorkCategoryToWorkConnection connection */
export type WorkCategoryToWorkConnectionWhereArgs = {
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']>;
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>;
  /** Title of the object */
  title?: InputMaybe<Scalars['String']>;
};

/** Set relationships between the work to clients */
export type WorkClientsInput = {
  /** If true, this will append the client to existing related clients. If false, this will replace existing relationships. Default true. */
  append?: InputMaybe<Scalars['Boolean']>;
  /** The input list of items to set. */
  nodes?: InputMaybe<Array<InputMaybe<WorkClientsNodeInput>>>;
};

/** List of clients to connect the work to. If an ID is set, it will be used to create the connection. If not, it will look for a slug. If neither are valid existing terms, and the site is configured to allow terms to be created during post mutations, a term will be created using the Name if it exists in the input, then fallback to the slug if it exists. */
export type WorkClientsNodeInput = {
  /** The description of the client. This field is used to set a description of the client if a new one is created during the mutation. */
  description?: InputMaybe<Scalars['String']>;
  /** The ID of the client. If present, this will be used to connect to the work. If no existing client exists with this ID, no connection will be made. */
  id?: InputMaybe<Scalars['ID']>;
  /** The name of the client. This field is used to create a new term, if term creation is enabled in nested mutations, and if one does not already exist with the provided slug or ID or if a slug or ID is not provided. If no name is included and a term is created, the creation will fallback to the slug field. */
  name?: InputMaybe<Scalars['String']>;
  /** The slug of the client. If no ID is present, this field will be used to make a connection. If no existing term exists with this slug, this field will be used as a fallback to the Name field when creating a new term to connect to, if term creation is enabled as a nested mutation. */
  slug?: InputMaybe<Scalars['String']>;
};

/** Connection to work Nodes */
export type WorkConnection = {
  /** A list of edges (relational context) between RootQuery and connected work Nodes */
  edges: Array<WorkConnectionEdge>;
  /** A list of connected work Nodes */
  nodes: Array<Work>;
  /** Information about pagination in a connection. */
  pageInfo: WorkConnectionPageInfo;
};

/** Edge between a Node and a connected work */
export type WorkConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The connected work Node */
  node: Work;
};

/** Page Info on the connected WorkConnectionEdge */
export type WorkConnectionPageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum WorkIdType {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID',
  /** Identify a resource by the URI. */
  Uri = 'URI'
}

/** Connection between the Work type and the client type */
export type WorkToClientConnection = ClientConnection & Connection & {
  __typename?: 'WorkToClientConnection';
  /** Edges for the WorkToClientConnection connection */
  edges: Array<WorkToClientConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<Client>;
  /** Information about pagination in a connection. */
  pageInfo: WorkToClientConnectionPageInfo;
};

/** An edge in a connection */
export type WorkToClientConnectionEdge = ClientConnectionEdge & Edge & {
  __typename?: 'WorkToClientConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The Yoast SEO Primary work_tag */
  isPrimary?: Maybe<Scalars['Boolean']>;
  /** The item at the end of the edge */
  node: Client;
};

/** Page Info on the &quot;WorkToClientConnection&quot; */
export type WorkToClientConnectionPageInfo = ClientConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'WorkToClientConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the WorkToClientConnection connection */
export type WorkToClientConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: InputMaybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: InputMaybe<Scalars['Int']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: InputMaybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: InputMaybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: InputMaybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: InputMaybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: InputMaybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Direction the connection should be ordered in */
  order?: InputMaybe<OrderEnum>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: InputMaybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: InputMaybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: InputMaybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: InputMaybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomyId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: InputMaybe<Scalars['Boolean']>;
};

/** Connection between the Work type and the work type */
export type WorkToPreviewConnectionEdge = Edge & OneToOneConnection & WorkConnectionEdge & {
  __typename?: 'WorkToPreviewConnectionEdge';
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The node of the connection, without the edges */
  node: Work;
};

/** Connection between the Work type and the work type */
export type WorkToRevisionConnection = Connection & WorkConnection & {
  __typename?: 'WorkToRevisionConnection';
  /** Edges for the WorkToRevisionConnection connection */
  edges: Array<WorkToRevisionConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<Work>;
  /** Information about pagination in a connection. */
  pageInfo: WorkToRevisionConnectionPageInfo;
};

/** An edge in a connection */
export type WorkToRevisionConnectionEdge = Edge & WorkConnectionEdge & {
  __typename?: 'WorkToRevisionConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: Work;
};

/** Page Info on the &quot;WorkToRevisionConnection&quot; */
export type WorkToRevisionConnectionPageInfo = PageInfo & WpPageInfo & WorkConnectionPageInfo & {
  __typename?: 'WorkToRevisionConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the WorkToRevisionConnection connection */
export type WorkToRevisionConnectionWhereArgs = {
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']>;
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>;
  /** Title of the object */
  title?: InputMaybe<Scalars['String']>;
};

/** Connection between the Work type and the TermNode type */
export type WorkToTermNodeConnection = Connection & TermNodeConnection & {
  __typename?: 'WorkToTermNodeConnection';
  /** Edges for the WorkToTermNodeConnection connection */
  edges: Array<WorkToTermNodeConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<TermNode>;
  /** Information about pagination in a connection. */
  pageInfo: WorkToTermNodeConnectionPageInfo;
};

/** An edge in a connection */
export type WorkToTermNodeConnectionEdge = Edge & TermNodeConnectionEdge & {
  __typename?: 'WorkToTermNodeConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: TermNode;
};

/** Page Info on the &quot;WorkToTermNodeConnection&quot; */
export type WorkToTermNodeConnectionPageInfo = PageInfo & TermNodeConnectionPageInfo & WpPageInfo & {
  __typename?: 'WorkToTermNodeConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the WorkToTermNodeConnection connection */
export type WorkToTermNodeConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: InputMaybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: InputMaybe<Scalars['Int']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: InputMaybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: InputMaybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: InputMaybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: InputMaybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: InputMaybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Direction the connection should be ordered in */
  order?: InputMaybe<OrderEnum>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: InputMaybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: InputMaybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: InputMaybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: InputMaybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** The Taxonomy to filter terms by */
  taxonomies?: InputMaybe<Array<InputMaybe<TaxonomyEnum>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomyId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: InputMaybe<Scalars['Boolean']>;
};

/** Connection between the Work type and the workCategory type */
export type WorkToWorkCategoryConnection = Connection & WorkCategoryConnection & {
  __typename?: 'WorkToWorkCategoryConnection';
  /** Edges for the WorkToWorkCategoryConnection connection */
  edges: Array<WorkToWorkCategoryConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<WorkCategory>;
  /** Information about pagination in a connection. */
  pageInfo: WorkToWorkCategoryConnectionPageInfo;
};

/** An edge in a connection */
export type WorkToWorkCategoryConnectionEdge = Edge & WorkCategoryConnectionEdge & {
  __typename?: 'WorkToWorkCategoryConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The Yoast SEO Primary work_cat */
  isPrimary?: Maybe<Scalars['Boolean']>;
  /** The item at the end of the edge */
  node: WorkCategory;
};

/** Page Info on the &quot;WorkToWorkCategoryConnection&quot; */
export type WorkToWorkCategoryConnectionPageInfo = PageInfo & WpPageInfo & WorkCategoryConnectionPageInfo & {
  __typename?: 'WorkToWorkCategoryConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the WorkToWorkCategoryConnection connection */
export type WorkToWorkCategoryConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: InputMaybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: InputMaybe<Scalars['Int']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: InputMaybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: InputMaybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: InputMaybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: InputMaybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: InputMaybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Direction the connection should be ordered in */
  order?: InputMaybe<OrderEnum>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: InputMaybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: InputMaybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: InputMaybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: InputMaybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomyId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: InputMaybe<Scalars['Boolean']>;
};

/** Set relationships between the work to workCategories */
export type WorkWorkCategoriesInput = {
  /** If true, this will append the workCategory to existing related workCategories. If false, this will replace existing relationships. Default true. */
  append?: InputMaybe<Scalars['Boolean']>;
  /** The input list of items to set. */
  nodes?: InputMaybe<Array<InputMaybe<WorkWorkCategoriesNodeInput>>>;
};

/** List of workCategories to connect the work to. If an ID is set, it will be used to create the connection. If not, it will look for a slug. If neither are valid existing terms, and the site is configured to allow terms to be created during post mutations, a term will be created using the Name if it exists in the input, then fallback to the slug if it exists. */
export type WorkWorkCategoriesNodeInput = {
  /** The description of the workCategory. This field is used to set a description of the workCategory if a new one is created during the mutation. */
  description?: InputMaybe<Scalars['String']>;
  /** The ID of the workCategory. If present, this will be used to connect to the work. If no existing workCategory exists with this ID, no connection will be made. */
  id?: InputMaybe<Scalars['ID']>;
  /** The name of the workCategory. This field is used to create a new term, if term creation is enabled in nested mutations, and if one does not already exist with the provided slug or ID or if a slug or ID is not provided. If no name is included and a term is created, the creation will fallback to the slug field. */
  name?: InputMaybe<Scalars['String']>;
  /** The slug of the workCategory. If no ID is present, this field will be used to make a connection. If no existing term exists with this slug, this field will be used as a fallback to the Name field when creating a new term to connect to, if term creation is enabled as a nested mutation. */
  slug?: InputMaybe<Scalars['String']>;
};

/** Field Group */
export type Work_Workoptions = AcfFieldGroup & {
  __typename?: 'Work_Workoptions';
  featuredBlockImage?: Maybe<MediaItem>;
  /** The name of the ACF Field Group */
  fieldGroupName?: Maybe<Scalars['String']>;
};

/** The writing setting type */
export type WritingSettings = {
  __typename?: 'WritingSettings';
  /** Default post category. */
  defaultCategory?: Maybe<Scalars['Int']>;
  /** Default post format. */
  defaultPostFormat?: Maybe<Scalars['String']>;
  /** Convert emoticons like :-) and :-P to graphics on display. */
  useSmilies?: Maybe<Scalars['Boolean']>;
};


      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {
    "AcfFieldGroup": [
      "Client_Clientoptions",
      "Page_Flexiblecontent",
      "Page_Flexiblecontent_Blocks_AboutUs",
      "Page_Flexiblecontent_Blocks_AboutUs_items",
      "Page_Flexiblecontent_Blocks_ClientGrid",
      "Page_Flexiblecontent_Blocks_ClientGrid_items",
      "Page_Flexiblecontent_Blocks_Cta",
      "Page_Flexiblecontent_Blocks_Expertise",
      "Page_Flexiblecontent_Blocks_Expertise_items",
      "Page_Flexiblecontent_Blocks_Features",
      "Page_Flexiblecontent_Blocks_Features_items",
      "Page_Flexiblecontent_Blocks_Form",
      "Page_Flexiblecontent_Blocks_GoogleMap",
      "Page_Flexiblecontent_Blocks_Hero",
      "Page_Flexiblecontent_Blocks_Hero_ctas",
      "Page_Flexiblecontent_Blocks_LogoGrid",
      "Page_Flexiblecontent_Blocks_LogoGrid_items",
      "Page_Flexiblecontent_Blocks_PressList",
      "Page_Flexiblecontent_Blocks_TeamMembers",
      "Page_Flexiblecontent_Blocks_TextBlock",
      "Page_Flexiblecontent_Blocks_VideoGrid",
      "Page_Flexiblecontent_Blocks_VideoGrid_items",
      "Page_Flexiblecontent_Blocks_WorkGrid",
      "Page_Flexiblecontent_Blocks_WorkGrid_items",
      "Post_Postoptions",
      "Press_release_Pressoptions",
      "SiteSettings_Sitesettings",
      "SiteSettings_Sitesettings_announcements",
      "TeamMember_Teammemberoptions",
      "Work_Workoptions"
    ],
    "CategoryConnection": [
      "CategoryToAncestorsCategoryConnection",
      "CategoryToCategoryConnection",
      "PostToCategoryConnection",
      "RootQueryToCategoryConnection"
    ],
    "CategoryConnectionEdge": [
      "CategoryToAncestorsCategoryConnectionEdge",
      "CategoryToCategoryConnectionEdge",
      "CategoryToParentCategoryConnectionEdge",
      "PostToCategoryConnectionEdge",
      "RootQueryToCategoryConnectionEdge"
    ],
    "CategoryConnectionPageInfo": [
      "CategoryToAncestorsCategoryConnectionPageInfo",
      "CategoryToCategoryConnectionPageInfo",
      "PostToCategoryConnectionPageInfo",
      "RootQueryToCategoryConnectionPageInfo"
    ],
    "ClientConnection": [
      "RootQueryToClientConnection",
      "WorkToClientConnection"
    ],
    "ClientConnectionEdge": [
      "RootQueryToClientConnectionEdge",
      "WorkToClientConnectionEdge"
    ],
    "ClientConnectionPageInfo": [
      "RootQueryToClientConnectionPageInfo",
      "WorkToClientConnectionPageInfo"
    ],
    "CommentConnection": [
      "CommentToCommentConnection",
      "MediaItemToCommentConnection",
      "PageToCommentConnection",
      "PostToCommentConnection",
      "RootQueryToCommentConnection",
      "UserToCommentConnection"
    ],
    "CommentConnectionEdge": [
      "CommentToCommentConnectionEdge",
      "CommentToParentCommentConnectionEdge",
      "MediaItemToCommentConnectionEdge",
      "PageToCommentConnectionEdge",
      "PostToCommentConnectionEdge",
      "RootQueryToCommentConnectionEdge",
      "UserToCommentConnectionEdge"
    ],
    "CommentConnectionPageInfo": [
      "CommentToCommentConnectionPageInfo",
      "MediaItemToCommentConnectionPageInfo",
      "PageToCommentConnectionPageInfo",
      "PostToCommentConnectionPageInfo",
      "RootQueryToCommentConnectionPageInfo",
      "UserToCommentConnectionPageInfo"
    ],
    "Commenter": [
      "CommentAuthor",
      "User"
    ],
    "CommenterConnectionEdge": [
      "CommentToCommenterConnectionEdge"
    ],
    "Connection": [
      "CategoryToAncestorsCategoryConnection",
      "CategoryToCategoryConnection",
      "CategoryToContentNodeConnection",
      "CategoryToPostConnection",
      "ClientToContentNodeConnection",
      "ClientToWorkConnection",
      "CommentToCommentConnection",
      "ContentNodeToEnqueuedScriptConnection",
      "ContentNodeToEnqueuedStylesheetConnection",
      "ContentTypeToContentNodeConnection",
      "ContentTypeToTaxonomyConnection",
      "GfFormToGfEntryConnection",
      "HierarchicalContentNodeToContentNodeAncestorsConnection",
      "HierarchicalContentNodeToContentNodeChildrenConnection",
      "MediaItemToCommentConnection",
      "MenuItemToMenuItemConnection",
      "MenuToMenuItemConnection",
      "PageToCommentConnection",
      "PageToRevisionConnection",
      "PostFormatToContentNodeConnection",
      "PostFormatToPostConnection",
      "PostToCategoryConnection",
      "PostToCommentConnection",
      "PostToPostFormatConnection",
      "PostToRevisionConnection",
      "PostToTagConnection",
      "PostToTermNodeConnection",
      "Press_releaseToRevisionConnection",
      "RelatedPostsConnection",
      "RootQueryToCategoryConnection",
      "RootQueryToClientConnection",
      "RootQueryToCommentConnection",
      "RootQueryToContentNodeConnection",
      "RootQueryToContentTypeConnection",
      "RootQueryToEnqueuedScriptConnection",
      "RootQueryToEnqueuedStylesheetConnection",
      "RootQueryToGfEntryConnection",
      "RootQueryToGfFormConnection",
      "RootQueryToGfSubmittedEntryConnection",
      "RootQueryToGraphqlDocumentConnection",
      "RootQueryToMediaItemConnection",
      "RootQueryToMenuConnection",
      "RootQueryToMenuItemConnection",
      "RootQueryToPageConnection",
      "RootQueryToPluginConnection",
      "RootQueryToPostConnection",
      "RootQueryToPostFormatConnection",
      "RootQueryToPress_releaseConnection",
      "RootQueryToRevisionsConnection",
      "RootQueryToTagConnection",
      "RootQueryToTaxonomyConnection",
      "RootQueryToTeamMemberConnection",
      "RootQueryToTermNodeConnection",
      "RootQueryToThemeConnection",
      "RootQueryToUserConnection",
      "RootQueryToUserRoleConnection",
      "RootQueryToWorkCategoryConnection",
      "RootQueryToWorkConnection",
      "TagToContentNodeConnection",
      "TagToPostConnection",
      "TaxonomyToContentTypeConnection",
      "TermNodeToEnqueuedScriptConnection",
      "TermNodeToEnqueuedStylesheetConnection",
      "UserToCommentConnection",
      "UserToEnqueuedScriptConnection",
      "UserToEnqueuedStylesheetConnection",
      "UserToMediaItemConnection",
      "UserToPageConnection",
      "UserToPostConnection",
      "UserToRevisionsConnection",
      "UserToTeamMemberConnection",
      "UserToUserRoleConnection",
      "WorkCategoryToAncestorsWorkCategoryConnection",
      "WorkCategoryToContentNodeConnection",
      "WorkCategoryToWorkCategoryConnection",
      "WorkCategoryToWorkConnection",
      "WorkToClientConnection",
      "WorkToRevisionConnection",
      "WorkToTermNodeConnection",
      "WorkToWorkCategoryConnection"
    ],
    "ContentNode": [
      "GraphqlDocument",
      "MediaItem",
      "Page",
      "Post",
      "Press_release",
      "TeamMember",
      "Work"
    ],
    "ContentNodeConnection": [
      "CategoryToContentNodeConnection",
      "ClientToContentNodeConnection",
      "ContentTypeToContentNodeConnection",
      "HierarchicalContentNodeToContentNodeAncestorsConnection",
      "HierarchicalContentNodeToContentNodeChildrenConnection",
      "PostFormatToContentNodeConnection",
      "RootQueryToContentNodeConnection",
      "RootQueryToRevisionsConnection",
      "TagToContentNodeConnection",
      "UserToRevisionsConnection",
      "WorkCategoryToContentNodeConnection"
    ],
    "ContentNodeConnectionEdge": [
      "CategoryToContentNodeConnectionEdge",
      "ClientToContentNodeConnectionEdge",
      "CommentToContentNodeConnectionEdge",
      "ContentTypeToContentNodeConnectionEdge",
      "HierarchicalContentNodeToContentNodeAncestorsConnectionEdge",
      "HierarchicalContentNodeToContentNodeChildrenConnectionEdge",
      "HierarchicalContentNodeToParentContentNodeConnectionEdge",
      "NodeWithRevisionsToContentNodeConnectionEdge",
      "PostFormatToContentNodeConnectionEdge",
      "RootQueryToContentNodeConnectionEdge",
      "RootQueryToRevisionsConnectionEdge",
      "TagToContentNodeConnectionEdge",
      "UserToRevisionsConnectionEdge",
      "WorkCategoryToContentNodeConnectionEdge"
    ],
    "ContentNodeConnectionPageInfo": [
      "CategoryToContentNodeConnectionPageInfo",
      "ClientToContentNodeConnectionPageInfo",
      "ContentTypeToContentNodeConnectionPageInfo",
      "HierarchicalContentNodeToContentNodeAncestorsConnectionPageInfo",
      "HierarchicalContentNodeToContentNodeChildrenConnectionPageInfo",
      "PostFormatToContentNodeConnectionPageInfo",
      "RootQueryToContentNodeConnectionPageInfo",
      "RootQueryToRevisionsConnectionPageInfo",
      "TagToContentNodeConnectionPageInfo",
      "UserToRevisionsConnectionPageInfo",
      "WorkCategoryToContentNodeConnectionPageInfo"
    ],
    "ContentTemplate": [
      "DefaultTemplate",
      "Template_Blank",
      "Template_BlogAlternative"
    ],
    "ContentTypeConnection": [
      "RootQueryToContentTypeConnection",
      "TaxonomyToContentTypeConnection"
    ],
    "ContentTypeConnectionEdge": [
      "ContentNodeToContentTypeConnectionEdge",
      "RootQueryToContentTypeConnectionEdge",
      "TaxonomyToContentTypeConnectionEdge"
    ],
    "ContentTypeConnectionPageInfo": [
      "RootQueryToContentTypeConnectionPageInfo",
      "TaxonomyToContentTypeConnectionPageInfo"
    ],
    "DatabaseIdentifier": [
      "Category",
      "Client",
      "Comment",
      "CommentAuthor",
      "GfForm",
      "GfSubmittedEntry",
      "GraphqlDocument",
      "MediaItem",
      "Menu",
      "MenuItem",
      "Page",
      "Post",
      "PostFormat",
      "Press_release",
      "Tag",
      "TeamMember",
      "User",
      "Work",
      "WorkCategory"
    ],
    "Edge": [
      "CategoryToAncestorsCategoryConnectionEdge",
      "CategoryToCategoryConnectionEdge",
      "CategoryToContentNodeConnectionEdge",
      "CategoryToParentCategoryConnectionEdge",
      "CategoryToPostConnectionEdge",
      "CategoryToTaxonomyConnectionEdge",
      "ClientToContentNodeConnectionEdge",
      "ClientToTaxonomyConnectionEdge",
      "ClientToWorkConnectionEdge",
      "CommentToCommentConnectionEdge",
      "CommentToCommenterConnectionEdge",
      "CommentToContentNodeConnectionEdge",
      "CommentToParentCommentConnectionEdge",
      "ContentNodeToContentTypeConnectionEdge",
      "ContentNodeToEditLastConnectionEdge",
      "ContentNodeToEditLockConnectionEdge",
      "ContentNodeToEnqueuedScriptConnectionEdge",
      "ContentNodeToEnqueuedStylesheetConnectionEdge",
      "ContentTypeToContentNodeConnectionEdge",
      "ContentTypeToTaxonomyConnectionEdge",
      "FormConfirmationToPageConnectionEdge",
      "GfFormToGfEntryConnectionEdge",
      "GraphqlDocumentToPreviewConnectionEdge",
      "HierarchicalContentNodeToContentNodeAncestorsConnectionEdge",
      "HierarchicalContentNodeToContentNodeChildrenConnectionEdge",
      "HierarchicalContentNodeToParentContentNodeConnectionEdge",
      "MediaItemToCommentConnectionEdge",
      "MenuItemToMenuConnectionEdge",
      "MenuItemToMenuItemConnectionEdge",
      "MenuItemToMenuItemLinkableConnectionEdge",
      "MenuToMenuItemConnectionEdge",
      "NodeWithAuthorToUserConnectionEdge",
      "NodeWithFeaturedImageToMediaItemConnectionEdge",
      "NodeWithRevisionsToContentNodeConnectionEdge",
      "PageToCommentConnectionEdge",
      "PageToPreviewConnectionEdge",
      "PageToRevisionConnectionEdge",
      "PostFormatToContentNodeConnectionEdge",
      "PostFormatToPostConnectionEdge",
      "PostFormatToTaxonomyConnectionEdge",
      "PostToCategoryConnectionEdge",
      "PostToCommentConnectionEdge",
      "PostToPostFormatConnectionEdge",
      "PostToPreviewConnectionEdge",
      "PostToRevisionConnectionEdge",
      "PostToTagConnectionEdge",
      "PostToTermNodeConnectionEdge",
      "Press_releaseToPreviewConnectionEdge",
      "Press_releaseToRevisionConnectionEdge",
      "RelatedPostsConnectionEdge",
      "RootQueryToCategoryConnectionEdge",
      "RootQueryToClientConnectionEdge",
      "RootQueryToCommentConnectionEdge",
      "RootQueryToContentNodeConnectionEdge",
      "RootQueryToContentTypeConnectionEdge",
      "RootQueryToEnqueuedScriptConnectionEdge",
      "RootQueryToEnqueuedStylesheetConnectionEdge",
      "RootQueryToGfEntryConnectionEdge",
      "RootQueryToGfFormConnectionEdge",
      "RootQueryToGfSubmittedEntryConnectionEdge",
      "RootQueryToGraphqlDocumentConnectionEdge",
      "RootQueryToMediaItemConnectionEdge",
      "RootQueryToMenuConnectionEdge",
      "RootQueryToMenuItemConnectionEdge",
      "RootQueryToPageConnectionEdge",
      "RootQueryToPluginConnectionEdge",
      "RootQueryToPostConnectionEdge",
      "RootQueryToPostFormatConnectionEdge",
      "RootQueryToPress_releaseConnectionEdge",
      "RootQueryToRevisionsConnectionEdge",
      "RootQueryToTagConnectionEdge",
      "RootQueryToTaxonomyConnectionEdge",
      "RootQueryToTeamMemberConnectionEdge",
      "RootQueryToTermNodeConnectionEdge",
      "RootQueryToThemeConnectionEdge",
      "RootQueryToUserConnectionEdge",
      "RootQueryToUserRoleConnectionEdge",
      "RootQueryToWorkCategoryConnectionEdge",
      "RootQueryToWorkConnectionEdge",
      "SubmissionConfirmationToPageConnectionEdge",
      "TagToContentNodeConnectionEdge",
      "TagToPostConnectionEdge",
      "TagToTaxonomyConnectionEdge",
      "TaxonomyToContentTypeConnectionEdge",
      "TeamMemberToPreviewConnectionEdge",
      "TermNodeToEnqueuedScriptConnectionEdge",
      "TermNodeToEnqueuedStylesheetConnectionEdge",
      "UserToCommentConnectionEdge",
      "UserToEnqueuedScriptConnectionEdge",
      "UserToEnqueuedStylesheetConnectionEdge",
      "UserToMediaItemConnectionEdge",
      "UserToPageConnectionEdge",
      "UserToPostConnectionEdge",
      "UserToRevisionsConnectionEdge",
      "UserToTeamMemberConnectionEdge",
      "UserToUserRoleConnectionEdge",
      "WorkCategoryToAncestorsWorkCategoryConnectionEdge",
      "WorkCategoryToContentNodeConnectionEdge",
      "WorkCategoryToParentWorkCategoryConnectionEdge",
      "WorkCategoryToTaxonomyConnectionEdge",
      "WorkCategoryToWorkCategoryConnectionEdge",
      "WorkCategoryToWorkConnectionEdge",
      "WorkToClientConnectionEdge",
      "WorkToPreviewConnectionEdge",
      "WorkToRevisionConnectionEdge",
      "WorkToTermNodeConnectionEdge",
      "WorkToWorkCategoryConnectionEdge"
    ],
    "EnqueuedAsset": [
      "EnqueuedScript",
      "EnqueuedStylesheet"
    ],
    "EnqueuedScriptConnection": [
      "ContentNodeToEnqueuedScriptConnection",
      "RootQueryToEnqueuedScriptConnection",
      "TermNodeToEnqueuedScriptConnection",
      "UserToEnqueuedScriptConnection"
    ],
    "EnqueuedScriptConnectionEdge": [
      "ContentNodeToEnqueuedScriptConnectionEdge",
      "RootQueryToEnqueuedScriptConnectionEdge",
      "TermNodeToEnqueuedScriptConnectionEdge",
      "UserToEnqueuedScriptConnectionEdge"
    ],
    "EnqueuedScriptConnectionPageInfo": [
      "ContentNodeToEnqueuedScriptConnectionPageInfo",
      "RootQueryToEnqueuedScriptConnectionPageInfo",
      "TermNodeToEnqueuedScriptConnectionPageInfo",
      "UserToEnqueuedScriptConnectionPageInfo"
    ],
    "EnqueuedStylesheetConnection": [
      "ContentNodeToEnqueuedStylesheetConnection",
      "RootQueryToEnqueuedStylesheetConnection",
      "TermNodeToEnqueuedStylesheetConnection",
      "UserToEnqueuedStylesheetConnection"
    ],
    "EnqueuedStylesheetConnectionEdge": [
      "ContentNodeToEnqueuedStylesheetConnectionEdge",
      "RootQueryToEnqueuedStylesheetConnectionEdge",
      "TermNodeToEnqueuedStylesheetConnectionEdge",
      "UserToEnqueuedStylesheetConnectionEdge"
    ],
    "EnqueuedStylesheetConnectionPageInfo": [
      "ContentNodeToEnqueuedStylesheetConnectionPageInfo",
      "RootQueryToEnqueuedStylesheetConnectionPageInfo",
      "TermNodeToEnqueuedStylesheetConnectionPageInfo",
      "UserToEnqueuedStylesheetConnectionPageInfo"
    ],
    "FormField": [
      "AddressField",
      "CaptchaField",
      "CheckboxField",
      "ConsentField",
      "DateField",
      "EmailField",
      "FileUploadField",
      "HiddenField",
      "HtmlField",
      "ListField",
      "MultiSelectField",
      "NameField",
      "NumberField",
      "PageField",
      "PasswordField",
      "PhoneField",
      "PostCategoryCheckboxField",
      "PostCategoryMultiSelectField",
      "PostCategoryRadioField",
      "PostCategorySelectField",
      "PostContentField",
      "PostCustomCheckboxField",
      "PostCustomDateField",
      "PostCustomEmailField",
      "PostCustomFileuploadField",
      "PostCustomHiddenField",
      "PostCustomListField",
      "PostCustomMultiSelectField",
      "PostCustomNumberField",
      "PostCustomPhoneField",
      "PostCustomRadioField",
      "PostCustomSelectField",
      "PostCustomTextAreaField",
      "PostCustomTextField",
      "PostCustomTimeField",
      "PostCustomWebsiteField",
      "PostExcerptField",
      "PostImageField",
      "PostTagsCheckboxField",
      "PostTagsMultiSelectField",
      "PostTagsRadioField",
      "PostTagsSelectField",
      "PostTagsTextField",
      "PostTitleField",
      "RadioField",
      "SectionField",
      "SelectField",
      "SubmitField",
      "TextAreaField",
      "TextField",
      "TimeField",
      "WebsiteField"
    ],
    "FormFieldConnection": [
      "GfEntryToFormFieldConnection",
      "GfFormToFormFieldConnection"
    ],
    "FormFieldConnectionEdge": [
      "GfEntryToFormFieldConnectionEdge",
      "GfFormToFormFieldConnectionEdge"
    ],
    "FormFieldConnectionPageInfo": [
      "GfEntryToFormFieldConnectionPageInfo",
      "GfFormToFormFieldConnectionPageInfo"
    ],
    "GfEntry": [
      "GfDraftEntry",
      "GfSubmittedEntry"
    ],
    "GfEntryConnection": [
      "GfFormToGfEntryConnection",
      "RootQueryToGfEntryConnection"
    ],
    "GfEntryConnectionEdge": [
      "GfFormToGfEntryConnectionEdge",
      "RootQueryToGfEntryConnectionEdge"
    ],
    "GfEntryConnectionPageInfo": [
      "GfFormToGfEntryConnectionPageInfo",
      "RootQueryToGfEntryConnectionPageInfo"
    ],
    "GfFormConnection": [
      "RootQueryToGfFormConnection"
    ],
    "GfFormConnectionEdge": [
      "RootQueryToGfFormConnectionEdge"
    ],
    "GfFormConnectionPageInfo": [
      "RootQueryToGfFormConnectionPageInfo"
    ],
    "GfSubmittedEntryConnection": [
      "RootQueryToGfSubmittedEntryConnection"
    ],
    "GfSubmittedEntryConnectionEdge": [
      "RootQueryToGfSubmittedEntryConnectionEdge"
    ],
    "GfSubmittedEntryConnectionPageInfo": [
      "RootQueryToGfSubmittedEntryConnectionPageInfo"
    ],
    "GraphqlDocumentConnection": [
      "RootQueryToGraphqlDocumentConnection"
    ],
    "GraphqlDocumentConnectionEdge": [
      "GraphqlDocumentToPreviewConnectionEdge",
      "RootQueryToGraphqlDocumentConnectionEdge"
    ],
    "GraphqlDocumentConnectionPageInfo": [
      "RootQueryToGraphqlDocumentConnectionPageInfo"
    ],
    "HierarchicalContentNode": [
      "MediaItem",
      "Page",
      "Press_release",
      "Work"
    ],
    "HierarchicalNode": [
      "Category",
      "MediaItem",
      "Page",
      "Press_release",
      "Work",
      "WorkCategory"
    ],
    "HierarchicalTermNode": [
      "Category",
      "WorkCategory"
    ],
    "MediaItemConnection": [
      "RootQueryToMediaItemConnection",
      "UserToMediaItemConnection"
    ],
    "MediaItemConnectionEdge": [
      "NodeWithFeaturedImageToMediaItemConnectionEdge",
      "RootQueryToMediaItemConnectionEdge",
      "UserToMediaItemConnectionEdge"
    ],
    "MediaItemConnectionPageInfo": [
      "RootQueryToMediaItemConnectionPageInfo",
      "UserToMediaItemConnectionPageInfo"
    ],
    "MenuConnection": [
      "RootQueryToMenuConnection"
    ],
    "MenuConnectionEdge": [
      "MenuItemToMenuConnectionEdge",
      "RootQueryToMenuConnectionEdge"
    ],
    "MenuConnectionPageInfo": [
      "RootQueryToMenuConnectionPageInfo"
    ],
    "MenuItemConnection": [
      "MenuItemToMenuItemConnection",
      "MenuToMenuItemConnection",
      "RootQueryToMenuItemConnection"
    ],
    "MenuItemConnectionEdge": [
      "MenuItemToMenuItemConnectionEdge",
      "MenuToMenuItemConnectionEdge",
      "RootQueryToMenuItemConnectionEdge"
    ],
    "MenuItemConnectionPageInfo": [
      "MenuItemToMenuItemConnectionPageInfo",
      "MenuToMenuItemConnectionPageInfo",
      "RootQueryToMenuItemConnectionPageInfo"
    ],
    "MenuItemLinkable": [
      "Category",
      "Client",
      "Page",
      "Post",
      "Press_release",
      "Tag",
      "Work",
      "WorkCategory"
    ],
    "MenuItemLinkableConnectionEdge": [
      "MenuItemToMenuItemLinkableConnectionEdge"
    ],
    "MenuItemObjectUnion": [
      "Category",
      "Client",
      "Page",
      "Post",
      "Press_release",
      "Tag",
      "Work",
      "WorkCategory"
    ],
    "Node": [
      "Category",
      "Client",
      "Comment",
      "CommentAuthor",
      "ContentType",
      "EnqueuedScript",
      "EnqueuedStylesheet",
      "GfDraftEntry",
      "GfForm",
      "GfSubmittedEntry",
      "GraphqlDocument",
      "MediaItem",
      "Menu",
      "MenuItem",
      "Page",
      "Plugin",
      "Post",
      "PostFormat",
      "Press_release",
      "Tag",
      "Taxonomy",
      "TeamMember",
      "Theme",
      "User",
      "UserRole",
      "Work",
      "WorkCategory"
    ],
    "NodeWithAuthor": [
      "MediaItem",
      "Page",
      "Post",
      "TeamMember"
    ],
    "NodeWithComments": [
      "MediaItem",
      "Page",
      "Post"
    ],
    "NodeWithContentEditor": [
      "GraphqlDocument",
      "Page",
      "Post",
      "Press_release",
      "Work"
    ],
    "NodeWithExcerpt": [
      "Post",
      "Press_release",
      "Work"
    ],
    "NodeWithFeaturedImage": [
      "Page",
      "Post",
      "Press_release",
      "Work"
    ],
    "NodeWithForm": [
      "GfDraftEntry",
      "GfSubmittedEntry"
    ],
    "NodeWithPageAttributes": [
      "Page",
      "Press_release",
      "Work"
    ],
    "NodeWithRevisions": [
      "Page",
      "Post",
      "Press_release",
      "Work"
    ],
    "NodeWithTemplate": [
      "GraphqlDocument",
      "MediaItem",
      "Page",
      "Post",
      "Press_release",
      "TeamMember",
      "Work"
    ],
    "NodeWithTitle": [
      "GraphqlDocument",
      "MediaItem",
      "Page",
      "Post",
      "Press_release",
      "TeamMember",
      "Work"
    ],
    "NodeWithTrackbacks": [
      "Post"
    ],
    "OneToOneConnection": [
      "CategoryToParentCategoryConnectionEdge",
      "CategoryToTaxonomyConnectionEdge",
      "ClientToTaxonomyConnectionEdge",
      "CommentToCommenterConnectionEdge",
      "CommentToContentNodeConnectionEdge",
      "CommentToParentCommentConnectionEdge",
      "ContentNodeToContentTypeConnectionEdge",
      "ContentNodeToEditLastConnectionEdge",
      "ContentNodeToEditLockConnectionEdge",
      "FormConfirmationToPageConnectionEdge",
      "GraphqlDocumentToPreviewConnectionEdge",
      "HierarchicalContentNodeToParentContentNodeConnectionEdge",
      "MenuItemToMenuConnectionEdge",
      "MenuItemToMenuItemLinkableConnectionEdge",
      "NodeWithAuthorToUserConnectionEdge",
      "NodeWithFeaturedImageToMediaItemConnectionEdge",
      "NodeWithRevisionsToContentNodeConnectionEdge",
      "PageToPreviewConnectionEdge",
      "PostFormatToTaxonomyConnectionEdge",
      "PostToPreviewConnectionEdge",
      "Press_releaseToPreviewConnectionEdge",
      "SubmissionConfirmationToPageConnectionEdge",
      "TagToTaxonomyConnectionEdge",
      "TeamMemberToPreviewConnectionEdge",
      "WorkCategoryToParentWorkCategoryConnectionEdge",
      "WorkCategoryToTaxonomyConnectionEdge",
      "WorkToPreviewConnectionEdge"
    ],
    "PageConnection": [
      "PageToRevisionConnection",
      "RootQueryToPageConnection",
      "UserToPageConnection"
    ],
    "PageConnectionEdge": [
      "FormConfirmationToPageConnectionEdge",
      "PageToPreviewConnectionEdge",
      "PageToRevisionConnectionEdge",
      "RootQueryToPageConnectionEdge",
      "SubmissionConfirmationToPageConnectionEdge",
      "UserToPageConnectionEdge"
    ],
    "PageConnectionPageInfo": [
      "PageToRevisionConnectionPageInfo",
      "RootQueryToPageConnectionPageInfo",
      "UserToPageConnectionPageInfo"
    ],
    "PageInfo": [
      "CategoryToAncestorsCategoryConnectionPageInfo",
      "CategoryToCategoryConnectionPageInfo",
      "CategoryToContentNodeConnectionPageInfo",
      "CategoryToPostConnectionPageInfo",
      "ClientToContentNodeConnectionPageInfo",
      "ClientToWorkConnectionPageInfo",
      "CommentToCommentConnectionPageInfo",
      "ContentNodeToEnqueuedScriptConnectionPageInfo",
      "ContentNodeToEnqueuedStylesheetConnectionPageInfo",
      "ContentTypeToContentNodeConnectionPageInfo",
      "ContentTypeToTaxonomyConnectionPageInfo",
      "GfEntryToFormFieldConnectionPageInfo",
      "GfFormToFormFieldConnectionPageInfo",
      "GfFormToGfEntryConnectionPageInfo",
      "HierarchicalContentNodeToContentNodeAncestorsConnectionPageInfo",
      "HierarchicalContentNodeToContentNodeChildrenConnectionPageInfo",
      "MediaItemToCommentConnectionPageInfo",
      "MenuItemToMenuItemConnectionPageInfo",
      "MenuToMenuItemConnectionPageInfo",
      "PageToCommentConnectionPageInfo",
      "PageToRevisionConnectionPageInfo",
      "PostFormatToContentNodeConnectionPageInfo",
      "PostFormatToPostConnectionPageInfo",
      "PostToCategoryConnectionPageInfo",
      "PostToCommentConnectionPageInfo",
      "PostToPostFormatConnectionPageInfo",
      "PostToRevisionConnectionPageInfo",
      "PostToTagConnectionPageInfo",
      "PostToTermNodeConnectionPageInfo",
      "Press_releaseToRevisionConnectionPageInfo",
      "RelatedPostsConnectionPageInfo",
      "RootQueryToCategoryConnectionPageInfo",
      "RootQueryToClientConnectionPageInfo",
      "RootQueryToCommentConnectionPageInfo",
      "RootQueryToContentNodeConnectionPageInfo",
      "RootQueryToContentTypeConnectionPageInfo",
      "RootQueryToEnqueuedScriptConnectionPageInfo",
      "RootQueryToEnqueuedStylesheetConnectionPageInfo",
      "RootQueryToGfEntryConnectionPageInfo",
      "RootQueryToGfFormConnectionPageInfo",
      "RootQueryToGfSubmittedEntryConnectionPageInfo",
      "RootQueryToGraphqlDocumentConnectionPageInfo",
      "RootQueryToMediaItemConnectionPageInfo",
      "RootQueryToMenuConnectionPageInfo",
      "RootQueryToMenuItemConnectionPageInfo",
      "RootQueryToPageConnectionPageInfo",
      "RootQueryToPluginConnectionPageInfo",
      "RootQueryToPostConnectionPageInfo",
      "RootQueryToPostFormatConnectionPageInfo",
      "RootQueryToPress_releaseConnectionPageInfo",
      "RootQueryToRevisionsConnectionPageInfo",
      "RootQueryToTagConnectionPageInfo",
      "RootQueryToTaxonomyConnectionPageInfo",
      "RootQueryToTeamMemberConnectionPageInfo",
      "RootQueryToTermNodeConnectionPageInfo",
      "RootQueryToThemeConnectionPageInfo",
      "RootQueryToUserConnectionPageInfo",
      "RootQueryToUserRoleConnectionPageInfo",
      "RootQueryToWorkCategoryConnectionPageInfo",
      "RootQueryToWorkConnectionPageInfo",
      "TagToContentNodeConnectionPageInfo",
      "TagToPostConnectionPageInfo",
      "TaxonomyToContentTypeConnectionPageInfo",
      "TermNodeToEnqueuedScriptConnectionPageInfo",
      "TermNodeToEnqueuedStylesheetConnectionPageInfo",
      "UserToCommentConnectionPageInfo",
      "UserToEnqueuedScriptConnectionPageInfo",
      "UserToEnqueuedStylesheetConnectionPageInfo",
      "UserToMediaItemConnectionPageInfo",
      "UserToPageConnectionPageInfo",
      "UserToPostConnectionPageInfo",
      "UserToRevisionsConnectionPageInfo",
      "UserToTeamMemberConnectionPageInfo",
      "UserToUserRoleConnectionPageInfo",
      "WorkCategoryToAncestorsWorkCategoryConnectionPageInfo",
      "WorkCategoryToContentNodeConnectionPageInfo",
      "WorkCategoryToWorkCategoryConnectionPageInfo",
      "WorkCategoryToWorkConnectionPageInfo",
      "WorkToClientConnectionPageInfo",
      "WorkToRevisionConnectionPageInfo",
      "WorkToTermNodeConnectionPageInfo",
      "WorkToWorkCategoryConnectionPageInfo"
    ],
    "Page_Flexiblecontent_Blocks": [
      "Page_Flexiblecontent_Blocks_AboutUs",
      "Page_Flexiblecontent_Blocks_ClientGrid",
      "Page_Flexiblecontent_Blocks_Cta",
      "Page_Flexiblecontent_Blocks_Expertise",
      "Page_Flexiblecontent_Blocks_Features",
      "Page_Flexiblecontent_Blocks_Form",
      "Page_Flexiblecontent_Blocks_GoogleMap",
      "Page_Flexiblecontent_Blocks_Hero",
      "Page_Flexiblecontent_Blocks_LogoGrid",
      "Page_Flexiblecontent_Blocks_PressList",
      "Page_Flexiblecontent_Blocks_TeamMembers",
      "Page_Flexiblecontent_Blocks_TextBlock",
      "Page_Flexiblecontent_Blocks_VideoGrid",
      "Page_Flexiblecontent_Blocks_WorkGrid"
    ],
    "Page_Flexiblecontent_Blocks_PressList_Items": [
      "Press_release"
    ],
    "Page_Flexiblecontent_Blocks_TeamMembers_Members": [
      "TeamMember"
    ],
    "Page_Flexiblecontent_Blocks_WorkGrid_items_Work": [
      "Work"
    ],
    "PluginConnection": [
      "RootQueryToPluginConnection"
    ],
    "PluginConnectionEdge": [
      "RootQueryToPluginConnectionEdge"
    ],
    "PluginConnectionPageInfo": [
      "RootQueryToPluginConnectionPageInfo"
    ],
    "PostCategoryField": [
      "PostCategoryCheckboxField",
      "PostCategoryMultiSelectField",
      "PostCategoryRadioField",
      "PostCategorySelectField"
    ],
    "PostConnection": [
      "CategoryToPostConnection",
      "PostFormatToPostConnection",
      "PostToRevisionConnection",
      "RelatedPostsConnection",
      "RootQueryToPostConnection",
      "TagToPostConnection",
      "UserToPostConnection"
    ],
    "PostConnectionEdge": [
      "CategoryToPostConnectionEdge",
      "PostFormatToPostConnectionEdge",
      "PostToPreviewConnectionEdge",
      "PostToRevisionConnectionEdge",
      "RelatedPostsConnectionEdge",
      "RootQueryToPostConnectionEdge",
      "TagToPostConnectionEdge",
      "UserToPostConnectionEdge"
    ],
    "PostConnectionPageInfo": [
      "CategoryToPostConnectionPageInfo",
      "PostFormatToPostConnectionPageInfo",
      "PostToRevisionConnectionPageInfo",
      "RelatedPostsConnectionPageInfo",
      "RootQueryToPostConnectionPageInfo",
      "TagToPostConnectionPageInfo",
      "UserToPostConnectionPageInfo"
    ],
    "PostCustomField": [
      "PostCustomCheckboxField",
      "PostCustomDateField",
      "PostCustomEmailField",
      "PostCustomFileuploadField",
      "PostCustomHiddenField",
      "PostCustomListField",
      "PostCustomMultiSelectField",
      "PostCustomNumberField",
      "PostCustomPhoneField",
      "PostCustomRadioField",
      "PostCustomSelectField",
      "PostCustomTextAreaField",
      "PostCustomTextField",
      "PostCustomTimeField",
      "PostCustomWebsiteField"
    ],
    "PostFormatConnection": [
      "PostToPostFormatConnection",
      "RootQueryToPostFormatConnection"
    ],
    "PostFormatConnectionEdge": [
      "PostToPostFormatConnectionEdge",
      "RootQueryToPostFormatConnectionEdge"
    ],
    "PostFormatConnectionPageInfo": [
      "PostToPostFormatConnectionPageInfo",
      "RootQueryToPostFormatConnectionPageInfo"
    ],
    "PostTagsField": [
      "PostTagsCheckboxField",
      "PostTagsMultiSelectField",
      "PostTagsRadioField",
      "PostTagsSelectField",
      "PostTagsTextField"
    ],
    "PressReleaseConnectionEdge": [
      "Press_releaseToPreviewConnectionEdge",
      "Press_releaseToRevisionConnectionEdge",
      "RootQueryToPress_releaseConnectionEdge"
    ],
    "Press_releaseConnectionPageInfo": [
      "Press_releaseToRevisionConnectionPageInfo",
      "RootQueryToPress_releaseConnectionPageInfo"
    ],
    "Previewable": [
      "Page",
      "Post",
      "Press_release",
      "TeamMember",
      "Work"
    ],
    "TagConnection": [
      "PostToTagConnection",
      "RootQueryToTagConnection"
    ],
    "TagConnectionEdge": [
      "PostToTagConnectionEdge",
      "RootQueryToTagConnectionEdge"
    ],
    "TagConnectionPageInfo": [
      "PostToTagConnectionPageInfo",
      "RootQueryToTagConnectionPageInfo"
    ],
    "TaxonomyConnection": [
      "ContentTypeToTaxonomyConnection",
      "RootQueryToTaxonomyConnection"
    ],
    "TaxonomyConnectionEdge": [
      "CategoryToTaxonomyConnectionEdge",
      "ClientToTaxonomyConnectionEdge",
      "ContentTypeToTaxonomyConnectionEdge",
      "PostFormatToTaxonomyConnectionEdge",
      "RootQueryToTaxonomyConnectionEdge",
      "TagToTaxonomyConnectionEdge",
      "WorkCategoryToTaxonomyConnectionEdge"
    ],
    "TaxonomyConnectionPageInfo": [
      "ContentTypeToTaxonomyConnectionPageInfo",
      "RootQueryToTaxonomyConnectionPageInfo"
    ],
    "TeamMemberConnection": [
      "RootQueryToTeamMemberConnection",
      "UserToTeamMemberConnection"
    ],
    "TeamMemberConnectionEdge": [
      "RootQueryToTeamMemberConnectionEdge",
      "TeamMemberToPreviewConnectionEdge",
      "UserToTeamMemberConnectionEdge"
    ],
    "TeamMemberConnectionPageInfo": [
      "RootQueryToTeamMemberConnectionPageInfo",
      "UserToTeamMemberConnectionPageInfo"
    ],
    "TermNode": [
      "Category",
      "Client",
      "PostFormat",
      "Tag",
      "WorkCategory"
    ],
    "TermNodeConnection": [
      "PostToTermNodeConnection",
      "RootQueryToTermNodeConnection",
      "WorkToTermNodeConnection"
    ],
    "TermNodeConnectionEdge": [
      "PostToTermNodeConnectionEdge",
      "RootQueryToTermNodeConnectionEdge",
      "WorkToTermNodeConnectionEdge"
    ],
    "TermNodeConnectionPageInfo": [
      "PostToTermNodeConnectionPageInfo",
      "RootQueryToTermNodeConnectionPageInfo",
      "WorkToTermNodeConnectionPageInfo"
    ],
    "ThemeConnection": [
      "RootQueryToThemeConnection"
    ],
    "ThemeConnectionEdge": [
      "RootQueryToThemeConnectionEdge"
    ],
    "ThemeConnectionPageInfo": [
      "RootQueryToThemeConnectionPageInfo"
    ],
    "UniformResourceIdentifiable": [
      "Category",
      "Client",
      "ContentType",
      "GraphqlDocument",
      "MediaItem",
      "Page",
      "Post",
      "PostFormat",
      "Press_release",
      "Tag",
      "TeamMember",
      "User",
      "Work",
      "WorkCategory"
    ],
    "UserConnection": [
      "RootQueryToUserConnection"
    ],
    "UserConnectionEdge": [
      "ContentNodeToEditLastConnectionEdge",
      "ContentNodeToEditLockConnectionEdge",
      "NodeWithAuthorToUserConnectionEdge",
      "RootQueryToUserConnectionEdge"
    ],
    "UserConnectionPageInfo": [
      "RootQueryToUserConnectionPageInfo"
    ],
    "UserRoleConnection": [
      "RootQueryToUserRoleConnection",
      "UserToUserRoleConnection"
    ],
    "UserRoleConnectionEdge": [
      "RootQueryToUserRoleConnectionEdge",
      "UserToUserRoleConnectionEdge"
    ],
    "UserRoleConnectionPageInfo": [
      "RootQueryToUserRoleConnectionPageInfo",
      "UserToUserRoleConnectionPageInfo"
    ],
    "WPPageInfo": [
      "CategoryToAncestorsCategoryConnectionPageInfo",
      "CategoryToCategoryConnectionPageInfo",
      "CategoryToContentNodeConnectionPageInfo",
      "CategoryToPostConnectionPageInfo",
      "ClientToContentNodeConnectionPageInfo",
      "ClientToWorkConnectionPageInfo",
      "CommentToCommentConnectionPageInfo",
      "ContentNodeToEnqueuedScriptConnectionPageInfo",
      "ContentNodeToEnqueuedStylesheetConnectionPageInfo",
      "ContentTypeToContentNodeConnectionPageInfo",
      "ContentTypeToTaxonomyConnectionPageInfo",
      "GfEntryToFormFieldConnectionPageInfo",
      "GfFormToFormFieldConnectionPageInfo",
      "GfFormToGfEntryConnectionPageInfo",
      "HierarchicalContentNodeToContentNodeAncestorsConnectionPageInfo",
      "HierarchicalContentNodeToContentNodeChildrenConnectionPageInfo",
      "MediaItemToCommentConnectionPageInfo",
      "MenuItemToMenuItemConnectionPageInfo",
      "MenuToMenuItemConnectionPageInfo",
      "PageToCommentConnectionPageInfo",
      "PageToRevisionConnectionPageInfo",
      "PostFormatToContentNodeConnectionPageInfo",
      "PostFormatToPostConnectionPageInfo",
      "PostToCategoryConnectionPageInfo",
      "PostToCommentConnectionPageInfo",
      "PostToPostFormatConnectionPageInfo",
      "PostToRevisionConnectionPageInfo",
      "PostToTagConnectionPageInfo",
      "PostToTermNodeConnectionPageInfo",
      "Press_releaseToRevisionConnectionPageInfo",
      "RelatedPostsConnectionPageInfo",
      "RootQueryToCategoryConnectionPageInfo",
      "RootQueryToClientConnectionPageInfo",
      "RootQueryToCommentConnectionPageInfo",
      "RootQueryToContentNodeConnectionPageInfo",
      "RootQueryToContentTypeConnectionPageInfo",
      "RootQueryToEnqueuedScriptConnectionPageInfo",
      "RootQueryToEnqueuedStylesheetConnectionPageInfo",
      "RootQueryToGfEntryConnectionPageInfo",
      "RootQueryToGfFormConnectionPageInfo",
      "RootQueryToGfSubmittedEntryConnectionPageInfo",
      "RootQueryToGraphqlDocumentConnectionPageInfo",
      "RootQueryToMediaItemConnectionPageInfo",
      "RootQueryToMenuConnectionPageInfo",
      "RootQueryToMenuItemConnectionPageInfo",
      "RootQueryToPageConnectionPageInfo",
      "RootQueryToPluginConnectionPageInfo",
      "RootQueryToPostConnectionPageInfo",
      "RootQueryToPostFormatConnectionPageInfo",
      "RootQueryToPress_releaseConnectionPageInfo",
      "RootQueryToRevisionsConnectionPageInfo",
      "RootQueryToTagConnectionPageInfo",
      "RootQueryToTaxonomyConnectionPageInfo",
      "RootQueryToTeamMemberConnectionPageInfo",
      "RootQueryToTermNodeConnectionPageInfo",
      "RootQueryToThemeConnectionPageInfo",
      "RootQueryToUserConnectionPageInfo",
      "RootQueryToUserRoleConnectionPageInfo",
      "RootQueryToWorkCategoryConnectionPageInfo",
      "RootQueryToWorkConnectionPageInfo",
      "TagToContentNodeConnectionPageInfo",
      "TagToPostConnectionPageInfo",
      "TaxonomyToContentTypeConnectionPageInfo",
      "TermNodeToEnqueuedScriptConnectionPageInfo",
      "TermNodeToEnqueuedStylesheetConnectionPageInfo",
      "UserToCommentConnectionPageInfo",
      "UserToEnqueuedScriptConnectionPageInfo",
      "UserToEnqueuedStylesheetConnectionPageInfo",
      "UserToMediaItemConnectionPageInfo",
      "UserToPageConnectionPageInfo",
      "UserToPostConnectionPageInfo",
      "UserToRevisionsConnectionPageInfo",
      "UserToTeamMemberConnectionPageInfo",
      "UserToUserRoleConnectionPageInfo",
      "WorkCategoryToAncestorsWorkCategoryConnectionPageInfo",
      "WorkCategoryToContentNodeConnectionPageInfo",
      "WorkCategoryToWorkCategoryConnectionPageInfo",
      "WorkCategoryToWorkConnectionPageInfo",
      "WorkToClientConnectionPageInfo",
      "WorkToRevisionConnectionPageInfo",
      "WorkToTermNodeConnectionPageInfo",
      "WorkToWorkCategoryConnectionPageInfo"
    ],
    "WorkCategoryConnection": [
      "RootQueryToWorkCategoryConnection",
      "WorkCategoryToAncestorsWorkCategoryConnection",
      "WorkCategoryToWorkCategoryConnection",
      "WorkToWorkCategoryConnection"
    ],
    "WorkCategoryConnectionEdge": [
      "RootQueryToWorkCategoryConnectionEdge",
      "WorkCategoryToAncestorsWorkCategoryConnectionEdge",
      "WorkCategoryToParentWorkCategoryConnectionEdge",
      "WorkCategoryToWorkCategoryConnectionEdge",
      "WorkToWorkCategoryConnectionEdge"
    ],
    "WorkCategoryConnectionPageInfo": [
      "RootQueryToWorkCategoryConnectionPageInfo",
      "WorkCategoryToAncestorsWorkCategoryConnectionPageInfo",
      "WorkCategoryToWorkCategoryConnectionPageInfo",
      "WorkToWorkCategoryConnectionPageInfo"
    ],
    "WorkConnection": [
      "ClientToWorkConnection",
      "RootQueryToWorkConnection",
      "WorkCategoryToWorkConnection",
      "WorkToRevisionConnection"
    ],
    "WorkConnectionEdge": [
      "ClientToWorkConnectionEdge",
      "RootQueryToWorkConnectionEdge",
      "WorkCategoryToWorkConnectionEdge",
      "WorkToPreviewConnectionEdge",
      "WorkToRevisionConnectionEdge"
    ],
    "WorkConnectionPageInfo": [
      "ClientToWorkConnectionPageInfo",
      "RootQueryToWorkConnectionPageInfo",
      "WorkCategoryToWorkConnectionPageInfo",
      "WorkToRevisionConnectionPageInfo"
    ]
  }
};
      export default result;
    