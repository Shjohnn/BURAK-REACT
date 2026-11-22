import { serverAPI } from "../../lib/config";
import axios from "axios";
import { LoginInput, Member,  MemberInput } from "../../lib/types/member";
import MemberService from "./MemberService";

class OrderService {
    private readonly path: string;
    
    constructor() {
        this.path = serverAPI;
    }


}
export default  OrderService;