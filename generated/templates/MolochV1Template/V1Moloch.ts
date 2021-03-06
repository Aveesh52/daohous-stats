
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
  
  export class SubmitProposal extends EthereumEvent {
    get params(): SubmitProposal__Params {
      return new SubmitProposal__Params(this);
    }
  }
  
  export class SubmitProposal__Params {
    _event: SubmitProposal;
  
    constructor(event: SubmitProposal) {
      this._event = event;
    }
  
    get proposalIndex(): BigInt {
      return this._event.parameters[0].value.toBigInt();
    }
  
    get delegateKey(): Address {
      return this._event.parameters[1].value.toAddress();
    }
  
    get memberAddress(): Address {
      return this._event.parameters[2].value.toAddress();
    }
  
    get applicant(): Address {
      return this._event.parameters[3].value.toAddress();
    }
  
    get tokenTribute(): BigInt {
      return this._event.parameters[4].value.toBigInt();
    }
  
    get sharesRequested(): BigInt {
      return this._event.parameters[5].value.toBigInt();
    }
  }
  
  export class SubmitVote extends EthereumEvent {
    get params(): SubmitVote__Params {
      return new SubmitVote__Params(this);
    }
  }
  
  export class SubmitVote__Params {
    _event: SubmitVote;
  
    constructor(event: SubmitVote) {
      this._event = event;
    }
  
    get proposalIndex(): BigInt {
      return this._event.parameters[0].value.toBigInt();
    }
  
    get delegateKey(): Address {
      return this._event.parameters[1].value.toAddress();
    }
  
    get memberAddress(): Address {
      return this._event.parameters[2].value.toAddress();
    }
  
    get uintVote(): i32 {
      return this._event.parameters[3].value.toI32();
    }
  }
  
  export class ProcessProposal extends EthereumEvent {
    get params(): ProcessProposal__Params {
      return new ProcessProposal__Params(this);
    }
  }
  
  export class ProcessProposal__Params {
    _event: ProcessProposal;
  
    constructor(event: ProcessProposal) {
      this._event = event;
    }
  
    get proposalIndex(): BigInt {
      return this._event.parameters[0].value.toBigInt();
    }
  
    get applicant(): Address {
      return this._event.parameters[1].value.toAddress();
    }
  
    get memberAddress(): Address {
      return this._event.parameters[2].value.toAddress();
    }
  
    get tokenTribute(): BigInt {
      return this._event.parameters[3].value.toBigInt();
    }
  
    get sharesRequested(): BigInt {
      return this._event.parameters[4].value.toBigInt();
    }
  
    get didPass(): boolean {
      return this._event.parameters[5].value.toBoolean();
    }
  }
  
  export class Ragequit extends EthereumEvent {
    get params(): Ragequit__Params {
      return new Ragequit__Params(this);
    }
  }
  
  export class Ragequit__Params {
    _event: Ragequit;
  
    constructor(event: Ragequit) {
      this._event = event;
    }
  
    get memberAddress(): Address {
      return this._event.parameters[0].value.toAddress();
    }
  
    get sharesToBurn(): BigInt {
      return this._event.parameters[1].value.toBigInt();
    }
  }
  
  export class Abort extends EthereumEvent {
    get params(): Abort__Params {
      return new Abort__Params(this);
    }
  }
  
  export class Abort__Params {
    _event: Abort;
  
    constructor(event: Abort) {
      this._event = event;
    }
  
    get proposalIndex(): BigInt {
      return this._event.parameters[0].value.toBigInt();
    }
  
    get applicantAddress(): Address {
      return this._event.parameters[1].value.toAddress();
    }
  }
  
  export class UpdateDelegateKey extends EthereumEvent {
    get params(): UpdateDelegateKey__Params {
      return new UpdateDelegateKey__Params(this);
    }
  }
  
  export class UpdateDelegateKey__Params {
    _event: UpdateDelegateKey;
  
    constructor(event: UpdateDelegateKey) {
      this._event = event;
    }
  
    get memberAddress(): Address {
      return this._event.parameters[0].value.toAddress();
    }
  
    get newDelegateKey(): Address {
      return this._event.parameters[1].value.toAddress();
    }
  }
  
  export class SummonComplete extends EthereumEvent {
    get params(): SummonComplete__Params {
      return new SummonComplete__Params(this);
    }
  }
  
  export class SummonComplete__Params {
    _event: SummonComplete;
  
    constructor(event: SummonComplete) {
      this._event = event;
    }
  
    get summoner(): Address {
      return this._event.parameters[0].value.toAddress();
    }
  
    get shares(): BigInt {
      return this._event.parameters[1].value.toBigInt();
    }
  }
  
  export class V1Moloch__membersResult {
    value0: Address;
    value1: BigInt;
    value2: boolean;
    value3: BigInt;
  
    constructor(
      value0: Address,
      value1: BigInt,
      value2: boolean,
      value3: BigInt
    ) {
      this.value0 = value0;
      this.value1 = value1;
      this.value2 = value2;
      this.value3 = value3;
    }
  
    toMap(): TypedMap<string, EthereumValue> {
      let map = new TypedMap<string, EthereumValue>();
      map.set("value0", EthereumValue.fromAddress(this.value0));
      map.set("value1", EthereumValue.fromUnsignedBigInt(this.value1));
      map.set("value2", EthereumValue.fromBoolean(this.value2));
      map.set("value3", EthereumValue.fromUnsignedBigInt(this.value3));
      return map;
    }
  }
  
  export class V1Moloch__proposalQueueResult {
    value0: Address;
    value1: Address;
    value2: BigInt;
    value3: BigInt;
    value4: BigInt;
    value5: BigInt;
    value6: boolean;
    value7: boolean;
    value8: boolean;
    value9: BigInt;
    value10: string;
    value11: BigInt;
  
    constructor(
      value0: Address,
      value1: Address,
      value2: BigInt,
      value3: BigInt,
      value4: BigInt,
      value5: BigInt,
      value6: boolean,
      value7: boolean,
      value8: boolean,
      value9: BigInt,
      value10: string,
      value11: BigInt
    ) {
      this.value0 = value0;
      this.value1 = value1;
      this.value2 = value2;
      this.value3 = value3;
      this.value4 = value4;
      this.value5 = value5;
      this.value6 = value6;
      this.value7 = value7;
      this.value8 = value8;
      this.value9 = value9;
      this.value10 = value10;
      this.value11 = value11;
    }
  
    toMap(): TypedMap<string, EthereumValue> {
      let map = new TypedMap<string, EthereumValue>();
      map.set("value0", EthereumValue.fromAddress(this.value0));
      map.set("value1", EthereumValue.fromAddress(this.value1));
      map.set("value2", EthereumValue.fromUnsignedBigInt(this.value2));
      map.set("value3", EthereumValue.fromUnsignedBigInt(this.value3));
      map.set("value4", EthereumValue.fromUnsignedBigInt(this.value4));
      map.set("value5", EthereumValue.fromUnsignedBigInt(this.value5));
      map.set("value6", EthereumValue.fromBoolean(this.value6));
      map.set("value7", EthereumValue.fromBoolean(this.value7));
      map.set("value8", EthereumValue.fromBoolean(this.value8));
      map.set("value9", EthereumValue.fromUnsignedBigInt(this.value9));
      map.set("value10", EthereumValue.fromString(this.value10));
      map.set("value11", EthereumValue.fromUnsignedBigInt(this.value11));
      return map;
    }
  }
  
  export class V1Moloch extends SmartContract {
    static bind(address: Address): V1Moloch {
      return new V1Moloch("V1Moloch", address);
    }
  
    processingReward(): BigInt {
      let result = super.call("processingReward", []);
  
      return result[0].toBigInt();
    }
  
    try_processingReward(): CallResult<BigInt> {
      let result = super.tryCall("processingReward", []);
      if (result.reverted) {
        return new CallResult();
      }
      let value = result.value;
      return CallResult.fromValue(value[0].toBigInt());
    }
  
    members(param0: Address): V1Moloch__membersResult {
      let result = super.call("members", [EthereumValue.fromAddress(param0)]);
  
      return new V1Moloch__membersResult(
        result[0].toAddress(),
        result[1].toBigInt(),
        result[2].toBoolean(),
        result[3].toBigInt()
      );
    }
  
    try_members(param0: Address): CallResult<V1Moloch__membersResult> {
      let result = super.tryCall("members", [EthereumValue.fromAddress(param0)]);
      if (result.reverted) {
        return new CallResult();
      }
      let value = result.value;
      return CallResult.fromValue(
        new V1Moloch__membersResult(
          value[0].toAddress(),
          value[1].toBigInt(),
          value[2].toBoolean(),
          value[3].toBigInt()
        )
      );
    }
  
    totalSharesRequested(): BigInt {
      let result = super.call("totalSharesRequested", []);
  
      return result[0].toBigInt();
    }
  
    try_totalSharesRequested(): CallResult<BigInt> {
      let result = super.tryCall("totalSharesRequested", []);
      if (result.reverted) {
        return new CallResult();
      }
      let value = result.value;
      return CallResult.fromValue(value[0].toBigInt());
    }
  
    totalShares(): BigInt {
      let result = super.call("totalShares", []);
  
      return result[0].toBigInt();
    }
  
    try_totalShares(): CallResult<BigInt> {
      let result = super.tryCall("totalShares", []);
      if (result.reverted) {
        return new CallResult();
      }
      let value = result.value;
      return CallResult.fromValue(value[0].toBigInt());
    }
  
    proposalQueue(param0: BigInt): V1Moloch__proposalQueueResult {
      let result = super.call("proposalQueue", [
        EthereumValue.fromUnsignedBigInt(param0)
      ]);
  
      return new V1Moloch__proposalQueueResult(
        result[0].toAddress(),
        result[1].toAddress(),
        result[2].toBigInt(),
        result[3].toBigInt(),
        result[4].toBigInt(),
        result[5].toBigInt(),
        result[6].toBoolean(),
        result[7].toBoolean(),
        result[8].toBoolean(),
        result[9].toBigInt(),
        result[10].toString(),
        result[11].toBigInt()
      );
    }
  
    try_proposalQueue(param0: BigInt): CallResult<V1Moloch__proposalQueueResult> {
      let result = super.tryCall("proposalQueue", [
        EthereumValue.fromUnsignedBigInt(param0)
      ]);
      if (result.reverted) {
        return new CallResult();
      }
      let value = result.value;
      return CallResult.fromValue(
        new V1Moloch__proposalQueueResult(
          value[0].toAddress(),
          value[1].toAddress(),
          value[2].toBigInt(),
          value[3].toBigInt(),
          value[4].toBigInt(),
          value[5].toBigInt(),
          value[6].toBoolean(),
          value[7].toBoolean(),
          value[8].toBoolean(),
          value[9].toBigInt(),
          value[10].toString(),
          value[11].toBigInt()
        )
      );
    }
  
    memberAddressByDelegateKey(param0: Address): Address {
      let result = super.call("memberAddressByDelegateKey", [
        EthereumValue.fromAddress(param0)
      ]);
  
      return result[0].toAddress();
    }
  
    try_memberAddressByDelegateKey(param0: Address): CallResult<Address> {
      let result = super.tryCall("memberAddressByDelegateKey", [
        EthereumValue.fromAddress(param0)
      ]);
      if (result.reverted) {
        return new CallResult();
      }
      let value = result.value;
      return CallResult.fromValue(value[0].toAddress());
    }
  
    gracePeriodLength(): BigInt {
      let result = super.call("gracePeriodLength", []);
  
      return result[0].toBigInt();
    }
  
    try_gracePeriodLength(): CallResult<BigInt> {
      let result = super.tryCall("gracePeriodLength", []);
      if (result.reverted) {
        return new CallResult();
      }
      let value = result.value;
      return CallResult.fromValue(value[0].toBigInt());
    }
  
    abortWindow(): BigInt {
      let result = super.call("abortWindow", []);
  
      return result[0].toBigInt();
    }
  
    try_abortWindow(): CallResult<BigInt> {
      let result = super.tryCall("abortWindow", []);
      if (result.reverted) {
        return new CallResult();
      }
      let value = result.value;
      return CallResult.fromValue(value[0].toBigInt());
    }
  
    summoningTime(): BigInt {
      let result = super.call("summoningTime", []);
  
      return result[0].toBigInt();
    }
  
    try_summoningTime(): CallResult<BigInt> {
      let result = super.tryCall("summoningTime", []);
      if (result.reverted) {
        return new CallResult();
      }
      let value = result.value;
      return CallResult.fromValue(value[0].toBigInt());
    }
  
    votingPeriodLength(): BigInt {
      let result = super.call("votingPeriodLength", []);
  
      return result[0].toBigInt();
    }
  
    try_votingPeriodLength(): CallResult<BigInt> {
      let result = super.tryCall("votingPeriodLength", []);
      if (result.reverted) {
        return new CallResult();
      }
      let value = result.value;
      return CallResult.fromValue(value[0].toBigInt());
    }
  
    proposalDeposit(): BigInt {
      let result = super.call("proposalDeposit", []);
  
      return result[0].toBigInt();
    }
  
    try_proposalDeposit(): CallResult<BigInt> {
      let result = super.tryCall("proposalDeposit", []);
      if (result.reverted) {
        return new CallResult();
      }
      let value = result.value;
      return CallResult.fromValue(value[0].toBigInt());
    }
  
    guildBank(): Address {
      let result = super.call("guildBank", []);
  
      return result[0].toAddress();
    }
  
    try_guildBank(): CallResult<Address> {
      let result = super.tryCall("guildBank", []);
      if (result.reverted) {
        return new CallResult();
      }
      let value = result.value;
      return CallResult.fromValue(value[0].toAddress());
    }
  
    dilutionBound(): BigInt {
      let result = super.call("dilutionBound", []);
  
      return result[0].toBigInt();
    }
  
    try_dilutionBound(): CallResult<BigInt> {
      let result = super.tryCall("dilutionBound", []);
      if (result.reverted) {
        return new CallResult();
      }
      let value = result.value;
      return CallResult.fromValue(value[0].toBigInt());
    }
  
    periodDuration(): BigInt {
      let result = super.call("periodDuration", []);
  
      return result[0].toBigInt();
    }
  
    try_periodDuration(): CallResult<BigInt> {
      let result = super.tryCall("periodDuration", []);
      if (result.reverted) {
        return new CallResult();
      }
      let value = result.value;
      return CallResult.fromValue(value[0].toBigInt());
    }
  
    approvedToken(): Address {
      let result = super.call("approvedToken", []);
  
      return result[0].toAddress();
    }
  
    try_approvedToken(): CallResult<Address> {
      let result = super.tryCall("approvedToken", []);
      if (result.reverted) {
        return new CallResult();
      }
      let value = result.value;
      return CallResult.fromValue(value[0].toAddress());
    }
  
    getCurrentPeriod(): BigInt {
      let result = super.call("getCurrentPeriod", []);
  
      return result[0].toBigInt();
    }
  
    try_getCurrentPeriod(): CallResult<BigInt> {
      let result = super.tryCall("getCurrentPeriod", []);
      if (result.reverted) {
        return new CallResult();
      }
      let value = result.value;
      return CallResult.fromValue(value[0].toBigInt());
    }
  
    canRagequit(highestIndexYesVote: BigInt): boolean {
      let result = super.call("canRagequit", [
        EthereumValue.fromUnsignedBigInt(highestIndexYesVote)
      ]);
  
      return result[0].toBoolean();
    }
  
    try_canRagequit(highestIndexYesVote: BigInt): CallResult<boolean> {
      let result = super.tryCall("canRagequit", [
        EthereumValue.fromUnsignedBigInt(highestIndexYesVote)
      ]);
      if (result.reverted) {
        return new CallResult();
      }
      let value = result.value;
      return CallResult.fromValue(value[0].toBoolean());
    }
  
    hasVotingPeriodExpired(startingPeriod: BigInt): boolean {
      let result = super.call("hasVotingPeriodExpired", [
        EthereumValue.fromUnsignedBigInt(startingPeriod)
      ]);
  
      return result[0].toBoolean();
    }
  
    try_hasVotingPeriodExpired(startingPeriod: BigInt): CallResult<boolean> {
      let result = super.tryCall("hasVotingPeriodExpired", [
        EthereumValue.fromUnsignedBigInt(startingPeriod)
      ]);
      if (result.reverted) {
        return new CallResult();
      }
      let value = result.value;
      return CallResult.fromValue(value[0].toBoolean());
    }
  
    getMemberProposalVote(memberAddress: Address, proposalIndex: BigInt): i32 {
      let result = super.call("getMemberProposalVote", [
        EthereumValue.fromAddress(memberAddress),
        EthereumValue.fromUnsignedBigInt(proposalIndex)
      ]);
  
      return result[0].toI32();
    }
  
    try_getMemberProposalVote(
      memberAddress: Address,
      proposalIndex: BigInt
    ): CallResult<i32> {
      let result = super.tryCall("getMemberProposalVote", [
        EthereumValue.fromAddress(memberAddress),
        EthereumValue.fromUnsignedBigInt(proposalIndex)
      ]);
      if (result.reverted) {
        return new CallResult();
      }
      let value = result.value;
      return CallResult.fromValue(value[0].toI32());
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
  
    get summoner(): Address {
      return this._call.inputValues[0].value.toAddress();
    }
  
    get _approvedToken(): Address {
      return this._call.inputValues[1].value.toAddress();
    }
  
    get _periodDuration(): BigInt {
      return this._call.inputValues[2].value.toBigInt();
    }
  
    get _votingPeriodLength(): BigInt {
      return this._call.inputValues[3].value.toBigInt();
    }
  
    get _gracePeriodLength(): BigInt {
      return this._call.inputValues[4].value.toBigInt();
    }
  
    get _abortWindow(): BigInt {
      return this._call.inputValues[5].value.toBigInt();
    }
  
    get _proposalDeposit(): BigInt {
      return this._call.inputValues[6].value.toBigInt();
    }
  
    get _dilutionBound(): BigInt {
      return this._call.inputValues[7].value.toBigInt();
    }
  
    get _processingReward(): BigInt {
      return this._call.inputValues[8].value.toBigInt();
    }
  }
  
  export class ConstructorCall__Outputs {
    _call: ConstructorCall;
  
    constructor(call: ConstructorCall) {
      this._call = call;
    }
  }
  
  export class SubmitProposalCall extends EthereumCall {
    get inputs(): SubmitProposalCall__Inputs {
      return new SubmitProposalCall__Inputs(this);
    }
  
    get outputs(): SubmitProposalCall__Outputs {
      return new SubmitProposalCall__Outputs(this);
    }
  }
  
  export class SubmitProposalCall__Inputs {
    _call: SubmitProposalCall;
  
    constructor(call: SubmitProposalCall) {
      this._call = call;
    }
  
    get applicant(): Address {
      return this._call.inputValues[0].value.toAddress();
    }
  
    get tokenTribute(): BigInt {
      return this._call.inputValues[1].value.toBigInt();
    }
  
    get sharesRequested(): BigInt {
      return this._call.inputValues[2].value.toBigInt();
    }
  
    get details(): string {
      return this._call.inputValues[3].value.toString();
    }
  }
  
  export class SubmitProposalCall__Outputs {
    _call: SubmitProposalCall;
  
    constructor(call: SubmitProposalCall) {
      this._call = call;
    }
  }
  
  export class SubmitVoteCall extends EthereumCall {
    get inputs(): SubmitVoteCall__Inputs {
      return new SubmitVoteCall__Inputs(this);
    }
  
    get outputs(): SubmitVoteCall__Outputs {
      return new SubmitVoteCall__Outputs(this);
    }
  }
  
  export class SubmitVoteCall__Inputs {
    _call: SubmitVoteCall;
  
    constructor(call: SubmitVoteCall) {
      this._call = call;
    }
  
    get proposalIndex(): BigInt {
      return this._call.inputValues[0].value.toBigInt();
    }
  
    get uintVote(): i32 {
      return this._call.inputValues[1].value.toI32();
    }
  }
  
  export class SubmitVoteCall__Outputs {
    _call: SubmitVoteCall;
  
    constructor(call: SubmitVoteCall) {
      this._call = call;
    }
  }
  
  export class ProcessProposalCall extends EthereumCall {
    get inputs(): ProcessProposalCall__Inputs {
      return new ProcessProposalCall__Inputs(this);
    }
  
    get outputs(): ProcessProposalCall__Outputs {
      return new ProcessProposalCall__Outputs(this);
    }
  }
  
  export class ProcessProposalCall__Inputs {
    _call: ProcessProposalCall;
  
    constructor(call: ProcessProposalCall) {
      this._call = call;
    }
  
    get proposalIndex(): BigInt {
      return this._call.inputValues[0].value.toBigInt();
    }
  }
  
  export class ProcessProposalCall__Outputs {
    _call: ProcessProposalCall;
  
    constructor(call: ProcessProposalCall) {
      this._call = call;
    }
  }
  
  export class RagequitCall extends EthereumCall {
    get inputs(): RagequitCall__Inputs {
      return new RagequitCall__Inputs(this);
    }
  
    get outputs(): RagequitCall__Outputs {
      return new RagequitCall__Outputs(this);
    }
  }
  
  export class RagequitCall__Inputs {
    _call: RagequitCall;
  
    constructor(call: RagequitCall) {
      this._call = call;
    }
  
    get sharesToBurn(): BigInt {
      return this._call.inputValues[0].value.toBigInt();
    }
  }
  
  export class RagequitCall__Outputs {
    _call: RagequitCall;
  
    constructor(call: RagequitCall) {
      this._call = call;
    }
  }
  
  export class AbortCall extends EthereumCall {
    get inputs(): AbortCall__Inputs {
      return new AbortCall__Inputs(this);
    }
  
    get outputs(): AbortCall__Outputs {
      return new AbortCall__Outputs(this);
    }
  }
  
  export class AbortCall__Inputs {
    _call: AbortCall;
  
    constructor(call: AbortCall) {
      this._call = call;
    }
  
    get proposalIndex(): BigInt {
      return this._call.inputValues[0].value.toBigInt();
    }
  }
  
  export class AbortCall__Outputs {
    _call: AbortCall;
  
    constructor(call: AbortCall) {
      this._call = call;
    }
  }
  
  export class UpdateDelegateKeyCall extends EthereumCall {
    get inputs(): UpdateDelegateKeyCall__Inputs {
      return new UpdateDelegateKeyCall__Inputs(this);
    }
  
    get outputs(): UpdateDelegateKeyCall__Outputs {
      return new UpdateDelegateKeyCall__Outputs(this);
    }
  }
  
  export class UpdateDelegateKeyCall__Inputs {
    _call: UpdateDelegateKeyCall;
  
    constructor(call: UpdateDelegateKeyCall) {
      this._call = call;
    }
  
    get newDelegateKey(): Address {
      return this._call.inputValues[0].value.toAddress();
    }
  }
  
  export class UpdateDelegateKeyCall__Outputs {
    _call: UpdateDelegateKeyCall;
  
    constructor(call: UpdateDelegateKeyCall) {
      this._call = call;
    }
  }
  