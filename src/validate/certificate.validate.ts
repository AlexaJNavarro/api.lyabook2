import { Response } from "express";
import fs from "fs";

export class ValidateCertificate {
  public static GetCertificatePublic() {
    return fs.readFileSync(`${process.env.PWD}/certificates/app.rsa.pub`, {
      encoding: "utf8",
      flag: "r",
    })
  }
}
