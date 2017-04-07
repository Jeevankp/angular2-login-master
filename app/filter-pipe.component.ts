import { Pipe, PipeTransform } from "angular2/core";
import {Todo} from './todo';
import {isBlank} from 'angular2/src/facade/lang';

@Pipe({
    name: 'myfilter'
})

export class MyFilterPipe implements PipeTransform {
    transform(value: any, args: string[]): any {
    	let filter1 = args[0].toLocaleLowerCase();
    	 console.log("filter"+filter1); 
        // filter items array, items which match and return true will be kept, false will be filtered out
        return  filter1 ? value.filter(todo => todo.name.indexOf(filter1) !== -1):value;
    }
}