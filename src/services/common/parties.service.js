import ApiService from '../api/api.service';
import {
  PARTY_ENDPOINT,
  DOCUMENT_ENDPOINT,
  FILE_UPLOAD_ENDPOINT
} from '../api/api.routes';

class AuthenticationError extends Error {
  constructor(errorCode, message) {
    super(message);
    this.name = this.constructor.name;
    this.message = message;
    this.errorCode = errorCode;
  }
}

const PartyService = {
  async addParty(party) {
    const requestData = {
      method: 'post',
      url: PARTY_ENDPOINT,
      data: party
    };
    try {
      const response = await ApiService.customRequest(requestData);
      return response.data;
    } catch (e) {
      throw new AuthenticationError(e.response.data.code, e.response.data.message);
    }
  },
  async updateParty(party) {
    const requestData = {
      method: 'put',
      url: PARTY_ENDPOINT,
      data: party
    };
    try {
      const response = await ApiService.customRequest(requestData);
      return response.data;
    } catch (e) {
      throw new AuthenticationError(e.response.data.code, e.response.data.message);
    }
  },
  async getParties(order) {
    const orderBy = order === 'alpha' ? 'partyName ASC' : 'id DESC';
    const requestData = {
      method: 'get',
      url: PARTY_ENDPOINT,
      params: {
        filter: {
          order: orderBy
        }
      }
    };
    try {
      const response = await ApiService.customRequest(requestData);
      return response.data;
    } catch (e) {
      throw new AuthenticationError(e.response.data.code, e.response.data.message);
    }
  },

  async getPartyById(id) {
    const requestData = {
      method: 'get',
      url: `${PARTY_ENDPOINT}/${id}`,
    };
    try {
      const response = await ApiService.customRequest(requestData);
      return response.data;
    } catch (e) {
      throw new AuthenticationError(e.response.data.code, e.response.data.message);
    }
  },

  async validate(validation, logo) {
    const bodyFormData = new FormData()
    bodyFormData.append('file', logo)
    const requestUpload = {
      method: 'post',
      url: FILE_UPLOAD_ENDPOINT,
      config: {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      },
      data: bodyFormData,
      params: {
        name: validation.embLogo
      }
    }

    const requestValidation = {
      method: 'post',
      url: DOCUMENT_ENDPOINT,
      data: validation
    };
    try {
      const response = await ApiService.customRequest(requestValidation);
      ApiService.customRequest(requestUpload);
      return response.data;
    } catch (e) {
      throw new AuthenticationError(e.response.data.code, e.response.data.message);
    }
  },
};

export default PartyService

export {
  PartyService,
  AuthenticationError
}
