const connectToDatabase = require("../sql/db");

async function getHeatMapData(req, res) {
  try {
    const { HeatMapData } = await connectToDatabase();

    const query = "SELECT * FROM heat_map_data";
    const data = await HeatMapData.sequelize.query(query, {
      type: HeatMapData.sequelize.QueryTypes.SELECT,
    });

    return res.status(200).json({ data });
  } catch (error) {
    console.error("Error fetching heat map data:", error);
    return res.status(500).json({ error: error.message });
  }
}
   
async function getBroadHeatMapData(req, res) {
  try {
    const { BroadHeatMapData } = await connectToDatabase();

    const query = "SELECT * FROM broadheatmap";
    const data = await BroadHeatMapData.sequelize.query(query, {
      type: BroadHeatMapData.sequelize.QueryTypes.SELECT,
    });

    return res.status(200).json({ data });
  } catch (error) {
    console.error("Error fetching broad heat map data:", error);
    return res.status(500).json({ error: error.message });
  }
}

async function getThematicHeatMapData(req, res) {
  try {
    const { ThematicHeatMapData } = await connectToDatabase();

    const query = "SELECT * FROM thematicheatmap";
    const data = await ThematicHeatMapData.sequelize.query(query, {
      type: ThematicHeatMapData.sequelize.QueryTypes.SELECT,
    });

    return res.status(200).json({ data });
  } catch (error) {
    console.error("Error fetching thematic heat map data:", error);
    return res.status(500).json({ error: error.message });
  }
}

async function getStrategyHeatMapData(req, res) {
  try {
    const { StrategyHeatMapData } = await connectToDatabase();

    const query = "SELECT * FROM strategyheatmap";
    const data = await StrategyHeatMapData.sequelize.query(query, {
      type: StrategyHeatMapData.sequelize.QueryTypes.SELECT,
    });

    return res.status(200).json({ data });
  } catch (error) {
    console.error("Error fetching strategy heat map data:", error);
    return res.status(500).json({ error: error.message });
  }
}

async function getSectorHeatMapData(req, res) {
  try {
    const { SectorHeatMapData } = await connectToDatabase();

    const query = "SELECT * FROM sectorheatmap";
    const data = await SectorHeatMapData.sequelize.query(query, {
      type: SectorHeatMapData.sequelize.QueryTypes.SELECT,
    });

    return res.status(200).json({ data });
  } catch (error) {
    console.error("Error fetching sector heat map data:", error);
    return res.status(500).json({ error: error.message });
  }
}

