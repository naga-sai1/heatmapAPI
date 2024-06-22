const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define(
    "heat_map_data",
    {
      DATE: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      tri__Nifty_50: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__Nifty_50_Pcnt_Rank: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__Nifty_Next_50: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__Nifty_Next_50_Pcnt_Rank: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__Nifty_100: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__Nifty_100_Pcnt_Rank: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__Nifty_200: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__Nifty_200_Pcnt_Rank: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__NIFTY_TOTAL_MKT: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__NIFTY_TOTAL_MKT_Pcnt_Rank: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__Nifty_500: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__Nifty_500_Pcnt_Rank: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__NIFTY500_MULTICAP: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__NIFTY500_MULTICAP_Pcnt_Rank: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__NIFTY_MIDCAP_150: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__NIFTY_MIDCAP_150_Pcnt_Rank: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__Nifty_Midcap_50: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__Nifty_Midcap_50_Pcnt_Rank: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__NIFTY_MID_SELECT: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__NIFTY_MID_SELECT_Pcnt_Rank: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__NIFTY_MIDCAP_100: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__NIFTY_MIDCAP_100_Pcnt_Rank: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__NIFTY_SMALLCAP_250: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__NIFTY_SMALLCAP_250_Pcnt_Rank: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__NIFTY_SMALLCAP_50: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__NIFTY_SMALLCAP_50_Pcnt_Rank: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__NIFTY_SMLCAP_100: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__NIFTY_SMLCAP_100_Pcnt_Rank: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__NIFTY_MICROCAP250: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__NIFTY_MICROCAP250_Pcnt_Rank: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__NIFTY_LARGEMID250: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__NIFTY_LARGEMID250_Pcnt_Rank: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__NIFTY_MIDSML_400: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__NIFTY_MIDSML_400_Pcnt_Rank: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__NIFTY100_EQL_WGT: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__NIFTY100_EQL_WGT_Pcnt_Rank: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__NIFTY100_LOWVOL30: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__NIFTY100_LOWVOL30_Pcnt_Rank: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__Nifty200Momentm30: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__Nifty200Momentm30_Pcnt_Rank: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__Nifty200_Alpha_30: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__Nifty200_Alpha_30_Pcnt_Rank: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__Nifty100_Alpha_30: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__Nifty100_Alpha_30_Pcnt_Rank: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__NIFTY_ALPHA_50: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__NIFTY_ALPHA_50_Pcnt_Rank: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__NIFTY_QUALITY_LOWVOLATILITY_30: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__NIFTY_QUALITY_LOWVOLATILITY_30_Pcnt_Rank: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__NIFTY_ALPHA_QUALITY_LOWVOLATILITY_30: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__NIFTY_ALPHA_QUALITY_LOWVOLATILITY_30_Pcnt_Rank: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__NIFTY_ALPHA_QUALITY_VALUE_LOWVOLATILITY_30: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__NIFTY_ALPHA_QUALITY_VALUE_LOWVOLATILITY_30_Pcnt_Rank: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__Nifty_Div_Opps_50: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__Nifty_Div_Opps_50_Pcnt_Rank: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__Nifty_GrowSect_15: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__Nifty_GrowSect_15_Pcnt_Rank: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__NIFTY_HIGH_BETA_50: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__NIFTY_HIGH_BETA_50_Pcnt_Rank: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__NIFTY_LOW_VOLATILITY_50: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__NIFTY_LOW_VOLATILITY_50_Pcnt_Rank: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__NIFTY100_QUALTY30: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__NIFTY100_QUALTY30_Pcnt_Rank: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__Nifty_Midcap150_Momentum_50: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__Nifty_Midcap150_Momentum_50_Pcnt_Rank: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__NIFTY_M150_QLTY50: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__NIFTY_M150_QLTY50_Pcnt_Rank: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__Nifty_Smallcap250_Quality_50_Index: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__Nifty_Smallcap250_Quality_50_Index_Pcnt_Rank: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__Nifty_Smallcap250_Momentum_Quality_100: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__Nifty_Smallcap250_Momentum_Quality_100_Pcnt_Rank: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__NIFTY50_EQL_WGT: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__NIFTY50_EQL_WGT_Pcnt_Rank: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__NIFTY50_USD: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__NIFTY50_USD_Pcnt_Rank: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__Nifty50_Value_20: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__Nifty50_Value_20_Pcnt_Rank: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__Nifty500_Value_50: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__Nifty500_Value_50_Pcnt_Rank: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__NIFTY200_QUALITY_30: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__NIFTY200_QUALITY_30_Pcnt_Rank: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__NIFTY_ADITYA_BIRLA_GROUP: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__NIFTY_ADITYA_BIRLA_GROUP_Pcnt_Rank: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__Nifty_Commodities: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__Nifty_Commodities_Pcnt_Rank: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__Nifty_Core_Housing: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__Nifty_Core_Housing_Pcnt_Rank: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__Nifty_CPSE: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__Nifty_CPSE_Pcnt_Rank: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__Nifty_Energy: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__Nifty_Energy_Pcnt_Rank: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__Nifty_Housing: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__Nifty_Housing_Pcnt_Rank: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__NIFTY100_ESG: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__NIFTY100_ESG_Pcnt_Rank: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__NIFTY100_Enhanced_ESG: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__NIFTY100_Enhanced_ESG_Pcnt_Rank: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__Nifty100ESGSecLdr: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__Nifty100ESGSecLdr_Pcnt_Rank: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__Nifty_Consumption: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__Nifty_Consumption_Pcnt_Rank: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__Nifty_India_Defence: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__Nifty_India_Defence_Pcnt_Rank: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__NIFTY_IND_DIGITAL: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__NIFTY_IND_DIGITAL_Pcnt_Rank: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__NIFTY_INDIA_MFG: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__NIFTY_INDIA_MFG_Pcnt_Rank: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__Nifty_Infra: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__Nifty_Infra_Pcnt_Rank: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__NIFTY_MAHINDRA_GROUP: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__NIFTY_MAHINDRA_GROUP_Pcnt_Rank: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__Nifty_Mid_Liq_15: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__Nifty_Mid_Liq_15_Pcnt_Rank: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__Nifty_MidSmall_India_Consumption: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__Nifty_MidSmall_India_Consumption_Pcnt_Rank: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__Nifty_MNC: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__Nifty_MNC_Pcnt_Rank: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__Nifty_Mobility: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__Nifty_Mobility_Pcnt_Rank: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__Nifty_PSE: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__Nifty_PSE_Pcnt_Rank: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__Nifty_NonCyclical_Consumer: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__Nifty_NonCyclical_Consumer_Pcnt_Rank: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__Nifty_Serv_Sector: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__Nifty_Serv_Sector_Pcnt_Rank: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__NIFTY_SHARIAH_25: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__NIFTY_SHARIAH_25_Pcnt_Rank: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__NIFTY_TATA_GROUP: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__NIFTY_TATA_GROUP_Pcnt_Rank: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__NIFTY_TATA_GROUP_25_CAP: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__NIFTY_TATA_GROUP_25_CAP_Pcnt_Rank: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__Nifty_Transportation__Logistics: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__Nifty_Transportation__Logistics_Pcnt_Rank: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__Nifty100_Liq_15: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__Nifty100_Liq_15_Pcnt_Rank: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__NIFTY500_SHARIAH: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__NIFTY500_SHARIAH_Pcnt_Rank: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__NIFTY_SME_EMERGE: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__NIFTY_SME_EMERGE_Pcnt_Rank: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__Nifty_Auto: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__Nifty_Auto_Pcnt_Rank: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__Nifty_Bank: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__Nifty_Bank_Pcnt_Rank: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__Nifty_Fin_Service: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__Nifty_Fin_Service_Pcnt_Rank: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__NIFTY_FINSRV25_50: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__NIFTY_FINSRV25_50_Pcnt_Rank: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__Nifty_Financial_Services_ExBank: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__Nifty_Financial_Services_ExBank_Pcnt_Rank: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__Nifty_FMCG: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__Nifty_FMCG_Pcnt_Rank: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__NIFTY_HEALTHCARE: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__NIFTY_HEALTHCARE_Pcnt_Rank: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__Nifty_IT: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__Nifty_IT_Pcnt_Rank: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__Nifty_Media: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__Nifty_Media_Pcnt_Rank: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__Nifty_Metal: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__Nifty_Metal_Pcnt_Rank: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__Nifty_Pharma: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__Nifty_Pharma_Pcnt_Rank: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__Nifty_Pvt_Bank: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__Nifty_Pvt_Bank_Pcnt_Rank: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__Nifty_PSU_Bank: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__Nifty_PSU_Bank_Pcnt_Rank: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__Nifty_Realty: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__Nifty_Realty_Pcnt_Rank: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__NIFTY_CONSR_DURBL_TECK: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__NIFTY_CONSR_DURBL_Pcnt_Rank: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__NIFTY_OIL_AND_GAS: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__NIFTY_OIL_AND_GAS_Pcnt_Rank: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__Nifty_MidSmall_Financial_Services: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__Nifty_MidSmall_Financial_Services_Pcnt_Rank: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__Nifty_MidSmall_Healthcare: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__Nifty_MidSmall_Healthcare_Pcnt_Rank: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__Nifty_MidSmall_IT__Telecom: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__Nifty_MidSmall_IT__Telecom_Pcnt_Rank: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
    },
    {
      tableName: "heat_map_data",
      engine: "InnoDB",
      timestamps: false,
    }
  );
};
