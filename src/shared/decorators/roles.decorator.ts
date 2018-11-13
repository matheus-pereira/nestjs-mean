import { UserRole } from "src/user/models/user-role.enum";
import { ReflectMetadata } from "@nestjs/common";

export const Roles = (...roles: UserRole[]) => ReflectMetadata('roles', roles);