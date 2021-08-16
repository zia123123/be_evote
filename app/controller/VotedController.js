const { voteds,calons } = require('../models/index');
const apiResponse = require("../helpers/apiResponse");

module.exports = {

    //create
    async create(req, res) { 
        let result = await voteds.create({
            voteId: req.body.voteId,
            noktp: req.body.noktp,
            pilih: req.body.pilih,
            calonId: req.body.calonId
        }).then(result => {
            return apiResponse.successResponseWithData(res, "SUCCESS CREATE", result);
        }).catch(function (err)  {
            return apiResponse.ErrorResponse(res, err);
        });
      },

    async find(req, res, next) {
        let vote = await voteds.findOne({
            where: {
                noktp: req.params.ktp,
                voteId:  req.params.voteid
            },
        });
        if (!vote) {
        return apiResponse.successResponse(res, "Lanjut");
        } else {
        return apiResponse.notFoundResponse(res, "Anda sudah memilih");
        }
    },

    async index(req, res) {
        let result = await voteds.findAll({
            where: {
                voteId: req.params.voteId
            },
        }).then(result => {
            return apiResponse.successResponseWithData(res, "SUCCESS", result);
            }).catch(function (err){
                return apiResponse.ErrorResponse(res, err);
            });
    },
    async indeAll(req, res) {
        let result = await voteds.findAll({
            
        }).then(result => {
            return apiResponse.successResponseWithData(res, "SUCCESS", result);
            }).catch(function (err){
                return apiResponse.ErrorResponse(res, err);
            });
    },

    async indexBar(req, res) {
        let result = await voteds.findAndCountAll({ 
            where: {
                voteId: req.params.voteid
            },
            group: 'calonId',
        }).then(result => {
            return apiResponse.successResponseWithData(res, "SUCCESS", result);
            }).catch(function (err){
                return apiResponse.ErrorResponse(res, err);
            });
    },


}
