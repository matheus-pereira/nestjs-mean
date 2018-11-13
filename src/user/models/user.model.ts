import { prop, ModelType } from "typegoose";

import { BaseModel, schemaOptions } from "src/shared/base.model";
import { UserRole } from "./user-role.enum";

export class User extends BaseModel<User> {
    @prop({
        required: [true, 'Username is required'],
        minlength: [6, 'Must be at least 6 characters'],
        unique: true
    })
    username: string;


    @prop({
        required: [true, 'Password is required'],
        minlength: [6, 'Must be at least 6 characters']
    })
    password: string;

    @prop({ enum: UserRole, default: UserRole.User })
    role?: UserRole;

    @prop()
    firstName?: string;

    @prop()
    lastName?: string;

    @prop()
    get fullName(): string {
        return `${this.firstName ? this.firstName : ''} ${this.lastName ? this.lastName : ''}`.trim();
    }

    static get model(): ModelType<User> {
        return new User().getModelForClass(User, { schemaOptions });
    }

    static get modelName(): string {
        return this.model.modelName;
    }
}