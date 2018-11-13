import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { SignOptions, sign } from 'jsonwebtoken';
import { InstanceType } from 'typegoose';

import { UserService } from 'src/user/user.service';
import { ConfigurationService } from '../configuration/configuration.service';
import { Configuration } from '../configuration/configuration.enum';
import { JwtPayload } from './jwt-payload';
import { User } from 'src/user/models/user.model';

@Injectable()
export class AuthService {
    private readonly jwtOptions: SignOptions;
    private readonly jwtKey: string;

    constructor(
        @Inject(forwardRef(() => UserService)) readonly _userService: UserService,
        private readonly _configurationService: ConfigurationService

    ) {
        this.jwtOptions = { expiresIn: '12h' };
        this.jwtKey = this._configurationService.get(Configuration.JWT_KEY);
    }

    async signPayload(payload: JwtPayload): Promise<string> {
        return sign(payload, this.jwtKey, this.jwtOptions);
    }

    async validatePayload(payload: JwtPayload): Promise<InstanceType<User>> {
        return this._userService.findOne({ username: payload.username.toLocaleLowerCase() });
    }
}
