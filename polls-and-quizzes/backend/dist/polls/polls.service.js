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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PollsService = void 0;
const common_1 = require("@nestjs/common");
const uuid_1 = require("uuid");
const polls_repository_1 = require("./polls_repository");
let PollsService = class PollsService {
    constructor(databaseModule) {
        this.databaseModule = databaseModule;
    }
    async createPoll(question, options) {
        return this.databaseModule.create({ id: (0, uuid_1.v4)(), question, options, votes: new Array(options.length).fill(0) });
    }
    async getPoll(id) {
        let poll = this.databaseModule.findOne({ id: id });
        if (!poll) {
            throw new Error('Poll not found');
        }
        return poll;
    }
    async vote(id, pollUpdates) {
        return this.databaseModule.findOneAndUpdate({ id: id }, pollUpdates);
    }
    async getPolls() {
        return this.databaseModule.find({});
    }
};
exports.PollsService = PollsService;
exports.PollsService = PollsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [polls_repository_1.PollsRepository])
], PollsService);
//# sourceMappingURL=polls.service.js.map