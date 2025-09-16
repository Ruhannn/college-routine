import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { days, scheduleData, times } from '@/data/schedule'
import { cn } from '@/lib/utils'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table'

export default function Routine() {
  return (
    <div className="p-8 max-w-7xl mx-auto">
      <h1 className="text-2xl font-semibold mb-6">Class Schedule</h1>

      <div className="overflow-x-auto border border-border rounded-lg">
        <Table className="w-full">
          <TableHeader>
            <TableRow className="bg-accent border-b [&_th]:text-accent-foreground">
              <TableHead className="px-6 py-3 text-left text-xl font-medium border-r">
                Day
              </TableHead>
              {times.map((time, index) => (
                <TableHead
                  key={time}
                  className={cn(`px-4 py-3 text-center text-xl font-medium min-w-[100px]`, index < times.length - 1 && 'border-r')}
                >
                  {time}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody className="divide-y">
            {days.map((day) => {
              const daySchedule = scheduleData[day]

              return (
                <TableRow key={day}>
                  <TableCell className="px-6 py-4 text-xl font-medium border-r bg-accent text-accent-foreground ">
                    {day}
                  </TableCell>
                  {daySchedule.map((item, index) =>
                    item.subject === 'Tea Break'
                      ? (
                          <TableCell
                            key={index}
                            className="bg-secondary text-secondary-foreground font-medium"
                          />
                        )
                      : (
                          <TableCell
                            key={index}
                            colSpan={item.period}
                            className="px-4 py-4 text-center text-xl border-r"

                          >
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <span className="cursor-pointer">{item.subject}</span>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>{item.room}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TableCell>
                        ),
                  )}

                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
