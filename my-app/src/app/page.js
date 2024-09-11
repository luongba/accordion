import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "./components/Accordion";

export default function Home() {
    return (
        <div>
            <main>
                <Accordion isLeftIcon={true}>
                    <AccordionItem value="item-1">
                        <AccordionTrigger> Điều kiện đổi trả</AccordionTrigger>
                        <AccordionContent>
                            <strong>Sản phẩm đủ điều kiện đổi trả</strong> là
                            sản phẩm không thuộc trường hợp nằm ngoài chính sách
                            bảo hành, tại link sau:
                            https://fptshop.com.vn/ho-tro/chinh-sach-bao-hanh
                            Và:
                            <ul className="list-inside list-disc">
                                <li>
                                    Đồng hồ thời trang: chỉ được hưởng chính
                                    sách bảo hành, đổi trả khi còn phiếu bảo
                                    hành
                                </li>
                                <li>
                                    Đối với vòng đeo tay: khách hàng phải trả
                                    lại sạc, nếu không còn sạc FPT Shop chỉ tiếp
                                    nhận bảo hành, không áp dụng đổi trả.
                                </li>
                                <li>
                                    Đối với máy in: khách hàng phải trả cả vỏ
                                    hộp, nếu không còn vỏ hộp, FPT Shop chỉ tiếp
                                    nhận bảo hành, không áp dụng đổi.
                                </li>
                                <li>
                                    Đối với sản phẩm trả góp qua Nhà trả góp:
                                    Khách hàng phải thực hiện Hủy hợp đồng hoặc
                                    Tất toán hợp đồng trả góp trước khi đổi trả
                                    sản phẩm tại FPTShop
                                </li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger> Điều kiện đổi trả</AccordionTrigger>
                        <AccordionContent>
                            <strong>Sản phẩm đủ điều kiện đổi trả</strong> là
                            sản phẩm không thuộc trường hợp nằm ngoài chính sách
                            bảo hành, tại link sau:
                            https://fptshop.com.vn/ho-tro/chinh-sach-bao-hanh
                            Và:
                            <ul className="list-inside list-disc">
                                <li>
                                    Đồng hồ thời trang: chỉ được hưởng chính
                                    sách bảo hành, đổi trả khi còn phiếu bảo
                                    hành
                                </li>
                                <li>
                                    Đối với vòng đeo tay: khách hàng phải trả
                                    lại sạc, nếu không còn sạc FPT Shop chỉ tiếp
                                    nhận bảo hành, không áp dụng đổi trả.
                                </li>
                                <li>
                                    Đối với máy in: khách hàng phải trả cả vỏ
                                    hộp, nếu không còn vỏ hộp, FPT Shop chỉ tiếp
                                    nhận bảo hành, không áp dụng đổi.
                                </li>
                                <li>
                                    Đối với sản phẩm trả góp qua Nhà trả góp:
                                    Khách hàng phải thực hiện Hủy hợp đồng hoặc
                                    Tất toán hợp đồng trả góp trước khi đổi trả
                                    sản phẩm tại FPTShop
                                </li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>
                            {" "}
                            Điều kiện đổi trả
                        </AccordionTrigger>
                        <AccordionContent>
                            <strong>Sản phẩm đủ điều kiện đổi trả</strong> là
                            sản phẩm không thuộc trường hợp nằm ngoài chính sách
                            bảo hành, tại link sau:
                            https://fptshop.com.vn/ho-tro/chinh-sach-bao-hanh
                            Và:
                            <ul className="list-inside list-disc">
                                <li>
                                    Đồng hồ thời trang: chỉ được hưởng chính
                                    sách bảo hành, đổi trả khi còn phiếu bảo
                                    hành
                                </li>
                                <li>
                                    Đối với vòng đeo tay: khách hàng phải trả
                                    lại sạc, nếu không còn sạc FPT Shop chỉ tiếp
                                    nhận bảo hành, không áp dụng đổi trả.
                                </li>
                                <li>
                                    Đối với máy in: khách hàng phải trả cả vỏ
                                    hộp, nếu không còn vỏ hộp, FPT Shop chỉ tiếp
                                    nhận bảo hành, không áp dụng đổi.
                                </li>
                                <li>
                                    Đối với sản phẩm trả góp qua Nhà trả góp:
                                    Khách hàng phải thực hiện Hủy hợp đồng hoặc
                                    Tất toán hợp đồng trả góp trước khi đổi trả
                                    sản phẩm tại FPTShop
                                </li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </main>
        </div>
    );
}