async function getHeatMapPcntRankData(req, res) {
  try {
    const { HeatMapData } = await connectToDatabase();

    // Select columns ending with '_Pcnt_Rank' along with the 'DATE' column
    const query = `
            SELECT DATE,
                tri__Nifty_50_Pcnt_Rank,
                tri__Nifty_Next_50_Pcnt_Rank,
                tri__Nifty_100_Pcnt_Rank,
                tri__Nifty_200_Pcnt_Rank,
                tri__NIFTY_TOTAL_MKT_Pcnt_Rank,
                tri__Nifty_500_Pcnt_Rank,
                tri__NIFTY500_MULTICAP_Pcnt_Rank,
                tri__NIFTY_MIDCAP_150_Pcnt_Rank,
                tri__Nifty_Midcap_50_Pcnt_Rank,
                tri__NIFTY_MID_SELECT_Pcnt_Rank,
                tri__NIFTY_MIDCAP_100_Pcnt_Rank,
                tri__NIFTY_SMALLCAP_250_Pcnt_Rank,
                tri__NIFTY_SMALLCAP_50_Pcnt_Rank,
                tri__NIFTY_SMLCAP_100_Pcnt_Rank,
                tri__NIFTY_MICROCAP250_Pcnt_Rank,
                tri__NIFTY_LARGEMID250_Pcnt_Rank,
                tri__NIFTY_MIDSML_400_Pcnt_Rank,
                tri__NIFTY100_EQL_WGT_Pcnt_Rank,
                tri__NIFTY100_LOWVOL30_Pcnt_Rank,
                tri__Nifty200Momentm30_Pcnt_Rank,
                tri__Nifty200_Alpha_30_Pcnt_Rank,
                tri__Nifty100_Alpha_30_Pcnt_Rank,
                tri__NIFTY_ALPHA_50_Pcnt_Rank,
                tri__NIFTY_QUALITY_LOWVOLATILITY_30_Pcnt_Rank,
                tri__NIFTY_ALPHA_QUALITY_LOWVOLATILITY_30_Pcnt_Rank,
                tri__NIFTY_ALPHA_QUALITY_VALUE_LOWVOLATILITY_30_Pcnt_Rank,
                tri__Nifty_Div_Opps_50_Pcnt_Rank,
                tri__Nifty_GrowSect_15_Pcnt_Rank,
                tri__NIFTY_HIGH_BETA_50_Pcnt_Rank,
                tri__NIFTY_LOW_VOLATILITY_50_Pcnt_Rank,
                tri__NIFTY100_QUALTY30_Pcnt_Rank,
                tri__Nifty_Midcap150_Momentum_50_Pcnt_Rank,
                tri__NIFTY_M150_QLTY50_Pcnt_Rank,
                tri__Nifty_Smallcap250_Quality_50_Index_Pcnt_Rank,
                tri__Nifty_Smallcap250_Momentum_Quality_100_Pcnt_Rank,
                tri__NIFTY50_EQL_WGT_Pcnt_Rank,
                tri__NIFTY50_USD_Pcnt_Rank,
                tri__Nifty50_Value_20_Pcnt_Rank,
                tri__Nifty500_Value_50_Pcnt_Rank,
                tri__NIFTY200_QUALITY_30_Pcnt_Rank,
                tri__NIFTY_ADITYA_BIRLA_GROUP_Pcnt_Rank,
                tri__Nifty_Commodities_Pcnt_Rank,
                tri__Nifty_Core_Housing_Pcnt_Rank,
                tri__Nifty_CPSE_Pcnt_Rank,
                tri__Nifty_Energy_Pcnt_Rank,
                tri__Nifty_Housing_Pcnt_Rank,
                tri__NIFTY100_ESG_Pcnt_Rank,
                tri__NIFTY100_Enhanced_ESG_Pcnt_Rank,
                tri__Nifty100ESGSecLdr_Pcnt_Rank,
                tri__Nifty_Consumption_Pcnt_Rank,
                tri__Nifty_India_Defence_Pcnt_Rank,
                tri__NIFTY_IND_DIGITAL_Pcnt_Rank,
                tri__NIFTY_INDIA_MFG_Pcnt_Rank,
                tri__Nifty_Infra_Pcnt_Rank,
                tri__NIFTY_MAHINDRA_GROUP_Pcnt_Rank,
                tri__Nifty_Mid_Liq_15_Pcnt_Rank,
                tri__Nifty_MidSmall_India_Consumption_Pcnt_Rank,
                tri__Nifty_MNC_Pcnt_Rank,
                tri__Nifty_Mobility_Pcnt_Rank,
                tri__Nifty_PSE_Pcnt_Rank,
                tri__Nifty_NonCyclical_Consumer_Pcnt_Rank,
                tri__Nifty_Serv_Sector_Pcnt_Rank,
                tri__NIFTY_SHARIAH_25_Pcnt_Rank,
                tri__NIFTY_TATA_GROUP_Pcnt_Rank,
                tri__NIFTY_TATA_GROUP_25_CAP_Pcnt_Rank,
                tri__Nifty_Transportation__Logistics_Pcnt_Rank,
                tri__Nifty100_Liq_15_Pcnt_Rank,
                tri__NIFTY500_SHARIAH_Pcnt_Rank,
                tri__NIFTY_SME_EMERGE_Pcnt_Rank,
                tri__Nifty_Auto_Pcnt_Rank,
                tri__Nifty_Bank_Pcnt_Rank,
                tri__Nifty_Fin_Service_Pcnt_Rank,
                tri__NIFTY_FINSRV25_50_Pcnt_Rank,
                tri__Nifty_Financial_Services_ExBank_Pcnt_Rank,
                tri__Nifty_FMCG_Pcnt_Rank,
                tri__NIFTY_HEALTHCARE_Pcnt_Rank,
                tri__Nifty_IT_Pcnt_Rank,
                tri__Nifty_Media_Pcnt_Rank,
                tri__Nifty_Metal_Pcnt_Rank,
                tri__Nifty_Pharma_Pcnt_Rank,
                tri__Nifty_Pvt_Bank_Pcnt_Rank,
                tri__Nifty_PSU_Bank_Pcnt_Rank,
                tri__Nifty_Realty_Pcnt_Rank,
                tri__NIFTY_CONSR_DURBL_Pcnt_Rank,
                tri__NIFTY_OIL_AND_GAS_Pcnt_Rank,
                tri__Nifty_MidSmall_Financial_Services_Pcnt_Rank,
                tri__Nifty_MidSmall_Healthcare_Pcnt_Rank,
                tri__Nifty_MidSmall_IT__Telecom_Pcnt_Rank
            FROM heat_map_data
        `;

    const data = await HeatMapData.sequelize.query(query, {
      type: HeatMapData.sequelize.QueryTypes.SELECT,
    });

    return res.status(200).json({ data });
  } catch (error) {
    console.error("Error fetching heat map data with _Pcnt_Rank columns:", error);
    return res.status(500).json({ error: error.message });
  }
}

module.exports = {
  getHeatMapData,
  getHeatMapPcntRankData,
  getSectorHeatMapData,
  getBroadHeatMapData,
  getThematicHeatMapData,
  getStrategyHeatMapData,
};
