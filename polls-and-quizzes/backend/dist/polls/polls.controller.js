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
exports.PollsController = void 0;
const common_1 = require("@nestjs/common");
const polls_service_1 = require("./polls.service");
const poll_entity_1 = require("./poll.entity");
const create_poll_dto_1 = require("./dtos/create-poll.dto");
let PollsController = class PollsController {
    constructor(pollsService) {
        this.pollsService = pollsService;
    }
    async createPoll(createPollDto) {
        return await this.pollsService.createPoll(createPollDto.question, createPollDto.options);
    }
    async getPoll(id) {
        return await this.pollsService.getPoll(id);
    }
    async vote(id, index) {
        const poll = await this.pollsService.getPoll(id);
        let new_poll = new poll_entity_1.Poll();
        if (poll.votes.includes(index)) {
            new_poll.votes = [...poll.votes];
            new_poll.votes[index] += 1;
        }
        return await this.pollsService.vote(id, new_poll);
    }
    async getPolls() {
        return await this.pollsService.getPolls();
    }
};
exports.PollsController = PollsController;
__decorate([
    (0, common_1.Post)("createPoll"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_poll_dto_1.createPollDto]),
    __metadata("design:returntype", Promise)
], PollsController.prototype, "createPoll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PollsController.prototype, "getPoll", null);
__decorate([
    (0, common_1.Post)(':id/vote/:index'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Param)('index')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], PollsController.prototype, "vote", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PollsController.prototype, "getPolls", null);
exports.PollsController = PollsController = __decorate([
    (0, common_1.Controller)('polls'),
    __metadata("design:paramtypes", [polls_service_1.PollsService])
], PollsController);
//# sourceMappingURL=polls.controller.js.map