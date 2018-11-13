import { BaseModelVm } from "src/shared/base.model";
import { ApiModelProperty, ApiModelPropertyOptional } from "@nestjs/swagger";
import { UserRole } from "../user-role.enum";
import { EnumToArray } from "src/shared/utilities/enum-to-array";

export class UserVm extends BaseModelVm {
    @ApiModelProperty()
    username: string;

    @ApiModelPropertyOptional()
    firstName?: string;

    @ApiModelPropertyOptional()
    lastName?: string;

    @ApiModelPropertyOptional()
    fullName?: string;

    @ApiModelProperty({ enum: EnumToArray(UserRole) })
    role?: string;
}