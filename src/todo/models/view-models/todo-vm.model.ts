import { BaseModelVm } from "src/shared/base.model";
import { TodoLevel } from "../todo-level.enum";
import { ApiModelProperty } from "@nestjs/swagger";
import { EnumToArray } from "src/shared/utilities/enum-to-array";

export class TodoVm extends BaseModelVm {
    @ApiModelProperty()
    content: string;

    @ApiModelProperty({ enum: EnumToArray(TodoLevel) })
    level: TodoLevel;
    
    @ApiModelProperty()
    isCompleted: boolean;
}