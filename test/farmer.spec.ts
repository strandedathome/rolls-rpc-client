import * as nock from "nock";
import { Farmer } from "../index";

jest.mock("fs");
jest.mock("yaml");

describe("Farmer", () => {
  describe("RPC calls", () => {
    const farmer = new Farmer({
      caCertPath: "/dev/null/cert.crt",
      certPath: "/dev/null/cert.crt",
      keyPath: "/dev/null/cert.key",
    });

    it("calls get_signage_point", async () => {
      nock("https://localhost:6540")
        .defaultReplyHeaders({ "access-control-allow-origin": "*" })
        .post("/get_signage_point", { sp_hash: "fakeSpHash" })
        .reply(200, "success");

      expect(await farmer.getSignagePoint("fakeSpHash")).toEqual("success");
    });

    it("calls get_signage_points", async () => {
      nock("https://localhost:6540")
        .defaultReplyHeaders({ "access-control-allow-origin": "*" })
        .post("/get_signage_points")
        .reply(200, "success");

      expect(await farmer.getSignagePoints()).toEqual("success");
    });

    it("calls get_reward_targets", async () => {
      nock("https://localhost:6540")
        .defaultReplyHeaders({ "access-control-allow-origin": "*" })
        .post("/get_reward_targets", { search_for_private_key: true})
        .reply(200, "success");

      expect(await farmer.getRewardTarget(true)).toEqual("success");
    });

    it("calls set_reward_targets with farmer_target and pool_target in body", async () => {
      nock("https://localhost:6540")
        .defaultReplyHeaders({ "access-control-allow-origin": "*" })
        .post("/set_reward_targets", {
          farmer_target: "fakeFarmerTarget",
          pool_target: "fakePoolTarget",
        })
        .reply(200, "success");

      expect(await farmer.setRewardTarget("fakeFarmerTarget", "fakePoolTarget")).toEqual("success");
    });

    it("calls get_pool_state", async () => {
      nock("https://localhost:6540")
        .defaultReplyHeaders({ "access-control-allow-origin": "*" })
        .post("/get_pool_state", {})
        .reply(200, "success");

      expect(await farmer.getPoolState()).toEqual("success");
    });

    it("calls set_payout_instructions", async () => {
      nock("https://localhost:6540")
        .defaultReplyHeaders({ "access-control-allow-origin": "*" })
        .post("/set_payout_instructions", {
          launcher_id: 'fakeLauncher',
          payout_instructions: 'fakePayoutInstructions'
        })
        .reply(200, "success");

      expect(await farmer.setPayoutInstructions(
        'fakeLauncher',
        'fakePayoutInstructions'
      )).toEqual("success");
    });

    it("calls get_pool_login_link", async () => {
      nock("https://localhost:6540")
        .defaultReplyHeaders({ "access-control-allow-origin": "*" })
        .post("/get_pool_login_link", {
          launcher_id: 'fakeLauncher',
        })
        .reply(200, "success");

      expect(await farmer.getPoolLoginLink(
        'fakeLauncher'
      )).toEqual("success");
    });
  });
});