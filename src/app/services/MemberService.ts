import { serverAPI } from "../../lib/config";
import axios from "axios";
import { LoginInput, Member,  MemberInput, MemberUpdateInput } from "../../lib/types/member";

class MemberService {
    private readonly path: string;
    
    constructor() {
        this.path = serverAPI;
    }
    public async getTopUsers(): Promise<Member[]> {
        try {
            const url = this.path + "/member/top-users";
            const result = await axios.get(url);
            console.log("getTopUsers response:", result);

            return result.data;
        } catch (err) {
            console.error("Error , getTopUsers:", err);
            throw err;
        }


    }
     public async getRestaurant(): Promise<Member> {
		try {
			const url = `${this.path}/member/restaurant`
			const result = await axios.get(url)
			console.log('result Top User', result)

			return result.data
		} catch (err) {
			console.log('Error on getRestaurant', err)
			throw err
		}
	}
    public async signup(input:MemberInput): Promise<Member> {
        try {
            const url = this.path + "/member/signup";
            const result = await axios.post(url, input,{withCredentials:true});
            const member:Member = result.data.member;
            localStorage.setItem("memberData", JSON.stringify(member));
            return member;
        } catch (err) {
            console.error("Error on signup", err);
            throw err;
        }
    }
      
    public async login(input:LoginInput): Promise<Member> {
        try {
            const url = this.path + "/member/login";
            const result = await axios.post(url, input,{withCredentials:true});
            const member:Member = result.data.member;
            localStorage.setItem("memberData", JSON.stringify(member));
            return member;
        } catch (err) {
            console.error("Error on login", err);
            throw err;
        }
    }

       public async logout(): Promise<void> {
        try {
            const url = this.path + "/member/logout";
            const result = await axios.post(url, {},{withCredentials:true});
            localStorage.removeItem("memberData");
            return result.data.logout;
        } catch (err) {
            console.error("Error on logout", err);
            throw err;
        }
    }

    public async updateMember(input: MemberUpdateInput): Promise<Member> {
    try {
      const formData = new FormData();
      formData.append("memberNick", input.memberNick || "");
      formData.append("memberPhone", input.memberPhone || "");
      formData.append("memberAddress", input.memberAddress || "");
      formData.append("memberDesc", input.memberDesc || "");
      formData.append("memberImage", input.memberImage || "");

      const url = this.path + "/member/update";

      const result = await axios(url, {
        method: "POST",
        data: formData,
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("updateMember", result);

      const member: Member = result.data;

      localStorage.setItem("memberData", JSON.stringify(member));
      return member;
    } catch (err) {
      console.log("Error:updateMember", err);
      throw err;
    }
  }




}
export default  MemberService;