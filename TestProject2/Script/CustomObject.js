﻿
function CustomObject(sasPPIDs,sasRenewalPlans,sasStrikeOutPrice,sasPrice,sasFreeGifts,sasFreeGiftPPIDs,prepurchaseUpsellPPIDs){
   this.sasPPIDs=sasPPIDs;
   this.sasRenewalPlans=sasRenewalPlans;
   this.sasStrikeOutPrice=sasStrikeOutPrice;
   this.sasPrice=sasPrice;
   this.sasFreeGifts=sasFreeGifts;
   this.sasFreeGiftPPIDs=sasFreeGiftPPIDs;
   this.prepurchaseUpsellPPIDs=prepurchaseUpsellPPIDs; 
}

module.exports = CustomObject;