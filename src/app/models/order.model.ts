import { CashRegosterBalanceModel } from "./cash-register-balance.model";
import { ClientAccountModel } from "./client-account.model";
import { CouponModel } from "./coupon.model";
import { DeliveryModel } from "./delivery.model";
import { OrderProductFieldModel } from "./order-product-field.model";
import { PaymentMethodModel } from "./payment-method.model";
import { StatusModel } from "./status.model";

export interface OrderModel {
    id?: number;
    orderPrice: number;
    paidValue?: number;
    change?: number;
    observation?: string;
    dispatchTime?: Date;
    arrivalForecast?: Date;
    coupon?: CouponModel;
    status: StatusModel;
    clientAccount: ClientAccountModel;
    paymentMethod: PaymentMethodModel;
    cashRegisterBalance: CashRegosterBalanceModel;
    delivery: DeliveryModel;
    createdAt?: Date;
    createdAtFormatted?: string;
    updatedAt?: Date;
    products?: OrderProductFieldModel[];


    clientName: string;
    clientCellphoneNumber: string;
    orderStatus: string;
}