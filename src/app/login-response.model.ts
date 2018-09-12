export class LoginResponseModel {
  public issued: Date;
  public expires_in: number;
  public expires: Date;
  public access_token: string;
  public token_type: string;
  public userName: string;
}

// [JsonProperty(".issued")]
// public string Issued { get; set; }
//
// [JsonProperty("expires_in")]
// public long ExpiresIn { get; set; }
//
// [JsonProperty(".expires")]
// public string Expires { get; set; }
//
//
// public string access_token { get; set; }
//
// [JsonProperty("token_type")]
// public string TokenType { get; set; }
//
// [JsonProperty("userName")]
// public string UserName { get; set; }
