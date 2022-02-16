# PasswordVerifier

> henkie1 \ _password = true / voorwaarde 4, 1, 2 en 5 zijn voldaan_
> 1234a / _password = true / voorwaarde 4, 1, 2 en 5 zijn voldaan_
> z / _password = true / voorwaarde 4, 1, en 2 zijn voldaan_
> henkie1234 / _password = true / voorwaarde 4, 2 en 5 zijn voldaan_
> HENKhenk / _password = true / voorwaarde 4,1, 2en 3 zijn voldaan_
> HENK33$ / _password = false / voorwaarde 4 ontbreekt_
> 1234 / _password = false / voorwaarde 4 ontbreekt_
> (zo leeg) / _password = false / voorwaarde 4 ontbreekt en password = null_
