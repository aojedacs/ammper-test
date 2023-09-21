"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import TransactionsTable from "./TransactionsTable";
import Accounts from "./Accounts";

export default function Home() {
  // const transactions = [
  //   {
  //     id: "002cb468-f01c-41d1-a386-a0a55bfdab0f",
  //     account: {
  //       id: "86ebe151-e8e6-4011-942a-2f56927f7009",
  //       link: "5b85b4c6-a834-4071-a97f-4facc5935126",
  //       institution: {
  //         name: "erebor_mx_retail",
  //         type: "bank",
  //       },
  //       created_at: "2023-09-21T17:22:41.292805Z",
  //       name: "Tarjeta Oro",
  //       type: "Cuentas de efectivo",
  //       agency: "5312356",
  //       number: "2889 None9908",
  //       balance: {
  //         current: 42887.01,
  //         available: 42887.01,
  //       },
  //       category: "CREDIT_CARD",
  //       currency: "MXN",
  //       loan_data: null,
  //       credit_data: {
  //         collected_at: "2023-09-21T17:22:33.470069Z",
  //         credit_limit: 91778,
  //         cutting_date: "2023-11-10",
  //         interest_rate: 0.0,
  //         minimum_payment: 550.0,
  //         monthly_payment: 9,
  //         last_payment_date: "2023-07-24",
  //         next_payment_date: "2023-09-16",
  //         last_period_balance: 0.0,
  //         no_interest_payment: 0.0,
  //       },
  //       balance_type: "LIABILITY",
  //       collected_at: "2023-09-21T17:22:37.305958Z",
  //       bank_product_id: "16021481",
  //       last_accessed_at: "2023-09-20T20:03:17",
  //       internal_identification: "11889521",
  //       public_identification_name: "CREDIT_CARD_NUMBER",
  //       public_identification_value: "7203 None3027",
  //     },
  //     created_at: "2023-09-21T17:22:42.753345Z",
  //     category: "Personal Shopping",
  //     subcategory: null,
  //     merchant: {
  //       logo: "https://www.ojedallamasysalazar.com/logo.png",
  //       name: "Ojeda, Llamas y Salazar",
  //       website: "https://www.ojedallamasysalazar.com",
  //     },
  //     type: "OUTFLOW",
  //     amount: 804.9,
  //     status: "PROCESSED",
  //     balance: 27746.92,
  //     currency: "MXN",
  //     reference: "8386",
  //     value_date: "2023-08-22",
  //     description: "BLM*AGREGADOR    CIUDAD DE MEX   0000000",
  //     collected_at: "2023-09-21T17:22:39.648365Z",
  //     observations: null,
  //     accounting_date: "2023-09-17T23:58:14",
  //     internal_identification: "66cf228b",
  //   },
  //   {
  //     id: "0087970e-934d-4992-aecf-27070ba0addc",
  //     account: {
  //       id: "86ebe151-e8e6-4011-942a-2f56927f7009",
  //       link: "5b85b4c6-a834-4071-a97f-4facc5935126",
  //       institution: {
  //         name: "erebor_mx_retail",
  //         type: "bank",
  //       },
  //       created_at: "2023-09-21T17:22:41.292805Z",
  //       name: "Tarjeta Oro",
  //       type: "Cuentas de efectivo",
  //       agency: "5312356",
  //       number: "2889 None9908",
  //       balance: {
  //         current: 42887.01,
  //         available: 42887.01,
  //       },
  //       category: "CREDIT_CARD",
  //       currency: "MXN",
  //       loan_data: null,
  //       credit_data: {
  //         collected_at: "2023-09-21T17:22:33.470069Z",
  //         credit_limit: 91778,
  //         cutting_date: "2023-11-10",
  //         interest_rate: 0.0,
  //         minimum_payment: 550.0,
  //         monthly_payment: 9,
  //         last_payment_date: "2023-07-24",
  //         next_payment_date: "2023-09-16",
  //         last_period_balance: 0.0,
  //         no_interest_payment: 0.0,
  //       },
  //       balance_type: "LIABILITY",
  //       collected_at: "2023-09-21T17:22:37.305958Z",
  //       bank_product_id: "16021481",
  //       last_accessed_at: "2023-09-20T20:03:17",
  //       internal_identification: "11889521",
  //       public_identification_name: "CREDIT_CARD_NUMBER",
  //       public_identification_value: "7203 None3027",
  //     },
  //     created_at: "2023-09-21T17:22:42.747534Z",
  //     category: "Income & Payments",
  //     subcategory: "Rent",
  //     merchant: {
  //       logo: "https://www.villalobosros.com/logo.png",
  //       name: "Villalobos-Ríos",
  //       website: "https://www.villalobosros.com",
  //     },
  //     type: "INFLOW",
  //     amount: 1455.91,
  //     status: "PENDING",
  //     balance: 79541.55,
  //     currency: "MXN",
  //     reference: "6587",
  //     value_date: "2023-07-04",
  //     description: "DEVOLUCION (01): Cuenta inexistente",
  //     collected_at: "2023-09-21T17:22:39.314033Z",
  //     observations: null,
  //     accounting_date: "2023-09-13T12:27:38",
  //     internal_identification: "68d457b4",
  //   },
  //   {
  //     id: "008bd2ed-a63d-4e97-bebd-5d0d558c0c2b",
  //     account: {
  //       id: "cb38808f-4e4b-4579-935a-84f9c2b8b4e2",
  //       link: "5b85b4c6-a834-4071-a97f-4facc5935126",
  //       institution: {
  //         name: "erebor_mx_retail",
  //         type: "bank",
  //       },
  //       created_at: "2023-09-21T17:22:41.292599Z",
  //       name: "Cuenta digital",
  //       type: "Cuentas de efectivo",
  //       agency: "9241099",
  //       number: "7311",
  //       balance: {
  //         current: 75565.52,
  //         available: 75565.52,
  //       },
  //       category: "CHECKING_ACCOUNT",
  //       currency: "MXN",
  //       loan_data: null,
  //       credit_data: null,
  //       balance_type: "ASSET",
  //       collected_at: "2023-09-21T17:22:37.215859Z",
  //       bank_product_id: "4993728",
  //       last_accessed_at: "2023-09-20T19:26:21",
  //       internal_identification: "6335843",
  //       public_identification_name: "CLABE",
  //       public_identification_value: "1846",
  //     },
  //     created_at: "2023-09-21T17:22:42.692059Z",
  //     category: null,
  //     subcategory: null,
  //     merchant: {
  //       logo: "https://www.paredestafoya.com/logo.png",
  //       name: "Paredes-Tafoya",
  //       website: "https://www.paredestafoya.com",
  //     },
  //     type: "INFLOW",
  //     amount: 1390.38,
  //     status: "PROCESSED",
  //     balance: 28706.61,
  //     currency: "MXN",
  //     reference: "2554",
  //     value_date: "2023-10-18",
  //     description: "Pago",
  //     collected_at: "2023-09-21T17:22:37.408495Z",
  //     observations: null,
  //     accounting_date: "2023-09-15T21:24:18",
  //     internal_identification: "326b4c48",
  //   },
  //   {
  //     id: "008fc420-2f77-4e58-a2be-27fd6d4ee9bf",
  //     account: {
  //       id: "1aaa012b-72fa-4ab6-9980-a2c83ae755b5",
  //       link: "5b85b4c6-a834-4071-a97f-4facc5935126",
  //       institution: {
  //         name: "erebor_mx_retail",
  //         type: "bank",
  //       },
  //       created_at: "2023-09-21T17:22:41.292855Z",
  //       name: "Cuenta digital",
  //       type: "Créditos",
  //       agency: "7731678",
  //       number: "3432035",
  //       balance: {
  //         current: 71383.51,
  //         available: 71383.51,
  //       },
  //       category: "LOAN_ACCOUNT",
  //       currency: "MXN",
  //       loan_data: {
  //         fees: null,
  //         limit_day: "13",
  //         loan_type: null,
  //         principal: null,
  //         limit_date: "2023-10-05",
  //         cutting_day: "6",
  //         collected_at: "2023-09-21T17:22:35.251262Z",
  //         credit_limit: 91416,
  //         cutting_date: "2023-10-29",
  //         interest_rate: null,
  //         interest_rates: null,
  //         contract_number: null,
  //         monthly_payment: null,
  //         payment_due_day: null,
  //         last_payment_date: "2023-08-17",
  //         next_payment_date: "2023-09-22",
  //         contract_start_date: null,
  //         last_period_balance: null,
  //         no_interest_payment: null,
  //         outstanding_balance: null,
  //         outstanding_principal: null,
  //         number_of_installments_total: null,
  //         number_of_installments_outstanding: null,
  //       },
  //       credit_data: null,
  //       balance_type: "LIABILITY",
  //       collected_at: "2023-09-21T17:22:37.322704Z",
  //       bank_product_id: "6962458",
  //       last_accessed_at: "2023-09-19T19:10:06",
  //       internal_identification: "7813413",
  //       public_identification_name: "ACCOUNT_NUMBER",
  //       public_identification_value: "13123424",
  //     },
  //     created_at: "2023-09-21T17:22:42.767418Z",
  //     category: "Fees & Charges",
  //     subcategory: null,
  //     merchant: {
  //       logo: "https://www.naranjocorralessc.com/logo.png",
  //       name: "Naranjo-Corrales S.C.",
  //       website: "https://www.naranjocorralessc.com",
  //     },
  //     type: "OUTFLOW",
  //     amount: 160.88,
  //     status: "PROCESSED",
  //     balance: 25325.16,
  //     currency: "MXN",
  //     reference: "3393",
  //     value_date: "2023-08-03",
  //     description: "DEPOSITO DE APERTURA",
  //     collected_at: "2023-09-21T17:22:40.737955Z",
  //     observations: null,
  //     accounting_date: "2023-09-18T10:43:53",
  //     internal_identification: "bcb487ca",
  //   },
  //   {
  //     id: "00b715de-ccac-43f9-a24e-8be1a3cff66f",
  //     account: {
  //       id: "86ebe151-e8e6-4011-942a-2f56927f7009",
  //       link: "5b85b4c6-a834-4071-a97f-4facc5935126",
  //       institution: {
  //         name: "erebor_mx_retail",
  //         type: "bank",
  //       },
  //       created_at: "2023-09-21T17:22:41.292805Z",
  //       name: "Tarjeta Oro",
  //       type: "Cuentas de efectivo",
  //       agency: "5312356",
  //       number: "2889 None9908",
  //       balance: {
  //         current: 42887.01,
  //         available: 42887.01,
  //       },
  //       category: "CREDIT_CARD",
  //       currency: "MXN",
  //       loan_data: null,
  //       credit_data: {
  //         collected_at: "2023-09-21T17:22:33.470069Z",
  //         credit_limit: 91778,
  //         cutting_date: "2023-11-10",
  //         interest_rate: 0.0,
  //         minimum_payment: 550.0,
  //         monthly_payment: 9,
  //         last_payment_date: "2023-07-24",
  //         next_payment_date: "2023-09-16",
  //         last_period_balance: 0.0,
  //         no_interest_payment: 0.0,
  //       },
  //       balance_type: "LIABILITY",
  //       collected_at: "2023-09-21T17:22:37.305958Z",
  //       bank_product_id: "16021481",
  //       last_accessed_at: "2023-09-20T20:03:17",
  //       internal_identification: "11889521",
  //       public_identification_name: "CREDIT_CARD_NUMBER",
  //       public_identification_value: "7203 None3027",
  //     },
  //     created_at: "2023-09-21T17:22:42.757682Z",
  //     category: "Personal Shopping",
  //     subcategory: null,
  //     merchant: {
  //       logo: "https://www.mrquezynavarroehijos.com/logo.png",
  //       name: "Márquez y Navarro e Hijos",
  //       website: "https://www.mrquezynavarroehijos.com",
  //     },
  //     type: "INFLOW",
  //     amount: 785.99,
  //     status: "PROCESSED",
  //     balance: 94224.23,
  //     currency: "MXN",
  //     reference: "5395",
  //     value_date: "2023-07-01",
  //     description: "pago",
  //     collected_at: "2023-09-21T17:22:40.031404Z",
  //     observations: null,
  //     accounting_date: "2023-09-12T08:38:10",
  //     internal_identification: "225b24bb",
  //   },
  //   {
  //     id: "00bdd5b0-338b-4e45-b837-956e701e7e82",
  //     account: {
  //       id: "cb38808f-4e4b-4579-935a-84f9c2b8b4e2",
  //       link: "5b85b4c6-a834-4071-a97f-4facc5935126",
  //       institution: {
  //         name: "erebor_mx_retail",
  //         type: "bank",
  //       },
  //       created_at: "2023-09-21T17:22:41.292599Z",
  //       name: "Cuenta digital",
  //       type: "Cuentas de efectivo",
  //       agency: "9241099",
  //       number: "7311",
  //       balance: {
  //         current: 75565.52,
  //         available: 75565.52,
  //       },
  //       category: "CHECKING_ACCOUNT",
  //       currency: "MXN",
  //       loan_data: null,
  //       credit_data: null,
  //       balance_type: "ASSET",
  //       collected_at: "2023-09-21T17:22:37.215859Z",
  //       bank_product_id: "4993728",
  //       last_accessed_at: "2023-09-20T19:26:21",
  //       internal_identification: "6335843",
  //       public_identification_name: "CLABE",
  //       public_identification_value: "1846",
  //     },
  //     created_at: "2023-09-21T17:22:42.697624Z",
  //     category: "Transport & Travel",
  //     subcategory: null,
  //     merchant: {
  //       logo: "https://www.mrquezynavarroehijos.com/logo.png",
  //       name: "Márquez y Navarro e Hijos",
  //       website: "https://www.mrquezynavarroehijos.com",
  //     },
  //     type: "INFLOW",
  //     amount: 385.67,
  //     status: "PENDING",
  //     balance: 43444.72,
  //     currency: "MXN",
  //     reference: "9729",
  //     value_date: "2023-07-02",
  //     description: "TRANSF INTERBANCARIA SPEI",
  //     collected_at: "2023-09-21T17:22:37.539872Z",
  //     observations: null,
  //     accounting_date: "2023-09-20T19:33:10",
  //     internal_identification: "71d7269a",
  //   },
  //   {
  //     id: "01cc704a-4340-4d07-a691-cc3ec0dfa997",
  //     account: {
  //       id: "1aaa012b-72fa-4ab6-9980-a2c83ae755b5",
  //       link: "5b85b4c6-a834-4071-a97f-4facc5935126",
  //       institution: {
  //         name: "erebor_mx_retail",
  //         type: "bank",
  //       },
  //       created_at: "2023-09-21T17:22:41.292855Z",
  //       name: "Cuenta digital",
  //       type: "Créditos",
  //       agency: "7731678",
  //       number: "3432035",
  //       balance: {
  //         current: 71383.51,
  //         available: 71383.51,
  //       },
  //       category: "LOAN_ACCOUNT",
  //       currency: "MXN",
  //       loan_data: {
  //         fees: null,
  //         limit_day: "13",
  //         loan_type: null,
  //         principal: null,
  //         limit_date: "2023-10-05",
  //         cutting_day: "6",
  //         collected_at: "2023-09-21T17:22:35.251262Z",
  //         credit_limit: 91416,
  //         cutting_date: "2023-10-29",
  //         interest_rate: null,
  //         interest_rates: null,
  //         contract_number: null,
  //         monthly_payment: null,
  //         payment_due_day: null,
  //         last_payment_date: "2023-08-17",
  //         next_payment_date: "2023-09-22",
  //         contract_start_date: null,
  //         last_period_balance: null,
  //         no_interest_payment: null,
  //         outstanding_balance: null,
  //         outstanding_principal: null,
  //         number_of_installments_total: null,
  //         number_of_installments_outstanding: null,
  //       },
  //       credit_data: null,
  //       balance_type: "LIABILITY",
  //       collected_at: "2023-09-21T17:22:37.322704Z",
  //       bank_product_id: "6962458",
  //       last_accessed_at: "2023-09-19T19:10:06",
  //       internal_identification: "7813413",
  //       public_identification_name: "ACCOUNT_NUMBER",
  //       public_identification_value: "13123424",
  //     },
  //     created_at: "2023-09-21T17:22:42.765638Z",
  //     category: null,
  //     subcategory: null,
  //     merchant: {
  //       logo: "https://www.leyvapedrozayasociados.com/logo.png",
  //       name: "Leyva-Pedroza y Asociados",
  //       website: "https://www.leyvapedrozayasociados.com",
  //     },
  //     type: "INFLOW",
  //     amount: 1051.31,
  //     status: "PROCESSED",
  //     balance: 31890.74,
  //     currency: "MXN",
  //     reference: "2216",
  //     value_date: "2023-06-23",
  //     description: "TRANSFER",
  //     collected_at: "2023-09-21T17:22:40.542589Z",
  //     observations: null,
  //     accounting_date: "2023-09-20T17:21:37",
  //     internal_identification: "aab4217a",
  //   },
  //   {
  //     id: "022a0393-80e2-4736-a33f-c527fb114096",
  //     account: {
  //       id: "86ebe151-e8e6-4011-942a-2f56927f7009",
  //       link: "5b85b4c6-a834-4071-a97f-4facc5935126",
  //       institution: {
  //         name: "erebor_mx_retail",
  //         type: "bank",
  //       },
  //       created_at: "2023-09-21T17:22:41.292805Z",
  //       name: "Tarjeta Oro",
  //       type: "Cuentas de efectivo",
  //       agency: "5312356",
  //       number: "2889 None9908",
  //       balance: {
  //         current: 42887.01,
  //         available: 42887.01,
  //       },
  //       category: "CREDIT_CARD",
  //       currency: "MXN",
  //       loan_data: null,
  //       credit_data: {
  //         collected_at: "2023-09-21T17:22:33.470069Z",
  //         credit_limit: 91778,
  //         cutting_date: "2023-11-10",
  //         interest_rate: 0.0,
  //         minimum_payment: 550.0,
  //         monthly_payment: 9,
  //         last_payment_date: "2023-07-24",
  //         next_payment_date: "2023-09-16",
  //         last_period_balance: 0.0,
  //         no_interest_payment: 0.0,
  //       },
  //       balance_type: "LIABILITY",
  //       collected_at: "2023-09-21T17:22:37.305958Z",
  //       bank_product_id: "16021481",
  //       last_accessed_at: "2023-09-20T20:03:17",
  //       internal_identification: "11889521",
  //       public_identification_name: "CREDIT_CARD_NUMBER",
  //       public_identification_value: "7203 None3027",
  //     },
  //     created_at: "2023-09-21T17:22:42.751009Z",
  //     category: null,
  //     subcategory: null,
  //     merchant: {
  //       logo: "https://www.corporacinolivastello.com/logo.png",
  //       name: "Corporacin Olivas-Tello",
  //       website: "https://www.corporacinolivastello.com",
  //     },
  //     type: "OUTFLOW",
  //     amount: 1381.37,
  //     status: "PENDING",
  //     balance: 51106.07,
  //     currency: "MXN",
  //     reference: "2133",
  //     value_date: "2023-10-19",
  //     description: "SC*HIPOD AGUA C  TIJUANA BCN     0000000",
  //     collected_at: "2023-09-21T17:22:39.526186Z",
  //     observations: null,
  //     accounting_date: "2023-09-15T14:51:49",
  //     internal_identification: "9cab8f33",
  //   },
  //   {
  //     id: "023720f0-b8da-4835-b134-ef098b093c8a",
  //     account: {
  //       id: "86ebe151-e8e6-4011-942a-2f56927f7009",
  //       link: "5b85b4c6-a834-4071-a97f-4facc5935126",
  //       institution: {
  //         name: "erebor_mx_retail",
  //         type: "bank",
  //       },
  //       created_at: "2023-09-21T17:22:41.292805Z",
  //       name: "Tarjeta Oro",
  //       type: "Cuentas de efectivo",
  //       agency: "5312356",
  //       number: "2889 None9908",
  //       balance: {
  //         current: 42887.01,
  //         available: 42887.01,
  //       },
  //       category: "CREDIT_CARD",
  //       currency: "MXN",
  //       loan_data: null,
  //       credit_data: {
  //         collected_at: "2023-09-21T17:22:33.470069Z",
  //         credit_limit: 91778,
  //         cutting_date: "2023-11-10",
  //         interest_rate: 0.0,
  //         minimum_payment: 550.0,
  //         monthly_payment: 9,
  //         last_payment_date: "2023-07-24",
  //         next_payment_date: "2023-09-16",
  //         last_period_balance: 0.0,
  //         no_interest_payment: 0.0,
  //       },
  //       balance_type: "LIABILITY",
  //       collected_at: "2023-09-21T17:22:37.305958Z",
  //       bank_product_id: "16021481",
  //       last_accessed_at: "2023-09-20T20:03:17",
  //       internal_identification: "11889521",
  //       public_identification_name: "CREDIT_CARD_NUMBER",
  //       public_identification_value: "7203 None3027",
  //     },
  //     created_at: "2023-09-21T17:22:42.755624Z",
  //     category: "Income & Payments",
  //     subcategory: "Government",
  //     merchant: {
  //       logo: "https://www.palaciosyasociados.com/logo.png",
  //       name: "Palacios y Asociados",
  //       website: "https://www.palaciosyasociados.com",
  //     },
  //     type: "OUTFLOW",
  //     amount: 1452.55,
  //     status: "PENDING",
  //     balance: 67656.84,
  //     currency: "MXN",
  //     reference: "6721",
  //     value_date: "2023-07-18",
  //     description: "COPPEL APP AB    CULIACAN ROSA   0000000",
  //     collected_at: "2023-09-21T17:22:39.874136Z",
  //     observations: null,
  //     accounting_date: "2023-09-17T05:14:24",
  //     internal_identification: "45a5d65d",
  //   },
  //   {
  //     id: "047129c3-4820-4a59-bcd9-2df9975d6ae6",
  //     account: {
  //       id: "86ebe151-e8e6-4011-942a-2f56927f7009",
  //       link: "5b85b4c6-a834-4071-a97f-4facc5935126",
  //       institution: {
  //         name: "erebor_mx_retail",
  //         type: "bank",
  //       },
  //       created_at: "2023-09-21T17:22:41.292805Z",
  //       name: "Tarjeta Oro",
  //       type: "Cuentas de efectivo",
  //       agency: "5312356",
  //       number: "2889 None9908",
  //       balance: {
  //         current: 42887.01,
  //         available: 42887.01,
  //       },
  //       category: "CREDIT_CARD",
  //       currency: "MXN",
  //       loan_data: null,
  //       credit_data: {
  //         collected_at: "2023-09-21T17:22:33.470069Z",
  //         credit_limit: 91778,
  //         cutting_date: "2023-11-10",
  //         interest_rate: 0.0,
  //         minimum_payment: 550.0,
  //         monthly_payment: 9,
  //         last_payment_date: "2023-07-24",
  //         next_payment_date: "2023-09-16",
  //         last_period_balance: 0.0,
  //         no_interest_payment: 0.0,
  //       },
  //       balance_type: "LIABILITY",
  //       collected_at: "2023-09-21T17:22:37.305958Z",
  //       bank_product_id: "16021481",
  //       last_accessed_at: "2023-09-20T20:03:17",
  //       internal_identification: "11889521",
  //       public_identification_name: "CREDIT_CARD_NUMBER",
  //       public_identification_value: "7203 None3027",
  //     },
  //     created_at: "2023-09-21T17:22:42.762621Z",
  //     category: "Online Platforms & Leisure",
  //     subcategory: null,
  //     merchant: {
  //       logo: "https://www.leyvapedrozayasociados.com/logo.png",
  //       name: "Leyva-Pedroza y Asociados",
  //       website: "https://www.leyvapedrozayasociados.com",
  //     },
  //     type: "OUTFLOW",
  //     amount: 2500,
  //     status: "PROCESSED",
  //     balance: 61006.65,
  //     currency: "MXN",
  //     reference: "9849",
  //     value_date: "2023-07-21",
  //     description: "GIMNASIO TACO FUERTE",
  //     collected_at: "2023-09-21T17:22:40.247674Z",
  //     observations: null,
  //     accounting_date: "2023-09-20T08:07:06",
  //     internal_identification: "8a1c2c38",
  //   },
  // ];

  const baseUrl = process.env.BASE_URL;

  const [transactions, setTransactions] = useState();
  const [accountId, setAccountId]= useState();
  const [accounts, setAccounts] = useState();


  useEffect(() => {
    onTransactionData();
    onAccountsData();

    // var myHeaders = new Headers();
    // var raw = JSON.stringify({
    //   link: "5b85b4c6-a834-4071-a97f-4facc5935126",
    // });

    // var requestOptions = {
    //   method: "POST",
    //   headers: {
    //     'Authorization': 'Basic NzQ1NDI2ZmQtY2FkZi00OWUxLWIyODItNGI2MzlmMGFkM2E3OktESHVKI1FsR1FPdUpIeTExLVFHYnJZcDBwc0B5emkxbzVTbXRWcVRYV2l1SEdwbXJPI18tSzE3bUgycnZUTVc=',
    //     'Content-Type': 'application/json; charset=UTF-8',
    //   },
    //   body: {link: "5b85b4c6-a834-4071-a97f-4facc5935126"},
    //   redirect: "follow",
    // };

    // fetch("https://sandbox.belvo.com/api/accounts/", requestOptions)
    //   .then((response) => response.text())
    //   .then((result) => console.log(result))
    //   .catch((error) => console.log("error", error));
  }, [accountId]);

 


  const onTransactionData = () => {

    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Basic NzQ1NDI2ZmQtY2FkZi00OWUxLWIyODItNGI2MzlmMGFkM2E3OktESHVKI1FsR1FPdUpIeTExLVFHYnJZcDBwc0B5emkxbzVTbXRWcVRYV2l1SEdwbXJPI18tSzE3bUgycnZUTVc="
    );

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      `https://sandbox.belvo.com/api/transactions/?page=1&link=539b23a6-9cb9-4498-8f1d-2659ea5b469b&account=${accountId}`,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        console.log(JSON.parse(result).results);
        setTransactions(JSON.parse(result).results);
      })
      .catch((error) => console.log("error", error));
  };


  const onAccountsData = () => {

    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Basic NzQ1NDI2ZmQtY2FkZi00OWUxLWIyODItNGI2MzlmMGFkM2E3OktESHVKI1FsR1FPdUpIeTExLVFHYnJZcDBwc0B5emkxbzVTbXRWcVRYV2l1SEdwbXJPI18tSzE3bUgycnZUTVc="
    );

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      "https://sandbox.belvo.com/api/accounts/?page=1&link=539b23a6-9cb9-4498-8f1d-2659ea5b469b",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        console.log(JSON.parse(result).results);
        setAccounts(JSON.parse(result).results);

      })
      .catch((error) => console.log("error", error));
  };


  return (
    <>
      <div className="grid grid-cols-1 gap-4">
        <div className="relative overflow-x-auto">
          <h1>{accountId}</h1>
          <Accounts accounts={accounts} accountId={setAccountId}/>
          <TransactionsTable transactions={transactions} />
        </div>
      </div>
    </>
  );
}
