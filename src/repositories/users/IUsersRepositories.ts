import { User } from '../../entities/User'

export interface IUsersRepository{
    create(user: User): Promise<User>
    findById(is:string): Promise<User|null>
    findByEmail(email:string): Promise<User|null>
    findByPhone(phone: string): Promise<User|null>
    update(id:string, data: Partial<User>): Promise<User>
    delete(id:string): Promise<void>
}