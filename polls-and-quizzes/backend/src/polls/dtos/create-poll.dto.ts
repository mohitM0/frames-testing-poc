import { IsString, IsArray, IsOptional } from 'class-validator';

export class createPollDto {
    @IsString()
    question: string;

    @IsArray()
    options: string[];

    @IsOptional()
    @IsArray()
    votes?: number[];
}

export class updatePollDto {
    @IsArray()
    votes: number[];
}