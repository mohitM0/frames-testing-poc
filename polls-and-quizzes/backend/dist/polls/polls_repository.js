"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PollsRepository = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const poll_schema_1 = require("./schemas/poll.schema");
const mongoose_2 = require("mongoose");
let PollsRepository = class PollsRepository {
    constructor(pollModel) {
        this.pollModel = pollModel;
    }
    async findOne(userFilterQuery) {
        return this.pollModel.findOne(userFilterQuery);
    }
    async find(userFilterQuery) {
        return this.pollModel.find(userFilterQuery);
    }
    async create(poll) {
        const newPoll = new this.pollModel(poll);
        return newPoll.save();
    }
    async findOneAndUpdate(userFilterQuery, poll) {
        return this.pollModel.findOneAndUpdate(userFilterQuery, poll, { new: true });
    }
    async deleteOne(userFilterQuery) {
        return this.pollModel.findOneAndDelete(userFilterQuery);
    }
};
exports.PollsRepository = PollsRepository;
exports.PollsRepository = PollsRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(poll_schema_1.Poll.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], PollsRepository);
//# sourceMappingURL=polls_repository.js.map