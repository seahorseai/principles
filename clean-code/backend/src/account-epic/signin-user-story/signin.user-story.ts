import { ConflictException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { SigninResponse } from './signin-response.dto';
import { AccountModel, AccountModelHydrateDocument } from '../account.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SigninRequest } from './signin-request.dto';


@Injectable()
export class SigninUserStory {

  constructor(
    @InjectModel(AccountModel.name)
    private userModel: Model<AccountModelHydrateDocument>
  ) { }

async execute(signinRequest: SigninRequest): Promise<SigninResponse> {
    try {

      if (await this.userModel.findOne({ email: signinRequest.email })) {
        throw new ConflictException('This email already exists')
      }

      const user: AccountModel = this.signinRequestToAccountModel(signinRequest);
      const userCreated: AccountModelHydrateDocument = await this.userModel.create(user);
      const pepe : SigninResponse = await this.accountModelHydrateDocumentToSignInResponse(userCreated);
      return pepe;

    } catch (error) {
      if (error instanceof ConflictException) {throw error;}
      throw new InternalServerErrorException(error);
    }
  }

  private signinRequestToAccountModel(signinRequest: SigninRequest): AccountModel {
    const user: AccountModel = new AccountModel();
    user.email = signinRequest.email;
    user.name = signinRequest.name;
    user.password = signinRequest.password;
    return user;
  }



  private accountModelHydrateDocumentToSignInResponse(accountModelHydrateDocument: AccountModelHydrateDocument): SigninResponse {
    const signinResponse: SigninResponse = new SigninResponse();
    signinResponse.email = accountModelHydrateDocument.email;
    signinResponse.name = accountModelHydrateDocument.name;
    signinResponse.id = accountModelHydrateDocument.id;
    return signinResponse;
  }

}
