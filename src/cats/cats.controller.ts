import { Controller, Get, Post, Put, Delete, HttpCode, Header, Redirect, Param, Body, Query, Res, HttpStatus } from "@nestjs/common";
import { CatDto } from "./dto/create-cat.dto";
import {Response} from 'express'
import { CatsService } from "./cats.service";
import { Cat } from "./interfaces/cats.interface";
@Controller('cats')
export class CatsController {
    constructor(private catsService: CatsService){}

    @Post()
    async create( @Body() createCatDto : CatDto ){
        this.catsService.create(createCatDto);
    }
    @Get()
    async findAll():Promise<Cat[]>{
        return this.catsService.findAll();
    }
    @Get(':id')
    findOne(@Param() params):string{
        console.log(params.id)
        return `this action returns a #${params.id} cat`;
    }

    // @Get()
    // findAll(@Query() query, @Res() res:Response) {
    //     console.log(`query limit=${query.limit}`)
    //     res.status(HttpStatus.OK).json([]);
    // }
   
    // @Post()
    // @HttpCode(204)
    // @Header('Cache-Control', 'none')
    // @Redirect('https://google.mn', 301)
    // create( @Body() createCatDto: CatDto, @Res() res: Response ) {
    //     console.log(`үүсгэх өгөгдлүүд ${createCatDto}`)
    //    res.status(HttpStatus.CREATED).send();
    // }

    @Put(':id')
    update( @Param('id') id:string , @Body() updateCatDto: CatDto ){
        return 'засах муурны id=' + id
    }

    @Delete(':id')
    remove( @Param('id') id:string ){
        return `устгах муурны id = ${id}`
    }

    @Get('ab*cd')
    findOthers(){
        return 'wildcard ашигладаг route'
    }
}