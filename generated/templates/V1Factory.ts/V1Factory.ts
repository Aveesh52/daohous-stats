// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
    EthereumCall,
    EthereumEvent,
    SmartContract,
    EthereumValue,
    JSONValue,
    TypedMap,
    Entity,
    EthereumTuple,
    Bytes,
    Address,
    BigInt,
    CallResult
  } from "@graphprotocol/graph-ts";
  
  export class Register extends EthereumEvent {
    get params(): Register__Params {
      return new Register__Params(this);
    }
  }
  
  export class Register__Params {
    _event: Register;
  
    constructor(event: Register) {
      this._event = event;
    }
  
    get moloch(): Address {
      return this._event.parameters[0].value.toAddress();
    }
  
    get summoner(): Address {
      return this._event.parameters[1].value.toAddress();
    }
  
    get daoIdx(): BigInt {
      return this._event.parameters[2].value.toBigInt();
    }
  
    get title(): string {
      return this._event.parameters[3].value.toString();
    }
  
    get newContract(): BigInt {
      return this._event.parameters[4].value.toBigInt();
    }
  }
  
  export class V1Factory extends SmartContract {
    static bind(address: Address): V1Factory {
      return new V1Factory("V1Factory", address);
    }
  
    newDao(
      _approvedToken: Address,
      _periodDuration: BigInt,
      _votingPeriodLength: BigInt,
      _gracePeriodLength: BigInt,
      _abortWindow: BigInt,
      _proposalDeposit: BigInt,
      _dilutionBound: BigInt,
      _processingReward: BigInt,
      _daoTitle: string
    ): boolean {
      let result = super.call("newDao", [
        EthereumValue.fromAddress(_approvedToken),
        EthereumValue.fromUnsignedBigInt(_periodDuration),
        EthereumValue.fromUnsignedBigInt(_votingPeriodLength),
        EthereumValue.fromUnsignedBigInt(_gracePeriodLength),
        EthereumValue.fromUnsignedBigInt(_abortWindow),
        EthereumValue.fromUnsignedBigInt(_proposalDeposit),
        EthereumValue.fromUnsignedBigInt(_dilutionBound),
        EthereumValue.fromUnsignedBigInt(_processingReward),
        EthereumValue.fromString(_daoTitle)
      ]);
  
      return result[0].toBoolean();
    }
  
    try_newDao(
      _approvedToken: Address,
      _periodDuration: BigInt,
      _votingPeriodLength: BigInt,
      _gracePeriodLength: BigInt,
      _abortWindow: BigInt,
      _proposalDeposit: BigInt,
      _dilutionBound: BigInt,
      _processingReward: BigInt,
      _daoTitle: string
    ): CallResult<boolean> {
      let result = super.tryCall("newDao", [
        EthereumValue.fromAddress(_approvedToken),
        EthereumValue.fromUnsignedBigInt(_periodDuration),
        EthereumValue.fromUnsignedBigInt(_votingPeriodLength),
        EthereumValue.fromUnsignedBigInt(_gracePeriodLength),
        EthereumValue.fromUnsignedBigInt(_abortWindow),
        EthereumValue.fromUnsignedBigInt(_proposalDeposit),
        EthereumValue.fromUnsignedBigInt(_dilutionBound),
        EthereumValue.fromUnsignedBigInt(_processingReward),
        EthereumValue.fromString(_daoTitle)
      ]);
      if (result.reverted) {
        return new CallResult();
      }
      let value = result.value;
      return CallResult.fromValue(value[0].toBoolean());
    }
  
    registerDao(
      _daoAdress: Address,
      _summoner: Address,
      _daoTitle: string
    ): boolean {
      let result = super.call("registerDao", [
        EthereumValue.fromAddress(_daoAdress),
        EthereumValue.fromAddress(_summoner),
        EthereumValue.fromString(_daoTitle)
      ]);
  
      return result[0].toBoolean();
    }
  
    try_registerDao(
      _daoAdress: Address,
      _summoner: Address,
      _daoTitle: string
    ): CallResult<boolean> {
      let result = super.tryCall("registerDao", [
        EthereumValue.fromAddress(_daoAdress),
        EthereumValue.fromAddress(_summoner),
        EthereumValue.fromString(_daoTitle)
      ]);
      if (result.reverted) {
        return new CallResult();
      }
      let value = result.value;
      return CallResult.fromValue(value[0].toBoolean());
    }
  }
  
  export class NewDaoCall extends EthereumCall {
    get inputs(): NewDaoCall__Inputs {
      return new NewDaoCall__Inputs(this);
    }
  
    get outputs(): NewDaoCall__Outputs {
      return new NewDaoCall__Outputs(this);
    }
  }
  
  export class NewDaoCall__Inputs {
    _call: NewDaoCall;
  
    constructor(call: NewDaoCall) {
      this._call = call;
    }
  
    get _approvedToken(): Address {
      return this._call.inputValues[0].value.toAddress();
    }
  
    get _periodDuration(): BigInt {
      return this._call.inputValues[1].value.toBigInt();
    }
  
    get _votingPeriodLength(): BigInt {
      return this._call.inputValues[2].value.toBigInt();
    }
  
    get _gracePeriodLength(): BigInt {
      return this._call.inputValues[3].value.toBigInt();
    }
  
    get _abortWindow(): BigInt {
      return this._call.inputValues[4].value.toBigInt();
    }
  
    get _proposalDeposit(): BigInt {
      return this._call.inputValues[5].value.toBigInt();
    }
  
    get _dilutionBound(): BigInt {
      return this._call.inputValues[6].value.toBigInt();
    }
  
    get _processingReward(): BigInt {
      return this._call.inputValues[7].value.toBigInt();
    }
  
    get _daoTitle(): string {
      return this._call.inputValues[8].value.toString();
    }
  }
  
  export class NewDaoCall__Outputs {
    _call: NewDaoCall;
  
    constructor(call: NewDaoCall) {
      this._call = call;
    }
  
    get value0(): boolean {
      return this._call.outputValues[0].value.toBoolean();
    }
  }
  
  export class RegisterDaoCall extends EthereumCall {
    get inputs(): RegisterDaoCall__Inputs {
      return new RegisterDaoCall__Inputs(this);
    }
  
    get outputs(): RegisterDaoCall__Outputs {
      return new RegisterDaoCall__Outputs(this);
    }
  }
  
  export class RegisterDaoCall__Inputs {
    _call: RegisterDaoCall;
  
    constructor(call: RegisterDaoCall) {
      this._call = call;
    }
  
    get _daoAdress(): Address {
      return this._call.inputValues[0].value.toAddress();
    }
  
    get _summoner(): Address {
      return this._call.inputValues[1].value.toAddress();
    }
  
    get _daoTitle(): string {
      return this._call.inputValues[2].value.toString();
    }
  }
  
  export class RegisterDaoCall__Outputs {
    _call: RegisterDaoCall;
  
    constructor(call: RegisterDaoCall) {
      this._call = call;
    }
  
    get value0(): boolean {
      return this._call.outputValues[0].value.toBoolean();
    }
  }
  
  export class ConstructorCall extends EthereumCall {
    get inputs(): ConstructorCall__Inputs {
      return new ConstructorCall__Inputs(this);
    }
  
    get outputs(): ConstructorCall__Outputs {
      return new ConstructorCall__Outputs(this);
    }
  }
  
  export class ConstructorCall__Inputs {
    _call: ConstructorCall;
  
    constructor(call: ConstructorCall) {
      this._call = call;
    }
  }
  
  export class ConstructorCall__Outputs {
    _call: ConstructorCall;
  
    constructor(call: ConstructorCall) {
      this._call = call;
    }
  }
  