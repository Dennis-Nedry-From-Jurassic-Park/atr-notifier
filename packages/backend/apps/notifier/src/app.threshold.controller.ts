import {Body, Controller, Header, Param, Post, Req} from "@nestjs/common";
import {ThresholdService} from "./app.service";
import {Threshold} from "./thresholds.dto";

@Controller('thresholds')
export class ThresholdController {

    constructor(private readonly appService: ThresholdService) {}

    @Post([
        '/crypto/add',
        '/shares/add'
    ])
    @Header('content-type', 'application/json')
    async add_thresholds(
        @Req() req: Request,
        @Body() msg: Threshold
    ) {
        await this.appService.add_thresholds_(msg);
    }

    @Post([
        "/crypto/:source/get",
        '/shares/:source/get'
    ])
    @Header('content-type', 'application/json')
    async get_thresholds(
        @Req() req: Request,
        @Param() params: { source: string }
    ) {
        return await this.appService.get_thresholds_array(params.source)
        //const res: TickerAlert[] = JSON.parse(await this.appService.get_thresholds(params.source))
        //return this.appService.makeUnique(res)
    }
    @Post([
        "/crypto/:source/clear",
        '/shares/:source/clear'
    ])
    @Header('content-type', 'application/json')
    async clear_thresholds(
        @Req() req: Request,
        @Param() params: { source: string }
    ) {
        await this.appService.clear_thresholds(params.source)
    }
}