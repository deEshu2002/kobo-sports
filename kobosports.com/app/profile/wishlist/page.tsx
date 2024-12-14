import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Pagination, PaginationContent, PaginationItem, PaginationPrevious, PaginationLink, PaginationEllipsis, PaginationNext } from "@/components/ui/pagination";
import { Separator } from "@/components/ui/separator";

export default function SettingsAccountPage() {
  return (
    <div>
    <div className="flex w-full  items-center border-b border-blue-gray-50">
            <div className="p-4 border-b border-blue-gray-50 flex-grow">
              <div className="flex items-center gap-3">
                <img src="https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg"
                  alt="John Michael" className="relative inline-block h-24 w-20 object-cover object-center" />
                <div className="flex flex-col space-y-1">
                  <h3 className="block text-sm antialiased font-medium leading-normal">
                    John Michael
                  </h3>
                  <p
                    className="block text-sm antialiased font-normal leading-normal">
                    Size: 2XL, Color: Red
                  </p>
                  <Button type="button" variant={"ghost"} className="px-0 py-0 w-fit">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-4 mr-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                    Remove
                  </Button>
                </div>
              </div>
            </div>
              <p className="pl-4 pr-12 font-medium font-sans text-sm leading-relaxed text-blue-gray-900">
                $90.88
              </p>
                <Button className="h-10" variant={"outline"}>
                  Select Option
                </Button>
                
               </div>
 <Pagination className="mt-8">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
</div>
  )
}